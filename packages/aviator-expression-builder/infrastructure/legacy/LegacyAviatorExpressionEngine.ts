import { generateExpression } from '../engine/generator'
import { parseExpressionNodes } from '../engine/parser'
import { validateExpression } from '../engine/validator/expressionValidator'
import type {
  AviatorExpressionEngine,
  AviatorExpressionEngineContext,
} from '../../domain/contracts'

export class LegacyAviatorExpressionEngine implements AviatorExpressionEngine {
  parse(expression: string, context: AviatorExpressionEngineContext) {
    return parseExpressionNodes(expression, {
      availableFields: context.availableFields,
      parameterDataTypes: context.parameterDataTypes,
      getFieldTypeForNode: context.getFieldTypeForNode,
    })
  }

  generate(nodes: Parameters<typeof generateExpression>[0], context: AviatorExpressionEngineContext) {
    return generateExpression(nodes, {
      availableFields: context.availableFields,
      parameterDataTypes: context.parameterDataTypes,
    })
  }

  validate(nodes: Parameters<typeof validateExpression>[0]) {
    return validateExpression(nodes)
  }
}
