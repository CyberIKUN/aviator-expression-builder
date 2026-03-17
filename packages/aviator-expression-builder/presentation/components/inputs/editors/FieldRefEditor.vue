<template>
  <div class="field-ref-editor">
    <div class="field-selector-row">
      <FieldRefSelector
        :model-value="currentFieldValue"
        :available-fields="availableFields"
        :placeholder="placeholder"
        :show-array-hint="showArrayHint"
        :resolve-field-tooltip="resolveFieldTooltip"
        :resolve-type-color="resolveTypeColor"
        @update:model-value="onUpdateField"
      />

      <FieldArrayIndexInput
        v-if="showArrayIndex && isArrayField"
        :model-value="arrayIndex"
        @update:model-value="emit('update:array-index', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import FieldArrayIndexInput from './field-ref/FieldArrayIndexInput.vue'
import FieldRefSelector from './field-ref/FieldRefSelector.vue'
import {
  type FieldRefEditorEmits,
  type FieldRefEditorProps,
  useFieldRefEditorBindings,
} from './useFieldRefEditorBindings'

const props = withDefaults(defineProps<FieldRefEditorProps>(), {
  placeholder: '选择字段',
  showArrayIndex: false,
  showArrayHint: true,
})

const emit = defineEmits<FieldRefEditorEmits>()

const {
  currentFieldValue,
  isArrayField,
  onUpdateField,
  resolveFieldTooltip,
  resolveTypeColor,
} = useFieldRefEditorBindings({
  props,
  emit,
})
</script>

<style scoped lang="scss">
.field-ref-editor {
  width: 100%;
}

.field-selector-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}
</style>
