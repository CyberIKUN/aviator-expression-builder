/**
 * 表达式生成器
 * 统一导出生成相关的API
 */

import { type GeneratorContext, generateNodeExpression } from './nodeExpressionGenerator'
import type { TreeNode } from '../types'

export type { GeneratorContext } from './nodeExpressionGenerator'

/**
 * 生成完整的Aviator表达式
 * @param nodes TreeNode数组
 * @param context 生成器上下文
 * @returns Aviator表达式字符串
 */
export function generateExpression(nodes: TreeNode[], context: GeneratorContext): string {
  if (nodes.length === 0) return ''

  const expressions = nodes
    .map((node) => generateNodeExpression(node, context))
    .filter((expr) => expr)

  // 避免过度嵌套 - 如果只有一个表达式，直接返回
  if (expressions.length === 1) {
    return expressions[0]
  }

  return expressions.join(' && ')
}
