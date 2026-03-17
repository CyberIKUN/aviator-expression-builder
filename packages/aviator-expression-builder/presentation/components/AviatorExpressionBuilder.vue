<template>
  <TreeExpressionBuilder
    :model-value="modelValue"
    :field-options="fields"
    :data-preview="dataPreview"
    :notifier="notifier"
    @update:model-value="onUpdateModelValue"
  />
</template>

<script setup lang="ts">
import TreeExpressionBuilder from './TreeExpressionBuilder.vue'
import {
  type AviatorExpressionBuilderEmits,
  type AviatorExpressionBuilderProps,
  useAviatorExpressionBuilderBindings,
} from './useAviatorExpressionBuilderBindings'

withDefaults(defineProps<AviatorExpressionBuilderProps>(), {
  fields: () => [],
  dataPreview: '',
})

const emit = defineEmits<AviatorExpressionBuilderEmits>()

const {
  onUpdateModelValue,
} = useAviatorExpressionBuilderBindings({
  emit,
})
</script>

<style src="../styles/select-overrides.scss" lang="scss"></style>

<style src="../styles/data-type-radio-overrides.scss" lang="scss"></style>
