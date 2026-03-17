/**
 * Aviator函数库定义
 * 基于最新的aviator表达式.md文档
 */

import type { AviatorFunction } from '../types'

// Aviator函数库定义 - 基于最新的aviator表达式.md文档 (使用readonly优化性能)
export const AVIATOR_FUNCTIONS: readonly AviatorFunction[] = Object.freeze([
  // 系统函数
  {
    name: 'sysdate',
    category: 'system',
    displayName: '当前日期',
    description: '返回当前日期对象',
    parameters: [],
    returnType: 'date',
    example: 'sysdate()',
  },
  {
    name: 'now',
    category: 'system',
    displayName: '当前时间戳',
    description: '返回当前毫秒时间戳',
    parameters: [],
    returnType: 'number',
    example: 'now()',
  },
  {
    name: 'assert',
    category: 'system',
    displayName: '断言函数',
    description: '当predicate结果为false时抛出异常',
    parameters: [
      { name: 'predicate', type: 'value', required: true, description: '断言条件', valueType: 'boolean' },
      { name: 'msg', type: 'value', required: false, description: '错误信息', valueType: 'string' },
    ],
    returnType: 'boolean',
    example: 'assert(user.age > 18, "用户未成年")',
  },
  {
    name: 'rand',
    category: 'system',
    displayName: '随机数',
    description: '返回[0,1)或[0,n)的随机数',
    parameters: [
      { name: 'n', type: 'value', required: false, description: '上限值', valueType: 'number' },
    ],
    returnType: 'number',
    example: 'rand() 或 rand(100)',
  },
  {
    name: 'cmp',
    category: 'system',
    displayName: '比较函数',
    description: '比较x和y大小，返回0(相等)、1(x>y)或-1(x<y)',
    parameters: [
      { name: 'x', type: 'value', required: true, description: '比较值1', valueType: 'any' },
      { name: 'y', type: 'value', required: true, description: '比较值2', valueType: 'any' },
    ],
    returnType: 'number',
    example: 'cmp(request.size, response.size)',
  },
  {
    name: 'print',
    category: 'system',
    displayName: '打印对象',
    description: '打印对象到输出流',
    parameters: [
      { name: 'obj', type: 'value', required: true, description: '要打印的对象', valueType: 'any' },
    ],
    returnType: 'any',
    example: 'print(user.name)',
  },
  {
    name: 'println',
    category: 'system',
    displayName: '打印并换行',
    description: '打印对象并换行',
    parameters: [
      { name: 'obj', type: 'value', required: true, description: '要打印的对象', valueType: 'any' },
    ],
    returnType: 'any',
    example: 'println(user.name)',
  },
  {
    name: 'long',
    category: 'system',
    displayName: '转换为long',
    description: '将值转为long类型',
    parameters: [
      { name: 'v', type: 'value', required: true, description: '要转换的值', valueType: 'any' },
    ],
    returnType: 'number',
    example: 'long(user.age)',
  },
  {
    name: 'double',
    category: 'system',
    displayName: '转换为double',
    description: '将值转为double类型',
    parameters: [
      { name: 'v', type: 'value', required: true, description: '要转换的值', valueType: 'any' },
    ],
    returnType: 'number',
    example: 'double(user.salary)',
  },
  {
    name: 'boolean',
    category: 'system',
    displayName: '转换为boolean',
    description: '将值转为boolean类型',
    parameters: [
      { name: 'v', type: 'value', required: true, description: '要转换的值', valueType: 'any' },
    ],
    returnType: 'boolean',
    example: 'boolean(user.active)',
  },
  {
    name: 'str',
    category: 'system',
    displayName: '转换为string',
    description: '将值转为string类型',
    parameters: [
      { name: 'v', type: 'value', required: true, description: '要转换的值', valueType: 'any' },
    ],
    returnType: 'string',
    example: 'str(user.id)',
  },
  {
    name: 'type',
    category: 'system',
    displayName: '获取类型',
    description: '返回参数的类型',
    parameters: [
      { name: 'x', type: 'value', required: true, description: '要检查的值', valueType: 'any' },
    ],
    returnType: 'string',
    example: 'type(user.age)',
  },
  {
    name: 'is_def',
    category: 'system',
    displayName: '是否已定义',
    description: '返回变量是否已定义',
    parameters: [
      { name: 'x', type: 'value', required: true, description: '要检查的变量', valueType: 'any' },
    ],
    returnType: 'boolean',
    example: 'is_def(user.email)',
  },
  {
    name: 'max',
    category: 'system',
    displayName: '最大值',
    description: '取所有参数中的最大值',
    parameters: [
      { name: 'x1', type: 'value', required: true, description: '数值1', valueType: 'number' },
      { name: 'x2', type: 'value', required: true, description: '数值2', valueType: 'number' },
    ],
    returnType: 'number',
    example: 'max(request.size, response.size)',
  },
  {
    name: 'min',
    category: 'system',
    displayName: '最小值',
    description: '取所有参数中的最小值',
    parameters: [
      { name: 'x1', type: 'value', required: true, description: '数值1', valueType: 'number' },
      { name: 'x2', type: 'value', required: true, description: '数值2', valueType: 'number' },
    ],
    returnType: 'number',
    example: 'min(request.size, response.size)',
  },

  // 字符串函数
  {
    name: 'date_to_string',
    category: 'string',
    displayName: '日期转字符串',
    description: '将Date对象转化为特定格式的字符串',
    parameters: [
      { name: 'date', type: 'value', required: true, description: '日期对象', valueType: 'any' },
      { name: 'format', type: 'value', required: true, description: '格式字符串', valueType: 'string' },
    ],
    returnType: 'string',
    example: 'date_to_string(event.time, "yyyy-MM-dd HH:mm:ss")',
  },
  {
    name: 'string_to_date',
    category: 'string',
    displayName: '字符串转日期',
    description: '将特定格式的字符串转化为Date对象',
    parameters: [
      { name: 'source', type: 'value', required: true, description: '日期字符串', valueType: 'string' },
      { name: 'format', type: 'value', required: true, description: '格式字符串', valueType: 'string' },
    ],
    returnType: 'date',
    example: 'string_to_date(event.created, "yyyy-MM-dd HH:mm:ss")',
  },
  {
    name: 'string.contains',
    category: 'string',
    displayName: '包含字符串',
    description: '判断s1是否包含s2',
    parameters: [
      { name: 's1', type: 'value', required: true, description: '源字符串', valueType: 'string' },
      { name: 's2', type: 'value', required: true, description: '要查找的字符串', valueType: 'string' },
    ],
    returnType: 'boolean',
    example: 'string.contains(request.uri, "/login")',
  },
  {
    name: 'string.startsWith',
    category: 'string',
    displayName: '开头匹配',
    description: 's1是否以s2开始',
    parameters: [
      { name: 's1', type: 'value', required: true, description: '源字符串', valueType: 'string' },
      { name: 's2', type: 'value', required: true, description: '前缀字符串', valueType: 'string' },
    ],
    returnType: 'boolean',
    example: 'string.startsWith(request.uri, "/sso/public")',
  },
  {
    name: 'string.endsWith',
    category: 'string',
    displayName: '结尾匹配',
    description: 's1是否以s2结尾',
    parameters: [
      { name: 's1', type: 'value', required: true, description: '源字符串', valueType: 'string' },
      { name: 's2', type: 'value', required: true, description: '后缀字符串', valueType: 'string' },
    ],
    returnType: 'boolean',
    example: 'string.endsWith(request.uri, ".gif")',
  },
  {
    name: 'string.length',
    category: 'string',
    displayName: '字符串长度',
    description: '求字符串长度',
    parameters: [
      { name: 's', type: 'value', required: true, description: '字符串', valueType: 'string' },
    ],
    returnType: 'number',
    example: 'string.length(request.uri)',
  },
  {
    name: 'string.indexOf',
    category: 'string',
    displayName: '查找位置',
    description: '求s2在s1中的起始索引位置',
    parameters: [
      { name: 's1', type: 'value', required: true, description: '源字符串', valueType: 'string' },
      { name: 's2', type: 'value', required: true, description: '要查找的字符串', valueType: 'string' },
    ],
    returnType: 'number',
    example: 'string.indexOf(request.uri, "/api")',
  },
  {
    name: 'string.substring',
    category: 'string',
    displayName: '截取字符串',
    description: '截取字符串s,从begin到end',
    parameters: [
      { name: 's', type: 'value', required: true, description: '源字符串', valueType: 'string' },
      { name: 'begin', type: 'value', required: true, description: '开始位置', valueType: 'number' },
      { name: 'end', type: 'value', required: false, description: '结束位置', valueType: 'number' },
    ],
    returnType: 'string',
    example: 'string.substring(request.uri, 0, 10)',
  },
  {
    name: 'string.split',
    category: 'string',
    displayName: '字符串分割',
    description: 'Java里的String.split方法',
    parameters: [
      { name: 'target', type: 'value', required: true, description: '目标字符串', valueType: 'string' },
      { name: 'regex', type: 'value', required: true, description: '分割正则', valueType: 'string' },
      { name: 'limit', type: 'value', required: false, description: '限制数量', valueType: 'number' },
    ],
    returnType: 'array',
    example: 'string.split(request.uri, "/")',
  },
  {
    name: 'string.join',
    category: 'string',
    displayName: '字符串连接',
    description: '将集合里的元素以分隔符连接起来形成字符串',
    parameters: [
      { name: 'seq', type: 'value', required: true, description: '集合', valueType: 'any' },
      { name: 'separator', type: 'value', required: true, description: '分隔符', valueType: 'string' },
    ],
    returnType: 'string',
    example: 'string.join(headers, ",")',
  },
  {
    name: 'string.lastIndexOf',
    category: 'string',
    displayName: '最后查找位置',
    description: '查找字符串最后出现的位置',
    parameters: [
      { name: 'str', type: 'value', required: true, description: '源字符串', valueType: 'string' },
      { name: 'searchStr', type: 'value', required: true, description: '搜索字符串', valueType: 'string' },
    ],
    returnType: 'number',
    example: 'string.lastIndexOf(request.uri, "/")',
  },
  {
    name: 'string.replace_first',
    category: 'string',
    displayName: '替换首次匹配',
    description: 'Java里的String.replaceFirst方法',
    parameters: [
      { name: 's', type: 'value', required: true, description: '源字符串', valueType: 'string' },
      { name: 'regex', type: 'value', required: true, description: '正则表达式', valueType: 'string' },
      { name: 'replacement', type: 'value', required: true, description: '替换字符串', valueType: 'string' },
    ],
    returnType: 'string',
    example: 'string.replace_first(request.uri, "/api/", "/new/")',
  },
  {
    name: 'string.replace_all',
    category: 'string',
    displayName: '替换所有匹配',
    description: 'Java里的String.replaceAll方法',
    parameters: [
      { name: 's', type: 'value', required: true, description: '源字符串', valueType: 'string' },
      { name: 'regex', type: 'value', required: true, description: '正则表达式', valueType: 'string' },
      { name: 'replacement', type: 'value', required: true, description: '替换字符串', valueType: 'string' },
    ],
    returnType: 'string',
    example: 'string.replace_all(request.uri, "/api/", "/new/")',
  },
  {
    name: 'string.match',
    category: 'string',
    displayName: '正则匹配',
    description: '字符串正则匹配函数，返回匹配到的字符串内容，匹配失败时返回nil',
    parameters: [
      { name: 'regex', type: 'value', required: true, description: '正则表达式', valueType: 'string' },
      { name: 'str', type: 'value', required: true, description: '源字符串', valueType: 'string' },
      { name: 'flags', type: 'value', required: false, description: '匹配标志', valueType: 'string' },
    ],
    returnType: 'string',
    example: 'string.match("^/api/.*", request.uri, 0)',
  },

  // 数学函数
  {
    name: 'math.abs',
    category: 'math',
    displayName: '绝对值',
    description: '求d的绝对值',
    parameters: [
      { name: 'd', type: 'value', required: true, description: '数值', valueType: 'number' },
    ],
    returnType: 'number',
    example: 'math.abs(response.latency)',
  },
  {
    name: 'math.round',
    category: 'math',
    displayName: '四舍五入',
    description: '四舍五入',
    parameters: [
      { name: 'd', type: 'value', required: true, description: '数值', valueType: 'number' },
    ],
    returnType: 'number',
    example: 'math.round(response.latency)',
  },
  {
    name: 'math.floor',
    category: 'math',
    displayName: '向下取整',
    description: '向下取整',
    parameters: [
      { name: 'd', type: 'value', required: true, description: '数值', valueType: 'number' },
    ],
    returnType: 'number',
    example: 'math.floor(response.latency)',
  },
  {
    name: 'math.ceil',
    category: 'math',
    displayName: '向上取整',
    description: '向上取整',
    parameters: [
      { name: 'd', type: 'value', required: true, description: '数值', valueType: 'number' },
    ],
    returnType: 'number',
    example: 'math.ceil(response.latency)',
  },
  {
    name: 'math.sqrt',
    category: 'math',
    displayName: '平方根',
    description: '求d的平方根',
    parameters: [
      { name: 'd', type: 'value', required: true, description: '数值', valueType: 'number' },
    ],
    returnType: 'number',
    example: 'math.sqrt(request.size)',
  },
  {
    name: 'math.pow',
    category: 'math',
    displayName: '幂运算',
    description: '求d1的d2次方',
    parameters: [
      { name: 'd1', type: 'value', required: true, description: '底数', valueType: 'number' },
      { name: 'd2', type: 'value', required: true, description: '指数', valueType: 'number' },
    ],
    returnType: 'number',
    example: 'math.pow(request.size, 2)',
  },
  {
    name: 'math.log',
    category: 'math',
    displayName: '自然对数',
    description: '求d的自然对数',
    parameters: [
      { name: 'd', type: 'value', required: true, description: '数值', valueType: 'number' },
    ],
    returnType: 'number',
    example: 'math.log(request.size)',
  },
  {
    name: 'math.log10',
    category: 'math',
    displayName: '常用对数',
    description: '求d以10为底的对数',
    parameters: [
      { name: 'd', type: 'value', required: true, description: '数值', valueType: 'number' },
    ],
    returnType: 'number',
    example: 'math.log10(request.size)',
  },
  {
    name: 'math.sin',
    category: 'math',
    displayName: '正弦函数',
    description: '正弦函数',
    parameters: [
      { name: 'd', type: 'value', required: true, description: '角度（弧度）', valueType: 'number' },
    ],
    returnType: 'number',
    example: 'math.sin(angle)',
  },
  {
    name: 'math.cos',
    category: 'math',
    displayName: '余弦函数',
    description: '余弦函数',
    parameters: [
      { name: 'd', type: 'value', required: true, description: '角度（弧度）', valueType: 'number' },
    ],
    returnType: 'number',
    example: 'math.cos(angle)',
  },
  {
    name: 'math.tan',
    category: 'math',
    displayName: '正切函数',
    description: '正切函数',
    parameters: [
      { name: 'd', type: 'value', required: true, description: '角度（弧度）', valueType: 'number' },
    ],
    returnType: 'number',
    example: 'math.tan(angle)',
  },
  {
    name: 'math.atan',
    category: 'math',
    displayName: '反正切函数',
    description: '反正切函数',
    parameters: [
      { name: 'd', type: 'value', required: true, description: '数值', valueType: 'number' },
    ],
    returnType: 'number',
    example: 'math.atan(value)',
  },
  {
    name: 'math.acos',
    category: 'math',
    displayName: '反余弦函数',
    description: '反余弦函数',
    parameters: [
      { name: 'd', type: 'value', required: true, description: '数值', valueType: 'number' },
    ],
    returnType: 'number',
    example: 'math.acos(value)',
  },
  {
    name: 'math.asin',
    category: 'math',
    displayName: '反正弦函数',
    description: '反正弦函数',
    parameters: [
      { name: 'd', type: 'value', required: true, description: '数值', valueType: 'number' },
    ],
    returnType: 'number',
    example: 'math.asin(value)',
  },

  // 集合函数
  {
    name: 'seq.list',
    category: 'sequence',
    displayName: '创建列表',
    description: '创建一个ArrayList实例',
    parameters: [
      { name: 'items', type: 'value', required: true, description: '列表元素（逗号分隔）', valueType: 'array' },
    ],
    returnType: 'list',
    example: 'seq.list("GET", "POST", "PUT")',
  },
  {
    name: 'seq.contains_key',
    category: 'sequence',
    displayName: '包含键',
    description: '当map中存在key时返回true',
    parameters: [
      { name: 'map', type: 'value', required: true, description: '映射对象', valueType: 'any' },
      { name: 'key', type: 'value', required: true, description: '键', valueType: 'string' },
    ],
    returnType: 'boolean',
    example: 'seq.contains_key(request.headers, "authorization")',
  },
  {
    name: 'seq.get',
    category: 'sequence',
    displayName: '获取元素',
    description: '从list、数组或hash-map获取对应的元素值',
    parameters: [
      { name: 'coll', type: 'value', required: true, description: '集合', valueType: 'any' },
      { name: 'element', type: 'value', required: true, description: '索引或键', valueType: 'string' },
    ],
    returnType: 'any',
    example: 'seq.get(request.headers, "user-agent")',
  },
  {
    name: 'include',
    category: 'sequence',
    displayName: '包含元素',
    description: '判断element是否在集合seq中',
    parameters: [
      { name: 'seq', type: 'value', required: true, description: '集合', valueType: 'list' },
      { name: 'element', type: 'value', required: true, description: '要查找的元素', valueType: 'string' },
    ],
    returnType: 'boolean',
    example: 'include(seq.list("admin", "user"), user.role)',
  },
  {
    name: 'count',
    category: 'sequence',
    displayName: '集合大小',
    description: '返回集合大小',
    parameters: [
      { name: 'seq', type: 'value', required: true, description: '集合', valueType: 'any' },
    ],
    returnType: 'number',
    example: 'count(request.headers)',
  },
  {
    name: 'seq.array',
    category: 'sequence',
    displayName: '创建数组',
    description: '创建指定类型的数组',
    parameters: [
      { name: 'clazz', type: 'value', required: true, description: '数组类型', valueType: 'string' },
      { name: 'elements', type: 'value', required: false, description: '数组元素', valueType: 'array' },
    ],
    returnType: 'array',
    example: 'seq.array("String", "a", "b", "c")',
  },
  {
    name: 'seq.set',
    category: 'sequence',
    displayName: '创建集合',
    description: '创建HashSet实例',
    parameters: [
      { name: 'elements', type: 'value', required: false, description: '集合元素', valueType: 'array' },
    ],
    returnType: 'set',
    example: 'seq.set("admin", "user", "guest")',
  },
  {
    name: 'seq.map',
    category: 'sequence',
    displayName: '创建映射',
    description: '创建HashMap实例',
    parameters: [
      { name: 'pairs', type: 'value', required: false, description: '键值对', valueType: 'array' },
    ],
    returnType: 'map',
    example: 'seq.map("key1", "value1", "key2", "value2")',
  },
  {
    name: 'seq.keys',
    category: 'sequence',
    displayName: '获取键集合',
    description: '返回map的key集合',
    parameters: [
      { name: 'm', type: 'value', required: true, description: '映射对象', valueType: 'any' },
    ],
    returnType: 'set',
    example: 'seq.keys(request.headers)',
  },
  {
    name: 'seq.vals',
    category: 'sequence',
    displayName: '获取值集合',
    description: '返回map的value集合',
    parameters: [
      { name: 'm', type: 'value', required: true, description: '映射对象', valueType: 'any' },
    ],
    returnType: 'list',
    example: 'seq.vals(request.headers)',
  },
  {
    name: 'seq.add',
    category: 'sequence',
    displayName: '添加元素',
    description: '往集合添加元素',
    parameters: [
      { name: 'coll', type: 'value', required: true, description: '集合', valueType: 'any' },
      { name: 'element', type: 'value', required: true, description: '要添加的元素', valueType: 'string' },
    ],
    returnType: 'any',
    example: 'seq.add(userList, "newUser")',
  },
  {
    name: 'seq.remove',
    category: 'sequence',
    displayName: '删除元素',
    description: '从集合删除元素',
    parameters: [
      { name: 'coll', type: 'value', required: true, description: '集合', valueType: 'any' },
      { name: 'element', type: 'value', required: true, description: '要删除的元素', valueType: 'string' },
    ],
    returnType: 'any',
    example: 'seq.remove(userList, "oldUser")',
  },
  {
    name: 'map',
    category: 'sequence',
    displayName: '映射函数',
    description: '将函数作用到集合每个元素',
    parameters: [
      { name: 'seq', type: 'value', required: true, description: '集合', valueType: 'any' },
      { name: 'fun', type: 'value', required: true, description: '函数', valueType: 'string' },
    ],
    returnType: 'list',
    example: 'map(numbers, lambda(x) -> x * 2) end',
  },
  {
    name: 'filter',
    category: 'sequence',
    displayName: '过滤函数',
    description: '过滤集合中满足条件的元素',
    parameters: [
      { name: 'seq', type: 'value', required: true, description: '集合', valueType: 'any' },
      { name: 'predicate', type: 'value', required: true, description: '谓词函数', valueType: 'string' },
    ],
    returnType: 'list',
    example: 'filter(numbers, lambda(x) -> x > 10) end',
  },
  {
    name: 'sort',
    category: 'sequence',
    displayName: '排序',
    description: '排序集合，仅对数组和List有效',
    parameters: [
      { name: 'seq', type: 'value', required: true, description: '集合', valueType: 'any' },
      { name: 'comparator', type: 'value', required: false, description: '比较器', valueType: 'string' },
    ],
    returnType: 'list',
    example: 'sort(numbers) 或 sort(users, comparator(lambda(a, b) -> a.age - b.age end))',
  },
  {
    name: 'reverse',
    category: 'sequence',
    displayName: '逆序',
    description: '将集合元素逆序',
    parameters: [
      { name: 'seq', type: 'value', required: true, description: '集合', valueType: 'any' },
    ],
    returnType: 'list',
    example: 'reverse(numbers)',
  },
  {
    name: 'distinct',
    category: 'sequence',
    displayName: '去重',
    description: '返回去重后的结果集合',
    parameters: [
      { name: 'seq', type: 'value', required: true, description: '集合', valueType: 'any' },
    ],
    returnType: 'list',
    example: 'distinct(numbers)',
  },
  {
    name: 'concat',
    category: 'sequence',
    displayName: '连接集合',
    description: '连接两个集合',
    parameters: [
      { name: 'seq1', type: 'value', required: true, description: '集合1', valueType: 'any' },
      { name: 'seq2', type: 'value', required: true, description: '集合2', valueType: 'any' },
    ],
    returnType: 'list',
    example: 'concat(list1, list2)',
  },

  // 自定义日期时间函数
  {
    name: 'datetime.dateStrToMilliSecond',
    category: 'datetime',
    displayName: '日期转毫秒',
    description: '将日期字符串转换为毫秒时间戳',
    parameters: [
      { name: 'dateStr', type: 'value', required: true, description: '日期字符串', valueType: 'string' },
      { name: 'format', type: 'value', required: false, description: '日期格式', valueType: 'string' },
      { name: 'timezone', type: 'value', required: false, description: '时区', valueType: 'string' },
    ],
    returnType: 'number',
    example: 'datetime.dateStrToMilliSecond(event.created, "yyyy-MM-dd HH:mm:ss")',
  },
  {
    name: 'datetime.milliSecondToDate',
    category: 'datetime',
    displayName: '毫秒转日期',
    description: '将毫秒时间戳转换为LocalDate',
    parameters: [
      { name: 'milliSecond', type: 'value', required: true, description: '毫秒时间戳', valueType: 'number' },
    ],
    returnType: 'date',
    example: 'datetime.milliSecondToDate(event.timestamp)',
  },
  {
    name: 'datetime.isSameDay',
    category: 'datetime',
    displayName: '同一天判断',
    description: '判断两个时间戳是否是同一天',
    parameters: [
      { name: 'second1', type: 'value', required: true, description: '时间戳1（秒）', valueType: 'number' },
      { name: 'second2', type: 'value', required: true, description: '时间戳2（秒）', valueType: 'number' },
    ],
    returnType: 'boolean',
    example: 'datetime.isSameDay(event.created, event.updated)',
  },
  {
    name: 'datetime.isAfterDay',
    category: 'datetime',
    displayName: '日期晚于判断',
    description: '判断第一个日期是否晚于第二个日期',
    parameters: [
      { name: 'date1', type: 'value', required: true, description: '日期1', valueType: 'any' },
      { name: 'date2', type: 'value', required: true, description: '日期2', valueType: 'any' },
    ],
    returnType: 'boolean',
    example: 'datetime.isAfterDay(event.created, event.baseline)',
  },
  {
    name: 'datetime.isBeforeDay',
    category: 'datetime',
    displayName: '日期早于判断',
    description: '判断第一个日期是否早于第二个日期',
    parameters: [
      { name: 'date1', type: 'value', required: true, description: '日期1', valueType: 'any' },
      { name: 'date2', type: 'value', required: true, description: '日期2', valueType: 'any' },
    ],
    returnType: 'boolean',
    example: 'datetime.isBeforeDay(event.created, event.deadline)',
  },
  {
    name: 'datetime.strToLocalDate',
    category: 'datetime',
    displayName: '字符串转LocalDate',
    description: '将日期字符串转换为LocalDate',
    parameters: [
      { name: 'dateStr', type: 'value', required: true, description: '日期字符串', valueType: 'string' },
    ],
    returnType: 'date',
    example: 'datetime.strToLocalDate(event.dateString)',
  },

  // 用户相关函数
  {
    name: 'user.getUserStatus',
    category: 'custom',
    displayName: '获取用户状态',
    description: '根据员工ID获取用户状态',
    parameters: [
      { name: 'emplid', type: 'value', required: true, description: '员工ID', valueType: 'string' },
    ],
    returnType: 'number',
    example: 'user.getUserStatus(user.emplid)',
  },
  {
    name: 'user.getUserEmplidByEmail',
    category: 'custom',
    displayName: '邮箱获取员工ID',
    description: '根据邮箱获取员工ID',
    parameters: [
      { name: 'email', type: 'value', required: true, description: '邮箱地址', valueType: 'string' },
    ],
    returnType: 'string',
    example: 'user.getUserEmplidByEmail(user.email)',
  },

  // IP用户函数
  {
    name: 'ipUser.getUser',
    category: 'custom',
    displayName: '获取IP用户信息',
    description: '根据IP获取用户信息',
    parameters: [
      { name: 'ip', type: 'value', required: true, description: 'IP地址', valueType: 'string' },
      { name: 'timestamp', type: 'value', required: false, description: '时间戳（秒）', valueType: 'number' },
    ],
    returnType: 'object',
    example: 'ipUser.getUser(client_ip, event.timestamp)',
  },

  // 安全检查函数
  {
    name: 'intelligence.ifWhiteIp',
    category: 'custom',
    displayName: 'IP白名单检查',
    description: '检查IP是否在白名单中',
    parameters: [
      { name: 'ip', type: 'value', required: true, description: 'IP地址', valueType: 'string' },
    ],
    returnType: 'boolean',
    example: 'intelligence.ifWhiteIp(client_ip)',
  },
  {
    name: 'intelligence.ifBlackIp',
    category: 'custom',
    displayName: 'IP黑名单检查',
    description: '检查IP是否在黑名单中',
    parameters: [
      { name: 'ip', type: 'value', required: true, description: 'IP地址', valueType: 'string' },
    ],
    returnType: 'boolean',
    example: 'intelligence.ifBlackIp(client_ip)',
  },
  {
    name: 'intelligence.ifBlackDomain',
    category: 'custom',
    displayName: '域名黑名单检查',
    description: '检查域名是否在黑名单中',
    parameters: [
      { name: 'domain', type: 'value', required: true, description: '域名', valueType: 'string' },
    ],
    returnType: 'boolean',
    example: 'intelligence.ifBlackDomain(request.host)',
  },
  {
    name: 'intelligence.ifBlackUrl',
    category: 'custom',
    displayName: 'URL黑名单检查',
    description: '检查URL是否在黑名单中',
    parameters: [
      { name: 'url', type: 'value', required: true, description: 'URL地址', valueType: 'string' },
    ],
    returnType: 'boolean',
    example: 'intelligence.ifBlackUrl(request.uri)',
  },
  {
    name: 'intelligence.ifBlackHash',
    category: 'custom',
    displayName: 'Hash黑名单检查',
    description: '检查Hash是否在黑名单中',
    parameters: [
      { name: 'hash', type: 'value', required: true, description: 'Hash值', valueType: 'string' },
    ],
    returnType: 'boolean',
    example: 'intelligence.ifBlackHash(file.hash)',
  },
  {
    name: 'intelligence.checkIfInnerIp',
    category: 'custom',
    displayName: '内网IP检查',
    description: '检查IP是否为内网IP',
    parameters: [
      { name: 'ip', type: 'value', required: true, description: 'IP地址', valueType: 'string' },
    ],
    returnType: 'boolean',
    example: 'intelligence.checkIfInnerIp(client_ip)',
  },

  // 时间范围检查函数
  {
    name: 'isTimeInRange.isTimestampInRange',
    category: 'custom',
    displayName: '时间范围检查',
    description: '检查时间戳是否在指定时间范围内',
    parameters: [
      { name: 'country', type: 'value', required: true, description: '国家', valueType: 'string' },
      { name: 'timestamp', type: 'value', required: true, description: '时间戳', valueType: 'number' },
      { name: 'startTime', type: 'value', required: true, description: '开始时间', valueType: 'number' },
      { name: 'endTime', type: 'value', required: true, description: '结束时间', valueType: 'number' },
    ],
    returnType: 'boolean',
    example: 'isTimeInRange.isTimestampInRange("CN", event.timestamp, 9, 18)',
  },

  // IP场景函数
  {
    name: 'IPScene.isIpInNetmaskList',
    category: 'custom',
    displayName: 'IP网段列表检查',
    description: '检查IP是否在指定网段列表中的任意一个',
    parameters: [
      { name: 'ip', type: 'value', required: true, description: 'IP地址', valueType: 'string' },
      { name: 'netmaskList', type: 'value', required: true, description: '网段列表', valueType: 'list' },
    ],
    returnType: 'boolean',
    example: 'IPScene.isIpInNetmaskList(client_ip, seq.list("10.128.16.0/20", "10.128.16.0/23"))',
  },
  {
    name: 'IPScene.isIoaIP',
    category: 'custom',
    displayName: 'IOA IP检查',
    description: '检查是否为IOA IP',
    parameters: [
      { name: 'ip', type: 'value', required: true, description: 'IP地址', valueType: 'string' },
    ],
    returnType: 'boolean',
    example: 'IPScene.isIoaIP(client_ip)',
  },

  // 过滤器函数
  {
    name: 'filter.checkInWhiteList',
    category: 'custom',
    displayName: '白名单检查',
    description: '检查值是否在白名单中',
    parameters: [
      { name: 'whiteType', type: 'value', required: true, description: '白名单类型', valueType: 'string' },
      { name: 'value', type: 'value', required: true, description: '检查值', valueType: 'string' },
    ],
    returnType: 'boolean',
    example: 'filter.checkInWhiteList("domain", request.host)',
  },

  // 增强函数
  {
    name: 'enhance.getValue',
    category: 'custom',
    displayName: '获取路径值',
    description: '获取包含特殊字符的路径字段值',
    parameters: [
      { name: 'path', type: 'value', required: true, description: '字段路径', valueType: 'string' },
    ],
    returnType: 'any',
    example: 'enhance.getValue("a-b.c-d")',
  },

  // 模块加载函数
  {
    name: 'load',
    category: 'system',
    displayName: '加载模块',
    description: '加载指定路径的模块，每次重新编译',
    parameters: [
      { name: 'path', type: 'value', required: true, description: '模块路径', valueType: 'string' },
    ],
    returnType: 'any',
    example: 'load("myModule.av")',
  },
  {
    name: 'require',
    category: 'system',
    displayName: '引入模块',
    description: '加载指定路径的模块，有缓存机制',
    parameters: [
      { name: 'path', type: 'value', required: true, description: '模块路径', valueType: 'string' },
    ],
    returnType: 'any',
    example: 'require("myModule.av")',
  },

  // 更多sequence函数
  {
    name: 'repeat',
    category: 'sequence',
    displayName: '重复元素',
    description: '返回将元素x重复n次的List',
    parameters: [
      { name: 'n', type: 'value', required: true, description: '重复次数', valueType: 'number' },
      { name: 'x', type: 'value', required: true, description: '要重复的元素', valueType: 'string' },
    ],
    returnType: 'list',
    example: 'repeat(3, "hello")',
  },
  {
    name: 'repeatedly',
    category: 'sequence',
    displayName: '重复调用函数',
    description: '返回将函数f重复调用n次结果的List',
    parameters: [
      { name: 'n', type: 'value', required: true, description: '调用次数', valueType: 'number' },
      { name: 'f', type: 'value', required: true, description: '要调用的函数', valueType: 'string' },
    ],
    returnType: 'list',
    example: 'repeatedly(3, lambda() -> rand() end)',
  },
  {
    name: 'is_empty',
    category: 'sequence',
    displayName: '集合是否为空',
    description: '当集合为空或nil时返回true',
    parameters: [
      { name: 'seq', type: 'value', required: true, description: '集合或数组', valueType: 'list' },
    ],
    returnType: 'boolean',
    example: 'is_empty(userList)',
  },
  {
    name: 'is_distinct',
    category: 'sequence',
    displayName: '是否无重复',
    description: '当seq没有重复元素时返回true',
    parameters: [
      { name: 'seq', type: 'value', required: true, description: '集合', valueType: 'any' },
    ],
    returnType: 'boolean',
    example: 'is_distinct(userIds)',
  },
  {
    name: 'reduce',
    category: 'sequence',
    displayName: '归约函数',
    description: '将函数作用在结果值和集合每个元素上',
    parameters: [
      { name: 'seq', type: 'value', required: true, description: '集合', valueType: 'any' },
      { name: 'fun', type: 'value', required: true, description: '归约函数', valueType: 'string' },
      { name: 'init', type: 'value', required: true, description: '初始值', valueType: 'number' },
    ],
    returnType: 'any',
    example: 'reduce(numbers, lambda(acc, x) -> acc + x end, 0)',
  },
])
