/**
 * 比较操作符定义
 * 根据数据类型智能推荐操作符
 */

// 操作符定义 - 根据数据类型和函数返回类型智能推荐 (优化性能)
export const COMPARISON_OPERATORS = Object.freeze({
  boolean: [
    { label: '==', value: '==', symbol: '==' },
    { label: '!=', value: '!=', symbol: '!=' },
  ],
  string: [
    { label: '==', value: '==', symbol: '==' },
    { label: '!=', value: '!=', symbol: '!=' },
    { label: '== nil', value: '== nil', symbol: '== nil' },
    { label: '!= nil', value: '!= nil', symbol: '!= nil' },
    { label: '== \'\'', value: '== \'\'', symbol: '== \'\'' },
    { label: '!= \'\'', value: '!= \'\'', symbol: '!= \'\'' },
    { label: 'contains', value: 'contains', symbol: 'contains' },
    { label: 'regex', value: 'match', symbol: 'regex' },
    { label: 'startsWith', value: 'startsWith', symbol: 'startsWith' },
    { label: 'endsWith', value: 'endsWith', symbol: 'endsWith' },
  ],
  number: [
    { label: '==', value: '==', symbol: '==' },
    { label: '!=', value: '!=', symbol: '!=' },
    { label: '>', value: '>', symbol: '>' },
    { label: '>=', value: '>=', symbol: '>=' },
    { label: '<', value: '<', symbol: '<' },
    { label: '<=', value: '<=', symbol: '<=' },
    { label: '== nil', value: '== nil', symbol: '== nil' },
    { label: '!= nil', value: '!= nil', symbol: '!= nil' },
  ],
  ip: [
    { label: '==', value: '==', symbol: '==' },
    { label: '!=', value: '!=', symbol: '!=' },
    { label: '== nil', value: '== nil', symbol: '== nil' },
    { label: '!= nil', value: '!= nil', symbol: '!= nil' },
    { label: '== \'\'', value: '== \'\'', symbol: '== \'\'' },
    { label: '!= \'\'', value: '!= \'\'', symbol: '!= \'\'' },
    { label: 'contains', value: 'contains', symbol: 'contains' },
    { label: 'regex', value: 'match', symbol: 'regex' },
    { label: 'startsWith', value: 'startsWith', symbol: 'startsWith' },
    { label: 'endsWith', value: 'endsWith', symbol: 'endsWith' },
    { label: 'isIpInNetmaskList', value: 'isIpInNetmaskList', symbol: 'isIpInNetmaskList' },
  ],
  url: [
    { label: '==', value: '==', symbol: '==' },
    { label: '!=', value: '!=', symbol: '!=' },
    { label: '== nil', value: '== nil', symbol: '== nil' },
    { label: '!= nil', value: '!= nil', symbol: '!= nil' },
  ],
  email: [
    { label: '==', value: '==', symbol: '==' },
    { label: '!=', value: '!=', symbol: '!=' },
    { label: '== nil', value: '== nil', symbol: '== nil' },
    { label: '!= nil', value: '!= nil', symbol: '!= nil' },
  ],
  uuid: [
    { label: '==', value: '==', symbol: '==' },
    { label: '!=', value: '!=', symbol: '!=' },
    { label: '== nil', value: '== nil', symbol: '== nil' },
    { label: '!= nil', value: '!= nil', symbol: '!= nil' },
  ],
  datetime: [
    { label: '==', value: '==', symbol: '==' },
    { label: '!=', value: '!=', symbol: '!=' },
    { label: '>', value: '>', symbol: '>' },
    { label: '>=', value: '>=', symbol: '>=' },
    { label: '<', value: '<', symbol: '<' },
    { label: '<=', value: '<=', symbol: '<=' },
  ],
  array: [
    { label: '==', value: '==', symbol: '==' },
    { label: '!=', value: '!=', symbol: '!=' },
    { label: 'belong', value: 'belong', symbol: 'belong' },
  ],
  object: [
    { label: '==', value: '==', symbol: '==' },
    { label: '!=', value: '!=', symbol: '!=' },
  ],
})
