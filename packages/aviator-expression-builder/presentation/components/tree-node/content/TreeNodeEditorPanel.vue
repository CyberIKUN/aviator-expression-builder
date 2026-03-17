<template>
  <ConditionNode
    v-if="node.type === 'condition'"
    :node="node"
    :available-fields="availableFields"
    :available-operators="availableOperators"
    :expected-return-type="expectedReturnType"
    :get-parameter-data-type="getParameterDataType"
    @update:negation="onConditionNegation"
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
  />

  <GroupNode
    v-if="node.type === 'group'"
    :node="node"
    @update:operator="onUpdateGroupOperator"
    @update:negation="onUpdateGroupNegation"
  />
</template>

<script setup lang="ts">
import ConditionNode from '../../nodes/ConditionNode.vue'
import GroupNode from '../../nodes/GroupNode.vue'
import type {
  ComparisonOperator,
  FieldOption,
  TreeNode,
} from '../../../../infrastructure/engine/types'
import {
  useTreeNodeEditorPanelBindings,
  type TreeNodeEditorPanelEmits,
} from './useTreeNodeEditorPanelBindings'

defineProps<{
  node: TreeNode
  availableFields: FieldOption[]
  availableOperators: ComparisonOperator[]
  expectedReturnType?: string
  getParameterDataType?: (nodeId: string, paramName: string) => string
}>()

const emit = defineEmits<TreeNodeEditorPanelEmits>()

const {
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
} = useTreeNodeEditorPanelBindings(emit)
</script>
