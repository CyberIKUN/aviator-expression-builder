<template>
  <div class="group-editor">
    <GroupOperatorSelect
      :operator="node.operator"
      @update:model-value="emit('update:operator', $event)"
    />

    <GroupNegationToggle
      :is-negated="node.isNegated || false"
      @update:model-value="emit('update:negation', $event)"
    />

    <GroupChildrenInfo :child-count="node.children?.length || 0" />
  </div>
</template>

<script setup lang="ts">
import type { TreeNode } from '../../../infrastructure/engine/types'
import GroupChildrenInfo from './group/components/GroupChildrenInfo.vue'
import GroupNegationToggle from './group/components/GroupNegationToggle.vue'
import GroupOperatorSelect from './group/components/GroupOperatorSelect.vue'

defineProps<{
  node: TreeNode
}>()

const emit = defineEmits<{
  (e: 'update:operator', value: 'AND' | 'OR'): void
  (e: 'update:negation', value: boolean): void
}>()
</script>

<style scoped lang="scss">
.group-editor {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex-wrap: nowrap;
  flex-shrink: 0;
  overflow: visible;
}
</style>
