<template>
  <div class="function-params">
    <div
      v-for="(param, index) in parameters"
      :key="param.name"
      class="param-input"
    >
      <label class="param-label">
        {{ param.description }}
        <span v-if="param.required" class="required">*</span>
      </label>

      <a-textarea
        v-if="param.type === 'value'"
        :model-value="param.value"
        :placeholder="`输入${param.description}`"
        :auto-size="{ minRows: 1, maxRows: 3 }"
        style="width: 150px"
        @update:model-value="onUpdateParameter(index, $event)"
      />

      <a-select
        v-else-if="param.type === 'field'"
        :model-value="param.value"
        :placeholder="`选择${param.description}`"
        allow-search
        style="width: 150px"
        @update:model-value="onUpdateParameter(index, $event)"
      >
        <a-option
          v-for="field in availableFields"
          :key="field.value"
          :value="field.value"
          :label="field.label"
        >
          <span>{{ field.label }}</span>
        </a-option>
      </a-select>

      <a-textarea
        v-else
        :model-value="param.value"
        :placeholder="`输入${param.description || param.name}`"
        :auto-size="{ minRows: 1, maxRows: 3 }"
        style="width: 150px"
        @update:model-value="onUpdateParameter(index, $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FieldOption } from '../../../../../infrastructure/engine/types'
import type { FunctionParameterItem } from './types'
import {
  useFunctionRefParametersBindings,
  type FunctionRefParametersEmits,
} from './useFunctionRefParametersBindings'

withDefaults(defineProps<{
  parameters: FunctionParameterItem[]
  availableFields: FieldOption[]
}>(), {
  parameters: () => [],
})

const emit = defineEmits<FunctionRefParametersEmits>()

const {
  onUpdateParameter,
} = useFunctionRefParametersBindings(emit)
</script>

<style scoped lang="scss">
.function-params {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  background: var(--color-bg-2);
  border: 1px solid var(--color-border-2);
  border-radius: 4px;
}

.param-input {
  display: flex;
  align-items: center;
  gap: 8px;
}

.param-label {
  min-width: 100px;
  font-size: 12px;
  color: var(--color-text-2);
}

.required {
  color: var(--color-danger-6);
}
</style>
