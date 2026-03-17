import type { FieldOption, TreeNode } from '../../infrastructure/engine/types'
import { createConditionNode, createGroupNode } from '../../infrastructure/engine/utils'
import {
  type AppendChildNodeResult,
  resolveConditionValueDataType,
} from './treeExpressionBuilder.condition'

export function updateNodeInTree(nodes: TreeNode[], nodeId: string, updates: Partial<TreeNode>): boolean {
  for (const node of nodes) {
    if (node.id === nodeId) {
      Object.assign(node, updates)
      return true
    }

    if (node.children && updateNodeInTree(node.children, nodeId, updates)) {
      return true
    }
  }

  return false
}

export function removeNodeFromTree(nodes: TreeNode[], nodeId: string): TreeNode[] {
  return nodes.filter((node) => {
    if (node.id === nodeId) {
      return false
    }

    if (node.children) {
      node.children = removeNodeFromTree(node.children, nodeId)
    }

    return true
  })
}

export function setGroupExpandedRecursively(nodes: TreeNode[], expanded: boolean): void {
  const walk = (node: TreeNode) => {
    if (node.type === 'group') {
      node.expanded = expanded
      node.children?.forEach(walk)
    }
  }

  nodes.forEach(walk)
}

export function appendChildNodeToGroup(
  nodes: TreeNode[],
  parentId: string,
  nodeType: 'condition' | 'function' | 'group',
  availableFields: FieldOption[],
): AppendChildNodeResult {
  for (const node of nodes) {
    if (node.id === parentId && node.type === 'group') {
      const level = node.level + 1
      node.children = node.children || []

      if (nodeType === 'group') {
        node.children.push(createGroupNode(parentId, level))
        return { updated: true }
      }

      const conditionNode = createConditionNode(parentId, level)

      if (nodeType === 'function') {
        conditionNode.functionName = ''
        conditionNode.parameters = []
        delete conditionNode.field
        node.children.push(conditionNode)
        return { updated: true }
      }

      if (availableFields.length > 0) {
        const defaultField = availableFields[0]
        conditionNode.field = defaultField.value
        conditionNode.fieldType = defaultField.type || 'string'
      }

      node.children.push(conditionNode)
      return {
        updated: true,
        addedConditionNodeId: conditionNode.id,
        addedConditionDataType: resolveConditionValueDataType(conditionNode.fieldType),
      }
    }

    if (node.children) {
      const result = appendChildNodeToGroup(node.children, parentId, nodeType, availableFields)
      if (result.updated) return result
    }
  }

  return { updated: false }
}
