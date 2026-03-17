<template>
  <a-select
    :model-value="modelValue"
    placeholder="选择时区"
    allow-search
    style="flex: 1; min-width: 150px"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <a-option value="Asia/Shanghai" label="Asia/Shanghai">
      <div class="timezone-option">
        <span>Asia/Shanghai</span>
        <span class="desc">(中国标准时间)</span>
      </div>
    </a-option>
    <a-option value="UTC" label="UTC">
      <div class="timezone-option">
        <span>UTC</span>
        <span class="desc">(协调世界时)</span>
      </div>
    </a-option>
    <a-option value="America/New_York" label="America/New_York">
      <div class="timezone-option">
        <span>America/New_York</span>
        <span class="desc">(美国东部时间)</span>
      </div>
    </a-option>
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
.timezone-option {
  display: flex;
  flex-direction: column;
}

.desc {
  font-size: 12px;
  color: #86909c;
  margin-top: 2px;
}
</style>
