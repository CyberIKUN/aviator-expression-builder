<template>
  <div v-if="!hideActions" class="node-actions">
    <NodeActionGroupAdd
      :node-id="node.id"
      :node-type="node.type"
      v-on="groupAddListeners"
    />

    <NodeActionCommonButtons
      :node-id="node.id"
      v-on="commonButtonListeners"
    />

    <NodeActionErrorIndicator :visible="Boolean(hasError)" />
  </div>
</template>

<script setup lang="ts">
import NodeActionCommonButtons from './actions/components/NodeActionCommonButtons.vue'
import NodeActionErrorIndicator from './actions/components/NodeActionErrorIndicator.vue'
import NodeActionGroupAdd from './actions/components/NodeActionGroupAdd.vue'
import {
  useNodeActionsBindings,
  type NodeActionsEmits,
  type NodeActionsProps,
} from './useNodeActionsBindings'

defineProps<NodeActionsProps>()

const emit = defineEmits<NodeActionsEmits>()

const {
  groupAddListeners,
  commonButtonListeners,
} = useNodeActionsBindings({
  emit,
})
</script>

<style scoped lang="scss">
.node-actions {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 2px;
  margin-left: auto;
  align-self: flex-start;
  position: relative;
  z-index: 10;
}
</style>
