<template>
  <div class="tree-expression-builder">
    <a-card :bordered="false">
      <DataPreviewPanel
        :extracted-field-count="extractedFields.length"
        :has-data-preview="hasDataPreview"
        :data-source-info="dataSourceInfo"
      />

      <BuilderToolbar
        v-on="toolbarListeners"
      />

      <TreeCanvas
        :root-nodes="rootNodes"
        :available-fields="availableFields"
        :validation-errors="validationErrors"
        :get-parameter-data-type="getParameterDataType"
        v-on="treeCanvasListeners"
      />

      <ValidationStatusPanel :all-errors="allErrors" />

      <ExpressionPreviewPanel
        :generated-expression="generatedExpression"
        :validating="validating"
        :validation-result="validationResult"
        v-on="expressionPreviewListeners"
      />
    </a-card>
  </div>
</template>

<script setup lang="ts">
import type { TreeExpressionBuilderProps } from '../composables/useTreeExpressionBuilder.types'
import type { TreeExpressionBuilderEmits } from '../types/treeBuilderEvents'
import BuilderToolbar from './tree-expression/BuilderToolbar.vue'
import DataPreviewPanel from './tree-expression/DataPreviewPanel.vue'
import ExpressionPreviewPanel from './tree-expression/ExpressionPreviewPanel.vue'
import TreeCanvas from './tree-expression/TreeCanvas.vue'
import ValidationStatusPanel from './tree-expression/ValidationStatusPanel.vue'
import { useTreeExpressionBuilderBindings } from './useTreeExpressionBuilderBindings'

const props = defineProps<TreeExpressionBuilderProps>()

const emit = defineEmits<TreeExpressionBuilderEmits>()

const {
  extractedFields,
  dataSourceInfo,
  hasDataPreview,
  rootNodes,
  availableFields,
  getParameterDataType,
  validationErrors,
  allErrors,
  generatedExpression,
  validating,
  validationResult,
  toolbarListeners,
  treeCanvasListeners,
  expressionPreviewListeners,
} = useTreeExpressionBuilderBindings({
  props,
  emit,
})
</script>

<style scoped lang="scss">
.tree-expression-builder {
  width: 100%;
}
</style>
