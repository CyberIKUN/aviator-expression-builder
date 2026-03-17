import { computed } from 'vue'
import { AVIATOR_FUNCTIONS } from '../../infrastructure/engine/constants'
import type { TreeNode } from '../../infrastructure/engine/types'
import { resolveConditionValueDataType } from '../logic/treeExpressionBuilderLogic'
import type { UseTreeNodeControllerOptions } from './useTreeNodeController.types'
import { useTreeNodeFieldMutation } from './useTreeNodeFieldMutation'
import { useTreeNodeParameterMutation } from './useTreeNodeParameterMutation'

type UseTreeNodeMutationOptions = Pick<
  UseTreeNodeControllerOptions,
  | 'props'
  | 'emitUpdateNode'
  | 'emitCopyNode'
  | 'emitUpdateParameterType'
  | 'emitUpdateParameterValueDataType'
>

export function useTreeNodeMutation(options: UseTreeNodeMutationOptions) {
  const {
    props,
    emitUpdateNode,
    emitCopyNode,
    emitUpdateParameterType,
    emitUpdateParameterValueDataType,
  } = options

  const fieldMutation = useTreeNodeFieldMutation({
    props,
    emitUpdateNode,
    emitUpdateParameterValueDataType,
  })

  const parameterMutation = useTreeNodeParameterMutation({
    props,
    emitUpdateNode,
    emitUpdateParameterType,
    emitUpdateParameterValueDataType,
  })

  const hasError = computed(() => {
    if (!props.validationErrors?.length) return false
    return props.validationErrors.some((error) => error.nodeId === props.node.id)
  })

  const indentSize = computed(() => {
    const level = props.level
    if (level === 0) return 0
    if (level === 1) return 20
    if (level === 2) return 36
    if (level === 3) return 48
    return Math.min(48 + (level - 3) * 8, 80)
  })

  const toggleExpanded = () => {
    emitUpdateNode(props.node.id, { expanded: !props.node.expanded })
  }

  const switchConditionMode = (mode: 'condition' | 'function') => {
    if (mode === 'condition') {
      const defaultField = props.node.field || (props.availableFields.length > 0 ? props.availableFields[0].value : '')
      const fieldType = fieldMutation.getFieldType(defaultField)

      emitUpdateNode(props.node.id, {
        functionName: undefined,
        functionCategory: undefined,
        parameters: undefined,
        field: defaultField,
        comparison: props.node.comparison || '==',
      })

      emitUpdateParameterValueDataType(
        props.node.id,
        'condition_value',
        resolveConditionValueDataType(fieldType),
      )
      return
    }

    const defaultFunc = AVIATOR_FUNCTIONS[0]
    const parameters = defaultFunc.parameters.map((param) => ({
      ...param,
      value: undefined,
    }))

    emitUpdateNode(props.node.id, {
      field: undefined,
      comparison: undefined,
      value: undefined,
      valueDataType: undefined,
      functionName: defaultFunc.name,
      functionCategory: defaultFunc.category,
      parameters,
    })
  }

  const updateComparison = (value: string) => {
    const needsValue = !['== nil', '!= nil', "== ''", "!= ''"].includes(value)

    if (!needsValue) {
      emitUpdateNode(props.node.id, { comparison: value, value: undefined })
      return
    }

    const updates: Partial<TreeNode> = { comparison: value }
    if (value === 'match' && !props.node.extraComparison) {
      updates.extraComparison = '== nil'
    } else if (value !== 'match' && props.node.extraComparison) {
      updates.extraComparison = undefined
    }
    emitUpdateNode(props.node.id, updates)
  }

  const updateValue = (value: any) => {
    emitUpdateNode(props.node.id, { value })
  }

  const updateExtraComparison = (value: string | undefined) => {
    emitUpdateNode(props.node.id, { extraComparison: value })
  }

  const updateOperator = (value: 'AND' | 'OR') => {
    emitUpdateNode(props.node.id, { operator: value })
  }

  const updateFunction = (functionName: string) => {
    const func = AVIATOR_FUNCTIONS.find((item) => item.name === functionName)
    if (!func) return

    const parameters = func.parameters.map((param) => ({
      ...param,
      value: undefined,
    }))

    emitUpdateNode(props.node.id, {
      functionName,
      functionCategory: func.category,
      parameters,
      comparison: func.returnType === 'boolean' ? undefined : '==',
      value: func.returnType === 'boolean' ? undefined : '',
      isNegated: false,
    })
  }

  const updateConditionNegation = (isNegated: boolean) => {
    emitUpdateNode(props.node.id, { isNegated })
  }

  const updateGroupNegation = (isNegated: boolean) => {
    emitUpdateNode(props.node.id, { isNegated })
  }

  const copyNode = () => {
    emitCopyNode(props.node.id)
  }

  return {
    hasError,
    indentSize,
    toggleExpanded,
    updateBaseField: fieldMutation.updateBaseField,
    updateArrayIndex: fieldMutation.updateArrayIndex,
    switchConditionMode,
    updateComparison,
    updateValue,
    updateExtraComparison,
    updateOperator,
    updateFunction,
    updateConditionNegation,
    updateGroupNegation,
    updateParameter: parameterMutation.updateParameter,
    updateParameterType: parameterMutation.updateParameterType,
    updateParameterValueDataType: parameterMutation.updateParameterValueDataType,
    updateConditionValueDataType: parameterMutation.updateConditionValueDataType,
    updateFunctionValueDataType: parameterMutation.updateFunctionValueDataType,
    getAvailableOperators: fieldMutation.getAvailableOperators,
    copyNode,
  }
}
