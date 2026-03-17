export type ValueInputType = 'value' | 'field' | 'function'

export const VALUE_INPUT_TYPE_OPTIONS: Array<{ value: ValueInputType, label: string }> = [
  { value: 'value', label: '值' },
  { value: 'field', label: '字段' },
  { value: 'function', label: '函数' },
]

export const COMPOUND_OPERATORS = new Set(['== nil', '!= nil', '== \'\'', '!= \'\''])

export const FIELD_COLOR_MAP: Record<string, string> = {
  string: 'blue',
  number: 'green',
  boolean: 'orange',
  datetime: 'purple',
  ip: 'cyan',
  email: 'magenta',
  url: 'lime',
  array: 'gold',
  object: 'gray',
}
