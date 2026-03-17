import type { TreeNode } from '../../types'
import type { ASTNode, CallExpressionNode } from '../ast.types'
import type { ConvertAstNodeHandlerOptions } from '../astToTreeNode.convert.handlers.types'

export interface ParameterLike {
  name?: string
  valueType?: string
  value?: unknown
  isNested?: boolean
  nestedNode?: TreeNode
  type?: string
}

export interface FunctionModeParameterRuleContext {
  arg: ASTNode
  index: number
  functionNode: TreeNode
  options: ConvertAstNodeHandlerOptions<CallExpressionNode>
  parameters: ParameterLike[]
}

export type FunctionModeParameterRuleHandler = (context: FunctionModeParameterRuleContext) => boolean
