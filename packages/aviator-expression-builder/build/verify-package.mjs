import { access, readFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '../../../..')
const distRoot = resolve(repoRoot, 'dist/aviator-expression-builder')
const packageJsonPath = resolve(distRoot, 'package.json')
const strictTypes = process.argv.includes('--strict-types')

const PLACEHOLDER_PACKAGE_NAME = '@your-scope/aviator-expression-builder'

async function exists(path) {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

function normalizePath(path) {
  return path.startsWith('./') ? path.slice(2) : path
}

function addUnique(target, values) {
  values.forEach((value) => {
    if (value && !target.includes(value)) {
      target.push(value)
    }
  })
}

function collectFilePaths(packageJson) {
  const required = []
  const optional = []

  addUnique(required, [packageJson.main, packageJson.module])

  if (strictTypes) {
    addUnique(required, [packageJson.types])
  } else {
    addUnique(optional, [packageJson.types])
  }

  const exportsField = packageJson.exports || {}
  Object.values(exportsField).forEach((entry) => {
    if (typeof entry === 'string') {
      addUnique(required, [entry])
      return
    }

    if (entry && typeof entry === 'object') {
      addUnique(required, [entry.import, entry.require, entry.default])
      if (strictTypes) {
        addUnique(required, [entry.types])
      } else {
        addUnique(optional, [entry.types])
      }
    }
  })

  return {
    required: required.map(normalizePath),
    optional: optional.map(normalizePath),
  }
}

async function verifyFiles(paths, label) {
  const missing = []

  for (const relativePath of paths) {
    const absolutePath = resolve(distRoot, relativePath)
    if (!await exists(absolutePath)) {
      missing.push(relativePath)
    }
  }

  if (missing.length > 0) {
    throw new Error(`${label} files missing:\n${missing.map((file) => `- ${file}`).join('\n')}`)
  }
}

async function main() {
  if (!await exists(packageJsonPath)) {
    throw new Error('Missing dist package.json. Run prepare-package before verify.')
  }

  const packageJson = JSON.parse(await readFile(packageJsonPath, 'utf8'))
  const { required, optional } = collectFilePaths(packageJson)

  await verifyFiles(required, 'Required')

  if (packageJson.name === PLACEHOLDER_PACKAGE_NAME) {
    throw new Error('package.json still uses placeholder name. Set AEB_PACKAGE_NAME before prepare.')
  }

  const missingOptional = []
  for (const relativePath of optional) {
    const absolutePath = resolve(distRoot, relativePath)
    if (!await exists(absolutePath)) {
      missingOptional.push(relativePath)
    }
  }

  if (strictTypes && missingOptional.length > 0) {
    throw new Error(`Optional files should exist in strict mode:\n${missingOptional.map((file) => `- ${file}`).join('\n')}`)
  }

  if (!strictTypes && missingOptional.length > 0) {
    process.stdout.write(
      `Warning: optional files missing (non-strict mode):\n${missingOptional.map((file) => `- ${file}`).join('\n')}\n`,
    )
  }

  process.stdout.write('AviatorExpressionBuilder dist package verification passed.\n')
}

main()
