import type { TreeNode } from '../types'
import type { CallExpressionNode } from './ast.types'
import type { ConvertAstNodeHandlerOptions } from './astToTreeNode.convert.handlers.types'
import { buildDefaultFunctionModeConditionNode } from './astToTreeNode.convert.call.function-mode'
import { CALL_EXPRESSION_RULE_REGISTRY } from './astToTreeNode.convert.call.rules'
import { executeAstNodeRuleRegistry } from './astToTreeNode.convert.rule-registry'

export function handleCallExpressionNode(
  options: ConvertAstNodeHandlerOptions<CallExpressionNode>,
): TreeNode {
  const matchedRuleNode = executeAstNodeRuleRegistry(CALL_EXPRESSION_RULE_REGISTRY, options)
  if (matchedRuleNode) {
    return matchedRuleNode
  }

  return buildDefaultFunctionModeConditionNode(options)
}
