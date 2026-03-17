<template>
  <a-radio-group
    :model-value="modelValue"
    size="small"
    type="button"
    class="data-type-radio"
    style="flex-shrink: 0; margin-left: 8px"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <a-radio value="string">STR</a-radio>
    <a-radio value="number">NUM</a-radio>
    <a-radio value="boolean">BOOL</a-radio>
  </a-radio-group>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', dataType: string): void
}>()
</script>
