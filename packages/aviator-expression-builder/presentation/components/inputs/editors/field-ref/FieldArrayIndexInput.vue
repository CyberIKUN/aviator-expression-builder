<template>
  <a-input-number
    :model-value="modelValue"
    placeholder="索引"
    :min="0"
    :precision="0"
    class="array-index-input"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <template #prefix>
      <span style="color: #86909c">[</span>
    </template>
    <template #suffix>
      <span style="color: #86909c">]</span>
    </template>
  </a-input-number>
</template>

<script setup lang="ts">
defineProps<{
  modelValue?: number
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number | undefined): void
}>()
</script>

<style scoped lang="scss">
.array-index-input {
  width: 80px !important;
  flex-shrink: 0;
}
</style>
