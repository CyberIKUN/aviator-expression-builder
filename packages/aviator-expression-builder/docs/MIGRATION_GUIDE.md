# Migration Guide

This guide helps migrate existing usage to the independent `aviator-expression-builder` package.

## Import path migration

Use package entrypoints instead of internal project paths:

- UI:
  - from: project-local component paths
  - to: `aviator-expression-builder` or `aviator-expression-builder/vue`
- Headless:
  - from: project-local service/engine paths
  - to: `aviator-expression-builder/headless`
- Legacy:
  - from: project-local legacy modal path
  - to: `aviator-expression-builder/legacy`

## Style import

Ensure style import is from package:

```ts
import "aviator-expression-builder/style.css";
```

## API compatibility

- Root export keeps Vue + headless + legacy exports.
- Subpath exports remain stable: `vue/headless/legacy/style.css`.
- No deep-import compatibility is promised for internal files.
