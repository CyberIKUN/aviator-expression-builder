<template>
  <AviatorExpressionBuilderModal
    v-model:visible="visible"
    v-model="currentExpression"
    title="高级表达式构建器"
    :width="1200"
    :fields="fieldOptions"
    :data-preview="dataPreview"
    :notifier="notifier"
    @save="handleOk"
    @cancel="handleCancel"
  />
</template>

<script setup lang="ts">
import AviatorExpressionBuilderModal from './components/AviatorExpressionBuilderModal.vue'
import { defaultTreeExpressionBuilderNotifier } from './composables/treeExpressionBuilderNotifier'
import {
  type AviatorExpressionBuilderLegacyModalEmits,
  type AviatorExpressionBuilderLegacyModalProps,
  useAviatorExpressionBuilderLegacyModalBindings,
} from './useAviatorExpressionBuilderLegacyModalBindings'

const props = defineProps<AviatorExpressionBuilderLegacyModalProps>()

const emit = defineEmits<AviatorExpressionBuilderLegacyModalEmits>()
const notifier = props.notifier || defaultTreeExpressionBuilderNotifier

const {
  visible,
  currentExpression,
  dataPreview,
  fieldOptions,
  handleOk,
  handleCancel,
  exposedApi,
} = useAviatorExpressionBuilderLegacyModalBindings({
  emit,
  notifier,
})

defineExpose({
  open: exposedApi.open,
  updateFieldOptions: exposedApi.updateFieldOptions,
})
</script>
