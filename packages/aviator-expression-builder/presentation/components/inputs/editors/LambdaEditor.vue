<template>
  <div class="lambda-editor">
    <div class="lambda-hint">
      <icon-info-circle style="color: #722ed1; margin-right: 4px;" />
      <span style="font-size: 12px; color: #4e5969;">
        {{ hintText }}
      </span>
    </div>

    <a-textarea
      :model-value="value"
      :placeholder="placeholder"
      :auto-size="{ minRows: 1, maxRows: 4 }"
      style="width: 100%"
      @update:model-value="emit('update:value', $event)"
    />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  value: string
  placeholder?: string
  hintText?: string
}>(), {
  placeholder: '例：lambda(x) -> x.local_port == 22 end',
  hintText: '匿名函数（Lambda表达式），格式：lambda(参数) -> 表达式 end',
})

const emit = defineEmits<{
  (e: 'update:value', value: string): void
}>()
</script>

<style scoped lang="scss">
.lambda-editor {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;

  .lambda-hint {
    display: flex;
    align-items: center;
  }
}
</style>
