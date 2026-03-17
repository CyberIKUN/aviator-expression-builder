<template>
  <a-button
    v-if="node.type === 'group'"
    type="text"
    size="mini"
    class="expand-button"
    @click="emit('toggle-expanded')"
  >
    <icon-down v-if="node.expanded" />
    <icon-right v-else />
  </a-button>

  <div v-if="!hideActions" class="drag-handle">
    <icon-drag-arrow />
  </div>

  <div class="node-indicator">
    <icon-filter v-if="node.type === 'condition' && !node.functionName" />
    <icon-thunderbolt v-else-if="node.type === 'condition' && node.functionName" />
    <icon-folder v-else-if="node.type === 'group'" />
  </div>
</template>

<script setup lang="ts">
import type { TreeNode } from '../../../../infrastructure/engine/types'

defineProps<{
  node: TreeNode
  hideActions?: boolean
}>()

const emit = defineEmits<{
  (e: 'toggle-expanded'): void
}>()
</script>

<style scoped lang="scss">
.expand-button {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  padding: 0;
}

.drag-handle {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  color: var(--color-text-3);
  cursor: grab;
  padding: 2px;
  border-radius: 2px;
  transition: all 0.2s;

  &:hover {
    color: rgb(var(--primary-6));
    background: rgba(var(--primary-6), 0.1);
  }

  &:active {
    cursor: grabbing;
  }
}

.node-indicator {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--color-fill-3);
  color: var(--color-text-2);
}
</style>
