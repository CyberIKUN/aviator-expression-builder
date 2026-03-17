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
