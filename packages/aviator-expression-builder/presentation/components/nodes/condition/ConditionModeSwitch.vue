<template>
  <div class="condition-mode-switch">
    <ConditionNegationToggle
      :is-negated="isNegated"
      @update:model-value="emit('update:negation', $event)"
    />

    <ConditionModeRadio
      :mode="mode"
      @update:model-value="emit('switch:mode', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import ConditionModeRadio from './components/ConditionModeRadio.vue'
import ConditionNegationToggle from './components/ConditionNegationToggle.vue'

defineProps<{
  isNegated: boolean
  mode: 'condition' | 'function'
}>()

const emit = defineEmits<{
  (e: 'update:negation', value: boolean): void
  (e: 'switch:mode', mode: 'condition' | 'function'): void
}>()
</script>

<style scoped lang="scss">
.condition-mode-switch {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}
</style>
