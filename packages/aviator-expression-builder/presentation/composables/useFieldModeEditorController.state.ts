import { computed } from 'vue'
import type { FieldOption } from '../../infrastructure/engine/types'
import type { FieldModeEditorProps } from './useFieldModeEditorController.types'

export interface UseFieldModeEditorControllerStateOptions {
  props: FieldModeEditorProps
}

export function useFieldModeEditorControllerState(options: UseFieldModeEditorControllerStateOptions) {
  const { props } = options

  const baseFieldName = computed(() => {
    if (!props.node.field) return ''
    const match = props.node.field.match(/^(.+)\[(\d+)\]$/)
    return match ? match[1] : props.node.field
  })

  const arrayIndex = computed(() => {
    if (!props.node.field) return undefined
    const match = props.node.field.match(/\[(\d+)\]$/)
    return match ? Number.parseInt(match[1], 10) : undefined
  })

  const isArrayField = computed(() => {
    const baseField = baseFieldName.value
    const field = props.availableFields.find((item) => item.value === baseField)
    return field?.type === 'array'
  })

  const fieldType = computed(() => {
    if (!props.node.field) return 'string'
    const field = props.availableFields.find((item) => item.value === props.node.field)
    return field?.type || 'string'
  })

  const needsValue = computed(() => {
    const comparison = props.node.comparison
    if (comparison === 'belong' || comparison === 'isIpInNetmaskList') {
      return true
    }
    return comparison !== '== nil'
      && comparison !== '!= nil'
      && comparison !== '== \'\''
      && comparison !== '!= \'\''
  })

  const getFieldTooltip = (field: FieldOption): string => {
    const parts: string[] = [field.label]
    if (field.type) parts.push(`类型: ${field.type}`)
    if (field.example) parts.push(`示例: ${field.example}`)
    return parts.join('\n')
  }

  const getTypeColor = (type: string): string => {
    const colorMap: Record<string, string> = {
      string: 'blue',
      number: 'green',
      boolean: 'orange',
      array: 'purple',
      object: 'cyan',
      datetime: 'magenta',
      ip: 'gold',
      email: 'lime',
      url: 'arcoblue',
    }
    return colorMap[type] || 'gray'
  }

  return {
    baseFieldName,
    arrayIndex,
    isArrayField,
    fieldType,
    needsValue,
    getFieldTooltip,
    getTypeColor,
  }
}
