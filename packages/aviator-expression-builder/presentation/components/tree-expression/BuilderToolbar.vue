<template>
  <div class="toolbar">
    <a-space>
      <a-button type="primary" @click="emit('add-group')">
        <icon-folder-add />添加分组
      </a-button>
      <a-button type="text" @click="emit('expand-all')">
        <icon-expand />全部展开
      </a-button>
      <a-button type="text" @click="emit('collapse-all')">
        <icon-shrink />全部收起
      </a-button>
    </a-space>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'add-group'): void
  (e: 'expand-all'): void
  (e: 'collapse-all'): void
}>()
</script>

<style scoped lang="scss">
.toolbar {
  margin-bottom: 16px;
  padding: 12px;
  background: var(--color-fill-2);
  border-radius: 6px;
}
</style>
