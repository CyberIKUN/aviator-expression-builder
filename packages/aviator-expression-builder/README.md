# Aviator Expression Builder

A Vue 3 visual builder for Aviator expressions with parsing, editing, validation, and generation support.

一个面向 Vue 3 的 Aviator 表达式可视化构建器，支持表达式解析、可视化编辑、语义校验与字符串生成。

## What It Solves / 解决什么问题

### EN
`aviator-expression-builder` helps teams replace hand-written expression strings with a visual workflow:
- Parse existing expressions into editable trees.
- Build or modify conditions with type-aware operators.
- Validate node-level issues before saving.
- Generate Aviator expressions back from structured nodes.

### 中文
`aviator-expression-builder` 用于把“手写表达式字符串”升级为“可视化编辑流程”：
- 把已有表达式解析成可编辑的树结构。
- 按字段类型推荐可用操作符并可视化修改条件。
- 保存前做节点级语义校验并提示问题。
- 把结构化节点重新生成 Aviator 表达式字符串。

## Quick Start / 快速开始

### 1) Install / 安装

```bash
pnpm add aviator-expression-builder
```

Peer dependencies:
- `vue@^3.5.0`
- `@arco-design/web-vue@^2.57.0`

### 2) Import style / 引入样式

```ts
import "aviator-expression-builder/style.css";
```

### 3) Minimal modal usage / 最小可运行 Modal 示例

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
  { label: "client_ip", value: "client_ip", type: "ip" },
]);

function onSave(nextExpression: string) {
  expression.value = nextExpression;
}
</script>
```

## Integration Flow / 接入流程（7 步）

1. **Define field options / 定义字段列表**  
   Provide `AviatorFieldOption[]` with `label/value/type` as editor input.
2. **Mount modal or builder / 挂载 Modal 或 Builder 组件**  
   Use `AviatorExpressionBuilderModal` for dialog workflow, or `AviatorExpressionBuilder` for embedded pages.
3. **Bind expression string / 双向绑定表达式字符串**  
   Bind `v-model` to keep your source expression synchronized with UI edits.
4. **Control open/close state / 管理弹窗开关状态**  
   Use `v-model:visible` on modal and wire save/cancel behavior from your page.
5. **Handle save callback / 处理保存事件**  
   On `@save`, persist the expression and close modal (or continue editing).
6. **Use `dataPreview` when needed / 按需使用 `dataPreview`**  
   Pass JSON string to let the builder extract candidate fields for faster setup.
7. **Reopen for secondary edits / 支持二次编辑**  
   Reopen modal with existing expression string; it will be parsed and restored for edits.

### Modal props/events you will usually use / 常用 Modal 参数与事件

- Props:
  - `visible: boolean`
  - `modelValue: string` (`v-model`)
  - `fields: AviatorFieldOption[]`
  - `dataPreview?: string`
  - `title?: string`
  - `width?: number`
  - `notifier?: TreeExpressionBuilderNotifier`
- Emits:
  - `update:visible`
  - `update:modelValue`
  - `save`
  - `cancel`

### Example with `dataPreview` and field extraction / 使用 `dataPreview` 与字段提取

```ts
import {
  extractFieldsFromJson,
  type AviatorFieldOption,
} from "aviator-expression-builder/headless";

const rawPreview = `{
  "request": { "uri": "/api/v1/users", "method": "GET" },
  "response": { "status": 200 },
  "client_ip": "10.1.2.3"
}`;

const inferredFields: AviatorFieldOption[] = extractFieldsFromJson(rawPreview);
// pass inferredFields to :fields and rawPreview to :data-preview
```

## Expression Capabilities / 表达式能力说明

### Operator matrix by field type / 按字段类型的操作符矩阵

Source of truth: `COMPARISON_OPERATORS`.

| Field type | Supported operators |
| --- | --- |
| `boolean` | `==`, `!=` |
| `string` | `==`, `!=`, `== nil`, `!= nil`, `== ''`, `!= ''`, `contains`, `match(regex)`, `startsWith`, `endsWith` |
| `number` | `==`, `!=`, `>`, `>=`, `<`, `<=`, `== nil`, `!= nil` |
| `ip` | `==`, `!=`, `== nil`, `!= nil`, `== ''`, `!= ''`, `contains`, `match(regex)`, `startsWith`, `endsWith`, `isIpInNetmaskList` |
| `url` | `==`, `!=`, `== nil`, `!= nil` |
| `email` | `==`, `!=`, `== nil`, `!= nil` |
| `uuid` | `==`, `!=`, `== nil`, `!= nil` |
| `datetime` | `==`, `!=`, `>`, `>=`, `<`, `<=` |
| `array` | `==`, `!=`, `belong` |
| `object` | `==`, `!=` |

### Special comparison semantics / 特殊比较语义

- `== nil` / `!= nil`: compares against `nil`/`null` keyword.
- `== ''` / `!= ''`: explicit empty-string checks for string-like fields.
- `match`: regex-like matching mode (derived from `string.match(...)` patterns in parser logic).
- `belong`: list membership mode (mapped from `seq.some(... include(seq.list(...)))` patterns).
- `isIpInNetmaskList`: IP-in-CIDR-list capability.

### Logic and syntax support / 逻辑与语法支持

- Logical operators: `&&`, `||`
- Unary negation: `!`
- Binary comparisons: `==`, `!=`, `>`, `>=`, `<`, `<=`
- Lambda syntax: `lambda(...) -> ... end`
- Member access / field path: e.g. `request.uri`, `logTagValues[0]`

### Node model (headless) / 节点模型（headless）

The engine works on tree nodes (`group` and `condition`) and supports both:
- Field mode: `field + comparison + value`
- Function mode: `functionName + parameters (+ comparison/value for non-boolean return)`

```ts
import type { AviatorTreeNode } from "aviator-expression-builder/headless";

const nodes: AviatorTreeNode[] = [
  {
    id: "root",
    type: "group",
    operator: "and",
    children: [
      {
        id: "c1",
        type: "condition",
        field: "employee_id",
        comparison: "==",
        value: 1,
      },
    ],
  },
];
```

## Headless API Workflow / 纯 API 流程（parse -> edit -> validate -> generate）

```ts
import {
  createAviatorExpressionService,
  parseExpression,
  validateExpression,
  generateExpression,
  type AviatorFieldOption,
} from "aviator-expression-builder/headless";

const availableFields: AviatorFieldOption[] = [
  { label: "employee_id", value: "employee_id", type: "number" },
  { label: "name", value: "name", type: "string" },
];

// Option A: one-shot helpers
const parsed = parseExpression("employee_id == 1", { availableFields });
const errors = validateExpression(parsed.nodes);
const regenerated = generateExpression(parsed.nodes, { availableFields });

// Option B: service object
const service = createAviatorExpressionService({ availableFields });
const tree = service.parse("name contains \"a\"");
const issues = service.validate(tree);
if (issues.length === 0) {
  const output = service.generate(tree);
  console.log(output);
}
```

## Full Function Reference / 全量函数参考

### EN
This section is generated from the runtime function catalog (`AVIATOR_FUNCTIONS`), grouped by category:
`system`, `string`, `math`, `sequence`, `datetime`, `custom`.

### 中文
本节依据运行时函数目录 `AVIATOR_FUNCTIONS` 组织，按 `system`、`string`、`math`、`sequence`、`datetime`、`custom` 分类展示。  
每个函数都包含固定字段：`name`、`description`、`parameters(required/type)`、`returnType`、`example`。

### system (17)

| name | description | parameters (required/type) | returnType | example |
| --- | --- | --- | --- | --- |
| sysdate | 返回当前日期对象 | none | date | sysdate() |
| now | 返回当前毫秒时间戳 | none | number | now() |
| assert | 当predicate结果为false时抛出异常 | predicate[required:yes,type:value,valueType:boolean]; msg[required:no,type:value,valueType:string] | boolean | assert(user.age > 18, "用户未成年") |
| rand | 返回[0,1)或[0,n)的随机数 | n[required:no,type:value,valueType:number] | number | rand() 或 rand(100) |
| cmp | 比较x和y大小，返回0(相等)、1(x>y)或-1(x<y) | x[required:yes,type:value,valueType:any]; y[required:yes,type:value,valueType:any] | number | cmp(request.size, response.size) |
| print | 打印对象到输出流 | obj[required:yes,type:value,valueType:any] | any | print(user.name) |
| println | 打印对象并换行 | obj[required:yes,type:value,valueType:any] | any | println(user.name) |
| long | 将值转为long类型 | v[required:yes,type:value,valueType:any] | number | long(user.age) |
| double | 将值转为double类型 | v[required:yes,type:value,valueType:any] | number | double(user.salary) |
| boolean | 将值转为boolean类型 | v[required:yes,type:value,valueType:any] | boolean | boolean(user.active) |
| str | 将值转为string类型 | v[required:yes,type:value,valueType:any] | string | str(user.id) |
| type | 返回参数的类型 | x[required:yes,type:value,valueType:any] | string | type(user.age) |
| is_def | 返回变量是否已定义 | x[required:yes,type:value,valueType:any] | boolean | is_def(user.email) |
| max | 取所有参数中的最大值 | x1[required:yes,type:value,valueType:number]; x2[required:yes,type:value,valueType:number] | number | max(request.size, response.size) |
| min | 取所有参数中的最小值 | x1[required:yes,type:value,valueType:number]; x2[required:yes,type:value,valueType:number] | number | min(request.size, response.size) |
| load | 加载指定路径的模块，每次重新编译 | path[required:yes,type:value,valueType:string] | any | load("myModule.av") |
| require | 加载指定路径的模块，有缓存机制 | path[required:yes,type:value,valueType:string] | any | require("myModule.av") |

### string (14)

| name | description | parameters (required/type) | returnType | example |
| --- | --- | --- | --- | --- |
| date_to_string | 将Date对象转化为特定格式的字符串 | date[required:yes,type:value,valueType:any]; format[required:yes,type:value,valueType:string] | string | date_to_string(event.time, "yyyy-MM-dd HH:mm:ss") |
| string_to_date | 将特定格式的字符串转化为Date对象 | source[required:yes,type:value,valueType:string]; format[required:yes,type:value,valueType:string] | date | string_to_date(event.created, "yyyy-MM-dd HH:mm:ss") |
| string.contains | 判断s1是否包含s2 | s1[required:yes,type:value,valueType:string]; s2[required:yes,type:value,valueType:string] | boolean | string.contains(request.uri, "/login") |
| string.startsWith | s1是否以s2开始 | s1[required:yes,type:value,valueType:string]; s2[required:yes,type:value,valueType:string] | boolean | string.startsWith(request.uri, "/sso/public") |
| string.endsWith | s1是否以s2结尾 | s1[required:yes,type:value,valueType:string]; s2[required:yes,type:value,valueType:string] | boolean | string.endsWith(request.uri, ".gif") |
| string.length | 求字符串长度 | s[required:yes,type:value,valueType:string] | number | string.length(request.uri) |
| string.indexOf | 求s2在s1中的起始索引位置 | s1[required:yes,type:value,valueType:string]; s2[required:yes,type:value,valueType:string] | number | string.indexOf(request.uri, "/api") |
| string.lastIndexOf | 查找字符串最后出现的位置 | str[required:yes,type:value,valueType:string]; searchStr[required:yes,type:value,valueType:string] | number | string.lastIndexOf(request.uri, "/") |
| string.substring | 截取字符串s,从begin到end | s[required:yes,type:value,valueType:string]; begin[required:yes,type:value,valueType:number]; end[required:no,type:value,valueType:number] | string | string.substring(request.uri, 0, 10) |
| string.split | Java里的String.split方法 | target[required:yes,type:value,valueType:string]; regex[required:yes,type:value,valueType:string]; limit[required:no,type:value,valueType:number] | array | string.split(request.uri, "/") |
| string.join | 将集合里的元素以分隔符连接起来形成字符串 | seq[required:yes,type:value,valueType:any]; separator[required:yes,type:value,valueType:string] | string | string.join(headers, ",") |
| string.replace_first | Java里的String.replaceFirst方法 | s[required:yes,type:value,valueType:string]; regex[required:yes,type:value,valueType:string]; replacement[required:yes,type:value,valueType:string] | string | string.replace_first(request.uri, "/api/", "/new/") |
| string.replace_all | Java里的String.replaceAll方法 | s[required:yes,type:value,valueType:string]; regex[required:yes,type:value,valueType:string]; replacement[required:yes,type:value,valueType:string] | string | string.replace_all(request.uri, "/api/", "/new/") |
| string.match | 字符串正则匹配函数，返回匹配到的字符串内容，匹配失败时返回nil | regex[required:yes,type:value,valueType:string]; str[required:yes,type:value,valueType:string]; flags[required:no,type:value,valueType:string] | string | string.match("^/api/.*", request.uri, 0) |

### math (14)

| name | description | parameters (required/type) | returnType | example |
| --- | --- | --- | --- | --- |
| math.abs | 求d的绝对值 | d[required:yes,type:value,valueType:number] | number | math.abs(response.latency) |
| math.round | 四舍五入 | d[required:yes,type:value,valueType:number] | number | math.round(response.latency) |
| math.floor | 向下取整 | d[required:yes,type:value,valueType:number] | number | math.floor(response.latency) |
| math.ceil | 向上取整 | d[required:yes,type:value,valueType:number] | number | math.ceil(response.latency) |
| math.sqrt | 求d的平方根 | d[required:yes,type:value,valueType:number] | number | math.sqrt(request.size) |
| math.pow | 求d1的d2次方 | d1[required:yes,type:value,valueType:number]; d2[required:yes,type:value,valueType:number] | number | math.pow(request.size, 2) |
| math.log | 求d的自然对数 | d[required:yes,type:value,valueType:number] | number | math.log(request.size) |
| math.log10 | 求d以10为底的对数 | d[required:yes,type:value,valueType:number] | number | math.log10(request.size) |
| math.sin | 正弦函数 | d[required:yes,type:value,valueType:number] | number | math.sin(angle) |
| math.cos | 余弦函数 | d[required:yes,type:value,valueType:number] | number | math.cos(angle) |
| math.tan | 正切函数 | d[required:yes,type:value,valueType:number] | number | math.tan(angle) |
| math.atan | 反正切函数 | d[required:yes,type:value,valueType:number] | number | math.atan(value) |
| math.acos | 反余弦函数 | d[required:yes,type:value,valueType:number] | number | math.acos(value) |
| math.asin | 反正弦函数 | d[required:yes,type:value,valueType:number] | number | math.asin(value) |

### sequence (23)

| name | description | parameters (required/type) | returnType | example |
| --- | --- | --- | --- | --- |
| seq.list | 创建一个ArrayList实例 | items[required:yes,type:value,valueType:array] | list | seq.list("GET", "POST", "PUT") |
| seq.contains_key | 当map中存在key时返回true | map[required:yes,type:value,valueType:any]; key[required:yes,type:value,valueType:string] | boolean | seq.contains_key(request.headers, "authorization") |
| seq.get | 从list、数组或hash-map获取对应的元素值 | coll[required:yes,type:value,valueType:any]; element[required:yes,type:value,valueType:string] | any | seq.get(request.headers, "user-agent") |
| include | 判断element是否在集合seq中 | seq[required:yes,type:value,valueType:list]; element[required:yes,type:value,valueType:string] | boolean | include(seq.list("admin", "user"), user.role) |
| count | 返回集合大小 | seq[required:yes,type:value,valueType:any] | number | count(request.headers) |
| seq.array | 创建指定类型的数组 | clazz[required:yes,type:value,valueType:string]; elements[required:no,type:value,valueType:array] | array | seq.array("String", "a", "b", "c") |
| seq.set | 创建HashSet实例 | elements[required:no,type:value,valueType:array] | set | seq.set("admin", "user", "guest") |
| seq.map | 创建HashMap实例 | pairs[required:no,type:value,valueType:array] | map | seq.map("key1", "value1", "key2", "value2") |
| seq.keys | 返回map的key集合 | m[required:yes,type:value,valueType:any] | set | seq.keys(request.headers) |
| seq.vals | 返回map的value集合 | m[required:yes,type:value,valueType:any] | list | seq.vals(request.headers) |
| seq.add | 往集合添加元素 | coll[required:yes,type:value,valueType:any]; element[required:yes,type:value,valueType:string] | any | seq.add(userList, "newUser") |
| seq.remove | 从集合删除元素 | coll[required:yes,type:value,valueType:any]; element[required:yes,type:value,valueType:string] | any | seq.remove(userList, "oldUser") |
| map | 将函数作用到集合每个元素 | seq[required:yes,type:value,valueType:any]; fun[required:yes,type:value,valueType:string] | list | map(numbers, lambda(x) -> x * 2) end |
| filter | 过滤集合中满足条件的元素 | seq[required:yes,type:value,valueType:any]; predicate[required:yes,type:value,valueType:string] | list | filter(numbers, lambda(x) -> x > 10) end |
| sort | 排序集合，仅对数组和List有效 | seq[required:yes,type:value,valueType:any]; comparator[required:no,type:value,valueType:string] | list | sort(numbers) 或 sort(users, comparator(lambda(a, b) -> a.age - b.age end)) |
| reverse | 将集合元素逆序 | seq[required:yes,type:value,valueType:any] | list | reverse(numbers) |
| distinct | 返回去重后的结果集合 | seq[required:yes,type:value,valueType:any] | list | distinct(numbers) |
| concat | 连接两个集合 | seq1[required:yes,type:value,valueType:any]; seq2[required:yes,type:value,valueType:any] | list | concat(list1, list2) |
| repeat | 返回将元素x重复n次的List | n[required:yes,type:value,valueType:number]; x[required:yes,type:value,valueType:string] | list | repeat(3, "hello") |
| repeatedly | 返回将函数f重复调用n次结果的List | n[required:yes,type:value,valueType:number]; f[required:yes,type:value,valueType:string] | list | repeatedly(3, lambda() -> rand() end) |
| reduce | 将函数作用在结果值和集合每个元素上 | seq[required:yes,type:value,valueType:any]; fun[required:yes,type:value,valueType:string]; init[required:yes,type:value,valueType:number] | any | reduce(numbers, lambda(acc, x) -> acc + x end, 0) |
| is_empty | 当集合为空或nil时返回true | seq[required:yes,type:value,valueType:list] | boolean | is_empty(userList) |
| is_distinct | 当seq没有重复元素时返回true | seq[required:yes,type:value,valueType:any] | boolean | is_distinct(userIds) |

### datetime (6)

| name | description | parameters (required/type) | returnType | example |
| --- | --- | --- | --- | --- |
| datetime.dateStrToMilliSecond | 将日期字符串转换为毫秒时间戳 | dateStr[required:yes,type:value,valueType:string]; format[required:no,type:value,valueType:string]; timezone[required:no,type:value,valueType:string] | number | datetime.dateStrToMilliSecond(event.created, "yyyy-MM-dd HH:mm:ss") |
| datetime.milliSecondToDate | 将毫秒时间戳转换为LocalDate | milliSecond[required:yes,type:value,valueType:number] | date | datetime.milliSecondToDate(event.timestamp) |
| datetime.isSameDay | 判断两个时间戳是否是同一天 | second1[required:yes,type:value,valueType:number]; second2[required:yes,type:value,valueType:number] | boolean | datetime.isSameDay(event.created, event.updated) |
| datetime.isAfterDay | 判断第一个日期是否晚于第二个日期 | date1[required:yes,type:value,valueType:any]; date2[required:yes,type:value,valueType:any] | boolean | datetime.isAfterDay(event.created, event.baseline) |
| datetime.isBeforeDay | 判断第一个日期是否早于第二个日期 | date1[required:yes,type:value,valueType:any]; date2[required:yes,type:value,valueType:any] | boolean | datetime.isBeforeDay(event.created, event.deadline) |
| datetime.strToLocalDate | 将日期字符串转换为LocalDate | dateStr[required:yes,type:value,valueType:string] | date | datetime.strToLocalDate(event.dateString) |

### custom (14)

| name | description | parameters (required/type) | returnType | example |
| --- | --- | --- | --- | --- |
| user.getUserStatus | 根据员工ID获取用户状态 | emplid[required:yes,type:value,valueType:string] | number | user.getUserStatus(user.emplid) |
| user.getUserEmplidByEmail | 根据邮箱获取员工ID | email[required:yes,type:value,valueType:string] | string | user.getUserEmplidByEmail(user.email) |
| ipUser.getUser | 根据IP获取用户信息 | ip[required:yes,type:value,valueType:string]; timestamp[required:no,type:value,valueType:number] | object | ipUser.getUser(client_ip, event.timestamp) |
| intelligence.ifWhiteIp | 检查IP是否在白名单中 | ip[required:yes,type:value,valueType:string] | boolean | intelligence.ifWhiteIp(client_ip) |
| intelligence.ifBlackIp | 检查IP是否在黑名单中 | ip[required:yes,type:value,valueType:string] | boolean | intelligence.ifBlackIp(client_ip) |
| intelligence.ifBlackDomain | 检查域名是否在黑名单中 | domain[required:yes,type:value,valueType:string] | boolean | intelligence.ifBlackDomain(request.host) |
| intelligence.ifBlackUrl | 检查URL是否在黑名单中 | url[required:yes,type:value,valueType:string] | boolean | intelligence.ifBlackUrl(request.uri) |
| intelligence.ifBlackHash | 检查Hash是否在黑名单中 | hash[required:yes,type:value,valueType:string] | boolean | intelligence.ifBlackHash(file.hash) |
| intelligence.checkIfInnerIp | 检查IP是否为内网IP | ip[required:yes,type:value,valueType:string] | boolean | intelligence.checkIfInnerIp(client_ip) |
| isTimeInRange.isTimestampInRange | 检查时间戳是否在指定时间范围内 | country[required:yes,type:value,valueType:string]; timestamp[required:yes,type:value,valueType:number]; startTime[required:yes,type:value,valueType:number]; endTime[required:yes,type:value,valueType:number] | boolean | isTimeInRange.isTimestampInRange("CN", event.timestamp, 9, 18) |
| IPScene.isIpInNetmaskList | 检查IP是否在指定网段列表中的任意一个 | ip[required:yes,type:value,valueType:string]; netmaskList[required:yes,type:value,valueType:list] | boolean | IPScene.isIpInNetmaskList(client_ip, seq.list("10.128.16.0/20", "10.128.16.0/23")) |
| IPScene.isIoaIP | 检查是否为IOA IP | ip[required:yes,type:value,valueType:string] | boolean | IPScene.isIoaIP(client_ip) |
| filter.checkInWhiteList | 检查值是否在白名单中 | whiteType[required:yes,type:value,valueType:string]; value[required:yes,type:value,valueType:string] | boolean | filter.checkInWhiteList("domain", request.host) |
| enhance.getValue | 获取包含特殊字符的路径字段值 | path[required:yes,type:value,valueType:string] | any | enhance.getValue("a-b.c-d") |

## FAQ & Troubleshooting / 常见问题

### 1) Why is my save button disabled? / 为什么保存按钮是灰色？
- EN: Modal save is disabled when the current expression string is empty.
- 中文：当当前表达式为空字符串时，Modal 的保存按钮会禁用。

### 2) Why do I get validation errors? / 为什么会出现校验错误？
- EN: Typical causes are missing field/comparison/value, missing required function parameters, or empty expanded groups.
- 中文：常见原因包括条件缺字段/操作符/值、函数节点缺必填参数、展开分组为空。

### 3) What if I only have JSON payload examples? / 只有 JSON 示例，没有字段定义怎么办？
- EN: Use `extractFieldsFromJson` to bootstrap field options, then refine types manually.
- 中文：可以先用 `extractFieldsFromJson` 自动提取字段，再按业务手工修正类型。

### 4) Which import path should I use? / 应该用哪个导入路径？
- `aviator-expression-builder`: Vue + headless aggregated exports
- `aviator-expression-builder/vue`: Vue-only exports
- `aviator-expression-builder/headless`: parser/generator/validator/service APIs
- `aviator-expression-builder/legacy`: legacy modal
- `aviator-expression-builder/style.css`: style sheet
