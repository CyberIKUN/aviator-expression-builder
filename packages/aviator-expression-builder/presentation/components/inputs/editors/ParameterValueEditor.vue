<template>
  <div class="parameter-value-editor">
    <ParameterFormatSelect
      v-if="isFormatParameter"
      :model-value="resolvedDisplayValue"
      @update:model-value="onUpdateValue"
    />

    <ParameterTimezoneSelect
      v-else-if="isTimezoneParameter"
      :model-value="resolvedDisplayValue"
      @update:model-value="onUpdateValue"
    />

    <ParameterMultiValueInput
      v-else-if="isMultiValue"
      :model-value="multiValues"
      :placeholder="multiValuePlaceholder"
      @update:model-value="onUpdateMultiValues"
    />

    <ConditionBooleanSelect
      v-else-if="valueDataType === 'boolean'"
      :model-value="resolvedDisplayValue"
      @update:model-value="onUpdateValue"
    />

    <ParameterTextValueInput
      v-else
      :model-value="resolvedDisplayValue"
      @update:model-value="onUpdateValue"
    />

    <ConditionDataTypeSwitch
      v-if="showValueDataTypeSwitch"
      :model-value="valueDataType"
      @update:model-value="onUpdateValueDataType"
    />
  </div>
</template>

<script setup lang="ts">
import ConditionBooleanSelect from './condition-value/ConditionBooleanSelect.vue'
import ConditionDataTypeSwitch from './condition-value/ConditionDataTypeSwitch.vue'
import ParameterFormatSelect from './parameter-value/ParameterFormatSelect.vue'
import ParameterTimezoneSelect from './parameter-value/ParameterTimezoneSelect.vue'
import ParameterMultiValueInput from './parameter-value/ParameterMultiValueInput.vue'
import ParameterTextValueInput from './parameter-value/ParameterTextValueInput.vue'
import {
  useParameterValueEditorBindings,
  type ParameterValueEditorEmits,
  type ParameterValueEditorProps,
} from './useParameterValueEditorBindings'

const props = withDefaults(defineProps<ParameterValueEditorProps>(), {
  multiValues: () => [],
  parameterDescription: '参数值',
  showDataTypeSwitch: true,
})

const emit = defineEmits<ParameterValueEditorEmits>()

const {
  resolvedDisplayValue,
  isFormatParameter,
  isTimezoneParameter,
  isMultiValue,
  multiValuePlaceholder,
  showValueDataTypeSwitch,
  onUpdateValue,
  onUpdateMultiValues,
  onUpdateValueDataType,
} = useParameterValueEditorBindings(props, emit)
</script>

<style scoped lang="scss">
.parameter-value-editor {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: nowrap;
  min-width: 0;
}
</style>
