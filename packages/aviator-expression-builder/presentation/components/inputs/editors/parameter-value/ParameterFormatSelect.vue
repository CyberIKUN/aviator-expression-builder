<template>
  <a-select
    :model-value="modelValue"
    placeholder="选择日期格式"
    allow-create
    style="flex: 1; min-width: 220px"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <a-optgroup label="常用格式">
      <a-option value="yyyy-MM-dd HH:mm:ss" label="年-月-日 时:分:秒">
        <div class="format-option">
          <span>yyyy-MM-dd HH:mm:ss</span>
          <span class="example">2024-01-15 14:30:00</span>
        </div>
      </a-option>
      <a-option value="yyyy-MM-dd'T'HH:mm:ss.SSSX" label="ISO格式">
        <div class="format-option">
          <span>yyyy-MM-dd'T'HH:mm:ss.SSSX</span>
          <span class="example">2024-01-15T14:30:00.000Z</span>
        </div>
      </a-option>
      <a-option value="yyyy-MM-dd'T'HH:mm:ssXXX" label="时区格式">
        <div class="format-option">
          <span>yyyy-MM-dd'T'HH:mm:ssXXX</span>
          <span class="example">2024-01-15T14:30:00+08:00</span>
        </div>
      </a-option>
    </a-optgroup>
  </a-select>
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

<style scoped lang="scss">
.format-option {
  display: flex;
  flex-direction: column;
}

.example {
  font-size: 12px;
  color: #86909c;
  margin-top: 2px;
}
</style>
