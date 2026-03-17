import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const packageDir = path.join(rootDir, "packages/aviator-expression-builder");
const packageJsonPath = path.join(packageDir, "package.json");
const strictMetadata = process.argv.includes("--strict-metadata");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function ensureField(value, fieldName) {
  assert.ok(value, `Missing required field: ${fieldName}`);
}

function ensureFileExists(filePath, hint) {
  assert.ok(fs.existsSync(filePath), `Missing file: ${hint} (${filePath})`);
}

function hasPlaceholder(value) {
  return typeof value === "string" && value.includes("your-org");
}

function escapeRegExp(input) {
  return input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const pkg = readJson(packageJsonPath);

ensureField(pkg.name, "name");
ensureField(pkg.version, "version");
ensureField(pkg.description, "description");
ensureField(pkg.license, "license");
ensureField(pkg.repository?.url, "repository.url");
ensureField(pkg.homepage, "homepage");
ensureField(pkg.bugs?.url, "bugs.url");

const placeholders = [];
if (hasPlaceholder(pkg.repository?.url)) placeholders.push("repository.url");
if (hasPlaceholder(pkg.homepage)) placeholders.push("homepage");
if (hasPlaceholder(pkg.bugs?.url)) placeholders.push("bugs.url");
if (placeholders.length > 0) {
  const message = `Replace placeholder metadata before release: ${placeholders.join(", ")}`;
  if (strictMetadata) {
    assert.fail(message);
  } else {
    console.warn(`[warn] ${message}`);
  }
}

ensureField(pkg.main, "main");
ensureField(pkg.module, "module");
ensureField(pkg.types, "types");

ensureFileExists(path.join(packageDir, pkg.main), `main (${pkg.main})`);
ensureFileExists(path.join(packageDir, pkg.module), `module (${pkg.module})`);
ensureFileExists(path.join(packageDir, pkg.types), `types (${pkg.types})`);

const exportsMap = pkg.exports || {};
for (const [subpath, config] of Object.entries(exportsMap)) {
  if (typeof config === "string") {
    ensureFileExists(path.join(packageDir, config), `exports["${subpath}"]`);
    continue;
  }
  for (const [condition, target] of Object.entries(config)) {
    ensureFileExists(
      path.join(packageDir, target),
      `exports["${subpath}"].${condition}`
    );
  }
}

const filesField = pkg.files || [];
assert.ok(
  !filesField.includes("*.map"),
  'package.json files should not include "*.map" for publish size control'
);

const localPathLeakPattern = /\/Users\/|\/home\/|[A-Za-z]:\\Users\\/;
const workspacePathPattern = new RegExp(escapeRegExp(rootDir), "g");
const packageRootFiles = fs.readdirSync(packageDir);
const scanTargets = packageRootFiles.filter((name) => {
  if (name.endsWith(".map")) return false;
  if (name.endsWith(".png") || name.endsWith(".jpg") || name.endsWith(".jpeg"))
    return false;
  const full = path.join(packageDir, name);
  return fs.statSync(full).isFile();
});
const packageDocsDir = path.join(packageDir, "docs");
const packageDocTargets = fs.existsSync(packageDocsDir)
  ? fs
      .readdirSync(packageDocsDir)
      .filter((name) => name.toLowerCase().endsWith(".md"))
      .map((name) => path.join("docs", name))
  : [];
const packageMarkdownTargets = ["README.md", "PUBLIC_API.md", ...packageDocTargets];
const packageScanTargets = Array.from(new Set([...scanTargets, ...packageMarkdownTargets]));

const leaks = [];
for (const name of packageScanTargets) {
  const fullPath = path.join(packageDir, name);
  if (!fs.existsSync(fullPath)) continue;
  if (!fs.statSync(fullPath).isFile()) continue;
  const content = fs.readFileSync(fullPath, "utf8");
  if (localPathLeakPattern.test(content) || workspacePathPattern.test(content)) {
    leaks.push(path.relative(rootDir, fullPath).replaceAll(path.sep, "/"));
  }
}

const rootDocFiles = ["README.md", "RELEASING.md", "CONTRIBUTING.md", "CHANGELOG.md"];
for (const name of rootDocFiles) {
  const fullPath = path.join(rootDir, name);
  if (!fs.existsSync(fullPath)) continue;
  const content = fs.readFileSync(fullPath, "utf8");
  if (localPathLeakPattern.test(content) || workspacePathPattern.test(content)) {
    leaks.push(name);
  }
}

assert.equal(
  leaks.length,
  0,
  `Found local absolute path leaks in package files: ${leaks.join(", ")}`
);

console.log("Release readiness check passed.");
