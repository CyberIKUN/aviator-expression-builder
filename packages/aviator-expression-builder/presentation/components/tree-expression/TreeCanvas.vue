<template>
  <div class="expression-tree">
    <TreeNodeComponent
      v-for="node in rootNodes"
      :key="node.id"
      :node="node"
      :available-fields="availableFields"
      :level="0"
      :get-parameter-data-type="getParameterDataType"
      :validation-errors="validationErrors"
      v-on="nodeListeners"
    />

    <div v-if="rootNodes.length === 0" class="empty-state">
      <a-empty description="还没有任何节点">
        <a-button type="primary" v-on="emptyStateButtonListeners">添加第一个分组</a-button>
      </a-empty>
    </div>
  </div>
</template>

<script setup lang="ts">
import TreeNodeComponent from '../TreeNodeComponent.vue'
import type { TreeCanvasEmits, TreeCanvasProps } from './types'
import { useTreeCanvasBindings } from './useTreeCanvasBindings'

defineProps<TreeCanvasProps>()

const emit = defineEmits<TreeCanvasEmits>()

const {
  nodeListeners,
  emptyStateButtonListeners,
} = useTreeCanvasBindings({
  emit,
})
</script>

<style scoped lang="scss">
.expression-tree {
  margin-bottom: 16px;
  min-height: 200px;
  max-width: 100%;
  overflow-x: auto;
  overflow-y: visible;
}

.empty-state {
  text-align: center;
  padding: 40px 0;
}
</style>
