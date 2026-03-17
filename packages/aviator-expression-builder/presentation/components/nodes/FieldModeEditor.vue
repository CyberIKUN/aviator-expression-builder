<template>
  <div class="field-mode-editor">
    <FieldModeControls
      :base-field-name="baseFieldName"
      :available-fields="availableFields"
      :is-array-field="isArrayField"
      :array-index="arrayIndex"
      :comparison="node.comparison"
      :available-operators="availableOperators"
      :get-field-tooltip="getFieldTooltip"
      :get-type-color="getTypeColor"
      v-on="controlsListeners"
    />

    <!-- 值输入 (只在需要值的操作符时显示) -->
    <ValueInput
      v-if="needsValue"
      :value="node.value"
      :field-type="fieldType"
      :field-name="node.field"
      :comparison="node.comparison"
      :available-fields="availableFields"
      :current-data-type="currentDataType"
      :value-is-literal="node.valueIsLiteral"
      v-on="valueInputListeners"
    />

    <!-- match 操作符的额外比较选择 - 已移除，使用取反按钮代替 -->
    <!-- 取反按钮在 ConditionNode 中，会自动处理 != nil / == nil -->
  </div>
</template>

<script setup lang="ts">
import ValueInput from '../inputs/ValueInput.vue'
import FieldModeControls from './field-mode/FieldModeControls.vue'
import type { FieldModeEditorProps } from '../../composables/useFieldModeEditorController.types'
import {
  useFieldModeEditorBindings,
  type FieldModeEditorEmits,
} from './useFieldModeEditorBindings'

const props = defineProps<FieldModeEditorProps>()

const emit = defineEmits<FieldModeEditorEmits>()

const {
  baseFieldName,
  arrayIndex,
  isArrayField,
  fieldType,
  needsValue,
  getFieldTooltip,
  getTypeColor,
  currentDataType,
  controlsListeners,
  valueInputListeners,
} = useFieldModeEditorBindings({
  props,
  emit,
})
</script>

<style scoped lang="scss">
.field-mode-editor {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex-wrap: nowrap;
  flex-shrink: 0;
  overflow: visible;
}
</style>
