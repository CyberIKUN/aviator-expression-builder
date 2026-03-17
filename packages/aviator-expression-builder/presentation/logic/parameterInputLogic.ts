import type { FieldOption, FunctionParameter } from '../../infrastructure/engine/types'

export type ParameterInputType = 'value' | 'field' | 'condition' | 'lambda'

function isTreeNodeLike(value: unknown): boolean {
  if (!value || typeof value !== 'object') return false
  const node = value as Record<string, unknown>
  return typeof node.id === 'string' && (node.type === 'condition' || node.type === 'group')
}

function isLambdaValue(value: unknown): boolean {
  return typeof value === 'string' && value.includes('lambda(')
}

function isFieldValue(value: unknown, availableFields: FieldOption[]): boolean {
  return typeof value === 'string' && !!value && availableFields.some((field) => field.value === value)
}

export function resolveParameterInputType(params: {
  explicitType?: string | null
  parameter: FunctionParameter
  value: unknown
  availableFields: FieldOption[]
  isLambdaParameter: boolean
}): ParameterInputType {
  const { explicitType, parameter, value, availableFields, isLambdaParameter } = params

  if (explicitType && ['value', 'field', 'condition', 'lambda'].includes(explicitType)) {
    return explicitType as ParameterInputType
  }

  if (isTreeNodeLike(value)) {
    return 'condition'
  }

  if (parameter.type && ['field', 'value', 'expression', 'condition', 'lambda'].includes(parameter.type)) {
    if (parameter.type === 'expression') return 'condition'
    return parameter.type as ParameterInputType
  }

  if ((parameter as any).type === 'function') {
    return 'condition'
  }

  if (isLambdaParameter && (!value || isLambdaValue(value))) {
    return 'lambda'
  }

  if (isFieldValue(value, availableFields)) {
    return 'field'
  }

  return 'value'
}

export function buildAvailableParameterTypes(isLambdaParameter: boolean): Array<{ value: ParameterInputType, label: string }> {
  if (isLambdaParameter) {
    return [{ value: 'lambda', label: '匿名函数' }]
  }

  return [
    { value: 'value', label: '值' },
    { value: 'field', label: '字段' },
    { value: 'condition', label: '条件' },
  ]
}

export function getParameterTypeColor(type: string): string {
  const colorMap: Record<string, string> = {
    string: 'blue',
    number: 'green',
    boolean: 'orange',
    datetime: 'purple',
    ip: 'cyan',
    email: 'magenta',
    url: 'lime',
    array: 'gold',
  }

  return colorMap[type] || 'default'
}

export function getParameterFieldTooltip(field: FieldOption): string {
  if (field.type === 'array') {
    return `${field.label} (数组) - 可输入索引访问元素，例如: ${field.value}[0]`
  }

  return `字段: ${field.label} (${field.type})`
}

export function toStringArrayValue(value: unknown): string[] {
  if (Array.isArray(value)) return value as string[]
  if (typeof value === 'string') {
    return value.split(',').map((item) => item.trim()).filter(Boolean)
  }
  return []
}
