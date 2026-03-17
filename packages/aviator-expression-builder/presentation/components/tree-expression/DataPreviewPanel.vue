<template>
  <div class="data-preview">
    <a-alert
      v-if="extractedFieldCount > 0"
      type="success"
      show-icon
      closable
    >
      <template #title>
        字段识别成功
      </template>
      已识别 {{ extractedFieldCount }} 个字段
      <span v-if="dataSourceInfo">，类型分布: {{ dataSourceInfo }}</span>
    </a-alert>

    <a-alert
      v-else-if="!hasDataPreview"
      type="warning"
      show-icon
      closable
    >
      <template #title>
        未提供数据预览
      </template>
      建议传入数据预览，自动推断字段类型。
    </a-alert>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  extractedFieldCount: number
  hasDataPreview: boolean
  dataSourceInfo?: string
}>()
</script>

<style scoped lang="scss">
.data-preview {
  margin-bottom: 16px;
}
</style>
