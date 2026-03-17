<template>
  <a-input-tag
    :model-value="modelValue"
    :placeholder="placeholder"
    allow-clear
    style="flex: 1; min-width: 200px"
    @update:model-value="emit('update:modelValue', $event)"
  />
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  modelValue?: string[]
  placeholder?: string
}>(), {
  modelValue: () => [],
  placeholder: '输入参数值，回车分隔',
})

const emit = defineEmits<{
  (e: 'update:modelValue', values: string[]): void
}>()
</script>
