# Aviator Expression Builder

A Vue 3 visual builder for Aviator expressions with parsing, editing, validation, and generation support.

一个面向 Vue 3 的 Aviator 表达式可视化构建器，支持表达式解析、可视化编辑、语义校验与字符串生成。

## Quick Start / 快速开始

### Install / 安装

```bash
pnpm add aviator-expression-builder
```

Peer dependencies:
- `vue@^3.5.0`
- `@arco-design/web-vue@^2.57.0`

### Minimal Usage / 最小可运行示例

```vue
<template>
  <AviatorExpressionBuilderModal
    v-model:visible="visible"
    v-model="expression"
    :fields="fields"
    title="Expression Builder"
    @save="onSave"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  AviatorExpressionBuilderModal,
  type AviatorFieldOption,
} from "aviator-expression-builder";
import "aviator-expression-builder/style.css";

const visible = ref(true);
const expression = ref("employee_id == 1");
const fields = ref<AviatorFieldOption[]>([
  { label: "employee_id", value: "employee_id", type: "number" },
  { label: "name", value: "name", type: "string" },
]);

function onSave(nextExpression: string) {
  expression.value = nextExpression;
}
</script>
```

## Documentation / 文档入口

- Full package guide (detailed usage flow + expression capabilities + full function reference):  
  [packages/aviator-expression-builder/README.md](./packages/aviator-expression-builder/README.md)
- Public API:  
  [packages/aviator-expression-builder/PUBLIC_API.md](./packages/aviator-expression-builder/PUBLIC_API.md)

## Repository Structure / 仓库结构

- `packages/aviator-expression-builder`: publishable package
- `apps/demo`: Vue + Vite demo app

## Local Demo / 本地运行 Demo

```bash
pnpm install
pnpm dev
```

## For Maintainers / 维护者入口

- Releasing guide: [RELEASING.md](./RELEASING.md)
- Contributing guide: [CONTRIBUTING.md](./CONTRIBUTING.md)
- CI workflow: [.github/workflows/ci.yml](./.github/workflows/ci.yml)
- Publish workflow: [.github/workflows/publish.yml](./.github/workflows/publish.yml)
