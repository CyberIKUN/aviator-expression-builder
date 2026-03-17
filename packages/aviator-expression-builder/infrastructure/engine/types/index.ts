/**
 * 高级表达式构建器 - 类型定义
 * 支持无限层级嵌套和Aviator函数
 */

export type NodeScalarValue = string | number | boolean
export type NodeValue = NodeScalarValue | NodeScalarValue[] | TreeNode | null | undefined
export type FunctionParameterValueType = 'string' | 'number' | 'boolean' | 'array' | 'any'

export interface TreeNode {
  id: string
  type: 'group' | 'condition'
  level: number // 嵌套层级，用于缩进显示

  // 分组节点属性
  operator?: 'AND' | 'OR' // 与子节点的连接符
  children?: TreeNode[]

  // 条件节点属性 - 条件模式
  field?: string
  fieldType?: string
  comparison?: string // ==, !=, >, <, >=, <=, in, not_in, =~, !~
  value?: NodeValue
  valueIsField?: boolean // 标记 value 是否为字段引用
  valueIsLiteral?: boolean // 标记 value 是否为字符串/数字字面量（来自解析）
  extraComparison?: string // 额外的比较操作，如 match 后的 == nil

  // 条件节点属性 - 函数模式
  // 当 functionName 有值时，条件节点处于函数模式
  functionName?: string // 如 string.startsWith, include
  functionCategory?: 'string' | 'math' | 'sequence' | 'datetime' | 'custom' | 'system'
  parameters?: FunctionParameter[]
  isNegated?: boolean // 是否为取反（!function() 或 !condition）

  // UI状态
  expanded?: boolean // 分组是否展开
  parentId?: string
}

export interface FunctionParameter {
  name: string
  type: 'field' | 'value' | 'expression'
  required: boolean
  value?: NodeValue
  description?: string
  valueType?: FunctionParameterValueType // 对于type='value'的参数，指定期望的数据类型

  // 嵌套节点支持：当参数是复杂表达式时
  nestedNode?: TreeNode // 嵌套的TreeNode（函数调用、条件表达式等）
  isNested?: boolean // 标记是否为嵌套参数
}

export interface AviatorFunction {
  name: string
  category: 'string' | 'math' | 'sequence' | 'datetime' | 'system' | 'custom'
  displayName: string
  description: string
  parameters: FunctionParameter[]
  returnType: string
  example: string
}

export interface FieldOption {
  label: string
  value: string
  type?: string
  example?: string
}

export interface ComparisonOperator {
  label: string
  value: string
  symbol: string
}
