import { useFieldModeEditorControllerActions } from './useFieldModeEditorController.actions'
import { createFieldModeEditorControllerExposed } from './useFieldModeEditorController.exposed'
import { useFieldModeEditorControllerState } from './useFieldModeEditorController.state'
import type { UseFieldModeEditorControllerOptions } from './useFieldModeEditorController.types'

export type {
  FieldModeEditorProps,
  UseFieldModeEditorControllerOptions,
} from './useFieldModeEditorController.types'

export function useFieldModeEditorController(options: UseFieldModeEditorControllerOptions) {
  const state = useFieldModeEditorControllerState({ props: options.props })
  const actions = useFieldModeEditorControllerActions(state, options)

  return createFieldModeEditorControllerExposed({
    state,
    actions,
  })
}
