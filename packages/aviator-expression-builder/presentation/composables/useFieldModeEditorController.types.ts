import type { ComparisonOperator, FieldOption, TreeNode } from '../../infrastructure/engine/types'

export interface FieldModeEditorProps {
  node: TreeNode
  availableFields: FieldOption[]
  availableOperators: ComparisonOperator[]
  getParameterDataType?: (nodeId: string, paramName: string) => string
}

export interface UseFieldModeEditorControllerOptions {
  props: FieldModeEditorProps
  emitUpdateField: (value: string) => void
  emitUpdateValueDataType: (data: { fieldName: string, dataType: string }) => void
}
