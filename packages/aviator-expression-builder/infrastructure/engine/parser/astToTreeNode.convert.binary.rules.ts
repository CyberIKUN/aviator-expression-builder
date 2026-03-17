import type { BinaryExpressionNode } from './ast.types'
import { binaryBelongNilRule } from './astToTreeNode.convert.binary.rule.belong-nil'
import { binaryStringConditionRule } from './astToTreeNode.convert.binary.rule.string-condition'
import { createAstNodeRuleRegistry } from './astToTreeNode.convert.rule-registry'

export const BINARY_EXPRESSION_RULE_REGISTRY = createAstNodeRuleRegistry<BinaryExpressionNode>([
  binaryBelongNilRule,
  binaryStringConditionRule,
])
