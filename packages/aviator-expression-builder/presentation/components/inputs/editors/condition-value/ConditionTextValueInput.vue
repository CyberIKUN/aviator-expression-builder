<template>
  <a-textarea
    :model-value="String(modelValue ?? '')"
    :placeholder="placeholder"
    :auto-size="{ minRows: 1, maxRows: 4 }"
    :style="textareaStyle"
    @update:model-value="emit('update:modelValue', $event)"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { NodeValue } from '../../../../../infrastructure/engine/types'

const props = withDefaults(defineProps<{
  modelValue: NodeValue
  placeholder?: string
  compact?: boolean
}>(), {
  placeholder: '输入值',
  compact: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: NodeValue): void
}>()

const textareaStyle = computed(() => {
  if (props.compact) {
    return {
      flex: 1,
      minWidth: '80px',
      maxWidth: '180px',
    }
  }

  return {
    flex: 1,
    minWidth: '100px',
    maxWidth: '200px',
  }
})
</script>
