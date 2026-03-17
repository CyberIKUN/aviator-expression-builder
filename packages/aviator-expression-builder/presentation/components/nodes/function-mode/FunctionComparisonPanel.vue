<template>
  <div class="function-comparison-area">
    <FunctionComparisonOperatorSelect
      :comparison="node.comparison"
      :return-type-operators="returnTypeOperators"
      v-on="comparisonOperatorListeners"
    />

    <FunctionComparisonValueInput
      :node="node"
      :selected-function="selectedFunction"
      :available-fields="availableFields"
      :current-data-type="currentDataType"
      v-on="comparisonValueInputListeners"
    />
  </div>
</template>

<script setup lang="ts">
import FunctionComparisonOperatorSelect from './comparison/FunctionComparisonOperatorSelect.vue'
import FunctionComparisonValueInput from './comparison/FunctionComparisonValueInput.vue'
import {
  useFunctionComparisonPanelBindings,
  type FunctionComparisonPanelEmits,
  type FunctionComparisonPanelProps,
} from './useFunctionComparisonPanelBindings'

const props = defineProps<FunctionComparisonPanelProps>()

const emit = defineEmits<FunctionComparisonPanelEmits>()

const {
  currentDataType,
  comparisonOperatorListeners,
  comparisonValueInputListeners,
} = useFunctionComparisonPanelBindings({
  props,
  emit,
})
</script>

<style scoped lang="scss">
.function-comparison-area {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: nowrap;
  flex-shrink: 0;
  align-self: flex-start;
}
</style>
