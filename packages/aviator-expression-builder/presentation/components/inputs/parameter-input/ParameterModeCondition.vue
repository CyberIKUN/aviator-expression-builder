<template>
  <ConditionTreeEditor
    :node="node"
    :available-fields="availableFields"
    :expected-return-type="expectedReturnType"
    :get-parameter-data-type="getParameterDataType"
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
</template>

<script setup lang="ts">
import type { FieldOption, TreeNode } from '../../../../infrastructure/engine/types'
import ConditionTreeEditor from '../editors/ConditionTreeEditor.vue'
import {
  useParameterModeConditionBindings,
  type ParameterModeConditionEmits,
} from './useParameterModeConditionBindings'

defineProps<{
  node: TreeNode
  availableFields: FieldOption[]
  expectedReturnType?: string
  getParameterDataType?: (nodeId: string, paramName: string) => string
}>()

const emit = defineEmits<ParameterModeConditionEmits>()

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
} = useParameterModeConditionBindings(emit)
</script>
