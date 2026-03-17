import { resolveConditionValueDataType } from '../logic/treeExpressionBuilderLogic'
import type { useFieldModeEditorControllerState } from './useFieldModeEditorController.state'
import type { UseFieldModeEditorControllerOptions } from './useFieldModeEditorController.types'

type FieldModeEditorControllerState = ReturnType<typeof useFieldModeEditorControllerState>

type UseFieldModeEditorControllerActionsOptions = Pick<
  UseFieldModeEditorControllerOptions,
  'props' | 'emitUpdateField' | 'emitUpdateValueDataType'
>

export function useFieldModeEditorControllerActions(
  _state: FieldModeEditorControllerState,
  options: UseFieldModeEditorControllerActionsOptions,
) {
  const { props, emitUpdateField, emitUpdateValueDataType } = options

  const handleFieldChange = (value: string) => {
    const field = props.availableFields.find((item) => item.value === value)
    const detectedType = field?.type || 'string'

    emitUpdateField(value)
    emitUpdateValueDataType({
      fieldName: 'condition_value',
      dataType: resolveConditionValueDataType(detectedType),
    })
  }

  return {
    handleFieldChange,
  }
}
