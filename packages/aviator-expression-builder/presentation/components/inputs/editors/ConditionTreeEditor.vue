<template>
  <div class="condition-tree-editor">
    <ConditionTreeHint />

    <TreeNodeComponent
      :node="node"
      :available-fields="availableFields"
      :level="1"
      :hide-actions="true"
      :expected-return-type="expectedReturnType"
      :get-parameter-data-type="getParameterDataType"
      v-on="conditionTreeListeners"
    />
  </div>
</template>

<script setup lang="ts">
import TreeNodeComponent from '../../TreeNodeComponent.vue'
import type { FieldOption, TreeNode } from '../../../../infrastructure/engine/types'
import ConditionTreeHint from './condition-tree/ConditionTreeHint.vue'
import {
  type ConditionTreeEditorEmits,
  useConditionTreeEditorBindings,
} from './useConditionTreeEditorBindings'

defineProps<{
  node: TreeNode
  availableFields: FieldOption[]
  expectedReturnType?: string
  getParameterDataType?: (nodeId: string, paramName: string) => string
}>()

const emit = defineEmits<ConditionTreeEditorEmits>()

const {
  conditionTreeListeners,
} = useConditionTreeEditorBindings({
  emit,
})
</script>

<style scoped lang="scss">
.condition-tree-editor {
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  padding: 8px;
  background: #fafafa;

  :deep(.tree-node) {
    margin-bottom: 0;

    .node-content {
      border: none;
      background: transparent;
      padding: 4px;
    }
  }
}
</style>
