<template>
  <div class="url-input">
    <a-textarea
      :model-value="modelValue"
      placeholder="请输入URL，如：https://example.com"
      :status="error ? 'error' : 'normal'"
      :auto-size="{ minRows: 1, maxRows: 3 }"
      style="width: 220px"
      @update:model-value="emit('update:modelValue', $event)"
      @blur="emit('blur')"
    />

    <div v-if="error" class="error-message">
      <icon-exclamation-circle class="error-icon" />
      <span>{{ error }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NodeValue } from '../../../../../infrastructure/engine/types'

withDefaults(defineProps<{
  modelValue: NodeValue
  error?: string
}>(), {
  error: '',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: NodeValue): void
  (e: 'blur'): void
}>()
</script>

<style scoped lang="scss">
.url-input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.error-message {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
  color: var(--color-danger-6);
  font-size: 12px;
}

.error-icon {
  font-size: 14px;
}
</style>
