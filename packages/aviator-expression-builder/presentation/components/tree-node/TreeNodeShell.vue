<template>
  <div
    class="tree-node"
    :class="nodeClasses"
    :style="{ paddingLeft: `${indentSize}px` }"
    @dragover="emit('node-dragover', $event)"
    @dragleave="emit('node-dragleave', $event)"
    @drop="emit('node-drop', $event)"
  >
    <slot />
    <div v-if="level > 0" class="connection-line"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  nodeClasses: Record<string, boolean>
  indentSize: number
  level: number
}>()

const emit = defineEmits<{
  (e: 'node-dragover', event: DragEvent): void
  (e: 'node-dragleave', event: DragEvent): void
  (e: 'node-drop', event: DragEvent): void
}>()
</script>

<style scoped lang="scss">
.tree-node {
  margin-bottom: 8px;
  position: relative;
  max-width: 100%;
  box-sizing: border-box;

  &.drag-over:not(.drag-before):not(.drag-after):not(.drag-inside) {
    :deep(.node-content) {
      border-color: #165dff;
      box-shadow: 0 0 0 2px rgba(22, 93, 255, 0.2);
      background: rgba(22, 93, 255, 0.05);
    }
  }

  &.node-condition {
    :deep(.node-content) {
      border-left: 4px solid #165dff;
    }
  }

  &.node-function {
    :deep(.node-content) {
      border-left: 4px solid #00b42a;
    }
  }

  &.node-group {
    :deep(.node-content) {
      border-left: 4px solid #ff7d00;
      background: var(--color-fill-2);
    }
  }

  &.has-error {
    :deep(.node-content) {
      border: 2px solid #f53f3f !important;
      box-shadow: 0 0 0 3px rgba(245, 63, 63, 0.15);
      animation: error-pulse 2s ease-in-out infinite;
    }
  }

  &.drag-before.drag-over::before {
    content: '';
    position: absolute;
    top: -2px;
    left: 0;
    right: 0;
    height: 4px;
    background: #165dff;
    border-radius: 2px;
    z-index: 10;
  }

  &.drag-after.drag-over::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 4px;
    background: #165dff;
    border-radius: 2px;
    z-index: 10;
  }

  &.drag-inside.drag-over {
    :deep(.node-content) {
      border: 2px dashed #165dff;
      background: rgba(22, 93, 255, 0.1);
    }

    &::before {
      content: '放置到这里';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #165dff;
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      z-index: 20;
      pointer-events: none;
    }
  }
}

.connection-line {
  position: absolute;
  left: 0;
  top: 50%;
  width: 16px;
  height: 1px;
  background: var(--color-border-2);
  transform: translateY(-50%);
}

@keyframes error-pulse {
  0%, 100% {
    box-shadow: 0 0 0 3px rgba(245, 63, 63, 0.15);
  }
  50% {
    box-shadow: 0 0 0 6px rgba(245, 63, 63, 0.25);
  }
}
</style>
