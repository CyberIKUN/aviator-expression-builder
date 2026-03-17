# Releasing

## 1. Prepare

1. Update package version:
   - `packages/aviator-expression-builder/package.json`
2. Update [CHANGELOG.md](./CHANGELOG.md)
3. Replace placeholder metadata in package:
   - `packages/aviator-expression-builder/package.json`
   - fields: `repository.url`, `homepage`, `bugs.url`
4. Run release checks:
   - `pnpm check:release`

## 2. Publish

1. Push to `main`.
2. Trigger GitHub Actions workflow:
   - `.github/workflows/publish.yml`
3. Or publish locally:
   - `cd packages/aviator-expression-builder`
   - `npm publish --access public`

## 3. Verify

1. Install from npm in a clean sample app.
2. Smoke test these imports:
   - `aviator-expression-builder`
   - `aviator-expression-builder/vue`
   - `aviator-expression-builder/headless`
3. Confirm package size is expected (source maps are excluded from npm publish files).
