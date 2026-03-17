<template>
  <div class="parameter-input">
    <InputTypeSelector
      :key="selectorKey"
      v-bind="selectorProps"
      v-on="typeSelectorListeners"
    />

    <ParameterModeValue
      v-if="isValueMode"
      v-bind="valueModeProps"
      v-on="valueModeListeners"
    />

    <ParameterModeField
      v-if="isFieldMode"
      v-bind="fieldModeProps"
      v-on="fieldModeListeners"
    />

    <ParameterModeCondition
      v-if="isConditionMode"
      v-bind="conditionModeProps"
      v-on="conditionModeListeners"
    />

    <ParameterModeLambda
      v-if="isLambdaMode"
      v-bind="lambdaModeProps"
      v-on="lambdaModeListeners"
    />
  </div>
</template>

<script setup lang="ts">
import type { ParameterInputProps } from '../../composables/useParameterInputController'
import InputTypeSelector from './editors/InputTypeSelector.vue'
import ParameterModeCondition from './parameter-input/ParameterModeCondition.vue'
import ParameterModeField from './parameter-input/ParameterModeField.vue'
import ParameterModeLambda from './parameter-input/ParameterModeLambda.vue'
import ParameterModeValue from './parameter-input/ParameterModeValue.vue'
import {
  type ParameterInputEmits,
  useParameterInputBindings,
} from './useParameterInputBindings'

const props = defineProps<ParameterInputProps>()

const emit = defineEmits<ParameterInputEmits>()

const {
  selectorKey,
  selectorProps,
  isValueMode,
  isFieldMode,
  isConditionMode,
  isLambdaMode,
  valueModeProps,
  fieldModeProps,
  conditionModeProps,
  lambdaModeProps,
  typeSelectorListeners,
  valueModeListeners,
  fieldModeListeners,
  conditionModeListeners,
  lambdaModeListeners,
} = useParameterInputBindings({
  props,
  emit,
})
</script>

<style scoped lang="scss">
.parameter-input {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 8px;
  flex-wrap: nowrap;
  min-width: 0;
  overflow-x: auto;
  overflow-y: visible;
}
</style>
