import { access, copyFile, mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const packageRoot = resolve(__dirname, '..')
const repoRoot = resolve(__dirname, '../../../..')
const distRoot = resolve(repoRoot, 'dist/aviator-expression-builder')
const templatePath = resolve(__dirname, 'package.template.json')

const PLACEHOLDER_PACKAGE_NAME = '@your-scope/aviator-expression-builder'

async function exists(path) {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

async function copyIfExists(source, target) {
  if (!await exists(source)) {
    return false
  }

  await mkdir(dirname(target), { recursive: true })
  await copyFile(source, target)
  return true
}

function normalizeBoolean(value) {
  if (value === undefined) {
    return undefined
  }

  if (value === 'true' || value === '1') {
    return true
  }

  if (value === 'false' || value === '0') {
    return false
  }

  return undefined
}

function resolvePackageJson(template) {
  const packageJson = { ...template }
  const packageName = process.env.AEB_PACKAGE_NAME
  const packageVersion = process.env.AEB_PACKAGE_VERSION
  const packagePrivate = normalizeBoolean(process.env.AEB_PACKAGE_PRIVATE)

  if (packageName) {
    packageJson.name = packageName
  }

  if (packageVersion) {
    packageJson.version = packageVersion
  }

  if (packagePrivate !== undefined) {
    packageJson.private = packagePrivate
  }

  return packageJson
}

async function main() {
  await mkdir(distRoot, { recursive: true })

  const template = JSON.parse(await readFile(templatePath, 'utf8'))
  const packageJson = resolvePackageJson(template)
  const packageJsonPath = resolve(distRoot, 'package.json')

  await writeFile(
    packageJsonPath,
    `${JSON.stringify(packageJson, null, 2)}\n`,
    'utf8',
  )

  await copyIfExists(resolve(packageRoot, 'README.md'), resolve(distRoot, 'README.md'))
  await copyIfExists(resolve(packageRoot, 'PUBLIC_API.md'), resolve(distRoot, 'PUBLIC_API.md'))
  await copyIfExists(resolve(repoRoot, 'LICENSE'), resolve(distRoot, 'LICENSE'))

  const prepareMeta = {
    preparedAt: new Date().toISOString(),
    packageName: packageJson.name,
    packageVersion: packageJson.version,
    usesPlaceholderName: packageJson.name === PLACEHOLDER_PACKAGE_NAME,
  }

  await writeFile(
    resolve(distRoot, 'prepare-meta.json'),
    `${JSON.stringify(prepareMeta, null, 2)}\n`,
    'utf8',
  )
}

main()
