<template>
  <div class="function-ref-editor">
    <FunctionRefHint />

    <div class="function-selector">
      <FunctionRefSelector
        v-bind="selectorProps"
        v-on="selectorListeners"
      />

      <FunctionRefParameters
        v-if="showParameters"
        v-bind="parameterProps"
        v-on="parameterListeners"
      />

      <FunctionRefPreview
        v-if="hasSelectedFunction"
        v-bind="previewProps"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import FunctionRefHint from './function-ref/FunctionRefHint.vue'
import FunctionRefParameters from './function-ref/FunctionRefParameters.vue'
import FunctionRefPreview from './function-ref/FunctionRefPreview.vue'
import FunctionRefSelector from './function-ref/FunctionRefSelector.vue'
import {
  type FunctionRefEditorEmits,
  type FunctionRefEditorProps,
  useFunctionRefEditorBindings,
} from './useFunctionRefEditorBindings'

const props = withDefaults(defineProps<FunctionRefEditorProps>(), {
  selectedFunctionName: '',
  selectedFunction: null,
})

const emit = defineEmits<FunctionRefEditorEmits>()

const {
  hasSelectedFunction,
  showParameters,
  selectorProps,
  parameterProps,
  previewProps,
  selectorListeners,
  parameterListeners,
} = useFunctionRefEditorBindings({
  props,
  emit,
})
</script>

<style scoped lang="scss">
.function-ref-editor {
  width: 100%;
  border: 1px solid rgb(var(--primary-6));
  border-radius: 6px;
  padding: 12px;
  background: rgba(var(--primary-6), 0.05);
}

.function-selector {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
