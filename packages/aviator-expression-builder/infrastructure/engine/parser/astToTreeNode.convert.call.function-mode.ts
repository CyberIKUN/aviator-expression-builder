import { AVIATOR_FUNCTIONS } from '../constants'
import type { TreeNode } from '../types'
import { createConditionNode } from '../utils'
import type { CallExpressionNode } from './ast.types'
import type { ConvertAstNodeHandlerOptions } from './astToTreeNode.convert.handlers.types'
import { shouldBeLambdaParameter } from './astToTreeNode.expression'
import { applyFunctionModeParameterRules } from './astToTreeNode.convert.call.function-mode.parameter-rules/index'
import { filterNonNull, resolveSimpleNodeValue } from './astToTreeNode.convert.helpers'

export function buildDefaultFunctionModeConditionNode(
  options: ConvertAstNodeHandlerOptions<CallExpressionNode>,
): TreeNode {
  const { node, level, parentId } = options

  const functionNode = createConditionNode(parentId, level)
  functionNode.functionName = node.callee.name
  delete functionNode.field

  const func = AVIATOR_FUNCTIONS.find((item) => item.name === node.callee.name)
  if (!func) {
    return functionNode
  }

  functionNode.functionCategory = func.category

  const parameters = func.parameters.map((param) => ({
    ...param,
    value: undefined,
    type: shouldBeLambdaParameter(func.name, param.name, param.description) ? 'lambda' : param.type,
  }))

  const isMultiValueParam = parameters.length === 1
    && (parameters[0].name === 'items'
      || parameters[0].description.includes('多个')
      || parameters[0].description.includes('列表'))

  if (isMultiValueParam && node.arguments.length > 1) {
    parameters[0].value = node.arguments.map((arg) => resolveSimpleNodeValue(arg)).filter(filterNonNull)
    parameters[0].isNested = false
    parameters[0].type = 'value'
    functionNode.comparison = undefined
    functionNode.value = undefined
  } else {
    node.arguments.forEach((arg, index) => {
      if (index >= parameters.length) return
      applyFunctionModeParameterRules({
        arg,
        index,
        functionNode,
        options,
        parameters,
      })
    })
  }

  functionNode.parameters = parameters

  if (func.returnType === 'boolean') {
    functionNode.comparison = undefined
    functionNode.value = undefined
  } else if (functionNode.comparison !== undefined) {
    functionNode.comparison = '=='
    functionNode.value = ''
  }

  return functionNode
}
