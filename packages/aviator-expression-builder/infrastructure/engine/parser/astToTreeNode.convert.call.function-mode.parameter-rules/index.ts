import { applyIdentifierRule } from './identifier'
import { applyLambdaRule } from './lambda'
import { applyLiteralRule } from './literal'
import { applyMemberExpressionRule } from './member-expression'
import { applyNestedExpressionRule } from './nested-expression'
import type { FunctionModeParameterRuleContext, FunctionModeParameterRuleHandler } from './types'

const FUNCTION_MODE_PARAMETER_RULES: FunctionModeParameterRuleHandler[] = [
  applyLiteralRule,
  applyIdentifierRule,
  applyMemberExpressionRule,
  applyLambdaRule,
  applyNestedExpressionRule,
]

export function applyFunctionModeParameterRules(context: FunctionModeParameterRuleContext): void {
  for (const rule of FUNCTION_MODE_PARAMETER_RULES) {
    if (rule(context)) {
      return
    }
  }
}

export type { FunctionModeParameterRuleContext, FunctionModeParameterRuleHandler, ParameterLike } from './types'
