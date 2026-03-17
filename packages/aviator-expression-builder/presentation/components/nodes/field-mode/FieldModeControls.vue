<template>
  <div class="field-mode-controls">
    <FieldModeFieldSelect
      :base-field-name="baseFieldName"
      :available-fields="availableFields"
      :get-field-tooltip="getFieldTooltip"
      :get-type-color="getTypeColor"
      @update:field="onUpdateField"
    />

    <FieldModeArrayIndexInput
      v-if="isArrayField"
      :array-index="arrayIndex"
      @update:array-index="onUpdateArrayIndex"
    />

    <FieldModeComparisonSelect
      :comparison="comparison"
      :available-operators="availableOperators"
      @update:comparison="onUpdateComparison"
    />
  </div>
</template>

<script setup lang="ts">
import type { ComparisonOperator, FieldOption } from '../../../../infrastructure/engine/types'
import FieldModeArrayIndexInput from './components/FieldModeArrayIndexInput.vue'
import FieldModeComparisonSelect from './components/FieldModeComparisonSelect.vue'
import FieldModeFieldSelect from './components/FieldModeFieldSelect.vue'
import {
  useFieldModeControlsBindings,
  type FieldModeControlsEmits,
} from './useFieldModeControlsBindings'

defineProps<{
  baseFieldName: string
  availableFields: FieldOption[]
  isArrayField: boolean
  arrayIndex?: number
  comparison?: string
  availableOperators: ComparisonOperator[]
  getFieldTooltip: (field: FieldOption) => string
  getTypeColor: (type: string) => string
}>()

const emit = defineEmits<FieldModeControlsEmits>()

const {
  onUpdateField,
  onUpdateArrayIndex,
  onUpdateComparison,
} = useFieldModeControlsBindings(emit)
</script>

<style scoped lang="scss">
.field-mode-controls {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex-wrap: nowrap;
  flex-shrink: 0;
}
</style>
