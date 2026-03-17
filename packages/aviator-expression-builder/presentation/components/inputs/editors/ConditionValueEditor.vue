<template>
  <div class="condition-value-editor">
    <ConditionBooleanSelect
      v-if="fieldType === 'boolean'"
      :model-value="value"
      compact
      @update:model-value="onUpdateValue"
    />

    <ConditionNullSelect
      v-else-if="isNullComparison"
      :model-value="value"
      @update:model-value="onUpdateValue"
    />

    <ConditionMultiValueInput
      v-else-if="isMultiValue"
      :model-value="multiValues"
      :placeholder="multiValuePlaceholder"
      :tooltip="multiValueTooltip"
      @update:model-value="onUpdateMultiValues"
    />

    <ConditionUrlInput
      v-else-if="fieldType === 'url'"
      :model-value="value"
      :error="urlError"
      @update:model-value="onUpdateValue"
      @blur="onBlurUrl"
    />

    <ConditionDateTimeInput
      v-else-if="fieldType === 'datetime'"
      :model-value="dateValue"
      @update:model-value="onUpdateDateValue"
    />

    <ConditionTextValueInput
      v-else-if="fieldType === 'number'"
      :model-value="value"
      :placeholder="placeholder"
      compact
      @update:model-value="onUpdateValue"
    />

    <ConditionBooleanSelect
      v-else-if="valueDataType === 'boolean'"
      :model-value="value"
      @update:model-value="onUpdateValue"
    />

    <ConditionTextValueInput
      v-else
      :model-value="value"
      :placeholder="placeholder"
      @update:model-value="onUpdateValue"
    />

    <ConditionDataTypeSwitch
      v-if="showValueDataTypeSwitch"
      :model-value="valueDataType"
      @update:model-value="onUpdateValueDataType"
    />
  </div>
</template>

<script setup lang="ts">
import ConditionBooleanSelect from './condition-value/ConditionBooleanSelect.vue'
import ConditionNullSelect from './condition-value/ConditionNullSelect.vue'
import ConditionMultiValueInput from './condition-value/ConditionMultiValueInput.vue'
import ConditionUrlInput from './condition-value/ConditionUrlInput.vue'
import ConditionDateTimeInput from './condition-value/ConditionDateTimeInput.vue'
import ConditionTextValueInput from './condition-value/ConditionTextValueInput.vue'
import ConditionDataTypeSwitch from './condition-value/ConditionDataTypeSwitch.vue'
import {
  useConditionValueEditorBindings,
  type ConditionValueEditorEmits,
  type ConditionValueEditorProps,
} from './useConditionValueEditorBindings'

const props = withDefaults(defineProps<ConditionValueEditorProps>(), {
  placeholder: '输入值',
  multiValues: () => [],
  showDataTypeSwitch: true,
})

const emit = defineEmits<ConditionValueEditorEmits>()

const {
  isNullComparison,
  isMultiValue,
  multiValuePlaceholder,
  multiValueTooltip,
  showValueDataTypeSwitch,
  onUpdateValue,
  onUpdateMultiValues,
  onUpdateDateValue,
  onBlurUrl,
  onUpdateValueDataType,
} = useConditionValueEditorBindings(props, emit)
</script>

<style scoped lang="scss">
.condition-value-editor {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: nowrap;
  min-width: 0;
}
</style>
