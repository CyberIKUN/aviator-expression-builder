<template>
  <a-select
    :model-value="modelValue"
    :placeholder="placeholder"
    allow-search
    allow-create
    style="flex: 1; min-width: 100px; max-width: 240px"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <a-option
      v-for="field in availableFields"
      :key="field.value"
      :value="field.value"
      :label="field.label"
    >
      <a-tooltip :content="resolveFieldTooltip(field)" position="left">
        <div class="field-option">
          <icon-link />
          <span>{{ field.label }}</span>
          <span v-if="showArrayHint && field.type === 'array'" class="array-hint">[i]</span>
          <a-tag v-if="field.type" size="mini" :color="resolveTypeColor(field.type)">
            {{ field.type }}
          </a-tag>
        </div>
      </a-tooltip>
    </a-option>
  </a-select>
</template>

<script setup lang="ts">
import type { FieldOption } from '../../../../../infrastructure/engine/types'

withDefaults(defineProps<{
  modelValue?: string
  availableFields: FieldOption[]
  placeholder?: string
  showArrayHint?: boolean
  resolveFieldTooltip: (field: FieldOption) => string
  resolveTypeColor: (type: string) => string
}>(), {
  modelValue: '',
  placeholder: '选择字段',
  showArrayHint: true,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<style scoped lang="scss">
.field-option {
  display: flex;
  align-items: center;
  gap: 8px;
}

.array-hint {
  color: rgb(var(--orange-6));
  font-size: 11px;
  font-weight: 600;
  margin-left: 4px;
  background: rgba(var(--orange-6), 0.1);
  padding: 1px 4px;
  border-radius: 2px;
  border: 1px solid rgba(var(--orange-6), 0.3);
}
</style>
