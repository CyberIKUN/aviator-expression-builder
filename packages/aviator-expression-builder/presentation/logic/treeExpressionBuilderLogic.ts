import type { FieldOption, TreeNode } from '../../infrastructure/engine/types'
import { createConditionNode, createGroupNode } from '../../infrastructure/engine/utils'

export const DEFAULT_FIELD_OPTIONS: FieldOption[] = [
  { label: 'client_ip', value: 'client_ip', type: 'ip' },
  { label: 'is_whitelist', value: 'is_whitelist', type: 'boolean' },
  { label: 'ip_user', value: 'ip_user', type: 'ip' },
  { label: 'token_user', value: 'token_user', type: 'string' },
  { label: 'employee_id', value: 'employee_id', type: 'string' },
  { label: 'sys_name', value: 'sys_name', type: 'string' },
  { label: 'start_time', value: 'start_time', type: 'string' },
  { label: 'action_name', value: 'action_name', type: 'string' },
  { label: 'staff_dept_1_nm', value: 'staff_dept_1_nm', type: 'string' },
  { label: 'request.method', value: 'request.method', type: 'string' },
  { label: 'request.uri', value: 'request.uri', type: 'string' },
  { label: 'response.status', value: 'response.status', type: 'number' },
]

export function resolveAvailableFields(
  extractedFields: FieldOption[],
  customFields: FieldOption[] | undefined,
  fallbackFields: FieldOption[],
): FieldOption[] {
  if (extractedFields.length > 0) return extractedFields
  if (customFields && customFields.length > 0) return customFields
  return fallbackFields
}

export function summarizeFieldTypes(fields: FieldOption[]): string {
  if (!fields.length) return ''

  const fieldTypeCount = fields.reduce((acc, field) => {
    const key = field.type || 'unknown'
    acc[key] = (acc[key] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  return Object.entries(fieldTypeCount).map(([type, count]) => `${type}(${count})`).join(', ')
}

export function getFieldTypeByName(fields: FieldOption[], fieldName: string): string {
  const field = fields.find((item) => item.value === fieldName)
  return field?.type || 'string'
}

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

export function formatExpressionText(expression: string): string {
  let formatted = expression

  formatted = formatted.replace(/&&/g, ' && ')
  formatted = formatted.replace(/\|\|/g, ' || ')
  formatted = formatted.replace(/\(\s*/g, '(\n  ')
  formatted = formatted.replace(/\s*\)/g, '\n)')
  formatted = formatted.replace(/ && /g, ' &&\n  ')
  formatted = formatted.replace(/ \|\| /g, ' ||\n  ')
  formatted = formatted.replace(/\n\s*\n/g, '\n')

  return formatted.trim()
}

export function checkBasicAviatorSyntax(expression: string): boolean {
  try {
    let openParentheses = 0

    for (const char of expression) {
      if (char === '(') openParentheses++
      if (char === ')') openParentheses--
      if (openParentheses < 0) return false
    }

    if (openParentheses !== 0) return false

    const hasValidOperators = /[><=!&|~]/.test(expression)
    const hasFields = /[a-z_]\w*/i.test(expression)

    return hasValidOperators && hasFields
  } catch {
    return false
  }
}

export type ConditionValueDataType = 'string' | 'number' | 'boolean'

export function resolveConditionValueDataType(fieldType?: string): ConditionValueDataType {
  if (fieldType === 'boolean') return 'boolean'
  if (fieldType === 'number') return 'number'
  return 'string'
}

export interface AppendChildNodeResult {
  updated: boolean
  addedConditionNodeId?: string
  addedConditionDataType?: ConditionValueDataType
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
