<template>
  <a-textarea
    :model-value="modelValue"
    :auto-size="{ minRows: 1, maxRows: 4 }"
    style="flex: 1; min-width: 200px"
    @update:model-value="emit('update:modelValue', $event)"
  />
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
