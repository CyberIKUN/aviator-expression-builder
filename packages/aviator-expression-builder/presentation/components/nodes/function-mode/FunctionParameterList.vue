<template>
  <div
    v-if="selectedFunction && selectedFunction.parameters.length > 0"
    class="inline-function-params"
  >
    <FunctionParameterItem
      v-for="paramDef in selectedFunction.parameters"
      :key="`${node.id}-${paramDef.name}`"
      :param-name="paramDef.name"
      :parameter="getParameterWithValue(paramDef)"
      :value="getParameterActualValue(paramDef.name)"
      :available-fields="availableFields"
      :function-name="node.functionName"
      :current-data-type="getCurrentDataType(paramDef.name)"
      :get-parameter-data-type="getParameterDataType"
      v-on="parameterItemListeners"
    />
  </div>
</template>

<script setup lang="ts">
import type { FieldOption } from '../../../../infrastructure/engine/types'
import FunctionParameterItem from './parameter-list/FunctionParameterItem.vue'
import {
  useFunctionParameterListBindings,
  type FunctionParameterListEmits,
  type FunctionParameterListProps,
} from './useFunctionParameterListBindings'

type FunctionParameterListViewProps = FunctionParameterListProps & {
  availableFields: FieldOption[]
}

const props = defineProps<FunctionParameterListViewProps>()

const emit = defineEmits<FunctionParameterListEmits>()

const {
  getCurrentDataType,
  parameterItemListeners,
} = useFunctionParameterListBindings({
  props,
  emit,
})
</script>

<style scoped lang="scss">
.inline-function-params {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 6px 8px;
  background: #fafbfc;
  border-radius: 4px;
  border: 1px dashed #d9d9d9;
  flex-shrink: 0;
  align-self: flex-start;
  min-width: 200px;
}
</style>
