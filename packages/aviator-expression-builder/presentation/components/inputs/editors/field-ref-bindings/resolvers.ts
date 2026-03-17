import type { FieldOption } from '../../../../../infrastructure/engine/types'
import type { FieldRefEditorProps } from './types'

export function createFieldRefResolvers(props: FieldRefEditorProps) {
  const resolveFieldTooltip = (field: FieldOption): string => {
    if (props.getFieldTooltip) {
      return props.getFieldTooltip(field)
    }

    const parts: string[] = [field.label]
    if (field.type) parts.push(`类型: ${field.type}`)
    if (field.example) parts.push(`示例: ${field.example}`)
    return parts.join('\n')
  }

  const resolveTypeColor = (type: string): string => {
    if (props.getTypeColor) {
      return props.getTypeColor(type)
    }

    const colorMap: Record<string, string> = {
      string: 'blue',
      number: 'green',
      boolean: 'orange',
      datetime: 'magenta',
      array: 'purple',
      object: 'cyan',
      ip: 'gold',
      email: 'lime',
      url: 'arcoblue',
    }

    return colorMap[type] || 'default'
  }

  return {
    resolveFieldTooltip,
    resolveTypeColor,
  }
}
