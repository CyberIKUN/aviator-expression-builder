# Contributing

## Development

1. Install deps:
   - `pnpm install`
2. Start demo:
   - `pnpm dev`
3. Validate before PR:
   - `pnpm check`
   - `pnpm check:release:meta`

## Pull Request Guidelines

1. Keep changes scoped (demo app vs package code).
2. Update docs when API or usage changes.
3. Add changelog entry for user-facing changes.

## Release Notes

For package releases, update:
- `packages/aviator-expression-builder/package.json` version
- `/CHANGELOG.md`
- package metadata placeholders (`repository/homepage/bugs`) to real URLs
