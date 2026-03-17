<template>
  <a-select
    :model-value="modelValue || 'nil'"
    style="width: 120px"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <a-option value="nil" label="null">
      <div class="null-option">
        <icon-minus-circle style="color: #86909c" />
        <span>null</span>
      </div>
    </a-option>
  </a-select>
</template>

<script setup lang="ts">
import type { NodeValue } from '../../../../../infrastructure/engine/types'

defineProps<{
  modelValue: NodeValue
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: NodeValue): void
}>()
</script>

<style scoped lang="scss">
.null-option {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
