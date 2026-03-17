<template>
  <div
    v-if="node.type === 'group' && node.expanded && node.children && node.children.length > 0"
    class="child-nodes"
  >
    <TreeNodeComponent
      v-for="child in node.children"
      :key="child.id"
      :node="child"
      :available-fields="availableFields"
      :level="level + 1"
      :expected-return-type="expectedReturnType"
      :get-parameter-data-type="getParameterDataType"
      :validation-errors="validationErrors"
      @update-node="onUpdateNode"
      @add-child="onAddChild"
      @remove-node="onRemoveNode"
      @move-up="onMoveUp"
      @move-down="onMoveDown"
      @copy-node="onCopyNode"
      @update-parameter-type="onUpdateParameterType"
      @update-parameter-value-data-type="onUpdateParameterValueDataType"
      @drag-node="onDragNode"
    />
  </div>
</template>

<script setup lang="ts">
import TreeNodeComponent from '../TreeNodeComponent.vue'
import type { TreeNodeViewEmits, TreeNodeViewProps } from './types'
import { useTreeNodeChildrenBindings } from './useTreeNodeChildrenBindings'

defineProps<Pick<
  TreeNodeViewProps,
  'node' | 'availableFields' | 'level' | 'expectedReturnType' | 'getParameterDataType' | 'validationErrors'
>>()

const emit = defineEmits<TreeNodeViewEmits>()

const {
  onUpdateNode,
  onAddChild,
  onRemoveNode,
  onMoveUp,
  onMoveDown,
  onCopyNode,
  onUpdateParameterType,
  onUpdateParameterValueDataType,
  onDragNode,
} = useTreeNodeChildrenBindings(emit)
</script>

<style scoped lang="scss">
.child-nodes {
  margin-left: 20px;
  margin-top: 8px;
  padding-left: 16px;
  border-left: 2px dashed var(--color-border-2);
}
</style>
