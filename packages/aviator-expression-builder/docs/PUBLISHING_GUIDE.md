# Publishing Guide

## Preconditions

- Ensure package metadata in `package.json` is final.
- Ensure no local absolute path leakage in docs or package files.

## Validation commands

Run from workspace root:

```bash
pnpm check:api
pnpm check:package
pnpm check:release -- --strict-metadata
```

## What these checks verify

- Public exports exist and can be imported.
- `npm pack --dry-run` content is valid.
- Metadata placeholders are removed in strict mode.
- No local machine paths are leaked in package or docs.

## Publish flow

```bash
pnpm --filter aviator-expression-builder build
npm publish ./packages/aviator-expression-builder --access public
```

Adjust version/tag workflow according to your release policy.
