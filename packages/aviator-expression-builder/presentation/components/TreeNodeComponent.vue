<template>
  <TreeNodeShell
    :node-classes="nodeClasses"
    :indent-size="indentSize"
    :level="level"
    v-on="shellListeners"
  >
    <TreeNodeContent
      :node="node"
      :available-fields="availableFields"
      :available-operators="getAvailableOperators()"
      :hide-actions="hideActions"
      :has-error="hasError"
      :expected-return-type="expectedReturnType"
      :get-parameter-data-type="getParameterDataType"
      v-on="contentListeners"
    />

    <TreeNodeChildren
      :node="node"
      :available-fields="availableFields"
      :level="level"
      :expected-return-type="expectedReturnType"
      :get-parameter-data-type="getParameterDataType"
      :validation-errors="validationErrors"
      v-on="childrenListeners"
    />
  </TreeNodeShell>
</template>

<script setup lang="ts">
import TreeNodeChildren from './tree-node/TreeNodeChildren.vue'
import TreeNodeContent from './tree-node/TreeNodeContent.vue'
import TreeNodeShell from './tree-node/TreeNodeShell.vue'
import type { TreeNodeViewEmits, TreeNodeViewProps } from './tree-node/types'
import { useTreeNodeViewBindings } from './tree-node/useTreeNodeViewBindings'

const props = defineProps<TreeNodeViewProps>()
const emit = defineEmits<TreeNodeViewEmits>()

const {
  hasError,
  indentSize,
  nodeClasses,
  getAvailableOperators,
  shellListeners,
  contentListeners,
  childrenListeners,
} = useTreeNodeViewBindings({
  props,
  emit,
})
</script>
