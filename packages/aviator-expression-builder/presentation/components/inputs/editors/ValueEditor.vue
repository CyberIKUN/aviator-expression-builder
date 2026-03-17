<template>
  <ConditionValueEditor
    v-if="mode === 'condition'"
    :value="value"
    :field-type="fieldType"
    :comparison="comparison"
    :value-data-type="valueDataType"
    :placeholder="placeholder"
    :multi-values="multiValues"
    :date-value="dateValue"
    :url-error="urlError"
    :show-data-type-switch="showDataTypeSwitch"
    @update:value="onUpdateValue"
    @update:multi-values="onUpdateMultiValues"
    @update:date-value="onUpdateDateValue"
    @blur:url="onBlurUrl"
    @update:value-data-type="onUpdateValueDataType"
  />

  <ParameterValueEditor
    v-else
    :value="value"
    :display-value="displayValue"
    :value-data-type="valueDataType"
    :multi-values="multiValues"
    :parameter-name="parameterName"
    :parameter-description="parameterDescription"
    :parameter-type="parameterType"
    :show-data-type-switch="showDataTypeSwitch"
    @update:value="onUpdateValue"
    @update:multi-values="onUpdateMultiValues"
    @update:value-data-type="onUpdateValueDataType"
  />
</template>

<script setup lang="ts">
import type { NodeValue } from '../../../../infrastructure/engine/types'
import ConditionValueEditor from './ConditionValueEditor.vue'
import ParameterValueEditor from './ParameterValueEditor.vue'
import {
  useValueEditorBindings,
  type ValueEditorEmits,
} from './useValueEditorBindings'

withDefaults(defineProps<{
  mode?: 'condition' | 'parameter'
  value: NodeValue
  displayValue?: NodeValue
  fieldType?: string
  comparison?: string
  valueDataType: string
  placeholder?: string
  multiValues?: string[]
  dateValue?: Date
  urlError?: string
  parameterName?: string
  parameterDescription?: string
  parameterType?: string
  showDataTypeSwitch?: boolean
}>(), {
  mode: 'condition',
  placeholder: '输入值',
  multiValues: () => [],
  parameterDescription: '参数值',
  showDataTypeSwitch: true,
})

const emit = defineEmits<ValueEditorEmits>()

const {
  onUpdateValue,
  onUpdateMultiValues,
  onUpdateDateValue,
  onBlurUrl,
  onUpdateValueDataType,
} = useValueEditorBindings(emit)
</script>
