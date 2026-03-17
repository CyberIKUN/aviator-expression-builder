<template>
  <LambdaEditor
    :value="typeof value === 'string' ? value : ''"
    @update:value="emit('update:value', $event)"
  />
</template>

<script setup lang="ts">
import type { NodeValue } from '../../../../infrastructure/engine/types'
import LambdaEditor from '../editors/LambdaEditor.vue'

defineProps<{
  value: NodeValue
}>()

const emit = defineEmits<{
  (e: 'update:value', value: string): void
}>()
</script>
