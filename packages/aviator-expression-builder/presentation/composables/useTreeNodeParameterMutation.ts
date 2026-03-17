import type { TreeNode } from '../../infrastructure/engine/types'
import type { UseTreeNodeControllerOptions } from './useTreeNodeController.types'

type UseTreeNodeParameterMutationOptions = Pick<
  UseTreeNodeControllerOptions,
  'props' | 'emitUpdateNode' | 'emitUpdateParameterType' | 'emitUpdateParameterValueDataType'
>

const isTreeNode = (value: unknown): value is TreeNode => {
  return typeof value === 'object' && value !== null && 'id' in value
}

export function useTreeNodeParameterMutation(options: UseTreeNodeParameterMutationOptions) {
  const {
    props,
    emitUpdateNode,
    emitUpdateParameterType,
    emitUpdateParameterValueDataType,
  } = options

  const updateParameter = (paramName: string, value: any) => {
    const parameters = (props.node.parameters || []).map((param) => ({ ...param }))
    const index = parameters.findIndex((param) => param.name === paramName)
    if (index < 0) return

    if (isTreeNode(value)) {
      parameters[index] = {
        ...parameters[index],
        nestedNode: value,
        isNested: true,
        value: undefined,
      }
    } else {
      parameters[index] = {
        ...parameters[index],
        value,
        isNested: false,
        nestedNode: undefined,
      }
    }

    emitUpdateNode(props.node.id, { parameters })
  }

  const updateParameterType = (paramName: string, type: string) => {
    const parameters = (props.node.parameters || []).map((param) => ({ ...param }))
    const index = parameters.findIndex((param) => param.name === paramName)
    if (index < 0) return

    parameters[index] = {
      ...parameters[index],
      type: type as 'field' | 'value' | 'expression' | 'condition' | 'lambda',
    }

    emitUpdateNode(props.node.id, { parameters })
    emitUpdateParameterType(paramName, type)
  }

  const updateParameterValueDataType = (paramName: string, dataType: string) => {
    emitUpdateParameterValueDataType(props.node.id, paramName, dataType)
  }

  const updateConditionValueDataType = (_fieldName: string, dataType: string) => {
    emitUpdateParameterValueDataType(props.node.id, 'condition_value', dataType)
  }

  const updateFunctionValueDataType = (fieldName: string, dataType: string) => {
    emitUpdateParameterValueDataType(props.node.id, fieldName, dataType)
  }

  return {
    updateParameter,
    updateParameterType,
    updateParameterValueDataType,
    updateConditionValueDataType,
    updateFunctionValueDataType,
  }
}
