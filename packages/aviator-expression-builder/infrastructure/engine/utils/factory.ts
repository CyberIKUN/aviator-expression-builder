/**
 * 树节点工厂函数
 * 用于创建各种类型的树节点
 */

import type { TreeNode } from '../types'

/**
 * 生成唯一ID
 */
export function generateNodeId(): string {
  return `node_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

/**
 * 创建新的条件节点
 */
export function createConditionNode(parentId?: string, level: number = 0): TreeNode {
  return {
    id: generateNodeId(),
    type: 'condition',
    level,
    parentId,
    field: '',
    comparison: '==',
    value: '',
  }
}

/**
 * 创建新的分组节点
 */
export function createGroupNode(parentId?: string, level: number = 0): TreeNode {
  return {
    id: generateNodeId(),
    type: 'group',
    level,
    parentId,
    operator: 'AND',
    children: [],
    expanded: true,
  }
}

/**
 * 检查是否应该是lambda参数的辅助函数
 */
export function shouldBeLambdaParameter(functionName: string, paramName: string, paramDescription: string): boolean {
  // 基于函数名和参数名的精确规则
  const lambdaRules = [
    { func: 'map', param: 'fun' },
    { func: 'filter', param: 'predicate' },
    { func: 'sort', param: 'comparator' },
    { func: 'repeatedly', param: 'f' },
    { func: 'reduce', param: 'fun' },
  ]

  // 检查是否匹配已知的lambda参数
  if (lambdaRules.some((rule) => rule.func === functionName && rule.param === paramName)) {
    return true
  }

  // 基于参数描述的模糊匹配
  if (paramDescription) {
    const desc = paramDescription.toLowerCase()
    if (desc.includes('函数') || desc.includes('谓词') || desc.includes('比较器')
      || desc.includes('lambda') || desc.includes('匿名函数') || desc.includes('回调')) {
      return true
    }
  }

  // 基于参数名称的模糊匹配
  if (paramName) {
    const name = paramName.toLowerCase()
    if (name === 'fun' || name === 'predicate' || name === 'comparator'
      || name === 'callback' || name === 'f' || name === 'fn') {
      return true
    }
  }

  return false
}
