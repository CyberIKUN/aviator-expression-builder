<template>
  <div class="value-input">
    <CompoundOperatorInfo
      v-if="isCompoundOperator()"
      :comparison="props.comparison"
    />

    <ValueInputSwitchPanel
      v-else
      v-bind="switchPanelProps"
      v-on="switchPanelListeners"
    />
  </div>
</template>

<script setup lang="ts">
import type { FieldOption, NodeValue } from '../../../infrastructure/engine/types'
import ValueInputSwitchPanel from './ValueInputSwitchPanel.vue'
import CompoundOperatorInfo from './value-input/CompoundOperatorInfo.vue'
import { useValueInputViewBindings } from './useValueInputViewBindings'

const props = defineProps<{
  value: NodeValue
  fieldType?: string
  fieldName?: string
  comparison?: string
  availableFields?: FieldOption[]
  currentDataType?: string
  valueIsLiteral?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:value', value: NodeValue): void
  (e: 'update:type', type: string): void
  (e: 'update:value-data-type', fieldName: string, dataType: string): void
}>()

const {
  isCompoundOperator,
  switchPanelProps,
  switchPanelListeners,
} = useValueInputViewBindings({
  props,
  emitUpdateValue: (value) => emit('update:value', value),
  emitUpdateType: (type) => emit('update:type', type),
  emitUpdateValueDataType: (fieldName, dataType) => emit('update:value-data-type', fieldName, dataType),
})
</script>

<style scoped lang="scss">
.value-input {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex: 1;
  gap: 8px;
  flex-wrap: nowrap;
}
</style>
