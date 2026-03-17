import { createTreeExpressionBuilderReorderActions } from './useTreeExpressionBuilderNodeActions.reorder'
import { createNodeActionHelpers, type TreeExpressionBuilderState } from './useTreeExpressionBuilderNodeActions.shared'
import { createTreeExpressionBuilderStructureActions } from './useTreeExpressionBuilderNodeActions.structure'

export function useTreeExpressionBuilderNodeActions(state: TreeExpressionBuilderState) {
  const helpers = createNodeActionHelpers(state)

  const structureActions = createTreeExpressionBuilderStructureActions({
    state,
    commitNodeMutation: helpers.commitNodeMutation,
  })

  const reorderActions = createTreeExpressionBuilderReorderActions({
    state,
    commitNodeMutation: helpers.commitNodeMutation,
    notifyDragFailure: helpers.notifyDragFailure,
  })

  return {
    ...structureActions,
    ...reorderActions,
  }
}
