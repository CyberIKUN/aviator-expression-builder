<template>
  <div class="multi-value-input">
    <a-input-tag
      :model-value="modelValue"
      :placeholder="placeholder"
      allow-clear
      style="width: 250px"
      @update:model-value="emit('update:modelValue', $event)"
    />
    <a-tooltip :content="tooltip">
      <icon-info-circle style="color: #86909c; margin-left: 4px" />
    </a-tooltip>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  modelValue?: string[]
  placeholder?: string
  tooltip?: string
}>(), {
  modelValue: () => [],
  placeholder: '输入多个值，回车分隔',
  tooltip: '多个值用回车分隔',
})

const emit = defineEmits<{
  (e: 'update:modelValue', values: string[]): void
}>()
</script>

<style scoped lang="scss">
.multi-value-input {
  display: flex;
  align-items: center;
}
</style>
