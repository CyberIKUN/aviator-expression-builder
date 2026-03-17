import type { FieldOption } from '../../infrastructure/engine/types'

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

  return Object.entries(fieldTypeCount)
    .map(([type, count]) => `${type}(${count})`)
    .join(', ')
}

export function getFieldTypeByName(fields: FieldOption[], fieldName: string): string {
  const field = fields.find((item) => item.value === fieldName)
  return field?.type || 'string'
}
