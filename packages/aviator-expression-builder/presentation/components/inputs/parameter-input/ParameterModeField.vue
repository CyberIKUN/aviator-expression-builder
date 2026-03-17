<template>
  <div class="field-parameter">
    <FieldRefEditor
      :value="typeof displayValue === 'string' ? displayValue : ''"
      :available-fields="availableFields"
      placeholder="选择字段 (数组可输入索引，如: field[0])"
      :show-array-index="false"
      :show-array-hint="true"
      :get-field-tooltip="getFieldTooltipText"
      :get-type-color="getTypeColor"
      @update:field="emit('update:value', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import type { FieldOption, NodeValue } from '../../../../infrastructure/engine/types'
import FieldRefEditor from '../editors/FieldRefEditor.vue'

defineProps<{
  displayValue: NodeValue
  availableFields: FieldOption[]
  getFieldTooltipText: (field: FieldOption) => string
  getTypeColor: (type: string) => string
}>()

const emit = defineEmits<{
  (e: 'update:value', value: string): void
}>()
</script>

<style scoped lang="scss">
.field-parameter {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #52c41a;
  border-radius: 6px;
  padding: 8px 12px;
  background: #f6ffed;
  flex-wrap: wrap;
}
</style>
