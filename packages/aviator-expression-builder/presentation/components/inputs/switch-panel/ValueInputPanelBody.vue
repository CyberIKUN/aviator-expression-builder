<template>
  <ValueEditor
    v-if="props.currentInputType === 'value'"
    mode="condition"
    :value="props.value"
    :field-type="props.fieldType"
    :comparison="props.comparison"
    :value-data-type="props.valueDataType"
    :placeholder="props.placeholder"
    :multi-values="props.multiValues"
    :date-value="props.dateValue"
    :url-error="props.urlError"
    :show-data-type-switch="true"
    @update:value="onUpdateValue"
    @update:multi-values="onUpdateMultiValues"
    @update:date-value="onUpdateDateValue"
    @blur:url="onBlurUrl"
    @update:value-data-type="onUpdateValueDataType"
  />

  <FieldRefEditor
    v-if="props.currentInputType === 'field'"
    :value="String(props.value || '')"
    :available-fields="props.availableFields || []"
    :show-array-index="true"
    :array-index="props.valueArrayIndex"
    :show-array-hint="true"
    :get-field-tooltip="props.getFieldTooltip"
    :get-type-color="props.getFieldTypeColor"
    @update:field="onUpdateField"
    @update:array-index="onUpdateArrayIndex"
  />

  <FunctionRefEditor
    v-if="props.currentInputType === 'function'"
    :selected-function-name="props.selectedFunctionName"
    :function-categories="props.functionCategories"
    :selected-function="props.selectedFunction"
    :function-parameters="props.functionParameters"
    :available-fields="props.availableFields || []"
    :function-expression="props.functionExpression"
    @update:function="onUpdateFunction"
    @update:parameter="onUpdateParameter"
  />
</template>

<script setup lang="ts">
import FieldRefEditor from '../editors/FieldRefEditor.vue'
import FunctionRefEditor from '../editors/FunctionRefEditor.vue'
import ValueEditor from '../editors/ValueEditor.vue'
import type {
  ValueInputSwitchPanelEmits,
  ValueInputSwitchPanelProps,
} from './types'
import { useValueInputPanelBodyBindings } from './useValueInputPanelBodyBindings'

const props = defineProps<ValueInputSwitchPanelProps>()
const emit = defineEmits<ValueInputSwitchPanelEmits>()

const {
  onUpdateValue,
  onUpdateMultiValues,
  onUpdateDateValue,
  onBlurUrl,
  onUpdateValueDataType,
  onUpdateField,
  onUpdateArrayIndex,
  onUpdateFunction,
  onUpdateParameter,
} = useValueInputPanelBodyBindings(emit)
</script>
