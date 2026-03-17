const RECOMMENDED_OPERATOR_MAP: Record<string, string[]> = {
  string: ['==', '!=', '=~', '!~', 'in', 'not_in', 'is_null', 'is_not_null'],
  email: ['==', '!=', '=~', '!~', 'in', 'not_in', 'is_null', 'is_not_null'],
  url: ['==', '!=', '=~', '!~', 'in', 'not_in', 'is_null', 'is_not_null'],
  uuid: ['==', '!=', '=~', '!~', 'in', 'not_in', 'is_null', 'is_not_null'],
  token: ['==', '!=', '=~', '!~', 'in', 'not_in', 'is_null', 'is_not_null'],
  number: ['==', '!=', '>', '>=', '<', '<=', 'in', 'not_in', 'is_null', 'is_not_null'],
  boolean: ['==', '!=', 'is_null', 'is_not_null'],
  datetime: ['==', '!=', '>', '>=', '<', '<=', 'is_null', 'is_not_null'],
  ip: ['==', '!=', '=~', '!~', 'in', 'not_in', 'is_null', 'is_not_null'],
  array: ['in', 'not_in', 'is_null', 'is_not_null'],
}

const DEFAULT_RECOMMENDED_OPERATORS = ['==', '!=', 'is_null', 'is_not_null']

export function getRecommendedOperators(fieldType: string): string[] {
  return RECOMMENDED_OPERATOR_MAP[fieldType] || DEFAULT_RECOMMENDED_OPERATORS
}
