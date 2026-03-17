<template>
  <template v-if="parameter.type === 'field'">
    <FieldRefEditor
      :value="typeof displayValue === 'string' ? displayValue : ''"
      :available-fields="availableFields"
      :placeholder="`选择${parameter.description}`"
      :show-array-index="false"
      :show-array-hint="false"
      :get-type-color="getTypeColor"
      @update:field="emit('update:value', $event)"
    />
  </template>

  <ValueEditor
    v-else
    mode="parameter"
    :value="value"
    :display-value="displayValue"
    :value-data-type="valueDataType"
    :parameter-name="parameter.name"
    :parameter-description="parameter.description"
    :parameter-type="parameter.type"
    :multi-values="multiValues"
    :show-data-type-switch="true"
    @update:value="emit('update:value', $event)"
    @update:multi-values="emit('update:multi-values', $event)"
    @update:value-data-type="emit('update:value-data-type', $event)"
  />
</template>

<script setup lang="ts">
import type {
  FieldOption,
  FunctionParameter,
  NodeValue,
} from '../../../../infrastructure/engine/types'
import FieldRefEditor from '../editors/FieldRefEditor.vue'
import ValueEditor from '../editors/ValueEditor.vue'

defineProps<{
  parameter: FunctionParameter
  value: NodeValue
  displayValue: NodeValue
  availableFields: FieldOption[]
  valueDataType: string
  multiValues: string[]
  getTypeColor: (type: string) => string
}>()

const emit = defineEmits<{
  (e: 'update:value', value: NodeValue): void
  (e: 'update:multi-values', values: string[]): void
  (e: 'update:value-data-type', dataType: string): void
}>()
</script>
