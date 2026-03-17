import { computed, markRaw, ref } from 'vue'
import { extractFieldsFromJson } from '../../infrastructure/engine/utils/fieldExtractor'
import type { FieldOption, TreeNode } from '../../infrastructure/engine/types'
import { createAviatorExpressionService } from '../../application/services/createAviatorExpressionService'
import {
  DEFAULT_FIELD_OPTIONS,
  resolveAvailableFields,
  summarizeFieldTypes,
} from '../logic/treeExpressionBuilderLogic'
import type {
  ExpressionValidationResult,
  TreeExpressionBuilderProps,
  UiError,
} from './useTreeExpressionBuilder.types'

export interface UseTreeExpressionBuilderStateOptions {
  props: TreeExpressionBuilderProps
  emitUpdateModelValue: (value: string) => void
}

export function useTreeExpressionBuilderState(options: UseTreeExpressionBuilderStateOptions) {
  const { props, emitUpdateModelValue } = options

  const service = createAviatorExpressionService({ availableFields: [] })
  const parameterDataTypes = service.getParameterDataTypes()

  const rootNodes = ref<TreeNode[]>([])
  const generatedExpression = ref('')
  const validationErrors = ref<UiError[]>([])
  const parseError = ref<string | null>(null)
  const validating = ref(false)
  const validationResult = ref<ExpressionValidationResult | null>(null)

  const defaultFieldOptions = markRaw<FieldOption[]>([...DEFAULT_FIELD_OPTIONS])
  const fieldsCache = ref<{ preview: string, fields: FieldOption[] } | null>(null)

  const extractedFields = computed(() => {
    if (!props.dataPreview) return []

    if (fieldsCache.value?.preview === props.dataPreview) {
      return fieldsCache.value.fields
    }

    try {
      const fields = extractFieldsFromJson(props.dataPreview)
      fieldsCache.value = {
        preview: props.dataPreview,
        fields,
      }
      return fields
    } catch {
      return []
    }
  })

  const availableFields = computed(() => {
    return resolveAvailableFields(extractedFields.value, props.fieldOptions, defaultFieldOptions)
  })

  const dataSourceInfo = computed(() => summarizeFieldTypes(extractedFields.value))

  const allErrors = computed<UiError[]>(() => {
    const errors: UiError[] = []

    if (parseError.value) {
      errors.push({ nodeId: 'root', message: parseError.value })
    }

    errors.push(...validationErrors.value)

    return errors
  })

  const syncServiceFields = () => {
    service.setAvailableFields(availableFields.value)
  }

  const emitExpression = (expression: string) => {
    generatedExpression.value = expression
    emitUpdateModelValue(expression)
  }

  const regenerateExpression = () => {
    syncServiceFields()
    const expression = service.generate(rootNodes.value)
    emitExpression(expression)
  }

  const runValidation = () => {
    validationErrors.value = service.validate(rootNodes.value)
  }

  const loadExpression = (expression: string) => {
    syncServiceFields()
    service.clearParameterDataTypes()

    if (!expression || !expression.trim()) {
      rootNodes.value = []
      generatedExpression.value = ''
      parseError.value = null
      validationErrors.value = []
      validationResult.value = null
      return
    }

    const result = service.parseDetailed(expression)
    generatedExpression.value = expression

    if (result.success) {
      rootNodes.value = result.nodes
      parseError.value = null
      runValidation()
      return
    }

    rootNodes.value = []
    validationErrors.value = []
    parseError.value = result.error || '表达式解析失败'
  }

  return {
    service,
    parameterDataTypes,
    rootNodes,
    generatedExpression,
    validationErrors,
    parseError,
    validating,
    validationResult,
    extractedFields,
    availableFields,
    dataSourceInfo,
    allErrors,
    syncServiceFields,
    emitExpression,
    regenerateExpression,
    runValidation,
    loadExpression,
  }
}
