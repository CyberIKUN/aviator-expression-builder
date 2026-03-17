<template>
  <div class="playground">
    <AviatorExpressionBuilderModal
      v-model:visible="openModal"
      v-model="expression"
      :fields="fields"
      title="高级表达式构建器"
      @save="onSave"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  AviatorExpressionBuilderModal,
  type AviatorFieldOption,
} from 'aviator-expression-builder'

const openModal = ref(true)
const expression = ref('employee_id == 1')

const fields = ref<AviatorFieldOption[]>([
  { label: 'employee_id', value: 'employee_id', type: 'number' },
  { label: 'device_count', value: 'device_count', type: 'number' },
  { label: 'name', value: 'name', type: 'string' },
])

function onSave(value: string) {
  expression.value = value
}
</script>

<style scoped>
.playground {
  min-height: 100vh;
}
</style>
