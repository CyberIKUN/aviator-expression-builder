<template>
  <div
    class="node-content"
    :draggable="!hideActions"
    @dragstart="onDragStart"
    @dragend="onDragEnd"
  >
    <TreeNodeAffordances
      :node="node"
      :hide-actions="hideActions"
      @toggle-expanded="onToggleExpanded"
    />

    <TreeNodeEditorPanel
      :node="node"
      :available-fields="availableFields"
      :available-operators="availableOperators"
      :expected-return-type="expectedReturnType"
      :get-parameter-data-type="getParameterDataType"
      @update:condition-negation="onConditionNegation"
      @switch:mode="onSwitchMode"
      @update:field="onUpdateField"
      @update:array-index="onUpdateArrayIndex"
      @update:comparison="onUpdateComparison"
      @update:value="onUpdateValue"
      @update:extra-comparison="onUpdateExtraComparison"
      @update:value-data-type="onUpdateValueDataType"
      @update:function="onUpdateFunction"
      @update:parameter="onUpdateParameter"
      @update:parameter-type="onUpdateParameterType"
      @update:parameter-value-type="onUpdateParameterValueType"
      @update:function-value-data-type="onUpdateFunctionValueDataType"
      @update:group-operator="onUpdateGroupOperator"
      @update:group-negation="onUpdateGroupNegation"
    />

    <NodeActions
      :node="node"
      :hide-actions="hideActions"
      :has-error="hasError"
      @add-child="onAddChild"
      @move-up="onMoveUp"
      @move-down="onMoveDown"
      @copy-node="onCopyNode"
      @remove-node="onRemoveNode"
    />
  </div>
</template>

<script setup lang="ts">
import NodeActions from '../nodes/NodeActions.vue'
import TreeNodeAffordances from './content/TreeNodeAffordances.vue'
import TreeNodeEditorPanel from './content/TreeNodeEditorPanel.vue'
import type {
  ComparisonOperator,
  FieldOption,
  TreeNode,
} from '../../../infrastructure/engine/types'
import {
  useTreeNodeContentBindings,
  type TreeNodeContentEmits,
} from './useTreeNodeContentBindings'

defineProps<{
  node: TreeNode
  availableFields: FieldOption[]
  availableOperators: ComparisonOperator[]
  hideActions?: boolean
  hasError?: boolean
  expectedReturnType?: string
  getParameterDataType?: (nodeId: string, paramName: string) => string
}>()

const emit = defineEmits<TreeNodeContentEmits>()

const {
  onDragStart,
  onDragEnd,
  onToggleExpanded,
  onConditionNegation,
  onSwitchMode,
  onUpdateField,
  onUpdateArrayIndex,
  onUpdateComparison,
  onUpdateValue,
  onUpdateExtraComparison,
  onUpdateValueDataType,
  onUpdateFunction,
  onUpdateParameter,
  onUpdateParameterType,
  onUpdateParameterValueType,
  onUpdateFunctionValueDataType,
  onUpdateGroupOperator,
  onUpdateGroupNegation,
  onAddChild,
  onMoveUp,
  onMoveDown,
  onCopyNode,
  onRemoveNode,
} = useTreeNodeContentBindings(emit)
</script>

<style scoped lang="scss">
.node-content {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 10px;
  background: var(--color-bg-2);
  border: 1px solid var(--color-border-2);
  border-radius: 6px;
  transition: all 0.2s;
  cursor: grab;
  box-sizing: border-box;
  width: max-content;
  min-width: 100%;

  &:hover {
    box-shadow: 0 2px 8px var(--color-shadow);
  }

  &:active {
    cursor: grabbing;
  }
}
</style>
