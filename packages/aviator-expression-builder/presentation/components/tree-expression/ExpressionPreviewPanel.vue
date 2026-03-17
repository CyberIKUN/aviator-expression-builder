<template>
  <a-divider>表达式预览</a-divider>
  <div class="expression-preview">
    <a-textarea
      :model-value="generatedExpression"
      :auto-size="{ minRows: 3, maxRows: 10 }"
      readonly
      placeholder="生成的 Aviator 表达式会显示在这里"
    />

    <div class="preview-actions">
      <a-space>
        <a-button type="outline" @click="emit('clear')">
          <icon-delete />清空
        </a-button>
        <a-button type="outline" :loading="validating" @click="emit('validate')">
          <icon-check-circle />验证
        </a-button>
        <a-button type="outline" @click="emit('copy')">
          <icon-copy />复制
        </a-button>
        <a-button type="outline" @click="emit('format')">
          <icon-code />格式化
        </a-button>
      </a-space>
      <a-tag v-if="validationResult" :color="validationResult.success ? 'green' : 'red'">
        {{ validationResult.success ? '表达式可用' : validationResult.message }}
      </a-tag>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ExpressionValidationResult } from '../../composables/useTreeExpressionBuilder.types'

withDefaults(defineProps<{
  generatedExpression: string
  validating: boolean
  validationResult: ExpressionValidationResult | null
}>(), {
  validationResult: null,
})

const emit = defineEmits<{
  (e: 'clear'): void
  (e: 'validate'): void
  (e: 'copy'): void
  (e: 'format'): void
}>()
</script>

<style scoped lang="scss">
.expression-preview {
  :deep(.arco-textarea) {
    font-family: 'Consolas', 'Monaco', monospace;
    font-size: 14px;
    background-color: var(--color-fill-2);
  }

  .preview-actions {
    margin-top: 8px;
    display: flex;
    gap: 8px;
  }
}
</style>
