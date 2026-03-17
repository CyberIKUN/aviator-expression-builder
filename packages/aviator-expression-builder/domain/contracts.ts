import type {
  AviatorFieldOption,
  AviatorTreeNode,
  AviatorValidationError,
} from './models'

export interface AviatorExpressionEngineContext {
  availableFields: AviatorFieldOption[]
  parameterDataTypes: Map<string, Map<string, string>>
  getFieldTypeForNode: (fieldName: string) => string
}

export interface AviatorExpressionEngine {
  parse: (expression: string, context: AviatorExpressionEngineContext) => AviatorTreeNode[]
  generate: (nodes: AviatorTreeNode[], context: AviatorExpressionEngineContext) => string
  validate: (nodes: AviatorTreeNode[]) => AviatorValidationError[]
}
