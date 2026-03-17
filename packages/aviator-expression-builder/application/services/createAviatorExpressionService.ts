import type { AviatorExpressionEngine } from '../../domain/contracts'
import type {
  AviatorFieldOption,
  AviatorTreeNode,
  AviatorValidationError,
} from '../../domain/models'
import { LegacyAviatorExpressionEngine } from '../../infrastructure/legacy/LegacyAviatorExpressionEngine'
import {
  parseExpression,
  type ParseExpressionResult,
} from '../../infrastructure/engine/parser'

export interface CreateAviatorExpressionServiceOptions {
  availableFields: AviatorFieldOption[]
  getFieldTypeForNode?: (fieldName: string) => string
  engine?: AviatorExpressionEngine
}

export interface AviatorExpressionService {
  parseDetailed: (expression: string) => ParseExpressionResult
  parse: (expression: string) => AviatorTreeNode[]
  generate: (nodes: AviatorTreeNode[]) => string
  validate: (nodes: AviatorTreeNode[]) => AviatorValidationError[]
  getParameterDataTypes: () => Map<string, Map<string, string>>
  setParameterDataType: (nodeId: string, parameterName: string, dataType: string) => void
  clearParameterDataTypes: () => void
  getAvailableFields: () => AviatorFieldOption[]
  setAvailableFields: (fields: AviatorFieldOption[]) => void
}

function createFieldTypeResolver(
  getAvailableFields: () => AviatorFieldOption[],
  customResolver?: (fieldName: string) => string,
): (fieldName: string) => string {
  if (customResolver) {
    return customResolver
  }

  return (fieldName: string): string => {
    const field = getAvailableFields().find((item) => item.value === fieldName)
    return field?.type || 'string'
  }
}

export function createAviatorExpressionService(
  options: CreateAviatorExpressionServiceOptions,
): AviatorExpressionService {
  const engine = options.engine || new LegacyAviatorExpressionEngine()

  let availableFields = [...(options.availableFields || [])]
  const parameterDataTypes = new Map<string, Map<string, string>>()

  const getAvailableFields = () => availableFields
  const setAvailableFields = (fields: AviatorFieldOption[]) => {
    availableFields = [...(fields || [])]
  }

  const resolveFieldType = createFieldTypeResolver(getAvailableFields, options.getFieldTypeForNode)

  const createContext = () => ({
    availableFields,
    parameterDataTypes,
    getFieldTypeForNode: resolveFieldType,
  })

  const parse = (expression: string): AviatorTreeNode[] => {
    return parseDetailed(expression).nodes
  }

  const parseDetailed = (expression: string): ParseExpressionResult => {
    if (!expression || !expression.trim()) {
      return { success: true, nodes: [] }
    }

    return parseExpression(expression, createContext())
  }

  const generate = (nodes: AviatorTreeNode[]): string => {
    return engine.generate(nodes, createContext())
  }

  const validate = (nodes: AviatorTreeNode[]): AviatorValidationError[] => {
    return engine.validate(nodes)
  }

  const getParameterDataTypes = () => parameterDataTypes

  const setParameterDataType = (nodeId: string, parameterName: string, dataType: string) => {
    const nodeDataTypes = parameterDataTypes.get(nodeId) || new Map<string, string>()
    nodeDataTypes.set(parameterName, dataType)
    parameterDataTypes.set(nodeId, nodeDataTypes)
  }

  const clearParameterDataTypes = () => {
    parameterDataTypes.clear()
  }

  return {
    parse,
    parseDetailed,
    generate,
    validate,
    getParameterDataTypes,
    setParameterDataType,
    clearParameterDataTypes,
    getAvailableFields,
    setAvailableFields,
  }
}
