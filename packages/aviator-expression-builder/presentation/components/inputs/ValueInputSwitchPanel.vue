<template>
  <div class="value-input-wrapper">
    <InputTypeSelector
      :model-value="currentInputType"
      :options="valueTypeOptions"
      placeholder="值类型"
      @update:model-value="onUpdateType"
    />

    <ValueInputPanelBody
      :current-input-type="currentInputType"
      :value-type-options="valueTypeOptions"
      :value="value"
      :field-type="fieldType"
      :comparison="comparison"
      :available-fields="availableFields"
      :value-data-type="valueDataType"
      :placeholder="placeholder"
      :multi-values="multiValues"
      :date-value="dateValue"
      :url-error="urlError"
      :selected-function-name="selectedFunctionName"
      :function-categories="functionCategories"
      :selected-function="selectedFunction"
      :function-parameters="functionParameters"
      :function-expression="functionExpression"
      :value-array-index="valueArrayIndex"
      :get-field-type-color="getFieldTypeColor"
      :get-field-tooltip="getFieldTooltip"
      @update:value="onUpdateValue"
      @update:multi-values="onUpdateMultiValues"
      @update:date-value="onUpdateDateValue"
      @blur:url="onBlurUrl"
      @update:value-data-type="onUpdateValueDataType"
      @update:field="onUpdateField"
      @update:array-index="onUpdateArrayIndex"
      @update:function="onUpdateFunction"
      @update:parameter="onUpdateParameter"
    />
  </div>
</template>

<script setup lang="ts">
import InputTypeSelector from './editors/InputTypeSelector.vue'
import ValueInputPanelBody from './switch-panel/ValueInputPanelBody.vue'
import type {
  ValueInputSwitchPanelEmits,
  ValueInputSwitchPanelProps,
} from './switch-panel/types'
import { useValueInputSwitchPanelBindings } from './useValueInputSwitchPanelBindings'

defineProps<ValueInputSwitchPanelProps>()
const emit = defineEmits<ValueInputSwitchPanelEmits>()

const {
  onUpdateType,
  onUpdateValue,
  onUpdateMultiValues,
  onUpdateDateValue,
  onBlurUrl,
  onUpdateValueDataType,
  onUpdateField,
  onUpdateArrayIndex,
  onUpdateFunction,
  onUpdateParameter,
} = useValueInputSwitchPanelBindings(emit)
</script>

<style scoped lang="scss">
.value-input-wrapper {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 8px;
  border: 1px solid var(--color-border-2);
  border-radius: 6px;
  background-color: var(--color-bg-2);
  flex: 1;
  min-width: 0;
  max-width: 100%;

  &:hover {
    border-color: var(--color-border-3);
  }

  &:focus-within {
    border-color: rgb(var(--primary-6));
    box-shadow: 0 0 0 2px rgba(var(--primary-6), 0.1);
  }
}
</style>
