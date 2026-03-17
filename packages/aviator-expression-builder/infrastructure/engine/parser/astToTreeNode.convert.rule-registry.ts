import type { TreeNode } from '../types'
import type { ASTNode } from './ast.types'
import type { ConvertAstNodeHandlerOptions } from './astToTreeNode.convert.handlers.types'

export type AstNodeRuleHandler<TNode extends ASTNode> = (
  options: ConvertAstNodeHandlerOptions<TNode>,
) => TreeNode | null

export interface AstNodeRuleDefinition<TNode extends ASTNode> {
  name: string
  priority?: number
  handler: AstNodeRuleHandler<TNode>
}

interface CompiledAstNodeRule<TNode extends ASTNode> {
  name: string
  priority: number
  order: number
  handler: AstNodeRuleHandler<TNode>
}

export interface AstNodeRuleRegistry<TNode extends ASTNode> {
  rules: readonly CompiledAstNodeRule<TNode>[]
}

export function createAstNodeRuleRegistry<TNode extends ASTNode>(
  definitions: AstNodeRuleDefinition<TNode>[],
): AstNodeRuleRegistry<TNode> {
  const rules: CompiledAstNodeRule<TNode>[] = definitions.map((definition, index) => ({
    name: definition.name,
    priority: definition.priority ?? 0,
    order: index,
    handler: definition.handler,
  }))

  rules.sort((a, b) => {
    if (a.priority !== b.priority) {
      return b.priority - a.priority
    }
    return a.order - b.order
  })

  return {
    rules: Object.freeze(rules),
  }
}

export function executeAstNodeRuleRegistry<TNode extends ASTNode>(
  registry: AstNodeRuleRegistry<TNode>,
  options: ConvertAstNodeHandlerOptions<TNode>,
): TreeNode | null {
  for (const rule of registry.rules) {
    const result = rule.handler(options)
    if (result) {
      return result
    }
  }

  return null
}

export function getAstNodeRuleNames<TNode extends ASTNode>(registry: AstNodeRuleRegistry<TNode>): string[] {
  return registry.rules.map((rule) => rule.name)
}
