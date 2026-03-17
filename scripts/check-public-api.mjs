import assert from "node:assert/strict";

import * as rootApi from "../packages/aviator-expression-builder/index.js";
import * as vueApi from "../packages/aviator-expression-builder/vue.js";
import * as headlessApi from "../packages/aviator-expression-builder/headless.js";
import * as legacyApi from "../packages/aviator-expression-builder/legacy.js";

function expectExports(moduleName, mod, names) {
  for (const name of names) {
    assert.ok(
      Object.prototype.hasOwnProperty.call(mod, name),
      `${moduleName} missing export: ${name}`
    );
  }
}

expectExports("root", rootApi, [
  "AviatorExpressionBuilder",
  "AviatorExpressionBuilderModal",
  "AviatorExpressionBuilderPlugin",
  "installAviatorExpressionBuilder",
  "createAviatorExpressionService",
  "parseExpression",
  "parseExpressionNodes",
  "generateExpression",
  "validateExpression",
]);

expectExports("vue", vueApi, [
  "AviatorExpressionBuilder",
  "AviatorExpressionBuilderModal",
  "AviatorExpressionBuilderPlugin",
  "installAviatorExpressionBuilder",
]);

expectExports("headless", headlessApi, [
  "createAviatorExpressionService",
  "parseExpression",
  "parseExpressionNodes",
  "generateExpression",
  "validateExpression",
  "AVIATOR_FUNCTIONS",
  "COMPARISON_OPERATORS",
]);

expectExports("legacy", legacyApi, ["AviatorExpressionBuilderLegacyModal"]);

const expression = "age >= 18 && string.startsWith(name, 'a')";
const parsed = headlessApi.parseExpression(expression, {
  availableFields: [
    { label: "Age", value: "age", type: "number" },
    { label: "Name", value: "name", type: "string" },
  ],
});

assert.equal(typeof parsed.success, "boolean");
assert.ok(Array.isArray(parsed.nodes), "parseExpression should return nodes array");

const parsedNodes = headlessApi.parseExpressionNodes(expression, {
  availableFields: [
    { label: "Age", value: "age", type: "number" },
    { label: "Name", value: "name", type: "string" },
  ],
});
assert.ok(Array.isArray(parsedNodes), "parseExpressionNodes should return array");

const service = headlessApi.createAviatorExpressionService({
  availableFields: [
    { label: "Age", value: "age", type: "number" },
    { label: "Name", value: "name", type: "string" },
  ],
});

const regenerated = service.generate(parsed.nodes);
assert.equal(typeof regenerated, "string");
if (parsed.nodes.length > 0) {
  assert.ok(regenerated.length > 0, "generate should return non-empty expression");
}

const errors = service.validate(parsed.nodes);
assert.ok(Array.isArray(errors), "validate should return array");

console.log("Public API smoke check passed.");
