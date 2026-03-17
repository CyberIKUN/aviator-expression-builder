# Public API

## Root (`aviator-expression-builder`)

From [`index.d.ts`](./index.d.ts):

- Vue exports:
  - `AviatorExpressionBuilder`
  - `AviatorExpressionBuilderModal`
  - `AviatorExpressionBuilderPlugin`
  - `installAviatorExpressionBuilder`
  - `defaultTreeExpressionBuilderNotifier`
  - `noopTreeExpressionBuilderNotifier`
  - `TreeExpressionBuilderNotifier` (type)
  - `AviatorExpressionBuilderPluginOptions` (type)
  - `AviatorExpressionBuilderPluginComponentNames` (type)
- Legacy export:
  - `AviatorExpressionBuilderLegacyModal`
- Headless exports:
  - `createAviatorExpressionService`
  - `parseExpression`
  - `parseExpressionNodes`
  - `generateExpression`
  - `validateExpression`
  - `createConditionNode`
  - `createGroupNode`
  - `generateNodeId`
  - `extractFieldPaths`
  - `extractFieldsFromJson`
  - `shouldBeLambdaParameter`
  - `AVIATOR_FUNCTIONS`
  - `COMPARISON_OPERATORS`
  - All related headless types (tree nodes, runtime options, service contracts)

## Subpath Exports

- `aviator-expression-builder/vue`
  - Vue components + plugin + notifier contracts
- `aviator-expression-builder/headless`
  - Parser/generator/validator/service utilities and types
- `aviator-expression-builder/legacy`
  - Legacy modal component only
- `aviator-expression-builder/style.css`
  - Component styles

## Stability Notes

- This package keeps `index/vue/headless/legacy/style.css` export shape stable.
- Internal file layout is not considered public API.
- Prefer type references from package entrypoints, not deep imports.
