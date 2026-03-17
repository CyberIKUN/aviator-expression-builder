<template>
  <div class="function-preview">
    <span class="preview-label">表达式预览：</span>
    <code class="preview-code">{{ expression }}</code>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  expression: string
}>()
</script>

<style scoped lang="scss">
.function-preview {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background: var(--color-fill-2);
  border: 1px solid var(--color-border-2);
  border-radius: 4px;
}

.preview-label {
  font-size: 12px;
  color: var(--color-text-2);
  font-weight: 500;
}

.preview-code {
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 13px;
  color: var(--color-text-1);
  background: transparent;
  border: none;
  padding: 0;
}
</style>
