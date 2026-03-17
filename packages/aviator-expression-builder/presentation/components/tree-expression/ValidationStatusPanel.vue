<template>
  <div class="validation-status">
    <a-alert
      v-if="allErrors.length > 0"
      type="error"
      show-icon
      closable
    >
      <template #title>
        发现 {{ allErrors.length }} 个问题
      </template>
      <div class="error-list">
        <div v-for="(error, index) in allErrors" :key="`${error.nodeId}-${index}`" class="error-item">
          <span class="error-number">{{ index + 1 }}.</span>
          <span class="error-message">{{ error.message }}</span>
        </div>
      </div>
    </a-alert>
  </div>
</template>

<script setup lang="ts">
import type { UiError } from '../../composables/useTreeExpressionBuilder.types'

defineProps<{
  allErrors: UiError[]
}>()
</script>

<style scoped lang="scss">
.validation-status {
  margin-bottom: 16px;
}

.error-list {
  .error-item {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 8px;
  }

  .error-number {
    font-weight: 700;
    color: var(--color-danger-6);
  }

  .error-message {
    flex: 1;
  }
}
</style>
