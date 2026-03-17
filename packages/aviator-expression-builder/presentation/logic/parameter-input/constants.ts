export type ParameterInputType = 'value' | 'field' | 'condition' | 'lambda'

export const PARAMETER_INPUT_TYPES = ['value', 'field', 'condition', 'lambda'] as const

export const PARAMETER_TYPE_COLOR_MAP: Record<string, string> = {
  string: 'blue',
  number: 'green',
  boolean: 'orange',
  datetime: 'purple',
  ip: 'cyan',
  email: 'magenta',
  url: 'lime',
  array: 'gold',
}

export const LAMBDA_PARAMETER_TYPE_OPTIONS: Array<{ value: ParameterInputType, label: string }> = [
  { value: 'lambda', label: '匿名函数' },
]

export const DEFAULT_PARAMETER_TYPE_OPTIONS: Array<{ value: ParameterInputType, label: string }> = [
  { value: 'value', label: '值' },
  { value: 'field', label: '字段' },
  { value: 'condition', label: '条件' },
]
