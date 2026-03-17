import type { AviatorFunction, FieldOption, TreeNode } from '../../infrastructure/engine/types'
import type { TreeDragPosition } from '../types/treeInteraction'

export interface TreeNodeControllerProps {
  node: TreeNode
  availableFields: FieldOption[]
  level: number
  allowedFunctions?: AviatorFunction[]
  hideActions?: boolean
  expectedReturnType?: string
  getParameterDataType?: (nodeId: string, paramName: string) => string
  validationErrors?: Array<{ nodeId: string, message: string }>
}

export interface UseTreeNodeControllerOptions {
  props: TreeNodeControllerProps
  emitUpdateNode: (nodeId: string, updates: Partial<TreeNode>) => void
  emitCopyNode: (nodeId: string) => void
  emitUpdateParameterType: (paramName: string, type: string) => void
  emitUpdateParameterValueDataType: (nodeId: string, paramName: string, dataType: string) => void
  emitDragNode: (
    sourceNodeId: string,
    targetNodeId: string,
    position: TreeDragPosition,
  ) => void
}

export type DragPosition = TreeDragPosition
