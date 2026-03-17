/**
 * AST到TreeNode转换器
 * 负责将抽象语法树转换为表达式树节点
 */

import type { TreeNode } from '../types'
import type { FieldOption } from '../utils/fieldExtractor'
import { AVIATOR_FUNCTIONS } from '../constants'
import { createConditionNode, createGroupNode } from '../utils'
import type { ASTNode } from './astParser'

export interface ConversionContext {
  availableFields: FieldOption[]
  parameterDataTypes: Map<string, Map<string, string>>
  getFieldTypeForNode: (fieldName: string) => string
}

/**
 * 从 MemberExpression 生成字段名（如 logTagValues[1]）
 */
function generateFieldNameFromMember(node: ASTNode): string {
  if (node.type === 'MemberExpression') {
    const objectName = node.object.type === 'Identifier' ? node.object.name : generateFieldNameFromMember(node.object)
    const propertyExpr = generateExpressionFromAST(node.property)
    return `${objectName}[${propertyExpr}]`
  } else if (node.type === 'Identifier') {
    return node.name
  }
  return ''
}

/**
 * 将AST节点转换回表达式字符串（用于嵌套函数参数）
 */
export function generateExpressionFromAST(node: ASTNode): string {
  switch (node.type) {
    case 'CallExpression': {
      const functionName = node.callee.name
      const args = node.arguments.map((arg: ASTNode) => generateExpressionFromAST(arg))
      return `${functionName}(${args.join(', ')})`
    }
    case 'Identifier': {
      return node.name
    }
    case 'MemberExpression': {
      return generateFieldNameFromMember(node)
    }
    case 'Literal': {
      if (node.dataType === 'string') {
        return `"${node.value}"`
      }
      return node.value
    }
    case 'BinaryExpression': {
      const left = generateExpressionFromAST(node.left)
      const right = generateExpressionFromAST(node.right)
      return `${left} ${node.operator} ${right}`
    }
    case 'LogicalExpression': {
      const left = generateExpressionFromAST(node.left)
      const right = generateExpressionFromAST(node.right)
      return `${left} ${node.operator} ${right}`
    }
    case 'UnaryExpression': {
      const argument = generateExpressionFromAST(node.argument)
      return `${node.operator}${argument}`
    }
    case 'GroupExpression': {
      const expression = generateExpressionFromAST(node.expression)
      return `(${expression})`
    }
    case 'LambdaExpression': {
      const params = node.parameters.map((param: ASTNode) => param.name).join(', ')
      const body = generateExpressionFromAST(node.body)
      return `lambda(${params}) -> ${body} end`
    }
    default: {
      return String(node.value || '')
    }
  }
}

/**
 * 智能判断参数是否应该是lambda类型
 */
function shouldBeLambdaParameter(functionName: string, paramName: string, paramDescription: string): boolean {
  const lambdaRules = [
    { func: 'map', param: 'fun' },
    { func: 'filter', param: 'predicate' },
    { func: 'sort', param: 'comparator' },
    { func: 'repeatedly', param: 'f' },
    { func: 'reduce', param: 'fun' },
  ]

  if (lambdaRules.some((rule) => rule.func === functionName && rule.param === paramName)) {
    return true
  }

  if (paramDescription) {
    const desc = paramDescription.toLowerCase()
    if (desc.includes('函数') || desc.includes('谓词') || desc.includes('比较器')
      || desc.includes('lambda') || desc.includes('匿名')) {
      return true
    }
  }

  return false
}

/**
 * 将AST转换为TreeNode数组
 */
export function convertASTToTreeNodes(ast: ASTNode, context: ConversionContext): TreeNode[] {
  let idCounter = 0
  const generateId = () => `ast_node_${Date.now()}_${++idCounter}`

  const convert = (node: ASTNode, level = 0, parentId?: string): TreeNode => {
    switch (node.type) {
      case 'LogicalExpression': {
        const operator = node.operator === '&&' ? 'AND' : 'OR'

        // 收集所有同类型的操作数
        const collectOperands = (expr: ASTNode, targetOp: string): ASTNode[] => {
          if (expr.type === 'LogicalExpression' && expr.operator === targetOp) {
            return [
              ...collectOperands(expr.left, targetOp),
              ...collectOperands(expr.right, targetOp),
            ]
          } else {
            return [expr]
          }
        }

        const operands = collectOperands(node, node.operator)

        if (operands.length === 2) {
          const groupNode = createGroupNode(parentId, level)
          groupNode.operator = operator

          const leftNode = convert(operands[0], level + 1, groupNode.id)
          const rightNode = convert(operands[1], level + 1, groupNode.id)

          groupNode.children = [leftNode, rightNode]
          return groupNode
        } else {
          const groupNode = createGroupNode(parentId, level)
          groupNode.operator = operator

          groupNode.children = operands.map((operand) =>
            convert(operand, level + 1, groupNode.id),
          )
          return groupNode
        }
      }

      case 'BinaryExpression': {
        // 特殊处理：seq.some(...) != nil / == nil（belong 运算符）
        if (node.left.type === 'CallExpression' && node.left.callee.name === 'seq.some') {
          // 检查是否是 belong 模式
          if (node.left.arguments.length === 2) {
            const secondArg = node.left.arguments[1]
            if (secondArg.type === 'LambdaExpression') {
              const lambdaBody = secondArg.body
              if (lambdaBody.type === 'CallExpression'
                && lambdaBody.callee.name === 'include'
                && lambdaBody.arguments.length === 2) {
                const includeFirstArg = lambdaBody.arguments[0]
                if (includeFirstArg.type === 'CallExpression'
                  && includeFirstArg.callee.name === 'seq.list') {
                  // 这是一个 belong 运算符
                  const conditionNode = convert(node.left, level, parentId) as TreeNode

                  // 处理 != nil 或 == nil
                  if (node.right.type === 'Literal'
                    && node.right.dataType === 'keyword'
                    && (node.right.value === 'nil' || node.right.value === 'null')) {
                    if (node.operator === '==') {
                      // seq.some() == nil -> 取反的 belong
                      conditionNode.isNegated = true
                    }
                    // seq.some() != nil -> 正常的 belong（不需要额外设置）
                  }

                  return conditionNode
                }
              }
            }
          }
        }

        // 特殊处理：特殊条件函数的比较操作
        const booleanConditionFunctions = ['string.contains', 'string.startsWith', 'string.endsWith']
        const stringReturnFunctions = ['string.match']

        if (node.left.type === 'CallExpression') {
          if (booleanConditionFunctions.includes(node.left.callee.name)) {
            const conditionNode = convert(node.left, level, parentId) as TreeNode
            return conditionNode
          }

          if (stringReturnFunctions.includes(node.left.callee.name)) {
            const conditionNode = convert(node.left, level, parentId) as TreeNode
            conditionNode.comparison = 'match'

            // 处理 string.match() 与 nil 的比较
            if (node.right.type === 'Literal'
              && node.right.dataType === 'keyword'
              && (node.right.value === 'nil' || node.right.value === 'null')) {
              // string.match() == nil -> 取反的 match 操作
              if (node.operator === '==') {
                conditionNode.isNegated = true
              }
              // string.match() != nil -> 正常的 match 操作（不需要额外设置）
              // 不设置 extraComparison，避免显示额外的 != nil 选择框
            }

            return conditionNode
          }
        }

        // 检查左侧是否为函数调用
        if (node.left.type === 'CallExpression') {
          const functionNode = convert(node.left, level, parentId) as TreeNode
          functionNode.comparison = node.operator

          if (node.right.type === 'Literal') {
            if (node.right.dataType === 'keyword'
              && (node.right.value === 'nil' || node.right.value === 'null')) {
              functionNode.comparison = `${node.operator} nil`
              functionNode.value = undefined
            } else if (node.right.value === ''
            && (node.operator === '==' || node.operator === '!=')) {
              functionNode.comparison = `${node.operator} ''`
              functionNode.value = undefined
            } else {
              functionNode.value = node.right.value

              const nodeDataTypes = context.parameterDataTypes.get(functionNode.id) || new Map()
              const dataType = node.right.dataType === 'number'
                ? 'number'
                : (node.right.dataType === 'keyword' && (node.right.value === 'true' || node.right.value === 'false'))
                    ? 'boolean'
                    : 'string'
              nodeDataTypes.set(functionNode.functionName || 'condition_value', dataType)
              context.parameterDataTypes.set(functionNode.id, nodeDataTypes)
            }
          } else if (node.right.type === 'Identifier') {
            functionNode.value = node.right.name
            functionNode.valueIsField = true
          } else if (node.right.type === 'MemberExpression') {
            functionNode.value = generateFieldNameFromMember(node.right)
            functionNode.valueIsField = true
          }

          return functionNode
        }

        // 普通的条件比较
        const conditionNode = createConditionNode(parentId, level)

        if (node.left.type === 'Identifier') {
          conditionNode.field = node.left.name
          conditionNode.fieldType = context.getFieldTypeForNode(node.left.name)
        } else if (node.left.type === 'MemberExpression') {
          const fieldName = generateFieldNameFromMember(node.left)
          conditionNode.field = fieldName
          conditionNode.fieldType = context.getFieldTypeForNode(fieldName)
        }

        if (node.right.type === 'Literal') {
          if (node.right.dataType === 'keyword'
            && (node.right.value === 'nil' || node.right.value === 'null')) {
            conditionNode.comparison = `${node.operator} nil`
            conditionNode.value = undefined
          } else if (node.right.value === ''
          && (node.operator === '==' || node.operator === '!=')) {
            conditionNode.comparison = `${node.operator} ''`
            conditionNode.value = undefined
          } else {
            conditionNode.comparison = node.operator
            conditionNode.value = node.right.value
            conditionNode.valueIsLiteral = true // 标记为字面量

            const nodeDataTypes = context.parameterDataTypes.get(conditionNode.id) || new Map()
            const dataType = node.right.dataType === 'number'
              ? 'number'
              : (node.right.dataType === 'keyword' && (node.right.value === 'true' || node.right.value === 'false'))
                  ? 'boolean'
                  : 'string'
            nodeDataTypes.set('condition_value', dataType)
            context.parameterDataTypes.set(conditionNode.id, nodeDataTypes)
          }
        } else if (node.right.type === 'Identifier') {
          conditionNode.comparison = node.operator
          conditionNode.value = node.right.name
          conditionNode.valueIsField = true
        } else if (node.right.type === 'MemberExpression') {
          conditionNode.comparison = node.operator
          conditionNode.value = generateFieldNameFromMember(node.right)
          conditionNode.valueIsField = true
        } else {
          conditionNode.comparison = node.operator
          conditionNode.value = undefined
        }

        return conditionNode
      }

      case 'UnaryExpression': {
        const argumentNode = convert(node.argument, level, parentId)
        argumentNode.isNegated = true
        return argumentNode
      }

      case 'CallExpression': {
        // 特殊处理：IPScene.isIpInNetmaskList(field, seq.list(...)) 模式
        // 这是 isIpInNetmaskList 运算符的底层实现
        if (node.callee.name === 'IPScene.isIpInNetmaskList' && node.arguments.length === 2) {
          const firstArg = node.arguments[0]
          const secondArg = node.arguments[1]

          // 检查第二个参数是否是 seq.list(...)
          if (secondArg.type === 'CallExpression' && secondArg.callee.name === 'seq.list') {
            // 这是一个 isIpInNetmaskList 运算符！
            const conditionNode = createConditionNode(parentId, level)
            conditionNode.comparison = 'isIpInNetmaskList'

            // 提取字段名
            if (firstArg.type === 'Identifier') {
              conditionNode.field = firstArg.name
            } else if (firstArg.type === 'MemberExpression') {
              conditionNode.field = generateFieldNameFromMember(firstArg)
            } else if (firstArg.type === 'Literal') {
              // 如果第一个参数是字面量（不太常见，但支持一下）
              conditionNode.field = firstArg.value
            }

            if (conditionNode.field) {
              conditionNode.fieldType = context.getFieldTypeForNode(conditionNode.field)
            }

            // 提取 seq.list 中的网段列表
            let detectedDataType = 'string' // 网段通常是字符串
            const listValues = secondArg.arguments.map((arg: ASTNode) => {
              if (arg.type === 'Literal') {
                // 网段都是字符串类型
                if (arg.dataType === 'string' || typeof arg.value === 'string') {
                  detectedDataType = 'string'
                }
                return arg.value
              } else if (arg.type === 'Identifier') {
                return arg.name
              }
              return null
            }).filter((v: any) => v !== null)

            conditionNode.value = listValues

            // 保存检测到的数据类型（网段列表都是字符串）
            const nodeDataTypes = context.parameterDataTypes.get(conditionNode.id) || new Map()
            nodeDataTypes.set('condition_value', detectedDataType)
            context.parameterDataTypes.set(conditionNode.id, nodeDataTypes)

            return conditionNode
          }
        }

        // 特殊处理：seq.some(field, lambda(x) -> include(seq.list(...), x) end) 模式
        // 这是 belong 运算符的底层实现
        if (node.callee.name === 'seq.some' && node.arguments.length === 2) {
          const firstArg = node.arguments[0]
          const secondArg = node.arguments[1]

          // 检查第二个参数是否是 lambda 表达式
          if (secondArg.type === 'LambdaExpression') {
            const lambdaBody = secondArg.body

            // 检查 lambda body 是否是 include(seq.list(...), x) 的形式
            if (lambdaBody.type === 'CallExpression'
              && lambdaBody.callee.name === 'include'
              && lambdaBody.arguments.length === 2) {
              const includeFirstArg = lambdaBody.arguments[0]
              const includeSecondArg = lambdaBody.arguments[1]

              // 检查 include 的第一个参数是否是 seq.list(...)
              if (includeFirstArg.type === 'CallExpression'
                && includeFirstArg.callee.name === 'seq.list') {
                // 这是一个 belong 运算符！
                const conditionNode = createConditionNode(parentId, level)
                conditionNode.comparison = 'belong'

                // 提取字段名
                if (firstArg.type === 'Identifier') {
                  conditionNode.field = firstArg.name
                } else if (firstArg.type === 'MemberExpression') {
                  conditionNode.field = generateFieldNameFromMember(firstArg)
                }

                if (conditionNode.field) {
                  conditionNode.fieldType = context.getFieldTypeForNode(conditionNode.field)
                }

                // 提取 seq.list 中的值数组，并检测数据类型
                let detectedDataType = 'string' // 默认为字符串
                const listValues = includeFirstArg.arguments.map((arg: ASTNode) => {
                  if (arg.type === 'Literal') {
                    // 检测第一个元素的数据类型
                    if (detectedDataType === 'string' && arg.dataType) {
                      if (arg.dataType === 'number') {
                        detectedDataType = 'number'
                      } else if (arg.dataType === 'keyword' && (arg.value === 'true' || arg.value === 'false')) {
                        detectedDataType = 'boolean'
                      }
                    }
                    return arg.value
                  } else if (arg.type === 'Identifier') {
                    return arg.name
                  }
                  return null
                }).filter((v: any) => v !== null)

                conditionNode.value = listValues

                // 保存检测到的数据类型
                const nodeDataTypes = context.parameterDataTypes.get(conditionNode.id) || new Map()
                nodeDataTypes.set('condition_value', detectedDataType)
                context.parameterDataTypes.set(conditionNode.id, nodeDataTypes)

                return conditionNode
              }
            }
          }
        }

        // 特殊处理：将字符串函数解析为字段模式的条件节点
        const specialConditionFunctions = ['string.contains', 'string.startsWith', 'string.endsWith', 'string.match']

        if (specialConditionFunctions.includes(node.callee.name)) {
          const conditionNode = createConditionNode(parentId, level)

          if (node.callee.name === 'string.contains') {
            conditionNode.comparison = 'contains'
          } else if (node.callee.name === 'string.startsWith') {
            conditionNode.comparison = 'startsWith'
          } else if (node.callee.name === 'string.endsWith') {
            conditionNode.comparison = 'endsWith'
          } else if (node.callee.name === 'string.match') {
            conditionNode.comparison = 'match'
          }

          // 处理参数
          if (node.callee.name === 'string.match') {
            // string.match(pattern, field, flags)
            if (node.arguments[1]) {
              if (node.arguments[1].type === 'Identifier') {
                conditionNode.field = node.arguments[1].name
              } else if (node.arguments[1].type === 'MemberExpression') {
                conditionNode.field = generateFieldNameFromMember(node.arguments[1])
              } else if (node.arguments[1].type === 'Literal') {
                conditionNode.field = node.arguments[1].value
              }
              if (conditionNode.field) {
                conditionNode.fieldType = context.getFieldTypeForNode(conditionNode.field)
              }
            }

            if (node.arguments[0]) {
              if (node.arguments[0].type === 'Literal') {
                conditionNode.value = node.arguments[0].value
                conditionNode.valueIsLiteral = true // 标记为字面量
              } else if (node.arguments[0].type === 'Identifier') {
                conditionNode.value = node.arguments[0].name
              } else if (node.arguments[0].type === 'MemberExpression') {
                conditionNode.value = generateFieldNameFromMember(node.arguments[0])
              }
            }

            // 不再默认设置 extraComparison，避免显示额外的 != nil 选择框
            // 如果表达式是 string.match() != nil 或 == nil，会在 BinaryExpression 中处理
          } else {
            // 其他函数：第一个参数是字段，第二个参数是值
            if (node.arguments[0]) {
              if (node.arguments[0].type === 'Identifier') {
                conditionNode.field = node.arguments[0].name
              } else if (node.arguments[0].type === 'MemberExpression') {
                conditionNode.field = generateFieldNameFromMember(node.arguments[0])
              } else if (node.arguments[0].type === 'Literal') {
                conditionNode.field = node.arguments[0].value
              }

              if (conditionNode.field) {
                conditionNode.fieldType = context.getFieldTypeForNode(conditionNode.field)
              }
            }

            if (node.arguments[1]) {
              if (node.arguments[1].type === 'Literal') {
                conditionNode.value = node.arguments[1].value
                conditionNode.valueIsLiteral = true // 标记为字面量
              } else if (node.arguments[1].type === 'Identifier') {
                conditionNode.value = node.arguments[1].name
              } else if (node.arguments[1].type === 'MemberExpression') {
                conditionNode.value = generateFieldNameFromMember(node.arguments[1])
              }
            }
          }

          return conditionNode
        }

        // 创建函数模式的条件节点
        const functionNode = createConditionNode(parentId, level)
        functionNode.functionName = node.callee.name
        delete functionNode.field

        const func = AVIATOR_FUNCTIONS.find((f) => f.name === node.callee.name)
        if (func) {
          functionNode.functionCategory = func.category

          const parameters = func.parameters.map((param) => ({
            ...param,
            value: undefined,
            type: shouldBeLambdaParameter(func.name, param.name, param.description) ? 'lambda' : param.type,
          }))

          // 检查是否为多值参数
          const isMultiValueParam = parameters.length === 1
            && (parameters[0].name === 'items'
            || parameters[0].description.includes('多个')
            || parameters[0].description.includes('列表'))

          if (isMultiValueParam && node.arguments.length > 1) {
            const values = node.arguments.map((arg: ASTNode) => {
              if (arg.type === 'Literal') {
                return arg.value
              } else if (arg.type === 'Identifier') {
                return arg.name
              }
              return null
            }).filter((v: any) => v !== null)

            parameters[0].value = values
            parameters[0].isNested = false
            parameters[0].type = 'value'

            functionNode.comparison = undefined
            functionNode.value = undefined
          } else {
            // 普通参数处理
            node.arguments.forEach((arg: ASTNode, index: number) => {
              if (index < parameters.length) {
                if (arg.type === 'Literal') {
                  parameters[index].value = arg.value
                  parameters[index].isNested = false
                  parameters[index].type = 'value'
                } else if (arg.type === 'Identifier') {
                  parameters[index].value = arg.name
                  parameters[index].isNested = false
                  parameters[index].type = 'field'
                } else if (arg.type === 'MemberExpression') {
                  parameters[index].value = generateFieldNameFromMember(arg)
                  parameters[index].isNested = false
                  parameters[index].type = 'field'
                } else if (arg.type === 'LambdaExpression') {
                  const lambdaStr = generateExpressionFromAST(arg)
                  parameters[index].value = lambdaStr
                  parameters[index].isNested = false
                  parameters[index].type = 'lambda'
                } else {
                  // 复杂表达式：转换为嵌套TreeNode
                  const nestedNode = convert(arg, level + 1, functionNode.id)

                  if (nestedNode.type === 'condition' && nestedNode.functionName) {
                    const nestedFunc = AVIATOR_FUNCTIONS.find((f) => f.name === nestedNode.functionName)
                    const nestedReturnType = nestedFunc?.returnType
                    const paramValueType = parameters[index].valueType

                    const typesMatch
                      = paramValueType === 'any'
                      || nestedReturnType === paramValueType
                      || (paramValueType === 'list' && nestedReturnType === 'list')
                      || (paramValueType === 'array' && nestedReturnType === 'list')
                      || (paramValueType === 'list' && nestedReturnType === 'array')

                    if (typesMatch) {
                      nestedNode.comparison = undefined
                      nestedNode.value = undefined
                    }

                    parameters[index].type = 'condition'
                  } else if (nestedNode.type === 'condition') {
                    nestedNode.comparison = undefined
                    nestedNode.value = undefined
                    parameters[index].type = 'condition'
                  }

                  parameters[index].nestedNode = nestedNode
                  parameters[index].isNested = true
                  parameters[index].value = undefined
                }
              }
            })
          }

          functionNode.parameters = parameters

          if (func.returnType === 'boolean') {
            functionNode.comparison = undefined
            functionNode.value = undefined
          } else {
            const alreadyCleared = functionNode.comparison === undefined
            if (!alreadyCleared) {
              functionNode.comparison = '=='
              functionNode.value = ''
            }
          }
        }

        return functionNode
      }

      case 'GroupExpression': {
        return convert(node.expression, level, parentId)
      }

      default:
        throw new Error(`Unsupported AST node type: ${node.type}`)
    }
  }

  const rootNode = convert(ast, 0)

  // 确保最外层始终是分组节点
  if (rootNode.type !== 'group') {
    const wrapperGroup = createGroupNode(undefined, 0)
    wrapperGroup.operator = 'AND'
    wrapperGroup.children = [rootNode]
    rootNode.parentId = wrapperGroup.id
    rootNode.level = 1
    return [wrapperGroup]
  }

  return [rootNode]
}
