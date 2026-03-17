<template>
  <div class="function-mode-editor">
    <FunctionSelectPanel
      :model-value="node.functionName"
      :function-categories="functionCategories"
      :selected-function="selectedFunction"
      :filter-function-option="filterFunctionOption"
      v-on="functionSelectListeners"
    />

    <FunctionParameterList
      :node="node"
      :selected-function="selectedFunction"
      :available-fields="availableFields"
      :get-parameter-data-type="props.getParameterDataType"
      :get-parameter-actual-value="getParameterActualValue"
      :get-parameter-with-value="getParameterWithValue"
      v-on="parameterListListeners"
    />

    <FunctionComparisonPanel
      v-if="shouldRenderComparison"
      :node="node"
      :selected-function="comparisonSelectedFunction"
      :available-fields="availableFields"
      :return-type-operators="returnTypeOperators"
      :get-parameter-data-type="props.getParameterDataType"
      v-on="comparisonPanelListeners"
    />
  </div>
</template>

<script setup lang="ts">
import FunctionParameterList from './function-mode/FunctionParameterList.vue'
import FunctionComparisonPanel from './function-mode/FunctionComparisonPanel.vue'
import FunctionSelectPanel from './function-mode/FunctionSelectPanel.vue'
import type { FunctionModeEditorProps } from '../../composables/useFunctionModeEditorController.types'
import {
  useFunctionModeEditorBindings,
  type FunctionModeEditorEmits,
} from './useFunctionModeEditorBindings'

const props = defineProps<FunctionModeEditorProps>()

const emit = defineEmits<FunctionModeEditorEmits>()

const {
  selectedFunction,
  comparisonSelectedFunction,
  functionCategories,
  filterFunctionOption,
  returnTypeOperators,
  getParameterActualValue,
  getParameterWithValue,
  shouldRenderComparison,
  functionSelectListeners,
  parameterListListeners,
  comparisonPanelListeners,
} = useFunctionModeEditorBindings({
  props,
  emit,
})
</script>

<style scoped lang="scss">
.function-mode-editor {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex-wrap: nowrap;
  flex-shrink: 0;
  overflow: visible;
}
</style>
