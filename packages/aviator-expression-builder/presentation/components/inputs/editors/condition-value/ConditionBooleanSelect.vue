<template>
  <a-select
    :model-value="normalizedModelValue"
    placeholder="选择布尔值"
    :style="selectStyle"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <a-option value="true" label="真 (true)">
      <div class="bool-option">
        <icon-check-circle style="color: #00b42a" />
        <span>真 (true)</span>
      </div>
    </a-option>
    <a-option value="false" label="假 (false)">
      <div class="bool-option">
        <icon-close-circle style="color: #f53f3f" />
        <span>假 (false)</span>
      </div>
    </a-option>
  </a-select>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import type { NodeValue } from '../../../../../infrastructure/engine/types'

const props = withDefaults(defineProps<{
  modelValue: NodeValue
  compact?: boolean
}>(), {
  compact: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: NodeValue): void
}>()

const isValidBooleanValue = (value: NodeValue): boolean =>
  value === true || value === false || value === 'true' || value === 'false'

const normalizedModelValue = computed<'true' | 'false'>(() => (
  props.modelValue === false || props.modelValue === 'false' ? 'false' : 'true'
))

watch(
  () => props.modelValue,
  (value) => {
    if (!isValidBooleanValue(value)) {
      emit('update:modelValue', normalizedModelValue.value)
    }
  },
  { immediate: true },
)

const selectStyle = computed(() => {
  if (props.compact) {
    return {
      flex: 1,
      minWidth: '80px',
      maxWidth: '150px',
    }
  }

  return {
    flex: 1,
    minWidth: '120px',
    maxWidth: '150px',
  }
})
</script>

<style scoped lang="scss">
.bool-option {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
