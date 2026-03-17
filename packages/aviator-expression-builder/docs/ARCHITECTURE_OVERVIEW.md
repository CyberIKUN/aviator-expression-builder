# Architecture Overview

This package is organized as a layered library so UI and expression engine can evolve independently.

## Layers

- `domain/`
  - Core model and contract definitions.
- `application/`
  - Service orchestration (`parse`, `generate`, `validate`) and runtime state wiring.
- `infrastructure/`
  - Aviator parser/generator/validator implementation and engine adapters.
- `presentation/`
  - Vue components, interaction bindings, and styles for visual editing.
- `public-api/`
  - Export assembly for root/vue/headless/legacy entrypoints.
- `build/`
  - Package build and verification scripts.

## Runtime entrypoints

- `index` (root): combined exports for app use.
- `vue`: UI + plugin surface.
- `headless`: engine/service-only surface.
- `legacy`: compatibility modal component.

## Design goals

- Keep export surface stable while allowing internal refactor.
- Isolate UI concerns from parser/generator concerns.
- Keep headless API consumable in non-UI workflows.
