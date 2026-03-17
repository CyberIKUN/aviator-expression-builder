# Changelog

All notable changes to this repository will be documented in this file.

## Unreleased

- Rewrite package docs for external open-source users (`README.md`, `PUBLIC_API.md`).
- Add TypeScript declaration files and `exports.types` for all public entrypoints.
- Add public API smoke check script (`scripts/check-public-api.mjs`).
- Add release readiness script (`scripts/check-release-readiness.mjs`).
- Exclude source maps from npm publish files to reduce tarball size.
- Align CI and publish workflows with the new release checks.

## 0.0.1 - 2026-03-13

- Bootstrap independent workspace demo.
- Add publish-ready package under `packages/aviator-expression-builder`.
- Add demo app under `apps/demo` for integration reference.
