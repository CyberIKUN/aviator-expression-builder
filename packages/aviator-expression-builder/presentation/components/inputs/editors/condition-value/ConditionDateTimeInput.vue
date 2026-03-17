<template>
  <a-date-picker
    :model-value="modelValue"
    show-time
    format="YYYY-MM-DD HH:mm:ss"
    placeholder="选择日期时间"
    style="width: 200px"
    @update:model-value="emit('update:modelValue', $event)"
  />
</template>

<script setup lang="ts">
defineProps<{
  modelValue?: Date
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', date: Date | undefined): void
}>()
</script>
