import { onMounted, onUnmounted, ref } from 'vue'
import type { DragPosition, UseTreeNodeControllerOptions } from './useTreeNodeController.types'
import { useTreeNodeDragHandlers } from './useTreeNodeDrag.handlers'
import {
  clearAllTreeNodeDragStyles,
  ensureGlobalDragListeners,
  releaseGlobalDragListeners,
} from './useTreeNodeDrag.shared'

type UseTreeNodeDragOptions = Pick<UseTreeNodeControllerOptions, 'props' | 'emitDragNode'>

export function useTreeNodeDrag(options: UseTreeNodeDragOptions) {
  const { props, emitDragNode } = options

  const isDragOver = ref(false)
  const dragPosition = ref<DragPosition | null>(null)

  const clearDragState = () => {
    isDragOver.value = false
    dragPosition.value = null
  }

  const clearAllDragStates = () => {
    clearAllTreeNodeDragStyles()
    clearDragState()
  }

  onMounted(() => {
    ensureGlobalDragListeners()
  })

  onUnmounted(() => {
    releaseGlobalDragListeners()
  })

  const {
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  } = useTreeNodeDragHandlers({
    nodeId: props.node.id,
    nodeType: props.node.type,
    isDragOver,
    dragPosition,
    emitDragNode,
    clearDragState,
    clearAllDragStates,
  })

  return {
    isDragOver,
    dragPosition,
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  }
}
