/**
 * 表达式验证器
 * 负责验证TreeNode的完整性和正确性
 */

import type { TreeNode } from '../types'
import { AVIATOR_FUNCTIONS } from '../constants'

export interface ValidationError {
  nodeId: string
  message: string
}

/**
 * 验证TreeNode数组
 * @param nodes TreeNode数组
 * @returns 验证错误数组
 */
export function validateExpression(nodes: TreeNode[]): ValidationError[] {
  const errors: ValidationError[] = []

  const validateNode = (node: TreeNode) => {
    switch (node.type) {
      case 'condition': {
        // 检查条件节点是否处于函数模式
        if (node.functionName) {
          // 函数模式：按照函数节点的方式验证
          const func = AVIATOR_FUNCTIONS.find((f) => f.name === node.functionName)
          if (func) {
            // 验证必填参数
            func.parameters.forEach((param) => {
              if (param.required) {
                const nodeParam = node.parameters?.find((p) => p.name === param.name)

                // 检查参数是否有效：有值 OR 有嵌套节点
                const hasValue = nodeParam && nodeParam.value !== undefined && nodeParam.value !== ''
                const hasNestedNode = nodeParam && nodeParam.isNested && nodeParam.nestedNode

                if (!nodeParam || (!hasValue && !hasNestedNode)) {
                  errors.push({
                    nodeId: node.id,
                    message: `函数 ${func.displayName} 缺少必填参数: ${param.description}`,
                  })
                }
              }
            })

            // 对于非布尔函数，验证比较操作
            if (func.returnType !== 'boolean') {
              if (!node.comparison) {
                errors.push({ nodeId: node.id, message: `函数 ${func.displayName} 缺少比较操作符` })
              } else {
                // 检查是否为复合操作符（不需要额外比较值的操作符）
                const isCompoundOperator = ['== nil', '!= nil', '== \'\'', '!= \'\''].includes(node.comparison)

                // 只有非复合操作符才需要比较值
                if (!isCompoundOperator && (node.value === undefined || node.value === '')) {
                  errors.push({ nodeId: node.id, message: `函数 ${func.displayName} 缺少比较值` })
                }
              }
            }
          }
        } else {
          // 条件模式：按照原来的方式验证
          if (!node.field) {
            errors.push({ nodeId: node.id, message: '条件节点缺少字段选择' })
          }
          if (!node.comparison) {
            errors.push({ nodeId: node.id, message: '条件节点缺少比较操作符' })
          }

          // match 操作符的验证已移除
          // match 会自动在生成时添加 != nil 或 == nil，通过取反按钮控制

          // 检查是否需要值（特殊操作符不需要值）
          const specialOperators = ['== nil', '!= nil', '== \'\'', '!= \'\'']
          const needsValue = node.comparison && !specialOperators.includes(node.comparison)

          // match 操作符需要正则表达式作为值
          if (needsValue && (node.value === undefined || node.value === '')) {
            errors.push({ nodeId: node.id, message: '条件节点缺少比较值' })
          }
        }
        break
      }
      case 'function': {
        if (!node.functionName) {
          errors.push({ nodeId: node.id, message: '函数节点缺少函数选择' })
        }
        const func = AVIATOR_FUNCTIONS.find((f) => f.name === node.functionName)
        if (func) {
          // 验证必填参数
          func.parameters.forEach((param) => {
            if (param.required) {
              const nodeParam = node.parameters?.find((p) => p.name === param.name)

              // 检查参数是否有效：有值 OR 有嵌套节点
              const hasValue = nodeParam && nodeParam.value !== undefined && nodeParam.value !== ''
              const hasNestedNode = nodeParam && nodeParam.isNested && nodeParam.nestedNode

              if (!nodeParam || (!hasValue && !hasNestedNode)) {
                errors.push({
                  nodeId: node.id,
                  message: `函数 ${func.displayName} 缺少必填参数: ${param.description}`,
                })
              }
            }
          })

          // 对于非布尔函数，验证比较操作
          if (func.returnType !== 'boolean') {
            if (!node.comparison) {
              errors.push({ nodeId: node.id, message: `函数 ${func.displayName} 缺少比较操作符` })
            } else {
              // 检查是否为复合操作符（不需要额外比较值的操作符）
              const isCompoundOperator = ['== nil', '!= nil', '== \'\'', '!= \'\''].includes(node.comparison)

              // 只有非复合操作符才需要比较值
              if (!isCompoundOperator && (node.value === undefined || node.value === '')) {
                errors.push({ nodeId: node.id, message: `函数 ${func.displayName} 缺少比较值` })
              }
            }
          }
        }
        break
      }
      case 'group': {
        // 只有当分组处于展开状态且为空时才提示错误
        if (node.expanded && (!node.children || node.children.length === 0)) {
          errors.push({ nodeId: node.id, message: '分组节点为空，请添加子条件' })
        } else if (node.children && node.children.length > 0) {
          node.children.forEach(validateNode)
        }
        break
      }
    }
  }

  nodes.forEach(validateNode)
  return errors
}
