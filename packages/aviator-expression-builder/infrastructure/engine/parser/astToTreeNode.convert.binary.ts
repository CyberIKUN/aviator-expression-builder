import { createConditionNode } from '../utils'
import type { TreeNode } from '../types'
import type { BinaryExpressionNode } from './ast.types'
import type { ConvertAstNodeHandlerOptions } from './astToTreeNode.convert.handlers.types'
import { BINARY_EXPRESSION_RULE_REGISTRY } from './astToTreeNode.convert.binary.rules'
import {
  inferLiteralDataType,
  isEmptyComparableLiteral,
  isNilLiteral,
  resolveFieldNameFromAst,
  setNodeDataType,
} from './astToTreeNode.convert.helpers'
import { executeAstNodeRuleRegistry } from './astToTreeNode.convert.rule-registry'

function buildFunctionComparisonConditionNode(
  options: ConvertAstNodeHandlerOptions<BinaryExpressionNode>,
): TreeNode | null {
  const { node, level, parentId, context, convert } = options
  if (node.left.type !== 'CallExpression') {
    return null
  }

  const functionNode = convert(node.left, level, parentId)
  functionNode.comparison = node.operator

  if (node.right.type === 'Literal') {
    if (isNilLiteral(node.right)) {
      functionNode.comparison = `${node.operator} nil`
      functionNode.value = undefined
    } else if (isEmptyComparableLiteral(node.right, node.operator)) {
      functionNode.comparison = `${node.operator} ''`
      functionNode.value = undefined
    } else {
      functionNode.value = node.right.value
      setNodeDataType(
        context,
        functionNode.id,
        functionNode.functionName || 'condition_value',
        inferLiteralDataType(node.right),
      )
    }
  } else if (node.right.type === 'Identifier' || node.right.type === 'MemberExpression') {
    functionNode.value = resolveFieldNameFromAst(node.right)
    functionNode.valueIsField = true
  }

  return functionNode
}

function buildFieldComparisonConditionNode(
  options: ConvertAstNodeHandlerOptions<BinaryExpressionNode>,
): TreeNode {
  const { node, level, parentId, context } = options
  const conditionNode = createConditionNode(parentId, level)

  if (node.left.type === 'Identifier' || node.left.type === 'MemberExpression') {
    const fieldName = resolveFieldNameFromAst(node.left)
    conditionNode.field = fieldName
    if (fieldName) {
      conditionNode.fieldType = context.getFieldTypeForNode(fieldName)
    }
  }

  if (node.right.type === 'Literal') {
    if (isNilLiteral(node.right)) {
      conditionNode.comparison = `${node.operator} nil`
      conditionNode.value = undefined
    } else if (isEmptyComparableLiteral(node.right, node.operator)) {
      conditionNode.comparison = `${node.operator} ''`
      conditionNode.value = undefined
    } else {
      conditionNode.comparison = node.operator
      conditionNode.value = node.right.value
      conditionNode.valueIsLiteral = true
      setNodeDataType(context, conditionNode.id, 'condition_value', inferLiteralDataType(node.right))
    }
  } else if (node.right.type === 'Identifier' || node.right.type === 'MemberExpression') {
    conditionNode.comparison = node.operator
    conditionNode.value = resolveFieldNameFromAst(node.right)
    conditionNode.valueIsField = true
  } else {
    conditionNode.comparison = node.operator
    conditionNode.value = undefined
  }

  return conditionNode
}

export function handleBinaryExpressionNode(
  options: ConvertAstNodeHandlerOptions<BinaryExpressionNode>,
): TreeNode {
  const matchedRuleNode = executeAstNodeRuleRegistry(BINARY_EXPRESSION_RULE_REGISTRY, options)
  if (matchedRuleNode) {
    return matchedRuleNode
  }

  const functionComparisonNode = buildFunctionComparisonConditionNode(options)
  if (functionComparisonNode) {
    return functionComparisonNode
  }

  return buildFieldComparisonConditionNode(options)
}
