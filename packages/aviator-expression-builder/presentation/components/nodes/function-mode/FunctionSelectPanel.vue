<template>
  <div class="function-select-group">
    <FunctionCatalogSelect
      :model-value="modelValue"
      :function-categories="functionCategories"
      :filter-function-option="filterFunctionOption"
      @update:model-value="onUpdateFunction"
    />

    <FunctionUsageButton
      :visible="Boolean(selectedFunction)"
      @click="onShowUsage"
    />
  </div>
</template>

<script setup lang="ts">
import FunctionCatalogSelect from './components/FunctionCatalogSelect.vue'
import FunctionUsageButton from './components/FunctionUsageButton.vue'
import {
  useFunctionSelectPanelBindings,
  type FunctionSelectPanelEmits,
  type FunctionSelectPanelProps,
} from './useFunctionSelectPanelBindings'

withDefaults(defineProps<FunctionSelectPanelProps>(), {
  modelValue: '',
  selectedFunction: null,
})

const emit = defineEmits<FunctionSelectPanelEmits>()

const {
  onUpdateFunction,
  onShowUsage,
} = useFunctionSelectPanelBindings({
  emit,
})
</script>

<style scoped lang="scss">
.function-select-group {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  align-self: flex-start;
}
</style>
