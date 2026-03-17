<template>
  <a-select
    :model-value="modelValue"
    placeholder="选择函数"
    allow-search
    style="flex: 1; min-width: 100px; max-width: 220px"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <a-optgroup
      v-for="category in categories"
      :key="category.name"
      :label="category.label"
    >
      <a-option
        v-for="func in category.functions"
        :key="func.name"
        :value="func.name"
        :label="func.displayName"
      >
        <div class="function-option">
          <div class="function-name">{{ func.displayName }}</div>
          <div class="function-desc">{{ func.description }}</div>
        </div>
      </a-option>
    </a-optgroup>
  </a-select>
</template>

<script setup lang="ts">
import type { FunctionCategory } from './types'

withDefaults(defineProps<{
  modelValue?: string
  categories: FunctionCategory[]
}>(), {
  modelValue: '',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<style scoped lang="scss">
.function-option {
  .function-name {
    font-weight: 500;
    margin-bottom: 2px;
  }

  .function-desc {
    font-size: 12px;
    color: var(--color-text-3);
  }
}
</style>
