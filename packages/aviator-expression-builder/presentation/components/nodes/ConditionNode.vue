<template>
  <div class="condition-node-editor">
    <ConditionModeSwitch
      :is-negated="node.isNegated || false"
      :mode="conditionNodeMode"
      v-on="modeSwitchListeners"
    />

    <FieldModeEditor
      v-if="conditionNodeMode === 'condition'"
      :node="node"
      :available-fields="availableFields"
      :available-operators="availableOperators"
      :get-parameter-data-type="getParameterDataType"
      v-on="fieldModeListeners"
    />

    <FunctionModeEditor
      v-if="conditionNodeMode === 'function'"
      :node="node"
      :available-fields="availableFields"
      :expected-return-type="props.expectedReturnType"
      :get-parameter-data-type="getParameterDataType"
      v-on="functionModeListeners"
    />
  </div>
</template>

<script setup lang="ts">
import FieldModeEditor from './FieldModeEditor.vue'
import FunctionModeEditor from './FunctionModeEditor.vue'
import ConditionModeSwitch from './condition/ConditionModeSwitch.vue'
import {
  type ConditionNodeViewEmits,
  type ConditionNodeViewProps,
  useConditionNodeViewBindings,
} from './condition/useConditionNodeViewBindings'

const props = defineProps<ConditionNodeViewProps>()
const emit = defineEmits<ConditionNodeViewEmits>()

const {
  conditionNodeMode,
  modeSwitchListeners,
  fieldModeListeners,
  functionModeListeners,
} = useConditionNodeViewBindings({
  props,
  emit,
})
</script>

<style scoped lang="scss">
.condition-node-editor {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex-wrap: nowrap;
  flex-shrink: 0;
  overflow: visible;
}
</style>
