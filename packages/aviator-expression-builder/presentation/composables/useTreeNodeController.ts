import { useTreeNodeDrag } from './useTreeNodeDrag'
import { useTreeNodeMutation } from './useTreeNodeMutation'
import type { UseTreeNodeControllerOptions } from './useTreeNodeController.types'

export type {
  DragPosition,
  TreeNodeControllerProps,
  UseTreeNodeControllerOptions,
} from './useTreeNodeController.types'

export function useTreeNodeController(options: UseTreeNodeControllerOptions) {
  const mutation = useTreeNodeMutation(options)
  const drag = useTreeNodeDrag(options)

  return {
    ...drag,
    ...mutation,
  }
}
