<template>
  <a-modal
    :visible="visible"
    :title="title"
    :width="width"
    :mask-closable="false"
    :esc-to-close="false"
    @ok="modalListeners.ok"
    @cancel="modalListeners.cancel"
  >
    <AviatorExpressionBuilder
      v-model="localExpression"
      :fields="fields"
      :data-preview="dataPreview"
      :notifier="notifier"
    />

    <template #footer>
      <a-space>
        <a-button @click="footerListeners.cancel">取消</a-button>
        <a-button type="primary" :disabled="!localExpression" @click="footerListeners.save">保存</a-button>
      </a-space>
    </template>
  </a-modal>
</template>

<script setup lang="ts">
import AviatorExpressionBuilder from './AviatorExpressionBuilder.vue'
import {
  type AviatorExpressionBuilderModalEmits,
  type AviatorExpressionBuilderModalProps,
  useAviatorExpressionBuilderModalBindings,
} from './useAviatorExpressionBuilderModalBindings'

const props = withDefaults(defineProps<AviatorExpressionBuilderModalProps>(), {
  title: 'Aviator 表达式构建器',
  width: 1200,
  fields: () => [],
  dataPreview: '',
})

const emit = defineEmits<AviatorExpressionBuilderModalEmits>()

const {
  localExpression,
  modalListeners,
  footerListeners,
} = useAviatorExpressionBuilderModalBindings({
  props,
  emit,
})
</script>
