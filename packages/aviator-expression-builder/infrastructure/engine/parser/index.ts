/**
 * Aviator表达式解析器
 * 统一导出解析相关的API
 */

import { tokenizeExpression } from './tokenizer'
import { parseTokensToAST } from './astParser'
import { type ConversionContext, convertASTToTreeNodes } from './astToTreeNode'
import type { TreeNode } from '../types'

export type { ConversionContext } from './astToTreeNode'
export { generateExpressionFromAST } from './astToTreeNode'

export interface ParseExpressionResult {
  success: boolean
  nodes: TreeNode[]
  error?: string
}

export function parseExpressionNodes(expression: string, context: ConversionContext): TreeNode[] {
  const result = parseExpression(expression, context)
  return result.nodes
}

/**
 * 解析Aviator表达式为TreeNode数组
 * @param expression 表达式字符串
 * @param context 转换上下文
 * @returns TreeNode数组
 */
export function parseExpression(expression: string, context: ConversionContext): ParseExpressionResult {
  try {
    // 词法分析
    const tokens = tokenizeExpression(expression)

    // 语法分析
    const result = parseTokensToAST(tokens)

    // 检查是否还有未解析的 token
    if (result.position < tokens.length) {
      const remainingTokens = tokens.slice(result.position)
      throw new Error(`无法解析 '${remainingTokens.map((t) => t.value).join(' ')}'`)
    }

    // AST转TreeNode
    const treeNodes = convertASTToTreeNodes(result.ast, context)

    return { success: true, nodes: treeNodes }
  } catch (error: any) {
    const errorMessage = error.message || '未知错误'
    return {
      success: false,
      nodes: [],
      error: `表达式解析失败，${errorMessage}`,
    }
  }
}
