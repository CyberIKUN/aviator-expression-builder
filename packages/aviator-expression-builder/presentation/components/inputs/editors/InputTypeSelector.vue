<template>
  <a-select
    :model-value="modelValue"
    :placeholder="placeholder"
    size="small"
    style="width: 80px; flex-shrink: 0;"
    @update:model-value="emit('update:model-value', $event)"
  >
    <a-option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      :label="option.label"
    >
      <div class="type-option">
        <span>{{ option.label }}</span>
      </div>
    </a-option>
  </a-select>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  modelValue: string
  options: Array<{ value: string, label: string }>
  placeholder?: string
}>(), {
  placeholder: '选择类型',
})

const emit = defineEmits<{
  (e: 'update:model-value', value: string): void
}>()
</script>

<style scoped lang="scss">
.type-option {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
}
</style>
