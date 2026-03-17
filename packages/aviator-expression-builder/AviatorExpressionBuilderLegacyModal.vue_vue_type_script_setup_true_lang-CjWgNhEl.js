import { defineComponent as V, resolveComponent as v, openBlock as c, createElementBlock as b, createVNode as f, withCtx as g, createTextVNode as w, createBlock as y, toDisplayString as U, createCommentVNode as D, Fragment as S, createElementVNode as N, renderList as M, mergeProps as h, toHandlers as P, unref as p, computed as _, normalizeProps as pe, guardReactiveProps as Re, normalizeStyle as W, ref as I, watch as B, h as A, normalizeClass as $e, renderSlot as Oe, onMounted as ke, onUnmounted as ze, markRaw as Ge, isRef as Y } from "vue";
import { AVIATOR_FUNCTIONS as R, createGroupNode as ce, createConditionNode as X, shouldBeLambdaParameter as je, COMPARISON_OPERATORS as k, extractFieldsFromJson as He, createAviatorExpressionService as We } from "./headless.js";
import { Notification as qe, Message as $ } from "@arco-design/web-vue";
const Ye = { class: "toolbar" }, Xe = /* @__PURE__ */ V({
  __name: "BuilderToolbar",
  emits: ["add-group", "expand-all", "collapse-all"],
  setup(t, { emit: e }) {
    const a = e;
    return (n, o) => {
      const r = v("icon-folder-add"), i = v("a-button"), l = v("icon-expand"), u = v("icon-shrink"), s = v("a-space");
      return c(), b("div", Ye, [
        f(s, null, {
          default: g(() => [
            f(i, {
              type: "primary",
              onClick: o[0] || (o[0] = (d) => a("add-group"))
            }, {
              default: g(() => [
                f(r),
                o[3] || (o[3] = w("添加分组 "))
              ]),
              _: 1
            }),
            f(i, {
              type: "text",
              onClick: o[1] || (o[1] = (d) => a("expand-all"))
            }, {
              default: g(() => [
                f(l),
                o[4] || (o[4] = w("全部展开 "))
              ]),
              _: 1
            }),
            f(i, {
              type: "text",
              onClick: o[2] || (o[2] = (d) => a("collapse-all"))
            }, {
              default: g(() => [
                f(u),
                o[5] || (o[5] = w("全部收起 "))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
}), E = (t, e) => {
  const a = t.__vccOpts || t;
  for (const [n, o] of e)
    a[n] = o;
  return a;
}, Ke = /* @__PURE__ */ E(Xe, [["__scopeId", "data-v-81fe6149"]]), Je = { class: "data-preview" }, Qe = { key: 0 }, Ze = /* @__PURE__ */ V({
  __name: "DataPreviewPanel",
  props: {
    extractedFieldCount: {},
    hasDataPreview: { type: Boolean },
    dataSourceInfo: {}
  },
  setup(t) {
    return (e, a) => {
      const n = v("a-alert");
      return c(), b("div", Je, [
        e.extractedFieldCount > 0 ? (c(), y(n, {
          key: 0,
          type: "success",
          "show-icon": "",
          closable: ""
        }, {
          title: g(() => a[0] || (a[0] = [
            w(" 字段识别成功 ")
          ])),
          default: g(() => [
            w(" 已识别 " + U(e.extractedFieldCount) + " 个字段 ", 1),
            e.dataSourceInfo ? (c(), b("span", Qe, "，类型分布: " + U(e.dataSourceInfo), 1)) : D("", !0)
          ]),
          _: 1
        })) : e.hasDataPreview ? D("", !0) : (c(), y(n, {
          key: 1,
          type: "warning",
          "show-icon": "",
          closable: ""
        }, {
          title: g(() => a[1] || (a[1] = [
            w(" 未提供数据预览 ")
          ])),
          default: g(() => [
            a[2] || (a[2] = w(" 建议传入数据预览，自动推断字段类型。 "))
          ]),
          _: 1
        }))
      ]);
    };
  }
}), et = /* @__PURE__ */ E(Ze, [["__scopeId", "data-v-cc9ceb9b"]]), tt = { class: "expression-preview" }, at = { class: "preview-actions" }, nt = /* @__PURE__ */ V({
  __name: "ExpressionPreviewPanel",
  props: {
    generatedExpression: {},
    validating: { type: Boolean },
    validationResult: { default: null }
  },
  emits: ["clear", "validate", "copy", "format"],
  setup(t, { emit: e }) {
    const a = e;
    return (n, o) => {
      const r = v("a-divider"), i = v("a-textarea"), l = v("icon-delete"), u = v("a-button"), s = v("icon-check-circle"), d = v("icon-copy"), m = v("icon-code"), T = v("a-space"), L = v("a-tag");
      return c(), b(S, null, [
        f(r, null, {
          default: g(() => o[4] || (o[4] = [
            w("表达式预览")
          ])),
          _: 1
        }),
        N("div", tt, [
          f(i, {
            "model-value": n.generatedExpression,
            "auto-size": { minRows: 3, maxRows: 10 },
            readonly: "",
            placeholder: "生成的 Aviator 表达式会显示在这里"
          }, null, 8, ["model-value"]),
          N("div", at, [
            f(T, null, {
              default: g(() => [
                f(u, {
                  type: "outline",
                  onClick: o[0] || (o[0] = (C) => a("clear"))
                }, {
                  default: g(() => [
                    f(l),
                    o[5] || (o[5] = w("清空 "))
                  ]),
                  _: 1
                }),
                f(u, {
                  type: "outline",
                  loading: n.validating,
                  onClick: o[1] || (o[1] = (C) => a("validate"))
                }, {
                  default: g(() => [
                    f(s),
                    o[6] || (o[6] = w("验证 "))
                  ]),
                  _: 1
                }, 8, ["loading"]),
                f(u, {
                  type: "outline",
                  onClick: o[2] || (o[2] = (C) => a("copy"))
                }, {
                  default: g(() => [
                    f(d),
                    o[7] || (o[7] = w("复制 "))
                  ]),
                  _: 1
                }),
                f(u, {
                  type: "outline",
                  onClick: o[3] || (o[3] = (C) => a("format"))
                }, {
                  default: g(() => [
                    f(m),
                    o[8] || (o[8] = w("格式化 "))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            n.validationResult ? (c(), y(L, {
              key: 0,
              color: n.validationResult.success ? "green" : "red"
            }, {
              default: g(() => [
                w(U(n.validationResult.success ? "表达式可用" : n.validationResult.message), 1)
              ]),
              _: 1
            }, 8, ["color"])) : D("", !0)
          ])
        ])
      ], 64);
    };
  }
}), ot = /* @__PURE__ */ E(nt, [["__scopeId", "data-v-a5b5c20b"]]);
function rt(t) {
  const { emit: e } = t;
  return {
    onUpdateNode: (m, T) => {
      e("update-node", m, T);
    },
    onAddChild: (m, T) => {
      e("add-child", m, T);
    },
    onRemoveNode: (m) => {
      e("remove-node", m);
    },
    onMoveUp: (m) => {
      e("move-up", m);
    },
    onMoveDown: (m) => {
      e("move-down", m);
    },
    onCopyNode: (m) => {
      e("copy-node", m);
    },
    onUpdateParameterType: (m, T) => {
      e("update-parameter-type", m, T);
    },
    onUpdateParameterValueDataType: (m, T, L) => {
      e("update-parameter-value-data-type", m, T, L);
    },
    onDragNode: (m, T, L) => {
      e("drag-node", m, T, L);
    }
  };
}
function it(t) {
  const { bindings: e } = t;
  return {
    childNodeListeners: {
      "update-node": e.onUpdateNode,
      "add-child": e.onAddChild,
      "remove-node": e.onRemoveNode,
      "move-up": e.onMoveUp,
      "move-down": e.onMoveDown,
      "copy-node": e.onCopyNode,
      "update-parameter-type": e.onUpdateParameterType,
      "update-parameter-value-data-type": e.onUpdateParameterValueDataType,
      "drag-node": e.onDragNode
    }
  };
}
function lt(t) {
  const e = rt(t);
  return {
    childNodeListeners: it({ bindings: e }).childNodeListeners
  };
}
const st = {
  key: 0,
  class: "child-nodes"
}, ut = /* @__PURE__ */ V({
  __name: "TreeNodeChildren",
  props: {
    node: {},
    availableFields: {},
    level: {},
    expectedReturnType: {},
    getParameterDataType: { type: Function },
    validationErrors: {}
  },
  emits: ["update-node", "add-child", "remove-node", "move-up", "move-down", "copy-node", "update-parameter-type", "update-parameter-value-data-type", "drag-node"],
  setup(t, { emit: e }) {
    const a = e, {
      childNodeListeners: n
    } = lt({
      emit: a
    });
    return (o, r) => o.node.type === "group" && o.node.expanded && o.node.children && o.node.children.length > 0 ? (c(), b("div", st, [
      (c(!0), b(S, null, M(o.node.children, (i) => (c(), y(Z, h({
        key: i.id,
        node: i,
        "available-fields": o.availableFields,
        level: o.level + 1,
        "expected-return-type": o.expectedReturnType,
        "get-parameter-data-type": o.getParameterDataType,
        "validation-errors": o.validationErrors
      }, P(p(n))), null, 16, ["node", "available-fields", "level", "expected-return-type", "get-parameter-data-type", "validation-errors"]))), 128))
    ])) : D("", !0);
  }
}), dt = /* @__PURE__ */ E(ut, [["__scopeId", "data-v-36c48cf6"]]), pt = /* @__PURE__ */ V({
  __name: "NodeActionCommonButtons",
  props: {
    nodeId: {}
  },
  emits: ["move-up", "move-down", "copy-node", "remove-node"],
  setup(t, { emit: e }) {
    const a = e;
    return (n, o) => {
      const r = v("icon-up"), i = v("a-button"), l = v("a-tooltip"), u = v("icon-down"), s = v("icon-copy"), d = v("icon-delete");
      return c(), b(S, null, [
        f(l, { content: "上移节点" }, {
          default: g(() => [
            f(i, {
              type: "text",
              size: "mini",
              onClick: o[0] || (o[0] = (m) => a("move-up", n.nodeId))
            }, {
              default: g(() => [
                f(r)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        f(l, { content: "下移节点" }, {
          default: g(() => [
            f(i, {
              type: "text",
              size: "mini",
              onClick: o[1] || (o[1] = (m) => a("move-down", n.nodeId))
            }, {
              default: g(() => [
                f(u)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        f(l, { content: "复制节点" }, {
          default: g(() => [
            f(i, {
              type: "text",
              size: "mini",
              onClick: o[2] || (o[2] = (m) => a("copy-node", n.nodeId))
            }, {
              default: g(() => [
                f(s)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        f(l, { content: "删除节点" }, {
          default: g(() => [
            f(i, {
              type: "text",
              size: "mini",
              status: "danger",
              onClick: o[3] || (o[3] = (m) => a("remove-node", n.nodeId))
            }, {
              default: g(() => [
                f(d)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 64);
    };
  }
}), ct = /* @__PURE__ */ V({
  __name: "NodeActionErrorIndicator",
  props: {
    visible: { type: Boolean }
  },
  setup(t) {
    return (e, a) => {
      const n = v("icon-exclamation-circle-fill"), o = v("a-tooltip");
      return e.visible ? (c(), y(o, {
        key: 0,
        content: "此节点有验证错误"
      }, {
        default: g(() => [
          f(n, { style: {
            color: "#f53f3f",
            fontSize: "16px",
            marginLeft: "8px"
          } })
        ]),
        _: 1
      })) : D("", !0);
    };
  }
}), mt = /* @__PURE__ */ V({
  __name: "NodeActionGroupAdd",
  props: {
    nodeId: {},
    nodeType: {}
  },
  emits: ["add-child"],
  setup(t, { emit: e }) {
    const a = e;
    return (n, o) => {
      const r = v("icon-filter"), i = v("a-button"), l = v("a-tooltip"), u = v("icon-folder");
      return n.nodeType === "group" ? (c(), b(S, { key: 0 }, [
        f(l, { content: "添加条件" }, {
          default: g(() => [
            f(i, {
              type: "text",
              size: "mini",
              onClick: o[0] || (o[0] = (s) => a("add-child", n.nodeId, "condition"))
            }, {
              default: g(() => [
                f(r)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        f(l, { content: "添加分组" }, {
          default: g(() => [
            f(i, {
              type: "text",
              size: "mini",
              onClick: o[1] || (o[1] = (s) => a("add-child", n.nodeId, "group"))
            }, {
              default: g(() => [
                f(u)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 64)) : D("", !0);
    };
  }
});
function ft(t) {
  const { setupResult: e } = t;
  return {
    groupAddListeners: e.listeners.groupAddListeners,
    commonButtonListeners: e.listeners.commonButtonListeners
  };
}
function vt(t) {
  const { emit: e } = t;
  return {
    groupAddListeners: {
      "add-child": (o, r) => {
        r !== "function" && e("add-child", o, r);
      }
    },
    commonButtonListeners: {
      "move-up": (o) => e("move-up", o),
      "move-down": (o) => e("move-down", o),
      "copy-node": (o) => e("copy-node", o),
      "remove-node": (o) => e("remove-node", o)
    }
  };
}
function yt(t) {
  return {
    listeners: vt(t)
  };
}
function gt(t) {
  const e = yt(t);
  return ft({ setupResult: e });
}
const _t = {
  key: 0,
  class: "node-actions"
}, Tt = /* @__PURE__ */ V({
  __name: "NodeActions",
  props: {
    node: {},
    hideActions: { type: Boolean },
    hasError: { type: Boolean }
  },
  emits: ["add-child", "move-up", "move-down", "copy-node", "remove-node"],
  setup(t, { emit: e }) {
    const a = e, {
      groupAddListeners: n,
      commonButtonListeners: o
    } = gt({
      emit: a
    });
    return (r, i) => r.hideActions ? D("", !0) : (c(), b("div", _t, [
      f(mt, h({
        "node-id": r.node.id,
        "node-type": r.node.type
      }, P(p(n))), null, 16, ["node-id", "node-type"]),
      f(pt, h({
        "node-id": r.node.id
      }, P(p(o))), null, 16, ["node-id"]),
      f(ct, {
        visible: !!r.hasError
      }, null, 8, ["visible"])
    ]));
  }
}), Vt = /* @__PURE__ */ E(Tt, [["__scopeId", "data-v-b652d1c7"]]), ht = {
  key: 1,
  class: "drag-handle"
}, Pt = { class: "node-indicator" }, Ft = /* @__PURE__ */ V({
  __name: "TreeNodeAffordances",
  props: {
    node: {},
    hideActions: { type: Boolean }
  },
  emits: ["toggle-expanded"],
  setup(t, { emit: e }) {
    const a = e;
    return (n, o) => {
      const r = v("icon-down"), i = v("icon-right"), l = v("a-button"), u = v("icon-drag-arrow"), s = v("icon-filter"), d = v("icon-thunderbolt"), m = v("icon-folder");
      return c(), b(S, null, [
        n.node.type === "group" ? (c(), y(l, {
          key: 0,
          type: "text",
          size: "mini",
          class: "expand-button",
          onClick: o[0] || (o[0] = (T) => a("toggle-expanded"))
        }, {
          default: g(() => [
            n.node.expanded ? (c(), y(r, { key: 0 })) : (c(), y(i, { key: 1 }))
          ]),
          _: 1
        })) : D("", !0),
        n.hideActions ? D("", !0) : (c(), b("div", ht, [
          f(u)
        ])),
        N("div", Pt, [
          n.node.type === "condition" && !n.node.functionName ? (c(), y(s, { key: 0 })) : n.node.type === "condition" && n.node.functionName ? (c(), y(d, { key: 1 })) : n.node.type === "group" ? (c(), y(m, { key: 2 })) : D("", !0)
        ])
      ], 64);
    };
  }
}), bt = /* @__PURE__ */ E(Ft, [["__scopeId", "data-v-2456d071"]]), Nt = { class: "type-option" }, Et = /* @__PURE__ */ V({
  __name: "InputTypeSelector",
  props: {
    modelValue: {},
    options: {},
    placeholder: { default: "选择类型" }
  },
  emits: ["update:model-value"],
  setup(t, { emit: e }) {
    const a = e;
    return (n, o) => {
      const r = v("a-option"), i = v("a-select");
      return c(), y(i, {
        "model-value": n.modelValue,
        placeholder: n.placeholder,
        size: "small",
        style: { width: "80px", "flex-shrink": "0" },
        "onUpdate:modelValue": o[0] || (o[0] = (l) => a("update:model-value", l))
      }, {
        default: g(() => [
          (c(!0), b(S, null, M(n.options, (l) => (c(), y(r, {
            key: l.value,
            value: l.value,
            label: l.label
          }, {
            default: g(() => [
              N("div", Nt, [
                N("span", null, U(l.label), 1)
              ])
            ]),
            _: 2
          }, 1032, ["value", "label"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "placeholder"]);
    };
  }
}), me = /* @__PURE__ */ E(Et, [["__scopeId", "data-v-b20c3c25"]]), Ct = /* @__PURE__ */ V({
  __name: "FieldArrayIndexInput",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e;
    return (n, o) => {
      const r = v("a-input-number");
      return c(), y(r, {
        "model-value": n.modelValue,
        placeholder: "索引",
        min: 0,
        precision: 0,
        class: "array-index-input",
        "onUpdate:modelValue": o[0] || (o[0] = (i) => a("update:modelValue", i))
      }, {
        prefix: g(() => o[1] || (o[1] = [
          N("span", { style: { color: "#86909c" } }, "[", -1)
        ])),
        suffix: g(() => o[2] || (o[2] = [
          N("span", { style: { color: "#86909c" } }, "]", -1)
        ])),
        _: 1
      }, 8, ["model-value"]);
    };
  }
}), Lt = /* @__PURE__ */ E(Ct, [["__scopeId", "data-v-e6d54880"]]), Dt = { class: "field-option" }, xt = {
  key: 0,
  class: "array-hint"
}, wt = /* @__PURE__ */ V({
  __name: "FieldRefSelector",
  props: {
    modelValue: { default: "" },
    availableFields: {},
    placeholder: { default: "选择字段" },
    showArrayHint: { type: Boolean, default: !0 },
    resolveFieldTooltip: {},
    resolveTypeColor: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e;
    return (n, o) => {
      const r = v("icon-link"), i = v("a-tag"), l = v("a-tooltip"), u = v("a-option"), s = v("a-select");
      return c(), y(s, {
        "model-value": n.modelValue,
        placeholder: n.placeholder,
        "allow-search": "",
        "allow-create": "",
        style: { flex: "1", "min-width": "100px", "max-width": "240px" },
        "onUpdate:modelValue": o[0] || (o[0] = (d) => a("update:modelValue", d))
      }, {
        default: g(() => [
          (c(!0), b(S, null, M(n.availableFields, (d) => (c(), y(u, {
            key: d.value,
            value: d.value,
            label: d.label
          }, {
            default: g(() => [
              f(l, {
                content: n.resolveFieldTooltip(d),
                position: "left"
              }, {
                default: g(() => [
                  N("div", Dt, [
                    f(r),
                    N("span", null, U(d.label), 1),
                    n.showArrayHint && d.type === "array" ? (c(), b("span", xt, "[i]")) : D("", !0),
                    d.type ? (c(), y(i, {
                      key: 1,
                      size: "mini",
                      color: n.resolveTypeColor(d.type)
                    }, {
                      default: g(() => [
                        w(U(d.type), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])) : D("", !0)
                  ])
                ]),
                _: 2
              }, 1032, ["content"])
            ]),
            _: 2
          }, 1032, ["value", "label"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "placeholder"]);
    };
  }
}), Ut = /* @__PURE__ */ E(wt, [["__scopeId", "data-v-a5a1c4e7"]]);
function It(t) {
  const { state: e, resolvers: a, forwarders: n } = t.setupResult;
  return {
    currentFieldValue: e.currentFieldValue,
    isArrayField: e.isArrayField,
    resolveFieldTooltip: a.resolveFieldTooltip,
    resolveTypeColor: a.resolveTypeColor,
    onUpdateField: n.onUpdateField
  };
}
function St(t) {
  const { emitUpdateField: e } = t;
  return {
    onUpdateField: (n) => {
      e(n);
    }
  };
}
function At(t) {
  return {
    resolveFieldTooltip: (n) => {
      if (t.getFieldTooltip)
        return t.getFieldTooltip(n);
      const o = [n.label];
      return n.type && o.push(`类型: ${n.type}`), n.example && o.push(`示例: ${n.example}`), o.join(`
`);
    },
    resolveTypeColor: (n) => t.getTypeColor ? t.getTypeColor(n) : {
      string: "blue",
      number: "green",
      boolean: "orange",
      datetime: "magenta",
      array: "purple",
      object: "cyan",
      ip: "gold",
      email: "lime",
      url: "arcoblue"
    }[n] || "default"
  };
}
function Mt(t) {
  const e = _(() => {
    if (!t.value)
      return "";
    const o = t.value.match(/^(.+)\[(\d+)\]$/);
    return o ? o[1] : t.value;
  }), a = _(() => t.showArrayIndex ? e.value : t.value || ""), n = _(() => {
    const o = t.availableFields.find((r) => r.value === e.value);
    return (o == null ? void 0 : o.type) === "array";
  });
  return {
    baseFieldName: e,
    currentFieldValue: a,
    isArrayField: n
  };
}
function Bt(t) {
  const { props: e, emitUpdateField: a } = t, n = Mt(e), o = At(e), r = St({ emitUpdateField: a });
  return {
    state: n,
    resolvers: o,
    forwarders: r
  };
}
function Rt(t) {
  const e = Bt({
    props: t.props,
    emitUpdateField: (a) => t.emit("update:field", a)
  });
  return It({ setupResult: e });
}
const $t = { class: "field-ref-editor" }, Ot = { class: "field-selector-row" }, kt = /* @__PURE__ */ V({
  __name: "FieldRefEditor",
  props: {
    value: {},
    availableFields: {},
    placeholder: { default: "选择字段" },
    showArrayIndex: { type: Boolean, default: !1 },
    arrayIndex: {},
    showArrayHint: { type: Boolean, default: !0 },
    getFieldTooltip: {},
    getTypeColor: {}
  },
  emits: ["update:field", "update:array-index"],
  setup(t, { emit: e }) {
    const a = t, n = e, {
      currentFieldValue: o,
      isArrayField: r,
      onUpdateField: i,
      resolveFieldTooltip: l,
      resolveTypeColor: u
    } = Rt({
      props: a,
      emit: n
    });
    return (s, d) => (c(), b("div", $t, [
      N("div", Ot, [
        f(Ut, {
          "model-value": p(o),
          "available-fields": s.availableFields,
          placeholder: s.placeholder,
          "show-array-hint": s.showArrayHint,
          "resolve-field-tooltip": p(l),
          "resolve-type-color": p(u),
          "onUpdate:modelValue": p(i)
        }, null, 8, ["model-value", "available-fields", "placeholder", "show-array-hint", "resolve-field-tooltip", "resolve-type-color", "onUpdate:modelValue"]),
        s.showArrayIndex && p(r) ? (c(), y(Lt, {
          key: 0,
          "model-value": s.arrayIndex,
          "onUpdate:modelValue": d[0] || (d[0] = (m) => n("update:array-index", m))
        }, null, 8, ["model-value"])) : D("", !0)
      ])
    ]));
  }
}), K = /* @__PURE__ */ E(kt, [["__scopeId", "data-v-9124cb3e"]]), zt = {}, Gt = { class: "function-hint" };
function jt(t, e) {
  const a = v("icon-info-circle");
  return c(), b("div", Gt, [
    f(a, { style: { color: "#165dff", "margin-right": "4px" } }),
    e[0] || (e[0] = N("span", { class: "hint-text" }, "选择函数计算比较值", -1))
  ]);
}
const Ht = /* @__PURE__ */ E(zt, [["render", jt], ["__scopeId", "data-v-20a86dc3"]]);
function Wt(t) {
  const { state: e, listeners: a } = t.setupResult;
  return {
    updateValueListeners: a.updateValueListeners,
    displayDescription: e.displayDescription,
    fieldPlaceholder: e.fieldPlaceholder,
    textPlaceholder: e.textPlaceholder,
    isFieldType: e.isFieldType,
    isValueType: e.isValueType
  };
}
function qt(t) {
  return {
    updateValueListeners: {
      "update:model-value": (a) => t("update:value", a)
    }
  };
}
function Yt(t) {
  const e = _(() => t.param.description || t.param.name), a = _(() => `选择${e.value}`), n = _(() => `输入${e.value}`), o = _(() => t.param.type === "field"), r = _(() => t.param.type === "value");
  return {
    displayDescription: e,
    fieldPlaceholder: a,
    textPlaceholder: n,
    isFieldType: o,
    isValueType: r
  };
}
function Xt(t) {
  const e = Yt(t.props), a = qt(t.emit);
  return {
    state: e,
    listeners: a
  };
}
function Kt(t) {
  const e = Xt(t);
  return Wt({ setupResult: e });
}
const Jt = /* @__PURE__ */ V({
  __name: "FunctionRefParameterInputBody",
  props: {
    param: {},
    availableFields: {}
  },
  emits: ["update:value"],
  setup(t, { emit: e }) {
    const a = t, n = e, {
      updateValueListeners: o,
      fieldPlaceholder: r,
      textPlaceholder: i,
      isFieldType: l,
      isValueType: u
    } = Kt({
      props: a,
      emit: n
    });
    return (s, d) => {
      const m = v("a-textarea"), T = v("a-option"), L = v("a-select");
      return p(u) ? (c(), y(m, h({
        key: 0,
        "model-value": s.param.value,
        placeholder: p(i),
        "auto-size": { minRows: 1, maxRows: 3 },
        class: "param-input-control"
      }, P(p(o))), null, 16, ["model-value", "placeholder"])) : p(l) ? (c(), y(L, h({
        key: 1,
        "model-value": s.param.value,
        placeholder: p(r),
        "allow-search": "",
        class: "param-input-control"
      }, P(p(o))), {
        default: g(() => [
          (c(!0), b(S, null, M(s.availableFields, (C) => (c(), y(T, {
            key: C.value,
            value: C.value,
            label: C.label
          }, {
            default: g(() => [
              N("span", null, U(C.label), 1)
            ]),
            _: 2
          }, 1032, ["value", "label"]))), 128))
        ]),
        _: 1
      }, 16, ["model-value", "placeholder"])) : (c(), y(m, h({
        key: 2,
        "model-value": s.param.value,
        placeholder: p(i),
        "auto-size": { minRows: 1, maxRows: 3 },
        class: "param-input-control"
      }, P(p(o))), null, 16, ["model-value", "placeholder"]));
    };
  }
}), Qt = /* @__PURE__ */ E(Jt, [["__scopeId", "data-v-0ff7deb4"]]), Zt = { class: "param-label" }, ea = {
  key: 0,
  class: "required"
}, ta = /* @__PURE__ */ V({
  __name: "FunctionRefParameterLabel",
  props: {
    description: {},
    required: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (e, a) => (c(), b("label", Zt, [
      w(U(e.description) + " ", 1),
      e.required ? (c(), b("span", ea, "*")) : D("", !0)
    ]));
  }
}), aa = /* @__PURE__ */ E(ta, [["__scopeId", "data-v-ae3b942b"]]);
function na(t) {
  const { panelProps: e, listeners: a } = t.setupResult;
  return {
    labelProps: e.labelProps,
    inputBodyProps: e.inputBodyProps,
    inputBodyListeners: a.inputBodyListeners
  };
}
function oa(t) {
  return {
    onUpdateValue: (a) => {
      t("update:parameter", a);
    }
  };
}
function ra(t) {
  const { props: e, forwarders: a } = t;
  return {
    inputBodyListeners: {
      "update:value": (o) => {
        a.onUpdateValue({ index: e.index, value: o });
      }
    }
  };
}
function ia(t) {
  const e = _(() => ({
    description: t.param.description || t.param.name,
    required: t.param.required
  })), a = _(() => ({
    param: t.param,
    availableFields: t.availableFields
  }));
  return {
    labelProps: e,
    inputBodyProps: a
  };
}
function la(t) {
  const e = oa(t.emit), a = ra({
    props: t.props,
    forwarders: e
  }), n = ia(t.props);
  return {
    listeners: a,
    panelProps: n
  };
}
function sa(t) {
  const e = la(t);
  return na({ setupResult: e });
}
const ua = { class: "param-input" }, da = /* @__PURE__ */ V({
  __name: "FunctionRefParameterInput",
  props: {
    index: {},
    param: {},
    availableFields: {}
  },
  emits: ["update:parameter"],
  setup(t, { emit: e }) {
    const a = t, n = e, {
      labelProps: o,
      inputBodyProps: r,
      inputBodyListeners: i
    } = sa({
      props: a,
      emit: n
    });
    return (l, u) => (c(), b("div", ua, [
      f(aa, pe(Re(p(o))), null, 16),
      f(Qt, h(p(r), P(p(i))), null, 16)
    ]));
  }
}), pa = /* @__PURE__ */ E(da, [["__scopeId", "data-v-67310cfb"]]);
function ca(t) {
  return {
    onUpdateParameterPayload: t.setupResult.onUpdateParameterPayload
  };
}
function ma(t) {
  return {
    onUpdateParameterPayload: (a) => {
      t.emit("update:parameter", a);
    }
  };
}
function fa(t) {
  const e = ma(t);
  return ca({ setupResult: e });
}
const va = { class: "function-params" }, ya = /* @__PURE__ */ V({
  __name: "FunctionRefParameters",
  props: {
    parameters: { default: () => [] },
    availableFields: {}
  },
  emits: ["update:parameter"],
  setup(t, { emit: e }) {
    const a = e, {
      onUpdateParameterPayload: n
    } = fa({
      emit: a
    });
    return (o, r) => (c(), b("div", va, [
      (c(!0), b(S, null, M(o.parameters, (i, l) => (c(), y(pa, {
        key: i.name,
        index: l,
        param: i,
        "available-fields": o.availableFields,
        "onUpdate:parameter": p(n)
      }, null, 8, ["index", "param", "available-fields", "onUpdate:parameter"]))), 128))
    ]));
  }
}), ga = /* @__PURE__ */ E(ya, [["__scopeId", "data-v-3c7cdd81"]]), _a = { class: "function-preview" }, Ta = { class: "preview-code" }, Va = /* @__PURE__ */ V({
  __name: "FunctionRefPreview",
  props: {
    expression: {}
  },
  setup(t) {
    return (e, a) => (c(), b("div", _a, [
      a[0] || (a[0] = N("span", { class: "preview-label" }, "表达式预览：", -1)),
      N("code", Ta, U(e.expression), 1)
    ]));
  }
}), ha = /* @__PURE__ */ E(Va, [["__scopeId", "data-v-8ea35045"]]), Pa = { class: "function-option" }, Fa = { class: "function-name" }, ba = { class: "function-desc" }, Na = /* @__PURE__ */ V({
  __name: "FunctionRefSelector",
  props: {
    modelValue: { default: "" },
    categories: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e;
    return (n, o) => {
      const r = v("a-option"), i = v("a-optgroup"), l = v("a-select");
      return c(), y(l, {
        "model-value": n.modelValue,
        placeholder: "选择函数",
        "allow-search": "",
        style: { flex: "1", "min-width": "100px", "max-width": "220px" },
        "onUpdate:modelValue": o[0] || (o[0] = (u) => a("update:modelValue", u))
      }, {
        default: g(() => [
          (c(!0), b(S, null, M(n.categories, (u) => (c(), y(i, {
            key: u.name,
            label: u.label
          }, {
            default: g(() => [
              (c(!0), b(S, null, M(u.functions, (s) => (c(), y(r, {
                key: s.name,
                value: s.name,
                label: s.displayName
              }, {
                default: g(() => [
                  N("div", Pa, [
                    N("div", Fa, U(s.displayName), 1),
                    N("div", ba, U(s.description), 1)
                  ])
                ]),
                _: 2
              }, 1032, ["value", "label"]))), 128))
            ]),
            _: 2
          }, 1032, ["label"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value"]);
    };
  }
}), Ea = /* @__PURE__ */ E(Na, [["__scopeId", "data-v-b35c51c7"]]);
function Ca(t) {
  const { listeners: e, viewModel: a } = t.setupResult;
  return {
    hasSelectedFunction: a.hasSelectedFunction,
    showParameters: a.showParameters,
    selectorProps: a.selectorProps,
    parameterProps: a.parameterProps,
    previewProps: a.previewProps,
    selectorListeners: e.selectorListeners,
    parameterListeners: e.parameterListeners
  };
}
function La(t) {
  return {
    onUpdateFunction: (n) => t("update:function", n),
    onUpdateParameter: (n) => t("update:parameter", n)
  };
}
function Da(t) {
  const { forwarders: e } = t, a = {
    "update:model-value": e.onUpdateFunction
  }, n = {
    "update:parameter": e.onUpdateParameter
  };
  return {
    selectorListeners: a,
    parameterListeners: n
  };
}
function xa(t) {
  const e = _(() => !!t.selectedFunction), a = _(() => e.value && t.functionParameters.length > 0);
  return {
    hasSelectedFunction: e,
    showParameters: a
  };
}
function wa(t, e) {
  const a = _(() => ({
    modelValue: t.selectedFunctionName,
    categories: t.functionCategories
  })), n = _(() => ({
    parameters: t.functionParameters,
    availableFields: t.availableFields
  })), o = _(() => ({
    expression: t.functionExpression
  }));
  return {
    hasSelectedFunction: e.hasSelectedFunction,
    showParameters: e.showParameters,
    selectorProps: a,
    parameterProps: n,
    previewProps: o
  };
}
function Ua(t) {
  const { props: e, emit: a } = t, n = xa(e), o = La(a), r = Da({ forwarders: o }), i = wa(e, n);
  return {
    listeners: r,
    viewModel: i
  };
}
function Ia(t) {
  const e = Ua(t);
  return Ca({ setupResult: e });
}
const Sa = { class: "function-ref-editor" }, Aa = { class: "function-selector" }, Ma = /* @__PURE__ */ V({
  __name: "FunctionRefEditor",
  props: {
    selectedFunctionName: { default: "" },
    functionCategories: {},
    selectedFunction: { default: null },
    functionParameters: {},
    functionExpression: {},
    availableFields: {}
  },
  emits: ["update:function", "update:parameter"],
  setup(t, { emit: e }) {
    const a = t, n = e, {
      hasSelectedFunction: o,
      showParameters: r,
      selectorProps: i,
      parameterProps: l,
      previewProps: u,
      selectorListeners: s,
      parameterListeners: d
    } = Ia({
      props: a,
      emit: n
    });
    return (m, T) => (c(), b("div", Sa, [
      f(Ht),
      N("div", Aa, [
        f(Ea, h(p(i), P(p(s))), null, 16),
        p(r) ? (c(), y(ga, h({ key: 0 }, p(l), P(p(d))), null, 16)) : D("", !0),
        p(o) ? (c(), y(ha, pe(h({ key: 1 }, p(u))), null, 16)) : D("", !0)
      ])
    ]));
  }
}), Ba = /* @__PURE__ */ E(Ma, [["__scopeId", "data-v-ff9d9822"]]), fe = /* @__PURE__ */ V({
  __name: "ConditionDataTypeSwitch",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e;
    return (n, o) => {
      const r = v("a-radio"), i = v("a-radio-group");
      return c(), y(i, {
        "model-value": n.modelValue,
        size: "small",
        type: "button",
        class: "data-type-radio",
        style: { "flex-shrink": "0", "margin-left": "8px" },
        "onUpdate:modelValue": o[0] || (o[0] = (l) => a("update:modelValue", l))
      }, {
        default: g(() => [
          f(r, { value: "string" }, {
            default: g(() => o[1] || (o[1] = [
              w("STR")
            ])),
            _: 1
          }),
          f(r, { value: "number" }, {
            default: g(() => o[2] || (o[2] = [
              w("NUM")
            ])),
            _: 1
          }),
          f(r, { value: "boolean" }, {
            default: g(() => o[3] || (o[3] = [
              w("BOOL")
            ])),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["model-value"]);
    };
  }
}), Ra = { class: "bool-option" }, $a = { class: "bool-option" }, Oa = /* @__PURE__ */ V({
  __name: "ConditionBooleanSelect",
  props: {
    modelValue: { type: [String, Number, Boolean, Array, Object, null] },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = (r) => r === !0 || r === !1 || r === "true" || r === "false", i = _(() => a.modelValue === !1 || a.modelValue === "false" ? "false" : "true"), l = _(() => a.compact ? {
      flex: 1,
      minWidth: "80px",
      maxWidth: "150px"
    } : {
      flex: 1,
      minWidth: "120px",
      maxWidth: "150px"
    });
    return B(
      () => a.modelValue,
      (r) => {
        o(r) || n("update:modelValue", i.value);
      },
      { immediate: !0 }
    ), (r, u) => {
      const s = v("icon-check-circle"), d = v("a-option"), m = v("icon-close-circle"), T = v("a-select");
      return c(), y(T, {
        "model-value": i.value,
        placeholder: "选择布尔值",
        style: W(l.value),
        "onUpdate:modelValue": u[0] || (u[0] = (L) => n("update:modelValue", L))
      }, {
        default: g(() => [
          f(d, {
            value: "true",
            label: "真 (true)"
          }, {
            default: g(() => [
              N("div", Ra, [
                f(s, { style: { color: "#00b42a" } }),
                u[1] || (u[1] = N("span", null, "真 (true)", -1))
              ])
            ]),
            _: 1
          }),
          f(d, {
            value: "false",
            label: "假 (false)"
          }, {
            default: g(() => [
              N("div", $a, [
                f(m, { style: { color: "#f53f3f" } }),
                u[2] || (u[2] = N("span", null, "假 (false)", -1))
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["model-value", "style"]);
    };
  }
}), J = /* @__PURE__ */ E(Oa, [["__scopeId", "data-v-9562feb4"]]), ka = /* @__PURE__ */ V({
  __name: "ConditionDateTimeInput",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e;
    return (n, o) => {
      const r = v("a-date-picker");
      return c(), y(r, {
        "model-value": n.modelValue,
        "show-time": "",
        format: "YYYY-MM-DD HH:mm:ss",
        placeholder: "选择日期时间",
        style: { width: "200px" },
        "onUpdate:modelValue": o[0] || (o[0] = (i) => a("update:modelValue", i))
      }, null, 8, ["model-value"]);
    };
  }
}), za = { class: "multi-value-input" }, Ga = /* @__PURE__ */ V({
  __name: "ConditionMultiValueInput",
  props: {
    modelValue: { default: () => [] },
    placeholder: { default: "输入多个值，回车分隔" },
    tooltip: { default: "多个值用回车分隔" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e;
    return (n, o) => {
      const r = v("a-input-tag"), i = v("icon-info-circle"), l = v("a-tooltip");
      return c(), b("div", za, [
        f(r, {
          "model-value": n.modelValue,
          placeholder: n.placeholder,
          "allow-clear": "",
          style: { width: "250px" },
          "onUpdate:modelValue": o[0] || (o[0] = (u) => a("update:modelValue", u))
        }, null, 8, ["model-value", "placeholder"]),
        f(l, { content: n.tooltip }, {
          default: g(() => [
            f(i, { style: { color: "#86909c", "margin-left": "4px" } })
          ]),
          _: 1
        }, 8, ["content"])
      ]);
    };
  }
}), ja = /* @__PURE__ */ E(Ga, [["__scopeId", "data-v-393f4899"]]), ae = /* @__PURE__ */ V({
  __name: "ConditionTextValueInput",
  props: {
    modelValue: { type: [String, Number, Boolean, Array, Object, null] },
    placeholder: { default: "输入值" },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = _(() => a.compact ? {
      flex: 1,
      minWidth: "80px",
      maxWidth: "180px"
    } : {
      flex: 1,
      minWidth: "100px",
      maxWidth: "200px"
    });
    return (r, i) => {
      const l = v("a-textarea");
      return c(), y(l, {
        "model-value": String(r.modelValue ?? ""),
        placeholder: r.placeholder,
        "auto-size": { minRows: 1, maxRows: 4 },
        style: W(o.value),
        "onUpdate:modelValue": i[0] || (i[0] = (u) => n("update:modelValue", u))
      }, null, 8, ["model-value", "placeholder", "style"]);
    };
  }
}), Ha = /* @__PURE__ */ V({
  __name: "ConditionValueFallbackInput",
  props: {
    value: { type: [String, Number, Boolean, Array, Object, null] },
    fieldType: {},
    valueDataType: {},
    placeholder: {}
  },
  emits: ["update:value"],
  setup(t, { emit: e }) {
    const a = e, n = {
      "update:model-value": (o) => a("update:value", o)
    };
    return (o, r) => o.valueDataType === "boolean" ? (c(), y(J, h({
      key: 0,
      "model-value": o.value
    }, P(n)), null, 16, ["model-value"])) : o.fieldType === "number" ? (c(), y(ae, h({
      key: 1,
      "model-value": o.value,
      placeholder: o.placeholder,
      compact: ""
    }, P(n)), null, 16, ["model-value", "placeholder"])) : (c(), y(ae, h({
      key: 2,
      "model-value": o.value,
      placeholder: o.placeholder
    }, P(n)), null, 16, ["model-value", "placeholder"]));
  }
}), Wa = { class: "null-option" }, qa = /* @__PURE__ */ V({
  __name: "ConditionNullSelect",
  props: {
    modelValue: { type: [String, Number, Boolean, Array, Object, null] }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e;
    return (n, o) => {
      const r = v("icon-minus-circle"), i = v("a-option"), l = v("a-select");
      return c(), y(l, {
        "model-value": n.modelValue || "nil",
        style: { width: "120px" },
        "onUpdate:modelValue": o[0] || (o[0] = (u) => a("update:modelValue", u))
      }, {
        default: g(() => [
          f(i, {
            value: "nil",
            label: "null"
          }, {
            default: g(() => [
              N("div", Wa, [
                f(r, { style: { color: "#86909c" } }),
                o[1] || (o[1] = N("span", null, "null", -1))
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["model-value"]);
    };
  }
}), Ya = /* @__PURE__ */ E(qa, [["__scopeId", "data-v-5a53b7bf"]]), Xa = { class: "url-input" }, Ka = {
  key: 0,
  class: "error-message"
}, Ja = /* @__PURE__ */ V({
  __name: "ConditionUrlInput",
  props: {
    modelValue: { type: [String, Number, Boolean, Array, Object, null] },
    error: { default: "" }
  },
  emits: ["update:modelValue", "blur"],
  setup(t, { emit: e }) {
    const a = e;
    return (n, o) => {
      const r = v("a-textarea"), i = v("icon-exclamation-circle");
      return c(), b("div", Xa, [
        f(r, {
          "model-value": n.modelValue,
          placeholder: "请输入URL，如：https://example.com",
          status: n.error ? "error" : "normal",
          "auto-size": { minRows: 1, maxRows: 3 },
          style: { width: "220px" },
          "onUpdate:modelValue": o[0] || (o[0] = (l) => a("update:modelValue", l)),
          onBlur: o[1] || (o[1] = (l) => a("blur"))
        }, null, 8, ["model-value", "status"]),
        n.error ? (c(), b("div", Ka, [
          f(i, { class: "error-icon" }),
          N("span", null, U(n.error), 1)
        ])) : D("", !0)
      ]);
    };
  }
}), Qa = /* @__PURE__ */ E(Ja, [["__scopeId", "data-v-7d5a695e"]]);
function Za(t) {
  const { panelProps: e, listeners: a } = t.setupResult;
  return {
    booleanSelectProps: e.booleanSelectProps,
    nullSelectProps: e.nullSelectProps,
    multiValueInputProps: e.multiValueInputProps,
    urlInputProps: e.urlInputProps,
    dateTimeInputProps: e.dateTimeInputProps,
    fallbackInputProps: e.fallbackInputProps,
    valueListeners: a.valueListeners,
    multiValueListeners: a.multiValueListeners,
    dateValueListeners: a.dateValueListeners,
    urlListeners: a.urlListeners,
    fallbackListeners: a.fallbackListeners
  };
}
function en(t) {
  return {
    valueListeners: {
      "update:model-value": (i) => t("update:value", i)
    },
    multiValueListeners: {
      "update:model-value": (i) => t("update:multi-values", i)
    },
    dateValueListeners: {
      "update:model-value": (i) => t("update:date-value", i)
    },
    urlListeners: {
      "update:model-value": (i) => t("update:value", i),
      blur: () => t("blur:url")
    },
    fallbackListeners: {
      "update:value": (i) => t("update:value", i)
    }
  };
}
function tn(t) {
  const e = _(() => ({
    modelValue: t.value,
    compact: !0
  })), a = _(() => ({
    modelValue: t.value
  })), n = _(() => ({
    modelValue: t.multiValues,
    placeholder: t.multiValuePlaceholder,
    tooltip: t.multiValueTooltip
  })), o = _(() => ({
    modelValue: t.value,
    error: t.urlError
  })), r = _(() => ({
    modelValue: t.dateValue
  })), i = _(() => ({
    value: t.value,
    fieldType: t.fieldType,
    valueDataType: t.valueDataType,
    placeholder: t.placeholder
  }));
  return {
    booleanSelectProps: e,
    nullSelectProps: a,
    multiValueInputProps: n,
    urlInputProps: o,
    dateTimeInputProps: r,
    fallbackInputProps: i
  };
}
function an(t) {
  const { props: e, emit: a } = t, n = tn(e), o = en(a);
  return {
    panelProps: n,
    listeners: o
  };
}
function nn(t) {
  const e = an(t);
  return Za({ setupResult: e });
}
const on = /* @__PURE__ */ V({
  __name: "ConditionValueInputSwitch",
  props: {
    value: { type: [String, Number, Boolean, Array, Object, null] },
    fieldType: {},
    valueDataType: {},
    isNullComparison: { type: Boolean },
    isMultiValue: { type: Boolean },
    multiValues: {},
    multiValuePlaceholder: {},
    multiValueTooltip: {},
    placeholder: {},
    urlError: {},
    dateValue: {}
  },
  emits: ["update:value", "update:multi-values", "update:date-value", "blur:url"],
  setup(t, { emit: e }) {
    const a = t, n = e, {
      booleanSelectProps: o,
      nullSelectProps: r,
      multiValueInputProps: i,
      urlInputProps: l,
      dateTimeInputProps: u,
      fallbackInputProps: s,
      valueListeners: d,
      multiValueListeners: m,
      dateValueListeners: T,
      urlListeners: L,
      fallbackListeners: C
    } = nn({
      props: a,
      emit: n
    });
    return (x, F) => a.fieldType === "boolean" ? (c(), y(J, h({ key: 0 }, p(o), P(p(d))), null, 16)) : a.isNullComparison ? (c(), y(Ya, h({ key: 1 }, p(r), P(p(d))), null, 16)) : a.isMultiValue ? (c(), y(ja, h({ key: 2 }, p(i), P(p(m))), null, 16)) : a.fieldType === "url" ? (c(), y(Qa, h({ key: 3 }, p(l), P(p(L))), null, 16)) : a.fieldType === "datetime" ? (c(), y(ka, h({ key: 4 }, p(u), P(p(T))), null, 16)) : (c(), y(Ha, h({ key: 5 }, p(s), P(p(C))), null, 16));
  }
});
function rn(t) {
  const { state: e, listeners: a, panelProps: n } = t.setupResult;
  return {
    showValueDataTypeSwitch: e.showValueDataTypeSwitch,
    valueInputSwitchProps: n.valueInputSwitchProps,
    dataTypeSwitchProps: n.dataTypeSwitchProps,
    valueInputSwitchListeners: a.valueInputSwitchListeners,
    dataTypeSwitchListeners: a.dataTypeSwitchListeners
  };
}
function ln(t) {
  return {
    onUpdateValue: (i) => {
      t("update:value", i);
    },
    onUpdateMultiValues: (i) => {
      t("update:multi-values", i);
    },
    onUpdateDateValue: (i) => {
      t("update:date-value", i);
    },
    onBlurUrl: () => {
      t("blur:url");
    },
    onUpdateValueDataType: (i) => {
      t("update:value-data-type", i);
    }
  };
}
function sn(t) {
  const { forwarders: e } = t, a = {
    "update:value": e.onUpdateValue,
    "update:multi-values": e.onUpdateMultiValues,
    "update:date-value": e.onUpdateDateValue,
    "blur:url": e.onBlurUrl
  }, n = {
    "update:modelValue": e.onUpdateValueDataType
  };
  return {
    valueInputSwitchListeners: a,
    dataTypeSwitchListeners: n
  };
}
function un(t, e) {
  const a = _(() => ({
    value: t.value,
    fieldType: t.fieldType,
    valueDataType: t.valueDataType,
    isNullComparison: e.isNullComparison.value,
    isMultiValue: e.isMultiValue.value,
    multiValues: t.multiValues,
    multiValuePlaceholder: e.multiValuePlaceholder.value,
    multiValueTooltip: e.multiValueTooltip.value,
    placeholder: t.placeholder,
    urlError: t.urlError,
    dateValue: t.dateValue
  })), n = _(() => ({
    modelValue: t.valueDataType
  }));
  return {
    valueInputSwitchProps: a,
    dataTypeSwitchProps: n
  };
}
function dn(t) {
  const e = _(() => t.comparison === "== nil" || t.comparison === "!= nil"), a = _(() => t.comparison === "in" || t.comparison === "!in" || t.comparison === "belong" || t.comparison === "isIpInNetmaskList"), n = _(() => t.comparison === "belong" ? "输入数组元素，回车分隔" : t.comparison === "isIpInNetmaskList" ? "输入网段，如 10.128.16.0/20" : "输入多个值，回车分隔"), o = _(() => t.comparison === "belong" ? "输入数组元素，回车分隔。将判断字段数组是否包含这些元素中的任意一个" : t.comparison === "isIpInNetmaskList" ? "输入多个网段（CIDR格式），回车分隔。如：10.128.16.0/20、192.168.1.0/24" : "多个值用回车分隔，支持字符串和数字"), r = _(() => t.showDataTypeSwitch && t.comparison !== "isIpInNetmaskList");
  return {
    isNullComparison: e,
    isMultiValue: a,
    multiValuePlaceholder: n,
    multiValueTooltip: o,
    showValueDataTypeSwitch: r
  };
}
function pn(t) {
  const { props: e, emit: a } = t, n = dn(e), o = ln(a), r = sn({ forwarders: o }), i = un(e, n);
  return {
    state: n,
    listeners: r,
    panelProps: i
  };
}
function cn(t) {
  const e = pn(t);
  return rn({ setupResult: e });
}
const mn = { class: "condition-value-editor" }, fn = /* @__PURE__ */ V({
  __name: "ConditionValueEditor",
  props: {
    value: { type: [String, Number, Boolean, Array, Object, null] },
    fieldType: {},
    comparison: {},
    valueDataType: {},
    placeholder: { default: "输入值" },
    multiValues: { default: () => [] },
    dateValue: {},
    urlError: {},
    showDataTypeSwitch: { type: Boolean, default: !0 }
  },
  emits: ["update:value", "update:multi-values", "update:date-value", "blur:url", "update:value-data-type"],
  setup(t, { emit: e }) {
    const a = t, n = e, {
      showValueDataTypeSwitch: o,
      valueInputSwitchProps: r,
      dataTypeSwitchProps: i,
      valueInputSwitchListeners: l,
      dataTypeSwitchListeners: u
    } = cn({
      props: a,
      emit: n
    });
    return (s, d) => (c(), b("div", mn, [
      f(on, h(p(r), P(p(l))), null, 16),
      p(o) ? (c(), y(fe, h({ key: 0 }, p(i), P(p(u))), null, 16)) : D("", !0)
    ]));
  }
}), vn = /* @__PURE__ */ E(fn, [["__scopeId", "data-v-22d2f06b"]]), yn = /* @__PURE__ */ V({
  __name: "ParameterFormatSelect",
  props: {
    modelValue: { type: [String, Number, Boolean, Array, Object, null] }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e;
    return (n, o) => {
      const r = v("a-option"), i = v("a-optgroup"), l = v("a-select");
      return c(), y(l, {
        "model-value": n.modelValue,
        placeholder: "选择日期格式",
        "allow-create": "",
        style: { flex: "1", "min-width": "220px" },
        "onUpdate:modelValue": o[0] || (o[0] = (u) => a("update:modelValue", u))
      }, {
        default: g(() => [
          f(i, { label: "常用格式" }, {
            default: g(() => [
              f(r, {
                value: "yyyy-MM-dd HH:mm:ss",
                label: "年-月-日 时:分:秒"
              }, {
                default: g(() => o[1] || (o[1] = [
                  N("div", { class: "format-option" }, [
                    N("span", null, "yyyy-MM-dd HH:mm:ss"),
                    N("span", { class: "example" }, "2024-01-15 14:30:00")
                  ], -1)
                ])),
                _: 1
              }),
              f(r, {
                value: "yyyy-MM-dd'T'HH:mm:ss.SSSX",
                label: "ISO格式"
              }, {
                default: g(() => o[2] || (o[2] = [
                  N("div", { class: "format-option" }, [
                    N("span", null, "yyyy-MM-dd'T'HH:mm:ss.SSSX"),
                    N("span", { class: "example" }, "2024-01-15T14:30:00.000Z")
                  ], -1)
                ])),
                _: 1
              }),
              f(r, {
                value: "yyyy-MM-dd'T'HH:mm:ssXXX",
                label: "时区格式"
              }, {
                default: g(() => o[3] || (o[3] = [
                  N("div", { class: "format-option" }, [
                    N("span", null, "yyyy-MM-dd'T'HH:mm:ssXXX"),
                    N("span", { class: "example" }, "2024-01-15T14:30:00+08:00")
                  ], -1)
                ])),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["model-value"]);
    };
  }
}), gn = /* @__PURE__ */ E(yn, [["__scopeId", "data-v-53988543"]]), _n = /* @__PURE__ */ V({
  __name: "ParameterMultiValueInput",
  props: {
    modelValue: { default: () => [] },
    placeholder: { default: "输入参数值，回车分隔" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e;
    return (n, o) => {
      const r = v("a-input-tag");
      return c(), y(r, {
        "model-value": n.modelValue,
        placeholder: n.placeholder,
        "allow-clear": "",
        style: { flex: "1", "min-width": "200px" },
        "onUpdate:modelValue": o[0] || (o[0] = (i) => a("update:modelValue", i))
      }, null, 8, ["model-value", "placeholder"]);
    };
  }
}), Tn = /* @__PURE__ */ V({
  __name: "ParameterTimezoneSelect",
  props: {
    modelValue: { type: [String, Number, Boolean, Array, Object, null] }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e;
    return (n, o) => {
      const r = v("a-option"), i = v("a-select");
      return c(), y(i, {
        "model-value": n.modelValue,
        placeholder: "选择时区",
        "allow-search": "",
        style: { flex: "1", "min-width": "150px" },
        "onUpdate:modelValue": o[0] || (o[0] = (l) => a("update:modelValue", l))
      }, {
        default: g(() => [
          f(r, {
            value: "Asia/Shanghai",
            label: "Asia/Shanghai"
          }, {
            default: g(() => o[1] || (o[1] = [
              N("div", { class: "timezone-option" }, [
                N("span", null, "Asia/Shanghai"),
                N("span", { class: "desc" }, "(中国标准时间)")
              ], -1)
            ])),
            _: 1
          }),
          f(r, {
            value: "UTC",
            label: "UTC"
          }, {
            default: g(() => o[2] || (o[2] = [
              N("div", { class: "timezone-option" }, [
                N("span", null, "UTC"),
                N("span", { class: "desc" }, "(协调世界时)")
              ], -1)
            ])),
            _: 1
          }),
          f(r, {
            value: "America/New_York",
            label: "America/New_York"
          }, {
            default: g(() => o[3] || (o[3] = [
              N("div", { class: "timezone-option" }, [
                N("span", null, "America/New_York"),
                N("span", { class: "desc" }, "(美国东部时间)")
              ], -1)
            ])),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["model-value"]);
    };
  }
}), Vn = /* @__PURE__ */ E(Tn, [["__scopeId", "data-v-af57a41e"]]), hn = /* @__PURE__ */ V({
  __name: "ParameterTextValueInput",
  props: {
    modelValue: { type: [String, Number, Boolean, Array, Object, null] }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e;
    return (n, o) => {
      const r = v("a-textarea");
      return c(), y(r, {
        "model-value": n.modelValue,
        "auto-size": { minRows: 1, maxRows: 4 },
        style: { flex: "1", "min-width": "200px" },
        "onUpdate:modelValue": o[0] || (o[0] = (i) => a("update:modelValue", i))
      }, null, 8, ["model-value"]);
    };
  }
}), Pn = /* @__PURE__ */ V({
  __name: "ParameterValueFallbackInput",
  props: {
    resolvedDisplayValue: { type: [String, Number, Boolean, Array, Object, null] },
    valueDataType: {}
  },
  emits: ["update:value"],
  setup(t, { emit: e }) {
    const a = e, n = {
      "update:model-value": (o) => a("update:value", o)
    };
    return (o, r) => o.valueDataType === "boolean" ? (c(), y(J, h({
      key: 0,
      "model-value": o.resolvedDisplayValue
    }, P(n)), null, 16, ["model-value"])) : (c(), y(hn, h({
      key: 1,
      "model-value": o.resolvedDisplayValue
    }, P(n)), null, 16, ["model-value"]));
  }
});
function Fn(t) {
  const { panelProps: e, listeners: a } = t.setupResult;
  return {
    formatSelectProps: e.formatSelectProps,
    timezoneSelectProps: e.timezoneSelectProps,
    multiValueInputProps: e.multiValueInputProps,
    fallbackInputProps: e.fallbackInputProps,
    valueListeners: a.valueListeners,
    multiValueListeners: a.multiValueListeners,
    fallbackListeners: a.fallbackListeners
  };
}
function bn(t) {
  return {
    valueListeners: {
      "update:model-value": (o) => t("update:value", o)
    },
    multiValueListeners: {
      "update:model-value": (o) => t("update:multi-values", o)
    },
    fallbackListeners: {
      "update:value": (o) => t("update:value", o)
    }
  };
}
function Nn(t) {
  const e = _(() => ({
    modelValue: t.resolvedDisplayValue
  })), a = _(() => ({
    modelValue: t.resolvedDisplayValue
  })), n = _(() => ({
    modelValue: t.multiValues,
    placeholder: t.multiValuePlaceholder
  })), o = _(() => ({
    resolvedDisplayValue: t.resolvedDisplayValue,
    valueDataType: t.valueDataType
  }));
  return {
    formatSelectProps: e,
    timezoneSelectProps: a,
    multiValueInputProps: n,
    fallbackInputProps: o
  };
}
function En(t) {
  const { props: e, emit: a } = t, n = Nn(e), o = bn(a);
  return {
    panelProps: n,
    listeners: o
  };
}
function Cn(t) {
  const e = En(t);
  return Fn({ setupResult: e });
}
const Ln = /* @__PURE__ */ V({
  __name: "ParameterValueInputSwitch",
  props: {
    resolvedDisplayValue: { type: [String, Number, Boolean, Array, Object, null] },
    valueDataType: {},
    isFormatParameter: { type: Boolean },
    isTimezoneParameter: { type: Boolean },
    isMultiValue: { type: Boolean },
    multiValues: {},
    multiValuePlaceholder: {}
  },
  emits: ["update:value", "update:multi-values"],
  setup(t, { emit: e }) {
    const a = t, n = e, {
      formatSelectProps: o,
      timezoneSelectProps: r,
      multiValueInputProps: i,
      fallbackInputProps: l,
      valueListeners: u,
      multiValueListeners: s,
      fallbackListeners: d
    } = Cn({
      props: a,
      emit: n
    });
    return (m, T) => a.isFormatParameter ? (c(), y(gn, h({ key: 0 }, p(o), P(p(u))), null, 16)) : a.isTimezoneParameter ? (c(), y(Vn, h({ key: 1 }, p(r), P(p(u))), null, 16)) : a.isMultiValue ? (c(), y(_n, h({ key: 2 }, p(i), P(p(s))), null, 16)) : (c(), y(Pn, h({ key: 3 }, p(l), P(p(d))), null, 16));
  }
});
function Dn(t) {
  const { state: e, listeners: a, panelProps: n } = t.setupResult;
  return {
    showValueDataTypeSwitch: e.showValueDataTypeSwitch,
    valueInputSwitchProps: n.valueInputSwitchProps,
    dataTypeSwitchProps: n.dataTypeSwitchProps,
    valueInputSwitchListeners: a.valueInputSwitchListeners,
    dataTypeSwitchListeners: a.dataTypeSwitchListeners
  };
}
function xn(t) {
  return {
    onUpdateValue: (o) => t("update:value", o),
    onUpdateMultiValues: (o) => t("update:multi-values", o),
    onUpdateValueDataType: (o) => t("update:value-data-type", o)
  };
}
function wn(t) {
  const { forwarders: e } = t, a = {
    "update:value": e.onUpdateValue,
    "update:multi-values": e.onUpdateMultiValues
  }, n = {
    "update:modelValue": e.onUpdateValueDataType
  };
  return {
    valueInputSwitchListeners: a,
    dataTypeSwitchListeners: n
  };
}
function Un(t, e) {
  const a = _(() => ({
    resolvedDisplayValue: e.resolvedDisplayValue.value,
    valueDataType: t.valueDataType,
    isFormatParameter: e.isFormatParameter.value,
    isTimezoneParameter: e.isTimezoneParameter.value,
    isMultiValue: e.isMultiValue.value,
    multiValues: t.multiValues,
    multiValuePlaceholder: e.multiValuePlaceholder.value
  })), n = _(() => ({
    modelValue: t.valueDataType
  }));
  return {
    valueInputSwitchProps: a,
    dataTypeSwitchProps: n
  };
}
function In(t) {
  const e = _(() => t.displayValue !== void 0 ? t.displayValue : t.value), a = _(() => t.parameterName === "format"), n = _(() => t.parameterName === "timezone"), o = _(() => t.parameterName === "items" || (t.parameterDescription || "").includes("多个") || (t.parameterDescription || "").includes("列表")), r = _(() => `输入${t.parameterDescription}，回车分隔`), i = _(() => t.showDataTypeSwitch && t.parameterType !== "field");
  return {
    resolvedDisplayValue: e,
    isFormatParameter: a,
    isTimezoneParameter: n,
    isMultiValue: o,
    multiValuePlaceholder: r,
    showValueDataTypeSwitch: i
  };
}
function Sn(t) {
  const { props: e, emit: a } = t, n = In(e), o = xn(a), r = wn({ forwarders: o }), i = Un(e, n);
  return {
    state: n,
    listeners: r,
    panelProps: i
  };
}
function An(t) {
  const e = Sn(t);
  return Dn({ setupResult: e });
}
const Mn = { class: "parameter-value-editor" }, Bn = /* @__PURE__ */ V({
  __name: "ParameterValueEditor",
  props: {
    value: { type: [String, Number, Boolean, Array, Object, null] },
    displayValue: { type: [String, Number, Boolean, Array, Object, null] },
    valueDataType: {},
    multiValues: { default: () => [] },
    parameterName: {},
    parameterDescription: { default: "参数值" },
    parameterType: {},
    showDataTypeSwitch: { type: Boolean, default: !0 }
  },
  emits: ["update:value", "update:multi-values", "update:value-data-type"],
  setup(t, { emit: e }) {
    const a = t, n = e, {
      showValueDataTypeSwitch: o,
      valueInputSwitchProps: r,
      dataTypeSwitchProps: i,
      valueInputSwitchListeners: l,
      dataTypeSwitchListeners: u
    } = An({
      props: a,
      emit: n
    });
    return (s, d) => (c(), b("div", Mn, [
      f(Ln, h(p(r), P(p(l))), null, 16),
      p(o) ? (c(), y(fe, h({ key: 0 }, p(i), P(p(u))), null, 16)) : D("", !0)
    ]));
  }
}), Rn = /* @__PURE__ */ E(Bn, [["__scopeId", "data-v-ff6f11ca"]]);
function $n(t) {
  const { state: e, panelProps: a, listeners: n } = t.setupResult;
  return {
    isConditionMode: e.isConditionMode,
    conditionEditorProps: a.conditionEditorProps,
    parameterEditorProps: a.parameterEditorProps,
    conditionEditorListeners: n.conditionEditorListeners,
    parameterEditorListeners: n.parameterEditorListeners
  };
}
function On(t) {
  const e = (u) => t("update:value", u), a = (u) => t("update:multi-values", u), n = (u) => t("update:date-value", u), o = () => t("blur:url"), r = (u) => t("update:value-data-type", u);
  return {
    conditionEditorListeners: {
      "update:value": e,
      "update:multi-values": a,
      "update:date-value": n,
      "blur:url": o,
      "update:value-data-type": r
    },
    parameterEditorListeners: {
      "update:value": e,
      "update:multi-values": a,
      "update:value-data-type": r
    }
  };
}
function kn(t) {
  const e = _(() => ({
    value: t.value,
    fieldType: t.fieldType,
    comparison: t.comparison,
    valueDataType: t.valueDataType,
    placeholder: t.placeholder,
    multiValues: t.multiValues,
    dateValue: t.dateValue,
    urlError: t.urlError,
    showDataTypeSwitch: t.showDataTypeSwitch
  })), a = _(() => ({
    value: t.value,
    displayValue: t.displayValue,
    valueDataType: t.valueDataType,
    multiValues: t.multiValues,
    parameterName: t.parameterName,
    parameterDescription: t.parameterDescription,
    parameterType: t.parameterType,
    showDataTypeSwitch: t.showDataTypeSwitch
  }));
  return {
    conditionEditorProps: e,
    parameterEditorProps: a
  };
}
function zn(t) {
  return {
    isConditionMode: _(() => t.mode === "condition")
  };
}
function Gn(t) {
  const { props: e, emit: a } = t, n = zn(e), o = kn(e), r = On(a);
  return {
    state: n,
    panelProps: o,
    listeners: r
  };
}
function jn(t) {
  const e = Gn(t);
  return $n({ setupResult: e });
}
const ve = /* @__PURE__ */ V({
  __name: "ValueEditor",
  props: {
    mode: { default: "condition" },
    value: { type: [String, Number, Boolean, Array, Object, null] },
    displayValue: { type: [String, Number, Boolean, Array, Object, null] },
    fieldType: {},
    comparison: {},
    valueDataType: {},
    placeholder: { default: "输入值" },
    multiValues: { default: () => [] },
    dateValue: {},
    urlError: {},
    parameterName: {},
    parameterDescription: { default: "参数值" },
    parameterType: {},
    showDataTypeSwitch: { type: Boolean, default: !0 }
  },
  emits: ["update:value", "update:multi-values", "update:date-value", "blur:url", "update:value-data-type"],
  setup(t, { emit: e }) {
    const a = t, n = e, {
      isConditionMode: o,
      conditionEditorProps: r,
      parameterEditorProps: i,
      conditionEditorListeners: l,
      parameterEditorListeners: u
    } = jn({
      props: a,
      emit: n
    });
    return (s, d) => p(o) ? (c(), y(vn, h({ key: 0 }, p(r), P(p(l))), null, 16)) : (c(), y(Rn, h({ key: 1 }, p(i), P(p(u))), null, 16));
  }
});
function Hn(t) {
  const { state: e, panelProps: a, listeners: n } = t.setupResult;
  return {
    isValueMode: e.isValueMode,
    isFieldMode: e.isFieldMode,
    isFunctionMode: e.isFunctionMode,
    valueEditorProps: a.valueEditorProps,
    fieldRefEditorProps: a.fieldRefEditorProps,
    functionRefEditorProps: a.functionRefEditorProps,
    valueEditorListeners: n.valueEditorListeners,
    fieldRefListeners: n.fieldRefListeners,
    functionRefListeners: n.functionRefListeners
  };
}
function Wn(t) {
  return {
    onUpdateField: (n) => t("update:field", n),
    onUpdateArrayIndex: (n) => t("update:array-index", n)
  };
}
function qn(t) {
  return {
    onUpdateFunction: (n) => t("update:function", n),
    onUpdateParameter: (n) => t("update:parameter", n)
  };
}
function Yn(t) {
  return {
    onUpdateType: (a) => t("update:type", a)
  };
}
function Xn(t) {
  return {
    onUpdateValue: (i) => t("update:value", i),
    onUpdateMultiValues: (i) => t("update:multi-values", i),
    onUpdateDateValue: (i) => t("update:date-value", i),
    onBlurUrl: () => t("blur:url"),
    onUpdateValueDataType: (i) => t("update:value-data-type", i)
  };
}
function Kn(t) {
  const {
    typeForwarders: e,
    valueForwarders: a,
    fieldForwarders: n,
    functionForwarders: o
  } = t;
  return {
    onUpdateType: e.onUpdateType,
    onUpdateValue: a.onUpdateValue,
    onUpdateMultiValues: a.onUpdateMultiValues,
    onUpdateDateValue: a.onUpdateDateValue,
    onBlurUrl: a.onBlurUrl,
    onUpdateValueDataType: a.onUpdateValueDataType,
    onUpdateField: n.onUpdateField,
    onUpdateArrayIndex: n.onUpdateArrayIndex,
    onUpdateFunction: o.onUpdateFunction,
    onUpdateParameter: o.onUpdateParameter
  };
}
function ye(t) {
  const e = Yn(t), a = Xn(t), n = Wn(t), o = qn(t);
  return Kn({
    typeForwarders: e,
    valueForwarders: a,
    fieldForwarders: n,
    functionForwarders: o
  });
}
function ge(t) {
  return {
    "update:value": t.onUpdateValue,
    "update:multi-values": t.onUpdateMultiValues,
    "update:date-value": t.onUpdateDateValue,
    "blur:url": t.onBlurUrl,
    "update:value-data-type": t.onUpdateValueDataType,
    "update:field": t.onUpdateField,
    "update:array-index": t.onUpdateArrayIndex,
    "update:function": t.onUpdateFunction,
    "update:parameter": t.onUpdateParameter
  };
}
function Jn(t) {
  return {
    "update:value": t["update:value"],
    "update:multi-values": t["update:multi-values"],
    "update:date-value": t["update:date-value"],
    "blur:url": t["blur:url"],
    "update:value-data-type": t["update:value-data-type"]
  };
}
function Qn(t) {
  return {
    "update:field": t["update:field"],
    "update:array-index": t["update:array-index"]
  };
}
function Zn(t) {
  return {
    "update:function": t["update:function"],
    "update:parameter": t["update:parameter"]
  };
}
function eo(t) {
  return Qn(t);
}
function to(t) {
  return Zn(t);
}
function ao(t) {
  return Jn(t);
}
function no(t) {
  const e = ge(t), a = ao(e), n = eo(e), o = to(e);
  return {
    valueEditorListeners: a,
    fieldRefListeners: n,
    functionRefListeners: o
  };
}
function oo(t) {
  return _(() => ({
    value: String(t.value || ""),
    availableFields: t.availableFields || [],
    showArrayIndex: !0,
    arrayIndex: t.valueArrayIndex,
    showArrayHint: !0,
    getFieldTooltip: t.getFieldTooltip,
    getTypeColor: t.getFieldTypeColor
  }));
}
function ro(t) {
  return _(() => ({
    selectedFunctionName: t.selectedFunctionName,
    functionCategories: t.functionCategories,
    selectedFunction: t.selectedFunction,
    functionParameters: t.functionParameters,
    availableFields: t.availableFields || [],
    functionExpression: t.functionExpression
  }));
}
function io(t) {
  return _(() => ({
    mode: "condition",
    value: t.value,
    fieldType: t.fieldType,
    comparison: t.comparison,
    valueDataType: t.valueDataType,
    placeholder: t.placeholder,
    multiValues: t.multiValues,
    dateValue: t.dateValue,
    urlError: t.urlError,
    showDataTypeSwitch: !0
  }));
}
function lo(t) {
  const e = io(t), a = oo(t), n = ro(t);
  return {
    valueEditorProps: e,
    fieldRefEditorProps: a,
    functionRefEditorProps: n
  };
}
function so(t) {
  const e = _(() => t.currentInputType === "value"), a = _(() => t.currentInputType === "field"), n = _(() => t.currentInputType === "function");
  return {
    isValueMode: e,
    isFieldMode: a,
    isFunctionMode: n
  };
}
function uo(t) {
  const e = so(t.props), a = ye(t.emit), n = no(a), o = lo(t.props);
  return {
    state: e,
    listeners: n,
    panelProps: o
  };
}
function po(t) {
  const e = uo(t);
  return Hn({ setupResult: e });
}
const co = /* @__PURE__ */ V({
  __name: "ValueInputPanelBody",
  props: {
    currentInputType: {},
    valueTypeOptions: {},
    value: { type: [String, Number, Boolean, Array, Object, null] },
    fieldType: {},
    comparison: {},
    availableFields: {},
    valueDataType: {},
    placeholder: {},
    multiValues: {},
    dateValue: {},
    urlError: {},
    valueArrayIndex: {},
    getFieldTypeColor: { type: Function },
    getFieldTooltip: { type: Function },
    selectedFunctionName: {},
    functionCategories: {},
    selectedFunction: {},
    functionParameters: {},
    functionExpression: {}
  },
  emits: ["update:type", "update:value", "update:multi-values", "update:date-value", "blur:url", "update:value-data-type", "update:field", "update:array-index", "update:function", "update:parameter"],
  setup(t, { emit: e }) {
    const a = t, n = e, {
      isValueMode: o,
      isFieldMode: r,
      isFunctionMode: i,
      valueEditorProps: l,
      fieldRefEditorProps: u,
      functionRefEditorProps: s,
      valueEditorListeners: d,
      fieldRefListeners: m,
      functionRefListeners: T
    } = po({
      props: a,
      emit: n
    });
    return (L, C) => (c(), b(S, null, [
      p(o) ? (c(), y(ve, h({ key: 0 }, p(l), P(p(d))), null, 16)) : D("", !0),
      p(r) ? (c(), y(K, h({ key: 1 }, p(u), P(p(m))), null, 16)) : D("", !0),
      p(i) ? (c(), y(Ba, h({ key: 2 }, p(s), P(p(T))), null, 16)) : D("", !0)
    ], 64));
  }
});
function mo(t) {
  return {
    selectorProps: t.setupResult.panelProps.selectorProps,
    panelBodyProps: t.setupResult.panelProps.panelBodyProps,
    typeSelectorListeners: t.setupResult.listeners.typeSelectorListeners,
    panelBodyListeners: t.setupResult.listeners.panelBodyListeners
  };
}
function fo(t) {
  return ge(t);
}
function vo(t) {
  return {
    "update:model-value": t.onUpdateType
  };
}
function yo(t) {
  const e = vo(t), a = fo(t);
  return {
    typeSelectorListeners: e,
    panelBodyListeners: a
  };
}
function go(t) {
  return _(() => t);
}
function _o(t) {
  return _(() => ({
    modelValue: t.currentInputType,
    options: t.valueTypeOptions,
    placeholder: "值类型"
  }));
}
function To(t) {
  const { props: e } = t, a = _o(e), n = go(e);
  return {
    selectorProps: a,
    panelBodyProps: n
  };
}
function Vo(t) {
  const e = ye(t.emit), a = yo(e);
  return {
    panelProps: To({ props: t.props }),
    listeners: a
  };
}
function ho(t) {
  const e = Vo(t);
  return mo({ setupResult: e });
}
const Po = { class: "value-input-wrapper" }, Fo = /* @__PURE__ */ V({
  __name: "ValueInputSwitchPanel",
  props: {
    currentInputType: {},
    valueTypeOptions: {},
    value: { type: [String, Number, Boolean, Array, Object, null] },
    fieldType: {},
    comparison: {},
    availableFields: {},
    valueDataType: {},
    placeholder: {},
    multiValues: {},
    dateValue: {},
    urlError: {},
    valueArrayIndex: {},
    getFieldTypeColor: { type: Function },
    getFieldTooltip: { type: Function },
    selectedFunctionName: {},
    functionCategories: {},
    selectedFunction: {},
    functionParameters: {},
    functionExpression: {}
  },
  emits: ["update:type", "update:value", "update:multi-values", "update:date-value", "blur:url", "update:value-data-type", "update:field", "update:array-index", "update:function", "update:parameter"],
  setup(t, { emit: e }) {
    const a = t, n = e, {
      selectorProps: o,
      panelBodyProps: r,
      typeSelectorListeners: i,
      panelBodyListeners: l
    } = ho({
      props: a,
      emit: n
    });
    return (u, s) => (c(), b("div", Po, [
      f(me, h(p(o), P(p(i))), null, 16),
      f(co, h(p(r), P(p(l))), null, 16)
    ]));
  }
}), bo = /* @__PURE__ */ E(Fo, [["__scopeId", "data-v-f22270ea"]]), No = { class: "compound-operator-info" }, Eo = { class: "compound-text" }, Co = /* @__PURE__ */ V({
  __name: "CompoundOperatorInfo",
  props: {
    comparison: {}
  },
  setup(t) {
    return (e, a) => (c(), b("div", No, [
      N("span", Eo, U(e.comparison), 1)
    ]));
  }
}), Lo = /* @__PURE__ */ E(Co, [["__scopeId", "data-v-94adf787"]]);
function Do(t) {
  const {
    isCompoundOperator: e,
    listeners: a,
    switchPanelProps: n
  } = t.setupResult;
  return {
    isCompoundOperator: e,
    switchPanelProps: n,
    switchPanelListeners: a.switchPanelListeners
  };
}
function xo(t) {
  const { valueActions: e, typeActions: a, fieldActions: n, functionActions: o } = t;
  return {
    updateValue: e.updateValue,
    updateMultiValues: e.updateMultiValues,
    updateDateValue: e.updateDateValue,
    validateURL: e.validateURL,
    changeValueDataType: e.changeValueDataType,
    changeValueType: a.changeValueType,
    updateBaseField: n.updateBaseField,
    updateValueArrayIndex: n.updateValueArrayIndex,
    updateFunction: o.updateFunction,
    updateParameter: o.updateParameter,
    generateFunctionExpression: o.generateFunctionExpression
  };
}
function wo(t, e) {
  const { props: a, emitUpdateValue: n } = e;
  return {
    updateBaseField: (i) => {
      if (!a.availableFields)
        return;
      const l = a.availableFields.find((s) => s.value === i);
      let u = i;
      (l == null ? void 0 : l.type) === "array" && !/\[\d+\]$/.test(i) && (u = `${i}[0]`), n(u);
    },
    updateValueArrayIndex: (i) => {
      const l = t.getBaseFieldName();
      if (!l)
        return;
      const u = i !== void 0 ? `${l}[${i}]` : l;
      n(u);
    }
  };
}
function Uo(t, e) {
  const { emitUpdateValue: a } = e;
  return {
    updateFunction: (i) => {
      const l = t.functionRefController.selectFunction(i);
      l && a(l);
    },
    updateParameter: (i, l) => {
      const u = t.functionRefController.setParameter(i, l);
      a(u);
    },
    generateFunctionExpression: () => t.functionRefController.buildExpression()
  };
}
function Io(t, e) {
  const a = t.getValueInputType(), { value: n } = e.props;
  n && (a === "value" && (t.savedStringValue.value = String(n)), a === "field" && (t.savedFieldValue.value = String(n)), a === "function" && (t.savedFunctionValue.value = String(n)));
}
function So(t) {
  let e = t.savedStringValue.value || "";
  const a = t.getValueDataType();
  if (a === "number")
    return e && !Number.isNaN(Number(e)) && String(e).trim() !== "" && (e = Number(e)), e;
  if (a === "string")
    return String(e);
  const n = String(e);
  return n && !Number.isNaN(Number(n)) && n.trim() !== "" ? Number(n) : n === "true" || n === "false" ? n === "true" : e;
}
function Ao(t, e) {
  const { availableFields: a } = e.props;
  let n = t.savedFieldValue.value;
  return (!n || !(a != null && a.some((o) => o.value === n))) && (n = a != null && a.length ? a[0].value : ""), n;
}
function Mo(t, e) {
  let a = t.savedFunctionValue.value || e.props.value;
  return t.functionRefController.initializeFromExpression(a) || (a = "string.length(field_name)", t.functionRefController.initializeFromExpression(a)), a;
}
function Bo(t, e, a) {
  return t === "value" ? So(e) : t === "field" ? Ao(e, a) : Mo(e, a);
}
function Ro(t, e) {
  const { emitUpdateValue: a, emitUpdateType: n } = e;
  return {
    changeValueType: (r) => {
      Io(t, e), t.userSelectedType.value = r, n(r), a(Bo(r, t, e));
    }
  };
}
const $o = [
  { value: "value", label: "值" },
  { value: "field", label: "字段" },
  { value: "function", label: "函数" }
], Oo = /* @__PURE__ */ new Set(["== nil", "!= nil", "== ''", "!= ''"]), ko = {
  string: "blue",
  number: "green",
  boolean: "orange",
  datetime: "purple",
  ip: "cyan",
  email: "magenta",
  url: "lime",
  array: "gold",
  object: "gray"
};
function zo(t) {
  return t && ko[t] || "default";
}
function Go(t) {
  switch (t) {
    case "string":
      return "输入文本";
    case "email":
      return "输入邮箱地址";
    case "url":
      return "输入URL地址";
    case "uuid":
      return "输入UUID";
    default:
      return "输入值";
  }
}
function _e(t) {
  if (typeof t != "string" || !t)
    return "";
  const e = t.match(/^([a-z_][\w.]*)(\[[^\]]+\])?$/i);
  return e ? e[1] : t;
}
function jo(t) {
  if (typeof t != "string" || !t)
    return;
  const e = t.match(/\[(\d+)\]$/);
  return e ? Number.parseInt(e[1], 10) : void 0;
}
function Ho(t) {
  return t.type === "array" ? `${t.label} (数组) - 可输入索引访问元素，例如: ${t.value}[0]` : `字段: ${t.label} (${t.type})`;
}
function Wo(t) {
  const e = {
    system: { name: "system", label: "系统函数", functions: [] },
    string: { name: "string", label: "字符串函数", functions: [] },
    math: { name: "math", label: "数学函数", functions: [] },
    sequence: { name: "sequence", label: "集合函数", functions: [] },
    datetime: { name: "datetime", label: "日期时间函数", functions: [] },
    custom: { name: "custom", label: "安全检查函数", functions: [] }
  };
  return t.forEach((a) => {
    e[a.category] && e[a.category].functions.push(a);
  }), Object.values(e).filter((a) => a.functions.length > 0);
}
const qo = /^-?\d+(\.\d+)?$/;
function Yo(t) {
  if (typeof t != "string" || !t)
    return "";
  const e = t.match(/^([a-z_][\w.]*)\s*\(/i);
  return e ? e[1] : "";
}
function Q(t, e) {
  return t && e.find((a) => a.name === t) || null;
}
function Xo(t, e) {
  return e === "field" ? t : typeof t == "string" && !qo.test(t) ? `"${t}"` : t;
}
function Ko(t) {
  return t ? Oo.has(t) : !1;
}
function Jo(t) {
  const { explicitType: e, value: a, valueIsLiteral: n, availableFields: o, functions: r } = t;
  if (Qo(e))
    return e;
  if (n === !0)
    return "value";
  const i = typeof a == "string" ? a : "";
  if (i && (o != null && o.some((l) => l.value === i)))
    return "field";
  if (i && /^[a-z_][\w.]*\[[^\]]+\]/i.test(i)) {
    const l = _e(i);
    if (l && (o != null && o.some((u) => u.value === l)))
      return "field";
  }
  if (i) {
    const l = i.match(/^([a-z_][\w.]*)\s*\(/i);
    if (l) {
      const u = l[1];
      if (r.some((s) => s.name === u))
        return "function";
    }
  }
  return "value";
}
function Qo(t) {
  return t === "value" || t === "field" || t === "function";
}
const ne = "URL格式不正确，请输入有效的URL地址", Zo = /* @__PURE__ */ new Set(["http:", "https:", "ftp:"]);
function er(t) {
  if (typeof t != "string" || !t)
    return "";
  try {
    const e = new URL(t);
    return Zo.has(e.protocol) ? "" : "URL协议必须是 http、https 或 ftp";
  } catch {
    if (!t.includes("://"))
      try {
        return new URL(`http://${t}`), "";
      } catch {
        return ne;
      }
    return ne;
  }
}
const tr = "string", ar = "condition_value";
function nr(t) {
  return t || tr;
}
function or(t) {
  return t || ar;
}
function rr(t) {
  if (!t || typeof t != "string" && typeof t != "number" && !(t instanceof Date))
    return;
  const e = new Date(t);
  if (!Number.isNaN(e.getTime()))
    return e;
}
function ir(t) {
  return Array.isArray(t) ? t.map((e) => String(e)).filter((e) => e !== "") : typeof t == "string" ? t.split(",").map((e) => e.trim()).filter((e) => e) : [];
}
function lr(t, e) {
  const { props: a, emitUpdateValue: n } = e;
  return {
    updateValue: (s) => {
      n(s);
    },
    updateMultiValues: (s) => {
      n(s);
    },
    updateDateValue: (s) => {
      n(s ? s.toISOString() : "");
    },
    validateURL: () => {
      t.urlError.value = er(a.value);
    },
    changeValueDataType: (s) => {
      t.userSelectedValueDataType.value = s, a.value !== void 0 && a.value !== null && a.value !== "" && n(a.value);
    }
  };
}
function sr(t, e) {
  const a = lr(t, e), n = Ro(t, e), o = wo(t, e), r = Uo(t, e);
  return xo({
    valueActions: a,
    typeActions: n,
    fieldActions: o,
    functionActions: r
  });
}
function ur(t, e) {
  return {
    selectedFunctionName: t.functionRefController.selectedFunctionName,
    functionParameters: t.functionRefController.functionParameters,
    functionCategories: t.functionRefController.functionCategories,
    selectedFunction: t.functionRefController.selectedFunction,
    dateValue: t.dateValue,
    multiValues: t.multiValues,
    urlError: t.urlError,
    getPlaceholder: t.getPlaceholder,
    isCompoundOperator: t.isCompoundOperator,
    getFieldTypeColor: t.getFieldTypeColor,
    getValueInputType: t.getValueInputType,
    getAvailableValueTypes: t.getAvailableValueTypes,
    getValueDataType: t.getValueDataType,
    getValueArrayIndex: t.getValueArrayIndex,
    getFieldTooltipForValue: t.getFieldTooltipForValue,
    updateValue: e.updateValue,
    updateMultiValues: e.updateMultiValues,
    updateDateValue: e.updateDateValue,
    validateURL: e.validateURL,
    changeValueDataType: e.changeValueDataType,
    changeValueType: e.changeValueType,
    updateBaseField: e.updateBaseField,
    updateValueArrayIndex: e.updateValueArrayIndex,
    updateFunction: e.updateFunction,
    updateParameter: e.updateParameter,
    generateFunctionExpression: e.generateFunctionExpression
  };
}
function oe(t) {
  return t.parameters.map((e) => ({
    ...e,
    value: void 0,
    type: "value"
  }));
}
function dr(t, e) {
  const a = Yo(t);
  return Q(a, e);
}
function pr(t) {
  const { functions: e, selectedFunctionName: a, functionParameters: n, selectedFunction: o } = t, r = (s) => {
    const d = dr(s, e);
    return d ? (a.value = d.name, n.value = oe(d), !0) : !1;
  }, i = () => {
    if (!o.value)
      return "";
    const s = n.value.filter((d) => d.value !== void 0 && d.value !== "").map((d) => Xo(d.value, d.type)).join(", ");
    return `${o.value.name}(${s})`;
  };
  return {
    initializeFromExpression: r,
    buildExpression: i,
    selectFunction: (s) => {
      const d = Q(s, e);
      return d ? (a.value = s, n.value = oe(d), i()) : "";
    },
    setParameter: (s, d) => (n.value[s] && (n.value[s] = {
      ...n.value[s],
      value: d
    }), i())
  };
}
function cr(t) {
  const { selectedFunctionName: e, functionParameters: a, functionCategories: n, selectedFunction: o, actions: r } = t;
  return {
    selectedFunctionName: e,
    functionParameters: a,
    functionCategories: n,
    selectedFunction: o,
    initializeFromExpression: r.initializeFromExpression,
    buildExpression: r.buildExpression,
    selectFunction: r.selectFunction,
    setParameter: r.setParameter
  };
}
function mr(t) {
  const { functions: e } = t, a = I(""), n = I([]), o = _(() => Wo(e)), r = _(() => a.value ? Q(a.value, e) : null), i = pr({
    functions: e,
    selectedFunctionName: a,
    functionParameters: n,
    selectedFunction: r
  });
  return cr({
    selectedFunctionName: a,
    functionParameters: n,
    functionCategories: o,
    selectedFunction: r,
    actions: i
  });
}
function fr(t) {
  const { props: e, emitUpdateValueDataType: a } = t, n = I(nr(e.currentDataType));
  B(
    () => e.currentDataType,
    (i) => {
      n.value = nr(i);
    },
    { immediate: !0 }
  );
  const o = _({
    get: () => n.value,
    set: (i) => {
      n.value = i, a(or(e.fieldName), i);
    }
  }), r = _(() => rr(e.value)), i = _(() => ir(e.value));
  return {
    userSelectedValueDataType: o,
    dateValue: r,
    multiValues: i
  };
}
function vr(t) {
  const { refsState: e, computedState: a, functionRefController: n, queries: o } = t;
  return {
    userSelectedType: e.userSelectedType,
    savedStringValue: e.savedStringValue,
    savedFieldValue: e.savedFieldValue,
    savedFunctionValue: e.savedFunctionValue,
    urlError: e.urlError,
    userSelectedValueDataType: a.userSelectedValueDataType,
    dateValue: a.dateValue,
    multiValues: a.multiValues,
    functionRefController: n,
    getPlaceholder: o.getPlaceholder,
    isCompoundOperator: o.isCompoundOperator,
    getFieldTypeColor: o.getFieldTypeColor,
    getValueInputType: o.getValueInputType,
    getAvailableValueTypes: o.getAvailableValueTypes,
    getValueDataType: o.getValueDataType,
    getBaseFieldName: o.getBaseFieldName,
    getValueArrayIndex: o.getValueArrayIndex,
    getFieldTooltipForValue: o.getFieldTooltipForValue,
    syncFunctionStateFromValue: o.syncFunctionStateFromValue
  };
}
function yr(t) {
  const {
    props: e,
    functions: a,
    userSelectedType: n,
    userSelectedValueDataType: o,
    functionRefController: r
  } = t, i = () => Go(e.fieldType), l = () => Ko(e.comparison), u = (F) => zo(F), s = () => Jo({
    explicitType: n.value,
    value: e.value,
    valueIsLiteral: e.valueIsLiteral,
    availableFields: e.availableFields,
    functions: a
  });
  return {
    getPlaceholder: i,
    isCompoundOperator: l,
    getFieldTypeColor: u,
    getValueInputType: s,
    getAvailableValueTypes: () => $o,
    getValueDataType: () => o.value,
    getBaseFieldName: () => _e(e.value),
    getValueArrayIndex: () => jo(e.value),
    getFieldTooltipForValue: (F) => Ho(F),
    syncFunctionStateFromValue: () => {
      s() === "function" && r.initializeFromExpression(e.value);
    }
  };
}
function gr() {
  const t = I(null), e = I(""), a = I(""), n = I(""), o = I("");
  return {
    userSelectedType: t,
    savedStringValue: e,
    savedFieldValue: a,
    savedFunctionValue: n,
    urlError: o
  };
}
function _r(t) {
  const { props: e, emitUpdateValueDataType: a } = t, n = gr(), o = fr({
    props: e,
    emitUpdateValueDataType: a
  }), r = mr({
    functions: R
  }), i = yr({
    props: e,
    functions: R,
    userSelectedType: n.userSelectedType,
    userSelectedValueDataType: o.userSelectedValueDataType,
    functionRefController: r
  });
  return vr({
    refsState: n,
    computedState: o,
    functionRefController: r,
    queries: i
  });
}
function Tr(t) {
  const { props: e, state: a } = t;
  B(
    () => e.value,
    () => {
      a.syncFunctionStateFromValue();
    },
    { immediate: !0 }
  );
}
function Vr(t) {
  const e = _r({
    props: t.props,
    emitUpdateValueDataType: t.emitUpdateValueDataType
  }), a = sr(e, {
    props: t.props,
    emitUpdateValue: t.emitUpdateValue,
    emitUpdateType: t.emitUpdateType
  });
  return Tr({
    props: t.props,
    state: e
  }), ur(e, a);
}
function hr(t) {
  return {
    switchPanelListeners: {
      "update:type": t.changeValueType,
      "update:value": t.updateValue,
      "update:multi-values": t.updateMultiValues,
      "update:date-value": t.updateDateValue,
      "blur:url": t.validateURL,
      "update:value-data-type": t.changeValueDataType,
      "update:field": t.updateBaseField,
      "update:array-index": t.updateValueArrayIndex,
      "update:function": t.updateFunction,
      "update:parameter": t.onUpdateParameter
    }
  };
}
function Pr(t) {
  const { props: e, controller: a, state: n } = t;
  return {
    currentInputType: n.currentInputType.value,
    valueTypeOptions: n.valueTypeOptions.value,
    value: e.value,
    fieldType: e.fieldType,
    comparison: e.comparison,
    availableFields: e.availableFields,
    valueDataType: a.getValueDataType(),
    placeholder: a.getPlaceholder(),
    multiValues: p(a.multiValues),
    dateValue: p(a.dateValue),
    urlError: p(a.urlError),
    valueArrayIndex: a.getValueArrayIndex(),
    getFieldTypeColor: a.getFieldTypeColor,
    getFieldTooltip: a.getFieldTooltipForValue
  };
}
function Fr(t) {
  const { baseProps: e, functionProps: a } = t;
  return {
    currentInputType: e.currentInputType,
    valueTypeOptions: e.valueTypeOptions,
    value: e.value,
    fieldType: e.fieldType,
    comparison: e.comparison,
    availableFields: e.availableFields,
    valueDataType: e.valueDataType,
    placeholder: e.placeholder,
    multiValues: e.multiValues,
    dateValue: e.dateValue,
    urlError: e.urlError,
    valueArrayIndex: e.valueArrayIndex,
    getFieldTypeColor: e.getFieldTypeColor,
    getFieldTooltip: e.getFieldTooltip,
    selectedFunctionName: a.selectedFunctionName,
    functionCategories: a.functionCategories,
    selectedFunction: a.selectedFunction,
    functionParameters: a.functionParameters,
    functionExpression: a.functionExpression
  };
}
function br(t) {
  const { controller: e, state: a } = t;
  return {
    selectedFunctionName: p(e.selectedFunctionName),
    functionCategories: p(e.functionCategories),
    selectedFunction: p(e.selectedFunction),
    functionParameters: p(e.functionParameters),
    functionExpression: a.functionExpression.value
  };
}
function Nr(t) {
  return _(() => {
    const e = Pr(t), a = br(t);
    return Fr({
      baseProps: e,
      functionProps: a
    });
  });
}
function Er(t) {
  const { controller: e } = t, a = _(() => e.getValueInputType()), n = _(() => e.getAvailableValueTypes()), o = _(() => e.generateFunctionExpression());
  return {
    currentInputType: a,
    valueTypeOptions: n,
    functionExpression: o,
    onUpdateParameter: ({ index: i, value: l }) => {
      e.updateParameter(i, l);
    }
  };
}
function Cr(t) {
  const e = Vr({
    props: t.props,
    emitUpdateValue: t.emitUpdateValue,
    emitUpdateType: t.emitUpdateType,
    emitUpdateValueDataType: t.emitUpdateValueDataType
  }), a = Er({ controller: e }), n = hr({
    changeValueType: e.changeValueType,
    updateValue: e.updateValue,
    updateMultiValues: e.updateMultiValues,
    updateDateValue: e.updateDateValue,
    validateURL: e.validateURL,
    changeValueDataType: e.changeValueDataType,
    updateBaseField: e.updateBaseField,
    updateValueArrayIndex: e.updateValueArrayIndex,
    updateFunction: e.updateFunction,
    onUpdateParameter: a.onUpdateParameter
  }), o = Nr({
    props: t.props,
    controller: e,
    state: a
  });
  return {
    isCompoundOperator: e.isCompoundOperator,
    listeners: n,
    switchPanelProps: o
  };
}
function Lr(t) {
  const e = Cr(t);
  return Do({ setupResult: e });
}
const Dr = { class: "value-input" }, xr = /* @__PURE__ */ V({
  __name: "ValueInput",
  props: {
    value: { type: [String, Number, Boolean, Array, Object, null] },
    fieldType: {},
    fieldName: {},
    comparison: {},
    availableFields: {},
    currentDataType: {},
    valueIsLiteral: { type: Boolean }
  },
  emits: ["update:value", "update:type", "update:value-data-type"],
  setup(t, { emit: e }) {
    const a = t, n = e, {
      isCompoundOperator: o,
      switchPanelProps: r,
      switchPanelListeners: i
    } = Lr({
      props: a,
      emitUpdateValue: (l) => n("update:value", l),
      emitUpdateType: (l) => n("update:type", l),
      emitUpdateValueDataType: (l, u) => n("update:value-data-type", l, u)
    });
    return (l, u) => (c(), b("div", Dr, [
      p(o)() ? (c(), y(Lo, {
        key: 0,
        comparison: a.comparison
      }, null, 8, ["comparison"])) : (c(), y(bo, h({ key: 1 }, p(r), P(p(i))), null, 16))
    ]));
  }
}), Te = /* @__PURE__ */ E(xr, [["__scopeId", "data-v-7f424686"]]), wr = /* @__PURE__ */ V({
  __name: "FieldModeArrayIndexInput",
  props: {
    arrayIndex: {}
  },
  emits: ["update:array-index"],
  setup(t, { emit: e }) {
    const a = e;
    return (n, o) => {
      const r = v("a-input-number"), i = v("a-tooltip");
      return c(), y(i, { content: "输入索引访问数组元素，留空则对整个数组操作（如 belong）" }, {
        default: g(() => [
          f(r, {
            "model-value": n.arrayIndex,
            placeholder: "索引",
            min: 0,
            precision: 0,
            class: "array-index-input",
            "allow-clear": "",
            "onUpdate:modelValue": o[0] || (o[0] = (l) => a("update:array-index", l))
          }, {
            prefix: g(() => o[1] || (o[1] = [
              N("span", { style: { color: "#86909c" } }, "[", -1)
            ])),
            suffix: g(() => o[2] || (o[2] = [
              N("span", { style: { color: "#86909c" } }, "]", -1)
            ])),
            _: 1
          }, 8, ["model-value"])
        ]),
        _: 1
      });
    };
  }
}), Ur = /* @__PURE__ */ E(wr, [["__scopeId", "data-v-9e63890d"]]), Ir = { class: "operator-option" }, Sr = { class: "operator-symbol" }, Ar = /* @__PURE__ */ V({
  __name: "FieldModeComparisonSelect",
  props: {
    comparison: {},
    availableOperators: {}
  },
  emits: ["update:comparison"],
  setup(t, { emit: e }) {
    const a = e;
    return (n, o) => {
      const r = v("a-option"), i = v("a-select");
      return c(), y(i, {
        "model-value": n.comparison,
        placeholder: "操作符",
        class: "comparison-operator-select",
        "onUpdate:modelValue": o[0] || (o[0] = (l) => a("update:comparison", l))
      }, {
        default: g(() => [
          (c(!0), b(S, null, M(n.availableOperators, (l) => (c(), y(r, {
            key: l.value,
            value: l.value,
            label: l.label
          }, {
            default: g(() => [
              N("div", Ir, [
                N("span", Sr, U(l.label), 1)
              ])
            ]),
            _: 2
          }, 1032, ["value", "label"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value"]);
    };
  }
}), Mr = { class: "field-option" }, Br = { class: "field-name" }, Rr = {
  key: 0,
  class: "array-hint"
}, $r = { class: "field-meta" }, Or = {
  key: 1,
  class: "field-example"
}, kr = /* @__PURE__ */ V({
  __name: "FieldModeFieldOption",
  props: {
    field: {},
    getFieldTooltip: { type: Function },
    getTypeColor: { type: Function }
  },
  setup(t) {
    return (e, a) => {
      const n = v("a-tag"), o = v("a-tooltip");
      return c(), y(o, {
        content: e.getFieldTooltip(e.field),
        position: "left"
      }, {
        default: g(() => [
          N("div", Mr, [
            N("div", Br, [
              w(U(e.field.label) + " ", 1),
              e.field.type === "array" ? (c(), b("span", Rr, "[i]")) : D("", !0)
            ]),
            N("div", $r, [
              e.field.type ? (c(), y(n, {
                key: 0,
                color: e.getTypeColor(e.field.type),
                size: "small"
              }, {
                default: g(() => [
                  w(U(e.field.type), 1)
                ]),
                _: 1
              }, 8, ["color"])) : D("", !0),
              e.field.example ? (c(), b("span", Or, U(e.field.example), 1)) : D("", !0)
            ])
          ])
        ]),
        _: 1
      }, 8, ["content"]);
    };
  }
}), zr = /* @__PURE__ */ E(kr, [["__scopeId", "data-v-d3692deb"]]);
function Gr(t) {
  const { setupResult: e } = t;
  return {
    selectListeners: e.selectListeners
  };
}
function jr(t) {
  const { emit: e } = t;
  return {
    selectListeners: {
      "update:model-value": (n) => e("update:field", n)
    }
  };
}
function Hr(t) {
  const e = jr(t);
  return Gr({ setupResult: e });
}
const Wr = /* @__PURE__ */ V({
  __name: "FieldModeFieldSelect",
  props: {
    baseFieldName: {},
    availableFields: {},
    getFieldTooltip: { type: Function },
    getTypeColor: { type: Function }
  },
  emits: ["update:field"],
  setup(t, { emit: e }) {
    const a = e, { selectListeners: n } = Hr({
      emit: a
    });
    return (o, r) => {
      const i = v("a-option"), l = v("a-select");
      return c(), y(l, h({
        "model-value": o.baseFieldName,
        placeholder: "选择字段",
        "allow-search": "",
        "allow-create": "",
        class: "field-select-compact"
      }, P(p(n))), {
        default: g(() => [
          (c(!0), b(S, null, M(o.availableFields, (u) => (c(), y(i, {
            key: u.value,
            value: u.value,
            label: u.label
          }, {
            default: g(() => [
              f(zr, {
                field: u,
                "get-field-tooltip": o.getFieldTooltip,
                "get-type-color": o.getTypeColor
              }, null, 8, ["field", "get-field-tooltip", "get-type-color"])
            ]),
            _: 2
          }, 1032, ["value", "label"]))), 128))
        ]),
        _: 1
      }, 16, ["model-value"]);
    };
  }
}), qr = /* @__PURE__ */ E(Wr, [["__scopeId", "data-v-55c0b802"]]);
function Yr(t) {
  const { setupResult: e } = t;
  return {
    fieldSelectListeners: e.listeners.fieldSelectListeners,
    arrayIndexListeners: e.listeners.arrayIndexListeners,
    comparisonSelectListeners: e.listeners.comparisonSelectListeners
  };
}
function Xr(t) {
  const { emit: e } = t;
  return {
    fieldSelectListeners: {
      "update:field": (r) => e("update:field", r)
    },
    arrayIndexListeners: {
      "update:array-index": (r) => e("update:array-index", r)
    },
    comparisonSelectListeners: {
      "update:comparison": (r) => e("update:comparison", r)
    }
  };
}
function Kr(t) {
  return {
    listeners: Xr(t)
  };
}
function Jr(t) {
  const e = Kr(t);
  return Yr({ setupResult: e });
}
const Qr = { class: "field-mode-controls" }, Zr = /* @__PURE__ */ V({
  __name: "FieldModeControls",
  props: {
    baseFieldName: {},
    availableFields: {},
    isArrayField: { type: Boolean },
    arrayIndex: {},
    comparison: {},
    availableOperators: {},
    getFieldTooltip: { type: Function },
    getTypeColor: { type: Function }
  },
  emits: ["update:field", "update:array-index", "update:comparison"],
  setup(t, { emit: e }) {
    const a = e, {
      fieldSelectListeners: n,
      arrayIndexListeners: o,
      comparisonSelectListeners: r
    } = Jr({
      emit: a
    });
    return (i, l) => (c(), b("div", Qr, [
      f(qr, h({
        "base-field-name": i.baseFieldName,
        "available-fields": i.availableFields,
        "get-field-tooltip": i.getFieldTooltip,
        "get-type-color": i.getTypeColor
      }, P(p(n))), null, 16, ["base-field-name", "available-fields", "get-field-tooltip", "get-type-color"]),
      i.isArrayField ? (c(), y(Ur, h({
        key: 0,
        "array-index": i.arrayIndex
      }, P(p(o))), null, 16, ["array-index"])) : D("", !0),
      f(Ar, h({
        comparison: i.comparison,
        "available-operators": i.availableOperators
      }, P(p(r))), null, 16, ["comparison", "available-operators"])
    ]));
  }
}), ei = /* @__PURE__ */ E(Zr, [["__scopeId", "data-v-c226e933"]]);
function ti(t) {
  const { controller: e, currentDataType: a, listeners: n } = t.setupResult;
  return {
    baseFieldName: e.baseFieldName,
    arrayIndex: e.arrayIndex,
    isArrayField: e.isArrayField,
    fieldType: e.fieldType,
    needsValue: e.needsValue,
    getFieldTooltip: e.getFieldTooltip,
    getTypeColor: e.getTypeColor,
    currentDataType: a,
    controlsListeners: n.controlsListeners,
    valueInputListeners: n.valueInputListeners
  };
}
const ai = [
  { label: "client_ip", value: "client_ip", type: "ip" },
  { label: "is_whitelist", value: "is_whitelist", type: "boolean" },
  { label: "ip_user", value: "ip_user", type: "ip" },
  { label: "token_user", value: "token_user", type: "string" },
  { label: "employee_id", value: "employee_id", type: "string" },
  { label: "sys_name", value: "sys_name", type: "string" },
  { label: "start_time", value: "start_time", type: "string" },
  { label: "action_name", value: "action_name", type: "string" },
  { label: "staff_dept_1_nm", value: "staff_dept_1_nm", type: "string" },
  { label: "request.method", value: "request.method", type: "string" },
  { label: "request.uri", value: "request.uri", type: "string" },
  { label: "response.status", value: "response.status", type: "number" }
];
function ni(t, e, a) {
  return t.length > 0 ? t : e && e.length > 0 ? e : a;
}
function oi(t) {
  if (!t.length)
    return "";
  const e = t.reduce((a, n) => {
    const o = n.type || "unknown";
    return a[o] = (a[o] || 0) + 1, a;
  }, {});
  return Object.entries(e).map(([a, n]) => `${a}(${n})`).join(", ");
}
function ri(t) {
  let e = t;
  return e = e.replace(/&&/g, " && "), e = e.replace(/\|\|/g, " || "), e = e.replace(/\(\s*/g, `(
  `), e = e.replace(/\s*\)/g, `
)`), e = e.replace(/ && /g, ` &&
  `), e = e.replace(/ \|\| /g, ` ||
  `), e = e.replace(/\n\s*\n/g, `
`), e.trim();
}
function ii(t) {
  try {
    let e = 0;
    for (const o of t)
      if (o === "(" && e++, o === ")" && e--, e < 0)
        return !1;
    if (e !== 0)
      return !1;
    const a = /[><=!&|~]/.test(t), n = /[a-z_]\w*/i.test(t);
    return a && n;
  } catch {
    return !1;
  }
}
function O(t) {
  return t === "boolean" ? "boolean" : t === "number" ? "number" : "string";
}
function Ve(t, e, a) {
  for (const n of t) {
    if (n.id === e)
      return Object.assign(n, a), !0;
    if (n.children && Ve(n.children, e, a))
      return !0;
  }
  return !1;
}
function he(t, e) {
  return t.filter((a) => a.id === e ? !1 : (a.children && (a.children = he(a.children, e)), !0));
}
function re(t, e) {
  const a = (n) => {
    var o;
    n.type === "group" && (n.expanded = e, (o = n.children) == null || o.forEach(a));
  };
  t.forEach(a);
}
function Pe(t, e, a, n) {
  for (const o of t) {
    if (o.id === e && o.type === "group") {
      const r = o.level + 1;
      if (o.children = o.children || [], a === "group")
        return o.children.push(ce(e, r)), { updated: !0 };
      const i = X(e, r);
      if (a === "function")
        return i.functionName = "", i.parameters = [], delete i.field, o.children.push(i), { updated: !0 };
      if (n.length > 0) {
        const l = n[0];
        i.field = l.value, i.fieldType = l.type || "string";
      }
      return o.children.push(i), {
        updated: !0,
        addedConditionNodeId: i.id,
        addedConditionDataType: O(i.fieldType)
      };
    }
    if (o.children) {
      const r = Pe(o.children, e, a, n);
      if (r.updated)
        return r;
    }
  }
  return { updated: !1 };
}
function li(t, e) {
  const { props: a, emitUpdateField: n, emitUpdateValueDataType: o } = e;
  return {
    handleFieldChange: (i) => {
      const l = a.availableFields.find((s) => s.value === i), u = (l == null ? void 0 : l.type) || "string";
      n(i), o({
        fieldName: "condition_value",
        dataType: O(u)
      });
    }
  };
}
function si(t) {
  const { state: e, actions: a } = t;
  return {
    baseFieldName: e.baseFieldName,
    arrayIndex: e.arrayIndex,
    isArrayField: e.isArrayField,
    fieldType: e.fieldType,
    needsValue: e.needsValue,
    getFieldTooltip: e.getFieldTooltip,
    getTypeColor: e.getTypeColor,
    handleFieldChange: a.handleFieldChange
  };
}
function ui(t) {
  const { props: e } = t, a = _(() => {
    if (!e.node.field)
      return "";
    const s = e.node.field.match(/^(.+)\[(\d+)\]$/);
    return s ? s[1] : e.node.field;
  }), n = _(() => {
    if (!e.node.field)
      return;
    const s = e.node.field.match(/\[(\d+)\]$/);
    return s ? Number.parseInt(s[1], 10) : void 0;
  }), o = _(() => {
    const s = a.value, d = e.availableFields.find((m) => m.value === s);
    return (d == null ? void 0 : d.type) === "array";
  }), r = _(() => {
    if (!e.node.field)
      return "string";
    const s = e.availableFields.find((d) => d.value === e.node.field);
    return (s == null ? void 0 : s.type) || "string";
  }), i = _(() => {
    const s = e.node.comparison;
    return s === "belong" || s === "isIpInNetmaskList" ? !0 : s !== "== nil" && s !== "!= nil" && s !== "== ''" && s !== "!= ''";
  });
  return {
    baseFieldName: a,
    arrayIndex: n,
    isArrayField: o,
    fieldType: r,
    needsValue: i,
    getFieldTooltip: (s) => {
      const d = [s.label];
      return s.type && d.push(`类型: ${s.type}`), s.example && d.push(`示例: ${s.example}`), d.join(`
`);
    },
    getTypeColor: (s) => ({
      string: "blue",
      number: "green",
      boolean: "orange",
      array: "purple",
      object: "cyan",
      datetime: "magenta",
      ip: "gold",
      email: "lime",
      url: "arcoblue"
    })[s] || "gray"
  };
}
function di(t) {
  const e = ui({ props: t.props }), a = li(e, t);
  return si({
    state: e,
    actions: a
  });
}
function pi(t) {
  const { emit: e, handleFieldChange: a } = t;
  return {
    controlsListeners: {
      "update:field": (r) => a(r),
      "update:array-index": (r) => e("update:array-index", r),
      "update:comparison": (r) => e("update:comparison", r)
    },
    valueInputListeners: {
      "update:value": (r) => e("update:value", r),
      "update:value-data-type": (r, i) => {
        i === void 0 ? e("update:value-data-type", { fieldName: "condition_value", dataType: r }) : e("update:value-data-type", { fieldName: r, dataType: i });
      }
    }
  };
}
function ci(t) {
  const { props: e, emit: a } = t, n = di({
    props: e,
    emitUpdateField: (i) => a("update:field", i),
    emitUpdateValueDataType: (i) => a("update:value-data-type", i)
  }), o = _(() => e.getParameterDataType ? e.getParameterDataType(e.node.id, "condition_value") : "string"), r = pi({
    emit: a,
    handleFieldChange: n.handleFieldChange
  });
  return {
    controller: n,
    currentDataType: o,
    listeners: r
  };
}
function mi(t) {
  const e = ci(t);
  return ti({ setupResult: e });
}
const fi = { class: "field-mode-editor" }, vi = /* @__PURE__ */ V({
  __name: "FieldModeEditor",
  props: {
    node: {},
    availableFields: {},
    availableOperators: {},
    getParameterDataType: { type: Function }
  },
  emits: ["update:field", "update:array-index", "update:comparison", "update:value", "update:extra-comparison", "update:value-data-type"],
  setup(t, { emit: e }) {
    const a = t, n = e, {
      baseFieldName: o,
      arrayIndex: r,
      isArrayField: i,
      fieldType: l,
      needsValue: u,
      getFieldTooltip: s,
      getTypeColor: d,
      currentDataType: m,
      controlsListeners: T,
      valueInputListeners: L
    } = mi({
      props: a,
      emit: n
    });
    return (C, x) => (c(), b("div", fi, [
      f(ei, h({
        "base-field-name": p(o),
        "available-fields": C.availableFields,
        "is-array-field": p(i),
        "array-index": p(r),
        comparison: C.node.comparison,
        "available-operators": C.availableOperators,
        "get-field-tooltip": p(s),
        "get-type-color": p(d)
      }, P(p(T))), null, 16, ["base-field-name", "available-fields", "is-array-field", "array-index", "comparison", "available-operators", "get-field-tooltip", "get-type-color"]),
      p(u) ? (c(), y(Te, h({
        key: 0,
        value: C.node.value,
        "field-type": p(l),
        "field-name": C.node.field,
        comparison: C.node.comparison,
        "available-fields": C.availableFields,
        "current-data-type": p(m),
        "value-is-literal": C.node.valueIsLiteral
      }, P(p(L))), null, 16, ["value", "field-type", "field-name", "comparison", "available-fields", "current-data-type", "value-is-literal"])) : D("", !0)
    ]));
  }
}), yi = /* @__PURE__ */ E(vi, [["__scopeId", "data-v-fc14c85b"]]), gi = {}, _i = { class: "condition-hint" };
function Ti(t, e) {
  const a = v("icon-info-circle");
  return c(), b("div", _i, [
    f(a, { class: "hint-icon" }),
    e[0] || (e[0] = N("span", { class: "hint-text" }, " 条件表达式返回true/false，适用于boolean类型参数 ", -1))
  ]);
}
const Vi = /* @__PURE__ */ E(gi, [["render", Ti], ["__scopeId", "data-v-0c9ed03d"]]);
function hi(t) {
  return {
    conditionTreeListeners: t.setupResult.listeners.conditionTreeListeners
  };
}
function Fe(t) {
  return {
    onUpdateNode: (d, m) => {
      t("update-node", d, m);
    },
    onAddChild: (d, m) => {
      t("add-child", d, m);
    },
    onRemoveNode: (d) => {
      t("remove-node", d);
    },
    onMoveUp: (d) => {
      t("move-up", d);
    },
    onMoveDown: (d) => {
      t("move-down", d);
    },
    onCopyNode: (d) => {
      t("copy-node", d);
    },
    onUpdateParameterType: (d, m) => {
      t("update-parameter-type", d, m);
    },
    onUpdateParameterValueDataType: (d, m, T) => {
      t("update-parameter-value-data-type", d, m, T);
    },
    onDragNode: (d, m, T) => {
      t("drag-node", d, m, T);
    }
  };
}
function be(t) {
  const { forwarders: e } = t;
  return {
    treeNodeListeners: {
      "update-node": e.onUpdateNode,
      "add-child": e.onAddChild,
      "remove-node": e.onRemoveNode,
      "move-up": e.onMoveUp,
      "move-down": e.onMoveDown,
      "copy-node": e.onCopyNode,
      "update-parameter-type": e.onUpdateParameterType,
      "update-parameter-value-data-type": e.onUpdateParameterValueDataType,
      "drag-node": e.onDragNode
    }
  };
}
const Ne = Fe;
function Ee(t) {
  const { treeNodeListeners: e } = be(t);
  return {
    conditionTreeListeners: e
  };
}
function Pi(t) {
  const e = Ne(t.emit);
  return {
    listeners: Ee({ forwarders: e })
  };
}
function Fi(t) {
  const e = Pi(t);
  return hi({ setupResult: e });
}
const bi = { class: "condition-tree-editor" }, Ni = /* @__PURE__ */ V({
  __name: "ConditionTreeEditor",
  props: {
    node: {},
    availableFields: {},
    expectedReturnType: {},
    getParameterDataType: { type: Function }
  },
  emits: ["update-node", "add-child", "remove-node", "move-up", "move-down", "copy-node", "update-parameter-type", "update-parameter-value-data-type", "drag-node"],
  setup(t, { emit: e }) {
    const a = e, {
      conditionTreeListeners: n
    } = Fi({
      emit: a
    });
    return (o, r) => (c(), b("div", bi, [
      f(Vi),
      f(Z, h({
        node: o.node,
        "available-fields": o.availableFields,
        level: 1,
        "hide-actions": !0,
        "expected-return-type": o.expectedReturnType,
        "get-parameter-data-type": o.getParameterDataType
      }, P(p(n))), null, 16, ["node", "available-fields", "expected-return-type", "get-parameter-data-type"])
    ]));
  }
}), Ei = /* @__PURE__ */ E(Ni, [["__scopeId", "data-v-151b7a2d"]]);
function Ci(t) {
  const { setupResult: e } = t;
  return {
    conditionTreeListeners: e.listeners.conditionTreeListeners
  };
}
function Li(t) {
  const { emit: e } = t, a = Ne(e);
  return {
    listeners: Ee({ forwarders: a })
  };
}
function Di(t) {
  const e = Li(t);
  return Ci({ setupResult: e });
}
const xi = /* @__PURE__ */ V({
  __name: "ParameterModeCondition",
  props: {
    node: {},
    availableFields: {},
    expectedReturnType: {},
    getParameterDataType: { type: Function }
  },
  emits: ["update-node", "add-child", "remove-node", "move-up", "move-down", "copy-node", "update-parameter-type", "update-parameter-value-data-type", "drag-node"],
  setup(t, { emit: e }) {
    const a = e, {
      conditionTreeListeners: n
    } = Di({
      emit: a
    });
    return (o, r) => (c(), y(Ei, h({
      node: o.node,
      "available-fields": o.availableFields,
      "expected-return-type": o.expectedReturnType,
      "get-parameter-data-type": o.getParameterDataType
    }, P(p(n))), null, 16, ["node", "available-fields", "expected-return-type", "get-parameter-data-type"]));
  }
}), wi = { class: "field-parameter" }, Ui = /* @__PURE__ */ V({
  __name: "ParameterModeField",
  props: {
    displayValue: { type: [String, Number, Boolean, Array, Object, null] },
    availableFields: {},
    getFieldTooltipText: { type: Function },
    getTypeColor: { type: Function }
  },
  emits: ["update:value"],
  setup(t, { emit: e }) {
    const a = e;
    return (n, o) => (c(), b("div", wi, [
      f(K, {
        value: typeof n.displayValue == "string" ? n.displayValue : "",
        "available-fields": n.availableFields,
        placeholder: "选择字段 (数组可输入索引，如: field[0])",
        "show-array-index": !1,
        "show-array-hint": !0,
        "get-field-tooltip": n.getFieldTooltipText,
        "get-type-color": n.getTypeColor,
        "onUpdate:field": o[0] || (o[0] = (r) => a("update:value", r))
      }, null, 8, ["value", "available-fields", "get-field-tooltip", "get-type-color"])
    ]));
  }
}), Ii = /* @__PURE__ */ E(Ui, [["__scopeId", "data-v-e84045ef"]]), Si = { class: "lambda-editor" }, Ai = { class: "lambda-hint" }, Mi = { style: { "font-size": "12px", color: "#4e5969" } }, Bi = /* @__PURE__ */ V({
  __name: "LambdaEditor",
  props: {
    value: {},
    placeholder: { default: "例：lambda(x) -> x.local_port == 22 end" },
    hintText: { default: "匿名函数（Lambda表达式），格式：lambda(参数) -> 表达式 end" }
  },
  emits: ["update:value"],
  setup(t, { emit: e }) {
    const a = e;
    return (n, o) => {
      const r = v("icon-info-circle"), i = v("a-textarea");
      return c(), b("div", Si, [
        N("div", Ai, [
          f(r, { style: { color: "#722ed1", "margin-right": "4px" } }),
          N("span", Mi, U(n.hintText), 1)
        ]),
        f(i, {
          "model-value": n.value,
          placeholder: n.placeholder,
          "auto-size": { minRows: 1, maxRows: 4 },
          style: { width: "100%" },
          "onUpdate:modelValue": o[0] || (o[0] = (l) => a("update:value", l))
        }, null, 8, ["model-value", "placeholder"])
      ]);
    };
  }
}), Ri = /* @__PURE__ */ E(Bi, [["__scopeId", "data-v-edbf87c1"]]), $i = /* @__PURE__ */ V({
  __name: "ParameterModeLambda",
  props: {
    value: { type: [String, Number, Boolean, Array, Object, null] }
  },
  emits: ["update:value"],
  setup(t, { emit: e }) {
    const a = e;
    return (n, o) => (c(), y(Ri, {
      value: typeof n.value == "string" ? n.value : "",
      "onUpdate:value": o[0] || (o[0] = (r) => a("update:value", r))
    }, null, 8, ["value"]));
  }
}), Oi = /* @__PURE__ */ V({
  __name: "ParameterModeValue",
  props: {
    parameter: {},
    value: { type: [String, Number, Boolean, Array, Object, null] },
    displayValue: { type: [String, Number, Boolean, Array, Object, null] },
    availableFields: {},
    valueDataType: {},
    multiValues: {},
    getTypeColor: { type: Function }
  },
  emits: ["update:value", "update:multi-values", "update:value-data-type"],
  setup(t, { emit: e }) {
    const a = e;
    return (n, o) => n.parameter.type === "field" ? (c(), y(K, {
      key: 0,
      value: typeof n.displayValue == "string" ? n.displayValue : "",
      "available-fields": n.availableFields,
      placeholder: `选择${n.parameter.description}`,
      "show-array-index": !1,
      "show-array-hint": !1,
      "get-type-color": n.getTypeColor,
      "onUpdate:field": o[0] || (o[0] = (r) => a("update:value", r))
    }, null, 8, ["value", "available-fields", "placeholder", "get-type-color"])) : (c(), y(ve, {
      key: 1,
      mode: "parameter",
      value: n.value,
      "display-value": n.displayValue,
      "value-data-type": n.valueDataType,
      "parameter-name": n.parameter.name,
      "parameter-description": n.parameter.description,
      "parameter-type": n.parameter.type,
      "multi-values": n.multiValues,
      "show-data-type-switch": !0,
      "onUpdate:value": o[1] || (o[1] = (r) => a("update:value", r)),
      "onUpdate:multiValues": o[2] || (o[2] = (r) => a("update:multi-values", r)),
      "onUpdate:valueDataType": o[3] || (o[3] = (r) => a("update:value-data-type", r))
    }, null, 8, ["value", "display-value", "value-data-type", "parameter-name", "parameter-description", "parameter-type", "multi-values"]));
  }
});
function ki(t) {
  const {
    listeners: e,
    viewModel: a
  } = t.setupResult;
  return {
    selectorKey: a.selectorKey,
    selectorProps: a.selectorProps,
    isValueMode: a.isValueMode,
    isFieldMode: a.isFieldMode,
    isConditionMode: a.isConditionMode,
    isLambdaMode: a.isLambdaMode,
    valueModeProps: a.valueModeProps,
    fieldModeProps: a.fieldModeProps,
    conditionModeProps: a.conditionModeProps,
    lambdaModeProps: a.lambdaModeProps,
    typeSelectorListeners: e.typeSelectorListeners,
    valueModeListeners: e.valueModeListeners,
    fieldModeListeners: e.fieldModeListeners,
    conditionModeListeners: e.conditionModeListeners,
    lambdaModeListeners: e.lambdaModeListeners
  };
}
function zi(t) {
  const { valueActions: e, nestedActions: a } = t;
  return {
    initializeLambdaParameter: e.initializeLambdaParameter,
    updateValue: e.updateValue,
    updateMultiValue: e.updateMultiValue,
    updateFormatValue: e.updateFormatValue,
    updateTimezoneValue: e.updateTimezoneValue,
    changeValueDataType: e.changeValueDataType,
    changeParameterType: e.changeParameterType,
    updateNestedNode: a.updateNestedNode,
    updateNestedParameterType: a.updateNestedParameterType
  };
}
function ie(t, e) {
  const a = t.nestedNode ?? e;
  return !a || typeof a != "object" || !("id" in a) || !("type" in a) ? null : a;
}
function Gi(t) {
  const { props: e, emitUpdateValue: a } = t;
  return {
    updateNestedNode: (r, i) => {
      const l = ie(e.parameter, e.value);
      !l || l.id !== r || a({
        ...l,
        ...i
      });
    },
    updateNestedParameterType: (r, i) => {
      const l = ie(e.parameter, e.value);
      if (!l || !l.parameters)
        return;
      const u = l.parameters.map((d) => ({ ...d })), s = u.findIndex((d) => d.name === r);
      s < 0 || (u[s] = {
        ...u[s],
        type: i
      }, a({
        ...l,
        parameters: u
      }));
    }
  };
}
function ji(t) {
  const { emitUpdateValue: e } = t;
  return {
    updateValue: (i) => {
      e(i);
    },
    updateMultiValue: (i) => {
      e(i);
    },
    updateFormatValue: (i) => {
      e(i);
    },
    updateTimezoneValue: (i) => {
      e(i);
    }
  };
}
const Ce = "lambda(x) -> x.field == value end";
function Hi(t) {
  return t == null || t === "";
}
function Wi(t) {
  const { savedStringValue: e, currentValue: a } = t, n = e;
  if (Hi(n))
    return typeof a == "string" && a.includes("lambda(") ? `"${a}"` : a || "";
  if (typeof n == "string" && n.trim() !== "") {
    if (n === "true" || n === "false")
      return n === "true";
    if (!Number.isNaN(Number(n)))
      return Number(n);
  }
  return n;
}
function qi(t, e) {
  return typeof t == "string" && e.some((a) => a.value === t) ? t : e.length > 0 ? e[0].value : "";
}
function Yi(t) {
  let e = t;
  return typeof t == "string" && (t.startsWith('"') && t.endsWith('"') || t.startsWith("'") && t.endsWith("'")) && (e = t.slice(1, -1)), typeof e != "string" || !e.includes("lambda(") ? Ce : e;
}
function Xi() {
  return Ce;
}
function Ki(t, e) {
  const { props: a, emitUpdateType: n, emitUpdateValue: o } = e;
  return (r) => {
    if (t.userSelectedType.value = r, n(a.parameter.name, r), r === "value") {
      o(Wi({
        savedStringValue: t.savedStringValue.value,
        currentValue: a.value
      }));
      return;
    }
    if (r === "field") {
      o(qi(a.value, a.availableFields));
      return;
    }
    if (r === "condition") {
      o(X(void 0, 1));
      return;
    }
    o(Yi(a.value));
  };
}
function Ji(t, e) {
  const { props: a, emitUpdateValue: n, emitUpdateValueDataType: o } = e;
  return (r) => {
    t.userHasSelectedDataType.value = !0, t.userSelectedValueDataType.value = r, o(a.parameter.name, r), a.value !== void 0 && a.value !== null && a.value !== "" && n(a.value);
  };
}
function Qi(t, e) {
  const { props: a, emitUpdateValue: n } = e;
  return () => {
    t.isCurrentLambdaParameter() && (!a.value || a.value === "" || a.value === null || a.value === void 0) && (t.userSelectedType.value = "lambda", setTimeout(() => {
      n(Xi());
    }, 0));
  };
}
function Zi(t, e) {
  const a = ji({
    emitUpdateValue: e.emitUpdateValue
  }), n = Qi(t, e), o = Ji(t, e), r = Ki(t, e);
  return {
    initializeLambdaParameter: n,
    updateValue: a.updateValue,
    updateMultiValue: a.updateMultiValue,
    updateFormatValue: a.updateFormatValue,
    updateTimezoneValue: a.updateTimezoneValue,
    changeValueDataType: o,
    changeParameterType: r
  };
}
function el(t, e) {
  const a = Zi(t, e), n = Gi(e);
  return zi({
    valueActions: a,
    nestedActions: n
  });
}
function tl(t, e) {
  return {
    getParameterInputType: t.getParameterInputType,
    getAvailableParameterTypes: t.getAvailableParameterTypes,
    displayValue: t.displayValue,
    updateValue: e.updateValue,
    updateMultiValue: e.updateMultiValue,
    updateFormatValue: e.updateFormatValue,
    updateTimezoneValue: e.updateTimezoneValue,
    getMultiValue: t.getMultiValue,
    getTypeColor: t.getTypeColor,
    getFieldTooltipText: t.getFieldTooltipText,
    getValueDataType: t.getValueDataType,
    changeValueDataType: e.changeValueDataType,
    changeParameterType: e.changeParameterType,
    updateNestedNode: e.updateNestedNode,
    updateNestedParameterType: e.updateNestedParameterType
  };
}
function al(t) {
  return _(() => t.value && typeof t.value == "object" && t.value.id && t.value.type ? "" : t.value);
}
function nl(t) {
  const { refs: e, displayValue: a, queries: n } = t;
  return {
    savedStringValue: e.savedStringValue,
    userSelectedType: e.userSelectedType,
    userHasSelectedDataType: e.userHasSelectedDataType,
    userSelectedValueDataType: e.userSelectedValueDataType,
    displayValue: a,
    isCurrentLambdaParameter: n.isCurrentLambdaParameter,
    getParameterInputType: n.getParameterInputType,
    getAvailableParameterTypes: n.getAvailableParameterTypes,
    getMultiValue: n.getMultiValue,
    getTypeColor: n.getTypeColor,
    getFieldTooltipText: n.getFieldTooltipText,
    getValueDataType: n.getValueDataType
  };
}
const ol = {
  string: "blue",
  number: "green",
  boolean: "orange",
  datetime: "purple",
  ip: "cyan",
  email: "magenta",
  url: "lime",
  array: "gold"
}, rl = [
  { value: "lambda", label: "匿名函数" }
], il = [
  { value: "value", label: "值" },
  { value: "field", label: "字段" },
  { value: "condition", label: "条件" }
];
function ll(t) {
  return ol[t] || "default";
}
function sl(t) {
  return t.type === "array" ? `${t.label} (数组) - 可输入索引访问元素，例如: ${t.value}[0]` : `字段: ${t.label} (${t.type})`;
}
function ul(t) {
  return t === "value" || t === "field" || t === "condition" || t === "lambda";
}
function dl(t) {
  const e = t;
  return typeof e.type == "string" ? e.type : void 0;
}
function pl(t) {
  if (!t || typeof t != "object")
    return !1;
  const e = t;
  return typeof e.id == "string" && (e.type === "condition" || e.type === "group");
}
function cl(t) {
  return typeof t == "string" && t.includes("lambda(");
}
function ml(t, e) {
  return typeof t == "string" && !!t && e.some((a) => a.value === t);
}
function fl(t) {
  const { explicitType: e, parameter: a, value: n, availableFields: o, isLambdaParameter: r } = t;
  return e && ul(e) ? e : pl(n) ? "condition" : a.type && ["field", "value", "expression", "condition", "lambda"].includes(a.type) ? a.type === "expression" ? "condition" : a.type : dl(a) === "function" ? "condition" : r && (!n || cl(n)) ? "lambda" : ml(n, o) ? "field" : "value";
}
function vl(t) {
  return t ? rl : il;
}
function yl(t) {
  return Array.isArray(t) ? t : typeof t == "string" ? t.split(",").map((e) => e.trim()).filter(Boolean) : [];
}
function gl(t) {
  const { props: e, refs: a, displayValue: n } = t, o = () => {
    const m = e.functionName || "";
    return je(m, e.parameter.name, e.parameter.description);
  };
  return {
    isCurrentLambdaParameter: o,
    getParameterInputType: () => fl({
      explicitType: a.userSelectedType.value,
      parameter: e.parameter,
      value: e.value,
      availableFields: e.availableFields,
      isLambdaParameter: o()
    }),
    getAvailableParameterTypes: () => vl(o()),
    getMultiValue: () => yl(n.value),
    getTypeColor: (m) => ll(m),
    getFieldTooltipText: (m) => sl(m),
    getValueDataType: () => a.userHasSelectedDataType.value && a.userSelectedValueDataType.value ? a.userSelectedValueDataType.value : e.currentDataType ? e.currentDataType : e.parameter.valueType ? e.parameter.valueType : "string"
  };
}
function _l() {
  return {
    savedStringValue: I(""),
    userSelectedType: I(null),
    userHasSelectedDataType: I(!1),
    userSelectedValueDataType: I(null)
  };
}
function Tl(t) {
  const { props: e } = t, a = _l(), n = al(e), o = gl({
    props: e,
    refs: a,
    displayValue: n
  });
  return nl({
    refs: a,
    displayValue: n,
    queries: o
  });
}
function Vl(t) {
  const { props: e, state: a, actions: n } = t;
  B(
    () => e.value,
    (o, r) => {
      if (r != null && r !== o && (typeof r == "string" || typeof r == "number" || typeof r == "boolean")) {
        const i = typeof r == "string" && e.availableFields.some((u) => u.value === r), l = typeof r == "string" && r.includes("lambda(");
        !i && !l && (a.savedStringValue.value = String(r));
      }
      o != null && (typeof o == "string" || typeof o == "number" || typeof o == "boolean") && a.savedStringValue.value === "" && (a.savedStringValue.value = String(o)), (!o || o === "" || o === null || o === void 0) && n.initializeLambdaParameter();
    },
    { deep: !0, immediate: !0 }
  ), B(
    () => e.functionName,
    () => {
      n.initializeLambdaParameter();
    },
    { immediate: !0 }
  ), B(
    () => [e.parameter.name, e.parameter.description],
    () => {
      n.initializeLambdaParameter();
    },
    { immediate: !0 }
  );
}
function hl(t) {
  const e = Tl({ props: t.props }), a = el(e, {
    props: t.props,
    emitUpdateValue: t.emitUpdateValue,
    emitUpdateType: t.emitUpdateType,
    emitUpdateValueDataType: t.emitUpdateValueDataType
  });
  return Vl({
    props: t.props,
    state: e,
    actions: a
  }), tl(e, a);
}
function Pl(t) {
  const e = {
    "update:model-value": t.changeParameterType
  }, a = {
    "update:value": t.updateValue,
    "update:multi-values": t.updateMultiValue,
    "update:value-data-type": t.changeValueDataType
  }, n = {
    "update:value": t.updateValue
  }, o = {
    "update:value": t.updateValue
  };
  return {
    typeSelectorListeners: e,
    valueModeListeners: a,
    fieldModeListeners: n,
    lambdaModeListeners: o
  };
}
function Fl(t) {
  const { emit: e, updateNestedNode: a, updateNestedParameterType: n } = t;
  return {
    conditionModeListeners: {
      "update-node": a,
      "add-child": (r, i) => e("add-child", r, i),
      "remove-node": (r) => e("remove-node", r),
      "move-up": (r) => e("move-up", r),
      "move-down": (r) => e("move-down", r),
      "copy-node": (r) => e("copy-node", r),
      "update-parameter-type": n,
      "update-parameter-value-data-type": (r, i, l) => {
        e("update-parameter-value-data-type", r, i, l);
      },
      "drag-node": (r, i, l) => {
        e("drag-node", r, i, l);
      }
    }
  };
}
function bl(t) {
  const { baseListeners: e, conditionListeners: a } = t;
  return {
    typeSelectorListeners: e.typeSelectorListeners,
    valueModeListeners: e.valueModeListeners,
    fieldModeListeners: e.fieldModeListeners,
    lambdaModeListeners: e.lambdaModeListeners,
    conditionModeListeners: a.conditionModeListeners
  };
}
function Nl(t) {
  const e = Pl({
    changeParameterType: t.changeParameterType,
    updateValue: t.updateValue,
    updateMultiValue: t.updateMultiValue,
    changeValueDataType: t.changeValueDataType
  }), a = Fl({
    emit: t.emit,
    updateNestedNode: t.updateNestedNode,
    updateNestedParameterType: t.updateNestedParameterType
  });
  return bl({
    baseListeners: e,
    conditionListeners: a
  });
}
const El = X(void 0, 1);
function Cl(t, e, a) {
  const n = _(() => {
    const i = t.parameter.nestedNode ?? t.value;
    return i && typeof i == "object" && "id" in i && "type" in i ? i : El;
  }), o = _(() => e()), r = _(() => a());
  return {
    conditionNode: n,
    currentParameterInputType: o,
    parameterTypeOptions: r
  };
}
function Ll(t) {
  const { props: e, controller: a, state: n } = t, o = _(() => ({
    parameter: e.parameter,
    value: e.value,
    displayValue: p(a.displayValue),
    availableFields: e.availableFields,
    valueDataType: a.getValueDataType(),
    multiValues: a.getMultiValue(),
    getTypeColor: a.getTypeColor
  })), r = _(() => ({
    displayValue: p(a.displayValue),
    availableFields: e.availableFields,
    getFieldTooltipText: a.getFieldTooltipText,
    getTypeColor: a.getTypeColor
  })), i = _(() => ({
    node: n.conditionNode.value,
    availableFields: e.availableFields,
    expectedReturnType: e.currentDataType || e.parameter.valueType,
    getParameterDataType: e.getParameterDataType
  })), l = _(() => ({
    value: p(a.displayValue)
  }));
  return {
    valueModeProps: o,
    fieldModeProps: r,
    conditionModeProps: i,
    lambdaModeProps: l
  };
}
function Dl(t) {
  const { state: e } = t, a = _(() => e.currentParameterInputType.value === "value"), n = _(() => e.currentParameterInputType.value === "field"), o = _(() => e.currentParameterInputType.value === "condition"), r = _(() => e.currentParameterInputType.value === "lambda");
  return {
    isValueMode: a,
    isFieldMode: n,
    isConditionMode: o,
    isLambdaMode: r
  };
}
function xl(t) {
  const { selectorViewModel: e, modeFlags: a, modeProps: n } = t;
  return {
    selectorKey: e.selectorKey,
    selectorProps: e.selectorProps,
    isValueMode: a.isValueMode,
    isFieldMode: a.isFieldMode,
    isConditionMode: a.isConditionMode,
    isLambdaMode: a.isLambdaMode,
    valueModeProps: n.valueModeProps,
    fieldModeProps: n.fieldModeProps,
    conditionModeProps: n.conditionModeProps,
    lambdaModeProps: n.lambdaModeProps
  };
}
function wl(t) {
  const { props: e, state: a } = t, n = _(
    () => `type-selector-${e.parameter.name}-${a.currentParameterInputType.value}`
  ), o = _(() => ({
    modelValue: a.currentParameterInputType.value,
    options: a.parameterTypeOptions.value,
    placeholder: "参数类型"
  }));
  return {
    selectorKey: n,
    selectorProps: o
  };
}
function Ul(t) {
  const { props: e, controller: a, state: n } = t, o = wl({
    props: e,
    state: n
  }), r = Dl({ state: n }), i = Ll({
    props: e,
    controller: a,
    state: n
  });
  return xl({
    selectorViewModel: o,
    modeFlags: r,
    modeProps: i
  });
}
function Il(t) {
  const { props: e, emit: a } = t, n = hl({
    props: e,
    emitUpdateValue: (l) => a("update:value", l),
    emitUpdateType: (l, u) => a("update:type", l, u),
    emitUpdateValueDataType: (l, u) => a("update:value-data-type", l, u)
  }), o = Cl(
    e,
    n.getParameterInputType,
    n.getAvailableParameterTypes
  ), r = Nl({
    emit: a,
    changeParameterType: n.changeParameterType,
    updateValue: n.updateValue,
    updateMultiValue: n.updateMultiValue,
    changeValueDataType: n.changeValueDataType,
    updateNestedNode: n.updateNestedNode,
    updateNestedParameterType: n.updateNestedParameterType
  }), i = Ul({
    props: e,
    controller: n,
    state: o
  });
  return {
    state: o,
    listeners: r,
    viewModel: i
  };
}
function Sl(t) {
  const e = Il(t);
  return ki({ setupResult: e });
}
const Al = { class: "parameter-input" }, Ml = /* @__PURE__ */ V({
  __name: "ParameterInput",
  props: {
    parameter: {},
    value: { type: [String, Number, Boolean, Array, Object, null] },
    availableFields: {},
    functionName: {},
    currentDataType: {},
    getParameterDataType: { type: Function }
  },
  emits: ["update:value", "update:type", "update:value-data-type", "add-child", "remove-node", "move-up", "move-down", "copy-node", "update-parameter-value-data-type", "drag-node"],
  setup(t, { emit: e }) {
    const a = t, n = e, {
      selectorKey: o,
      selectorProps: r,
      isValueMode: i,
      isFieldMode: l,
      isConditionMode: u,
      isLambdaMode: s,
      valueModeProps: d,
      fieldModeProps: m,
      conditionModeProps: T,
      lambdaModeProps: L,
      typeSelectorListeners: C,
      valueModeListeners: x,
      fieldModeListeners: F,
      conditionModeListeners: q,
      lambdaModeListeners: ee
    } = Sl({
      props: a,
      emit: n
    });
    return (Be, te) => (c(), b("div", Al, [
      (c(), y(me, h({ key: p(o) }, p(r), P(p(C))), null, 16)),
      p(i) ? (c(), y(Oi, h({ key: 0 }, p(d), P(p(x))), null, 16)) : D("", !0),
      p(l) ? (c(), y(Ii, h({ key: 1 }, p(m), P(p(F))), null, 16)) : D("", !0),
      p(u) ? (c(), y(xi, h({ key: 2 }, p(T), P(p(q))), null, 16)) : D("", !0),
      p(s) ? (c(), y($i, h({ key: 3 }, p(L), P(p(ee))), null, 16)) : D("", !0)
    ]));
  }
}), Bl = /* @__PURE__ */ E(Ml, [["__scopeId", "data-v-77a59e92"]]);
function Rl(t) {
  const { setupResult: e } = t;
  return {
    parameterInputListeners: e.listeners.parameterInputListeners
  };
}
function $l(t) {
  const { props: e, emit: a } = t;
  return {
    parameterInputListeners: {
      "update:value": (o) => a("update:parameter", { paramName: e.paramName, value: o }),
      "update:type": (o, r) => a("update:parameter-type", { paramName: o, type: r }),
      "update:value-data-type": (o, r) => {
        a("update:parameter-value-type", { paramName: o, dataType: r });
      }
    }
  };
}
function Ol(t) {
  return {
    listeners: $l(t)
  };
}
function kl(t) {
  const e = Ol(t);
  return Rl({ setupResult: e });
}
const zl = /* @__PURE__ */ V({
  __name: "FunctionParameterItem",
  props: {
    parameter: {},
    paramName: {},
    value: { type: [String, Number, Boolean, Array, Object, null] },
    availableFields: {},
    functionName: { default: "" },
    currentDataType: { default: void 0 },
    getParameterDataType: { type: Function, default: void 0 }
  },
  emits: ["update:parameter", "update:parameter-type", "update:parameter-value-type"],
  setup(t, { emit: e }) {
    const a = t, n = e, { parameterInputListeners: o } = kl({
      props: a,
      emit: n
    });
    return (r, i) => (c(), y(Bl, h({
      parameter: r.parameter,
      value: r.value,
      "available-fields": r.availableFields,
      "function-name": r.functionName,
      "current-data-type": r.currentDataType,
      "get-parameter-data-type": r.getParameterDataType
    }, P(p(o))), null, 16, ["parameter", "value", "available-fields", "function-name", "current-data-type", "get-parameter-data-type"]));
  }
});
function Gl(t) {
  const { setupResult: e } = t;
  return {
    getCurrentDataType: e.getCurrentDataType,
    parameterItemListeners: e.listeners.parameterItemListeners
  };
}
function jl(t) {
  const { emit: e } = t;
  return {
    parameterItemListeners: {
      "update:parameter": (n) => e("update:parameter", n),
      "update:parameter-type": (n) => e("update:parameter-type", n),
      "update:parameter-value-type": (n) => e("update:parameter-value-type", n)
    }
  };
}
function Hl(t) {
  const { props: e, emit: a } = t, n = (r) => {
    if (e.getParameterDataType)
      return e.getParameterDataType(e.node.id, r);
  }, o = jl({ emit: a });
  return {
    getCurrentDataType: n,
    listeners: o
  };
}
function Wl(t) {
  const e = Hl(t);
  return Gl({ setupResult: e });
}
const ql = {
  key: 0,
  class: "inline-function-params"
}, Yl = /* @__PURE__ */ V({
  __name: "FunctionParameterList",
  props: {
    node: {},
    selectedFunction: {},
    getParameterDataType: { type: Function },
    getParameterActualValue: { type: Function },
    getParameterWithValue: { type: Function },
    availableFields: {}
  },
  emits: ["update:parameter", "update:parameter-type", "update:parameter-value-type"],
  setup(t, { emit: e }) {
    const a = t, n = e, {
      getCurrentDataType: o,
      parameterItemListeners: r
    } = Wl({
      props: a,
      emit: n
    });
    return (i, l) => i.selectedFunction && i.selectedFunction.parameters.length > 0 ? (c(), b("div", ql, [
      (c(!0), b(S, null, M(i.selectedFunction.parameters, (u) => (c(), y(zl, h({
        key: `${i.node.id}-${u.name}`,
        "param-name": u.name,
        parameter: i.getParameterWithValue(u),
        value: i.getParameterActualValue(u.name),
        "available-fields": i.availableFields,
        "function-name": i.node.functionName,
        "current-data-type": p(o)(u.name),
        "get-parameter-data-type": i.getParameterDataType
      }, P(p(r))), null, 16, ["param-name", "parameter", "value", "available-fields", "function-name", "current-data-type", "get-parameter-data-type"]))), 128))
    ])) : D("", !0);
  }
}), Xl = /* @__PURE__ */ E(Yl, [["__scopeId", "data-v-a902e12a"]]), Kl = { class: "operator-option" }, Jl = { class: "operator-symbol" }, Ql = { class: "operator-label" }, Zl = /* @__PURE__ */ V({
  __name: "FunctionComparisonOperatorSelect",
  props: {
    comparison: {},
    returnTypeOperators: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e;
    return (n, o) => {
      const r = v("a-option"), i = v("a-select");
      return c(), y(i, {
        "model-value": n.comparison,
        placeholder: "操作符",
        class: "comparison-operator-select",
        "onUpdate:modelValue": o[0] || (o[0] = (l) => a("update:modelValue", l))
      }, {
        default: g(() => [
          (c(!0), b(S, null, M(n.returnTypeOperators, (l) => (c(), y(r, {
            key: l.value,
            value: l.value,
            label: l.label
          }, {
            default: g(() => [
              N("div", Kl, [
                N("span", Jl, U(l.value), 1),
                N("span", Ql, U(l.label), 1)
              ])
            ]),
            _: 2
          }, 1032, ["value", "label"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value"]);
    };
  }
});
function es(t) {
  const { setupResult: e } = t;
  return {
    valueInputListeners: e.listeners.valueInputListeners
  };
}
function ts(t) {
  const { emit: e, props: a } = t;
  return {
    valueInputListeners: {
      "update:value": (n) => e("update:value", n),
      "update:value-data-type": (n, o) => {
        const r = ((a == null ? void 0 : a.node) && a.node.functionName) || (((a == null ? void 0 : a.selectedFunction) == null ? void 0 : a.selectedFunction.name) || "condition_value");
        if (o === void 0) {
          e("update:value-data-type", { fieldName: r, dataType: n });
          return;
        }
        const i = typeof n == "string" && n ? n : r;
        e("update:value-data-type", { fieldName: i, dataType: o });
      }
    }
  };
}
function as(t) {
  return {
    listeners: ts(t)
  };
}
function ns(t) {
  const e = as(t);
  return es({ setupResult: e });
}
const os = /* @__PURE__ */ V({
  __name: "FunctionComparisonValueInput",
  props: {
    node: {},
    selectedFunction: {},
    availableFields: {},
    currentDataType: {}
  },
  emits: ["update:value", "update:value-data-type"],
  setup(t, { emit: e }) {
    const a = e, { valueInputListeners: n } = ns({
      emit: a,
      props: t
    });
    return (o, r) => (c(), y(Te, h({
      key: `${o.node.id}-value`,
      value: o.node.value,
      "field-type": (o.selectedFunction == null ? void 0 : o.selectedFunction.returnType) || "string",
      "field-name": o.node.functionName || ((o.selectedFunction == null ? void 0 : o.selectedFunction.name) || "condition_value"),
      comparison: o.node.comparison,
      "available-fields": o.availableFields,
      "current-data-type": o.currentDataType
    }, P(p(n))), null, 16, ["value", "field-type", "field-name", "comparison", "available-fields", "current-data-type"]));
  }
});
function rs(t) {
  const { setupResult: e } = t;
  return {
    currentDataType: e.currentDataType,
    comparisonOperatorListeners: e.listeners.comparisonOperatorListeners,
    comparisonValueInputListeners: e.listeners.comparisonValueInputListeners
  };
}
function is(t) {
  const { emit: e } = t;
  return {
    comparisonOperatorListeners: {
      "update:model-value": (a) => e("update:comparison", a)
    },
    comparisonValueInputListeners: {
      "update:value": (a) => e("update:value", a),
      "update:value-data-type": (a) => e("update:value-data-type", a)
    }
  };
}
function ls(t) {
  const { props: e, emit: a } = t, n = _(() => {
    var r;
    const o = e.node.functionName || ((r = e.selectedFunction) == null ? void 0 : r.name) || "condition_value";
    return e.getParameterDataType && e.getParameterDataType(e.node.id, o) || "string";
  }), o = is({ emit: a });
  return {
    currentDataType: n,
    listeners: o
  };
}
function ss(t) {
  const e = ls(t);
  return rs({ setupResult: e });
}
const us = { class: "function-comparison-area" }, ds = /* @__PURE__ */ V({
  __name: "FunctionComparisonPanel",
  props: {
    node: {},
    selectedFunction: {},
    availableFields: {},
    returnTypeOperators: {},
    getParameterDataType: { type: Function }
  },
  emits: ["update:comparison", "update:value", "update:value-data-type"],
  setup(t, { emit: e }) {
    const a = t, n = e, {
      currentDataType: o,
      comparisonOperatorListeners: r,
      comparisonValueInputListeners: i
    } = ss({
      props: a,
      emit: n
    });
    return (l, u) => (c(), b("div", us, [
      f(Zl, h({
        comparison: l.node.comparison,
        "return-type-operators": l.returnTypeOperators
      }, P(p(r))), null, 16, ["comparison", "return-type-operators"]),
      f(os, h({
        node: l.node,
        "selected-function": l.selectedFunction,
        "available-fields": l.availableFields,
        "current-data-type": p(o)
      }, P(p(i))), null, 16, ["node", "selected-function", "available-fields", "current-data-type"])
    ]));
  }
}), ps = /* @__PURE__ */ E(ds, [["__scopeId", "data-v-4afeba56"]]), cs = { class: "function-option" }, ms = { class: "function-name" }, fs = { class: "function-desc" }, vs = /* @__PURE__ */ V({
  __name: "FunctionCatalogOption",
  props: {
    displayName: {},
    description: {}
  },
  setup(t) {
    return (e, a) => (c(), b("div", cs, [
      N("div", ms, U(e.displayName), 1),
      N("div", fs, U(e.description), 1)
    ]));
  }
}), ys = /* @__PURE__ */ E(vs, [["__scopeId", "data-v-b3f3cfb5"]]);
function gs(t) {
  const { setupResult: e } = t;
  return {
    selectListeners: e.selectListeners
  };
}
function _s(t) {
  const { emit: e } = t;
  return {
    selectListeners: {
      "update:model-value": (n) => e("update:modelValue", n)
    }
  };
}
function Ts(t) {
  const e = _s(t);
  return gs({ setupResult: e });
}
const Vs = /* @__PURE__ */ V({
  __name: "FunctionCatalogSelect",
  props: {
    modelValue: { default: "" },
    functionCategories: {},
    filterFunctionOption: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e, { selectListeners: n } = Ts({
      emit: a
    });
    return (o, r) => {
      const i = v("a-option"), l = v("a-optgroup"), u = v("a-select");
      return c(), y(u, h({
        "model-value": o.modelValue,
        placeholder: "选择函数",
        "allow-search": "",
        "filter-option": o.filterFunctionOption,
        class: "function-select-compact"
      }, P(p(n))), {
        default: g(() => [
          (c(!0), b(S, null, M(o.functionCategories, (s) => (c(), y(l, {
            key: s.name,
            label: s.label
          }, {
            default: g(() => [
              (c(!0), b(S, null, M(s.functions, (d) => (c(), y(i, {
                key: d.name,
                value: d.name,
                label: d.displayName
              }, {
                default: g(() => [
                  f(ys, {
                    "display-name": d.displayName,
                    description: d.description
                  }, null, 8, ["display-name", "description"])
                ]),
                _: 2
              }, 1032, ["value", "label"]))), 128))
            ]),
            _: 2
          }, 1032, ["label"]))), 128))
        ]),
        _: 1
      }, 16, ["model-value", "filter-option"]);
    };
  }
}), hs = /* @__PURE__ */ E(Vs, [["__scopeId", "data-v-1be93c7a"]]), Ps = /* @__PURE__ */ V({
  __name: "FunctionUsageButton",
  props: {
    visible: { type: Boolean }
  },
  emits: ["click"],
  setup(t, { emit: e }) {
    const a = e;
    return (n, o) => {
      const r = v("icon-question-circle"), i = v("a-button"), l = v("a-tooltip");
      return n.visible ? (c(), y(l, {
        key: 0,
        content: "查看函数用法和示例"
      }, {
        default: g(() => [
          f(i, {
            type: "text",
            size: "small",
            class: "function-help-btn",
            onClick: o[0] || (o[0] = (u) => a("click"))
          }, {
            default: g(() => [
              f(r, { style: { fontSize: "16px", color: "#165dff" } })
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : D("", !0);
    };
  }
}), Fs = /* @__PURE__ */ E(Ps, [["__scopeId", "data-v-79d8a40b"]]);
function bs(t) {
  const { setupResult: e } = t;
  return {
    onUpdateFunction: e.onUpdateFunction,
    onShowUsage: e.onShowUsage
  };
}
function Ns(t) {
  return {
    onUpdateFunction: (n) => t.emit("update:function", n),
    onShowUsage: () => t.emit("show-usage")
  };
}
function Es(t) {
  const e = Ns(t);
  return bs({ setupResult: e });
}
const Cs = { class: "function-select-group" }, Ls = /* @__PURE__ */ V({
  __name: "FunctionSelectPanel",
  props: {
    modelValue: { default: "" },
    functionCategories: {},
    selectedFunction: { default: null },
    filterFunctionOption: {}
  },
  emits: ["update:function", "show-usage"],
  setup(t, { emit: e }) {
    const a = e, {
      onUpdateFunction: n,
      onShowUsage: o
    } = Es({
      emit: a
    });
    return (r, i) => (c(), b("div", Cs, [
      f(hs, {
        "model-value": r.modelValue,
        "function-categories": r.functionCategories,
        "filter-function-option": r.filterFunctionOption,
        "onUpdate:modelValue": p(n)
      }, null, 8, ["model-value", "function-categories", "filter-function-option", "onUpdate:modelValue"]),
      f(Fs, {
        visible: !!r.selectedFunction,
        onClick: p(o)
      }, null, 8, ["visible", "onClick"])
    ]));
  }
}), Ds = /* @__PURE__ */ E(Ls, [["__scopeId", "data-v-158edb66"]]);
function xs(t) {
  const {
    controller: e,
    listeners: a,
    shouldRenderComparison: n,
    comparisonSelectedFunction: o
  } = t.setupResult;
  return {
    selectedFunction: e.selectedFunction,
    comparisonSelectedFunction: o,
    functionCategories: e.functionCategories,
    filterFunctionOption: e.filterFunctionOption,
    returnTypeOperators: e.returnTypeOperators,
    getParameterActualValue: e.getParameterActualValue,
    getParameterWithValue: e.getParameterWithValue,
    shouldRenderComparison: n,
    functionSelectListeners: a.functionSelectListeners,
    parameterListListeners: a.parameterListListeners,
    comparisonPanelListeners: a.comparisonPanelListeners
  };
}
function ws(t) {
  const { filterActions: e, usageActions: a } = t;
  return {
    filterFunctionOption: e.filterFunctionOption,
    showFunctionUsage: a.showFunctionUsage
  };
}
const Us = (t) => {
  if (!t || typeof t != "object")
    return "";
  const e = t, a = e.value || e.key;
  return typeof a == "string" ? a : "";
};
function Is() {
  return {
    filterFunctionOption: (e, a) => {
      if (!e)
        return !0;
      const n = e.toLowerCase(), o = Us(a), r = R.find((i) => i.name === o);
      return r ? r.name.toLowerCase().includes(n) || r.displayName.toLowerCase().includes(n) || r.description.toLowerCase().includes(n) : !1;
    }
  };
}
function Ss(t) {
  return t.parameters.length === 0 ? [A("span", { style: { color: "#86909c", fontStyle: "italic", fontSize: "12px" } }, "无参数")] : t.parameters.map(
    (e) => A("div", { class: "usage-param-item", style: { marginBottom: "8px" } }, [
      A("span", { style: { fontFamily: "Consolas, Monaco, monospace", color: "#165dff", fontWeight: 500 } }, e.name),
      A("span", { style: { color: "#86909c", fontSize: "11px", marginLeft: "4px" } }, `(${e.type})`),
      e.required ? A("span", { style: { color: "#f53f3f", fontSize: "11px", marginLeft: "4px" } }, "*必填") : null,
      A("span", { style: { color: "#4e5969", marginLeft: "6px" } }, `- ${e.description}`)
    ])
  );
}
function As(t) {
  return {
    string: "blue",
    number: "green",
    boolean: "orange",
    array: "purple",
    list: "purple",
    set: "purple",
    map: "cyan",
    object: "cyan",
    date: "magenta"
  }[t] || "gray";
}
function Ms(t) {
  return {
    display: "inline-block",
    padding: "2px 8px",
    borderRadius: "4px",
    fontSize: "12px",
    backgroundColor: t === "blue" ? "#e8f3ff" : t === "green" ? "#e8f8f2" : t === "orange" ? "#fff3e8" : "#f2f3f5",
    color: t === "blue" ? "#165dff" : t === "green" ? "#00b42a" : t === "orange" ? "#ff7d00" : "#4e5969"
  };
}
function Bs(t, e) {
  const a = As(t.returnType), n = Ss(t);
  return A("div", { style: { fontSize: "13px" } }, [
    A("div", { style: { marginBottom: "12px" } }, [
      A("div", { style: { fontWeight: 500, color: "#1d2129", marginBottom: "4px" } }, "函数说明："),
      A("div", { style: { color: "#4e5969" } }, t.description)
    ]),
    A("div", { style: { marginBottom: "12px" } }, [
      A("div", { style: { fontWeight: 500, color: "#1d2129", marginBottom: "4px" } }, "参数列表："),
      ...n
    ]),
    A("div", { style: { marginBottom: "12px" } }, [
      A("div", { style: { fontWeight: 500, color: "#1d2129", marginBottom: "4px" } }, "返回类型："),
      A("span", { style: Ms(a) }, t.returnType)
    ]),
    A("div", [
      A("div", { style: { fontWeight: 500, color: "#1d2129", marginBottom: "4px" } }, "使用示例："),
      A("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "8px",
          backgroundColor: "#f8f9fa",
          border: "1px solid #e5e6eb",
          borderRadius: "4px",
          padding: "8px 12px"
        }
      }, [
        A("code", {
          style: {
            flex: 1,
            fontFamily: "Consolas, Monaco, monospace",
            fontSize: "13px",
            color: "#1d2129"
          }
        }, t.example),
        A("a", {
          style: {
            color: "#165dff",
            cursor: "pointer",
            fontSize: "12px",
            textDecoration: "none",
            flexShrink: 0
          },
          onClick: e.onCopyExample
        }, "复制")
      ])
    ])
  ]);
}
function Rs(t) {
  const e = async (n) => {
    try {
      await navigator.clipboard.writeText(n), $.success("示例已复制");
    } catch {
      $.error("复制失败");
    }
  };
  return {
    showFunctionUsage: () => {
      if (!t.selectedFunction.value)
        return;
      const n = t.selectedFunction.value, o = Bs(n, {
        onCopyExample: () => e(n.example)
      });
      qe.info({
        title: `📖 ${n.displayName || n.name}`,
        content: o,
        duration: 3e4,
        closable: !0,
        position: "topRight"
      });
    }
  };
}
function $s(t) {
  const e = Is(), a = Rs(t);
  return ws({
    filterActions: e,
    usageActions: a
  });
}
function Os(t) {
  const { state: e, actions: a } = t;
  return {
    selectedFunction: e.selectedFunction,
    functionCategories: e.functionCategories,
    shouldShowComparison: e.shouldShowComparison,
    returnTypeOperators: e.returnTypeOperators,
    getParameterActualValue: e.getParameterActualValue,
    getParameterWithValue: e.getParameterWithValue,
    filterFunctionOption: a.filterFunctionOption,
    showFunctionUsage: a.showFunctionUsage
  };
}
const ks = [
  { name: "system", label: "🔧 系统函数" },
  { name: "string", label: "📝 字符串函数" },
  { name: "math", label: "🔢 数学函数" },
  { name: "sequence", label: "📊 集合函数" },
  { name: "datetime", label: "📅 日期时间函数" },
  { name: "custom", label: "⚡ 自定义函数" }
], le = k;
function zs() {
  const t = ks.map((e) => ({
    name: e.name,
    label: e.label,
    functions: []
  }));
  return R.forEach((e) => {
    const a = t.find((n) => n.name === e.category);
    a && a.functions.push(e);
  }), t.filter((e) => e.functions.length > 0);
}
const se = (t) => t ? String(t).toLowerCase() : "", ue = (t) => ["list", "array", "set"].includes(t), Gs = (t, e) => !t || !e ? !1 : t === e ? !0 : ue(t) && ue(e);
function js(t, e) {
  var n;
  const a = (n = t.parameters) == null ? void 0 : n.find((o) => o.name === e);
  if (a)
    return a.isNested && a.nestedNode ? a.nestedNode : a.value;
}
function Hs(t, e) {
  var o;
  const a = (o = t.parameters) == null ? void 0 : o.find((r) => r.name === e.name);
  if (!a)
    return e;
  const n = {
    name: a.name || e.name,
    description: e.description,
    type: a.type || e.type,
    required: e.required,
    valueType: a.valueType || e.valueType
  };
  return "value" in a ? n.value = a.value : "value" in e && (n.value = e.value), "nestedNode" in a ? n.nestedNode = a.nestedNode : "nestedNode" in e && (n.nestedNode = e.nestedNode), "isNested" in a ? n.isNested = a.isNested : "isNested" in e && (n.isNested = e.isNested), n;
}
function Ws(t) {
  const { props: e } = t, a = _(() => e.node.functionName && R.find((u) => u.name === e.node.functionName) || null), n = _(() => zs()), o = _(() => {
    if (!a.value)
      return !1;
    const u = se(e.expectedReturnType), s = se(a.value.returnType);
    return Gs(s, u) ? !1 : a.value.returnType !== "boolean" || e.node.comparison;
  }), r = _(() => {
    if (!a.value)
      return [];
    const u = a.value.returnType;
    return le[u] || le.string || [];
  });
  return {
    selectedFunction: a,
    functionCategories: n,
    shouldShowComparison: o,
    returnTypeOperators: r,
    getParameterActualValue: (u) => js(e.node, u),
    getParameterWithValue: (u) => Hs(e.node, u)
  };
}
function qs(t) {
  const e = Ws({ props: t.props }), a = $s(e);
  return Os({
    state: e,
    actions: a
  });
}
function Ys(t) {
  const { emit: e, showFunctionUsage: a } = t;
  return {
    functionSelectListeners: {
      "update:function": (i) => e("update:function", i),
      "show-usage": () => a()
    },
    parameterListListeners: {
      "update:parameter": (i) => e("update:parameter", i),
      "update:parameter-type": (i) => e("update:parameter-type", i),
      "update:parameter-value-type": (i) => e("update:parameter-value-type", i)
    },
    comparisonPanelListeners: {
      "update:comparison": (i) => e("update:comparison", i),
      "update:value": (i) => e("update:value", i),
      "update:value-data-type": (i) => e("update:value-data-type", i)
    }
  };
}
function Xs(t) {
  const { props: e, emit: a } = t, n = qs({ props: e }), o = Ys({
    emit: a,
    showFunctionUsage: n.showFunctionUsage
  }), r = _(() => !!n.selectedFunction.value && e.node.comparison !== void 0 && n.shouldShowComparison.value), i = _(() => n.selectedFunction.value);
  return {
    controller: n,
    listeners: o,
    shouldRenderComparison: r,
    comparisonSelectedFunction: i
  };
}
function Ks(t) {
  const e = Xs(t);
  return xs({ setupResult: e });
}
const Js = { class: "function-mode-editor" }, Qs = /* @__PURE__ */ V({
  __name: "FunctionModeEditor",
  props: {
    node: {},
    availableFields: {},
    expectedReturnType: {},
    getParameterDataType: { type: Function }
  },
  emits: ["update:function", "update:parameter", "update:parameter-type", "update:parameter-value-type", "update:comparison", "update:value", "update:value-data-type"],
  setup(t, { emit: e }) {
    const a = t, n = e, {
      selectedFunction: o,
      comparisonSelectedFunction: r,
      functionCategories: i,
      filterFunctionOption: l,
      returnTypeOperators: u,
      getParameterActualValue: s,
      getParameterWithValue: d,
      shouldRenderComparison: m,
      functionSelectListeners: T,
      parameterListListeners: L,
      comparisonPanelListeners: C
    } = Ks({
      props: a,
      emit: n
    });
    return (x, F) => (c(), b("div", Js, [
      f(Ds, h({
        "model-value": x.node.functionName,
        "function-categories": p(i),
        "selected-function": p(o),
        "filter-function-option": p(l)
      }, P(p(T))), null, 16, ["model-value", "function-categories", "selected-function", "filter-function-option"]),
      f(Xl, h({
        node: x.node,
        "selected-function": p(o),
        "available-fields": x.availableFields,
        "get-parameter-data-type": a.getParameterDataType,
        "get-parameter-actual-value": p(s),
        "get-parameter-with-value": p(d)
      }, P(p(L))), null, 16, ["node", "selected-function", "available-fields", "get-parameter-data-type", "get-parameter-actual-value", "get-parameter-with-value"]),
      p(m) ? (c(), y(ps, h({
        key: 0,
        node: x.node,
        "selected-function": p(r),
        "available-fields": x.availableFields,
        "return-type-operators": p(u),
        "get-parameter-data-type": a.getParameterDataType
      }, P(p(C))), null, 16, ["node", "selected-function", "available-fields", "return-type-operators", "get-parameter-data-type"])) : D("", !0)
    ]));
  }
}), Zs = /* @__PURE__ */ E(Qs, [["__scopeId", "data-v-45fb2471"]]);
function eu(t) {
  const { setupResult: e } = t;
  return {
    radioGroupListeners: e.radioGroupListeners
  };
}
function tu(t) {
  const { emit: e } = t;
  return {
    radioGroupListeners: {
      "update:model-value": (n) => e("update:modelValue", n)
    }
  };
}
function au(t) {
  const e = tu(t);
  return eu({ setupResult: e });
}
const nu = /* @__PURE__ */ V({
  __name: "ConditionModeRadio",
  props: {
    mode: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e, { radioGroupListeners: n } = au({
      emit: a
    });
    return (o, r) => {
      const i = v("icon-filter"), l = v("a-radio"), u = v("icon-thunderbolt"), s = v("a-radio-group");
      return c(), y(s, h({
        "model-value": o.mode,
        type: "button",
        size: "small",
        class: "node-type-radio"
      }, P(p(n))), {
        default: g(() => [
          f(l, { value: "condition" }, {
            default: g(() => [
              f(i),
              r[0] || (r[0] = w(" 字段 "))
            ]),
            _: 1
          }),
          f(l, { value: "function" }, {
            default: g(() => [
              f(u),
              r[1] || (r[1] = w(" 函数 "))
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 16, ["model-value"]);
    };
  }
}), ou = /* @__PURE__ */ E(nu, [["__scopeId", "data-v-e0ef62c3"]]), ru = /* @__PURE__ */ V({
  __name: "ConditionNegationToggle",
  props: {
    isNegated: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e;
    return (n, o) => {
      const r = v("icon-exclamation-circle"), i = v("a-checkbox"), l = v("a-tooltip");
      return c(), y(l, { content: "取反" }, {
        default: g(() => [
          f(i, {
            "model-value": n.isNegated,
            class: "condition-negation-checkbox",
            "onUpdate:modelValue": o[0] || (o[0] = (u) => a("update:modelValue", u))
          }, {
            checkbox: g(({ checked: u }) => [
              f(r, {
                style: W({
                  fontSize: "30px",
                  color: u ? "#f53f3f" : "#c9cdd4",
                  transition: "color 0.2s"
                })
              }, null, 8, ["style"])
            ]),
            _: 1
          }, 8, ["model-value"])
        ]),
        _: 1
      });
    };
  }
}), iu = /* @__PURE__ */ E(ru, [["__scopeId", "data-v-c31c6f0e"]]);
function lu(t) {
  const { setupResult: e } = t;
  return {
    negationToggleListeners: e.negationToggleListeners,
    modeRadioListeners: e.modeRadioListeners
  };
}
function su(t) {
  const { emit: e } = t;
  return {
    negationToggleListeners: {
      "update:model-value": (o) => e("update:negation", o)
    },
    modeRadioListeners: {
      "update:model-value": (o) => e("switch:mode", o)
    }
  };
}
function uu(t) {
  const e = su(t);
  return lu({ setupResult: e });
}
const du = { class: "condition-mode-switch" }, pu = /* @__PURE__ */ V({
  __name: "ConditionModeSwitch",
  props: {
    isNegated: { type: Boolean },
    mode: {}
  },
  emits: ["update:negation", "switch:mode"],
  setup(t, { emit: e }) {
    const a = e, {
      negationToggleListeners: n,
      modeRadioListeners: o
    } = uu({
      emit: a
    });
    return (r, i) => (c(), b("div", du, [
      f(iu, h({ "is-negated": r.isNegated }, P(p(n))), null, 16, ["is-negated"]),
      f(ou, h({ mode: r.mode }, P(p(o))), null, 16, ["mode"])
    ]));
  }
}), cu = /* @__PURE__ */ E(pu, [["__scopeId", "data-v-a95bbc0b"]]);
function mu(t) {
  const { conditionNodeMode: e, listeners: a } = t.setupResult;
  return {
    conditionNodeMode: e,
    modeSwitchListeners: a.modeSwitchListeners,
    fieldModeListeners: a.fieldModeListeners,
    functionModeListeners: a.functionModeListeners
  };
}
function fu(t) {
  return {
    modeSwitchListeners: {
      "update:negation": (o) => t("update:negation", o),
      "switch:mode": (o) => t("switch:mode", o)
    },
    fieldModeListeners: {
      "update:field": (o) => t("update:field", o),
      "update:array-index": (o) => t("update:array-index", o),
      "update:comparison": (o) => t("update:comparison", o),
      "update:value": (o) => t("update:value", o),
      "update:extra-comparison": (o) => t("update:extra-comparison", o),
      "update:value-data-type": (o) => t("update:value-data-type", o)
    },
    functionModeListeners: {
      "update:function": (o) => t("update:function", o),
      "update:parameter": (o) => t("update:parameter", o),
      "update:parameter-type": (o) => t("update:parameter-type", o),
      "update:parameter-value-type": (o) => t("update:parameter-value-type", o),
      "update:comparison": (o) => t("update:comparison", o),
      "update:value": (o) => t("update:value", o),
      "update:value-data-type": (o) => t("update:function-value-data-type", o)
    }
  };
}
function vu(t) {
  return _(() => t.node.field ? "condition" : t.node.functionName ? "function" : "condition");
}
function yu(t) {
  const { props: e, emit: a } = t, n = vu(e), o = fu(a);
  return {
    conditionNodeMode: n,
    listeners: o
  };
}
function gu(t) {
  const e = yu(t);
  return mu({ setupResult: e });
}
const _u = { class: "condition-node-editor" }, Tu = /* @__PURE__ */ V({
  __name: "ConditionNode",
  props: {
    node: {},
    availableFields: {},
    availableOperators: {},
    expectedReturnType: {},
    getParameterDataType: { type: Function }
  },
  emits: ["update:negation", "switch:mode", "update:field", "update:array-index", "update:comparison", "update:value", "update:extra-comparison", "update:value-data-type", "update:function", "update:parameter", "update:parameter-type", "update:parameter-value-type", "update:function-value-data-type"],
  setup(t, { emit: e }) {
    const a = t, n = e, {
      conditionNodeMode: o,
      modeSwitchListeners: r,
      fieldModeListeners: i,
      functionModeListeners: l
    } = gu({
      props: a,
      emit: n
    });
    return (u, s) => (c(), b("div", _u, [
      f(cu, h({
        "is-negated": u.node.isNegated || !1,
        mode: p(o)
      }, P(p(r))), null, 16, ["is-negated", "mode"]),
      p(o) === "condition" ? (c(), y(yi, h({
        key: 0,
        node: u.node,
        "available-fields": u.availableFields,
        "available-operators": u.availableOperators,
        "get-parameter-data-type": u.getParameterDataType
      }, P(p(i))), null, 16, ["node", "available-fields", "available-operators", "get-parameter-data-type"])) : D("", !0),
      p(o) === "function" ? (c(), y(Zs, h({
        key: 1,
        node: u.node,
        "available-fields": u.availableFields,
        "expected-return-type": a.expectedReturnType,
        "get-parameter-data-type": u.getParameterDataType
      }, P(p(l))), null, 16, ["node", "available-fields", "expected-return-type", "get-parameter-data-type"])) : D("", !0)
    ]));
  }
}), Vu = /* @__PURE__ */ E(Tu, [["__scopeId", "data-v-ccae3bea"]]), hu = { class: "group-info" }, Pu = /* @__PURE__ */ V({
  __name: "GroupChildrenInfo",
  props: {
    childCount: {}
  },
  setup(t) {
    return (e, a) => (c(), b("span", hu, "(" + U(e.childCount) + " 个条件)", 1));
  }
}), Fu = /* @__PURE__ */ E(Pu, [["__scopeId", "data-v-ddcb0ec4"]]), bu = { class: "group-negation" }, Nu = { class: "negation-label" }, Eu = /* @__PURE__ */ V({
  __name: "GroupNegationToggle",
  props: {
    isNegated: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e;
    return (n, o) => {
      const r = v("icon-close-circle"), i = v("a-checkbox"), l = v("icon-info-circle"), u = v("a-tooltip");
      return c(), b("div", bu, [
        f(i, {
          "model-value": n.isNegated,
          "onUpdate:modelValue": o[0] || (o[0] = (s) => a("update:modelValue", s))
        }, {
          default: g(() => [
            N("span", Nu, [
              f(r, { style: { color: "#f53f3f", "margin-right": "4px" } }),
              o[1] || (o[1] = w(" 取反 !(...) "))
            ])
          ]),
          _: 1
        }, 8, ["model-value"]),
        f(u, { content: "勾选后将对整个分组表达式进行取反操作，如 !(condition1 && condition2)" }, {
          default: g(() => [
            f(l, { style: { color: "#86909c", "margin-left": "4px", cursor: "help" } })
          ]),
          _: 1
        })
      ]);
    };
  }
}), Cu = /* @__PURE__ */ E(Eu, [["__scopeId", "data-v-d333b60d"]]), Lu = /* @__PURE__ */ V({
  __name: "GroupOperatorSelect",
  props: {
    operator: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e;
    return (n, o) => {
      const r = v("a-option"), i = v("a-select");
      return c(), y(i, {
        "model-value": n.operator,
        style: { width: "100px" },
        "onUpdate:modelValue": o[0] || (o[0] = (l) => a("update:modelValue", l))
      }, {
        default: g(() => [
          f(r, {
            value: "AND",
            label: "AND"
          }, {
            default: g(() => o[1] || (o[1] = [
              N("div", { class: "operator-option" }, [
                N("span", { class: "operator-symbol" }, "&&"),
                N("span", { class: "operator-label" }, "且")
              ], -1)
            ])),
            _: 1
          }),
          f(r, {
            value: "OR",
            label: "OR"
          }, {
            default: g(() => o[2] || (o[2] = [
              N("div", { class: "operator-option" }, [
                N("span", { class: "operator-symbol" }, "||"),
                N("span", { class: "operator-label" }, "或")
              ], -1)
            ])),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["model-value"]);
    };
  }
}), Du = /* @__PURE__ */ E(Lu, [["__scopeId", "data-v-7ed74da2"]]), xu = { class: "group-editor" }, wu = /* @__PURE__ */ V({
  __name: "GroupNode",
  props: {
    node: {}
  },
  emits: ["update:operator", "update:negation"],
  setup(t, { emit: e }) {
    const a = e;
    return (n, o) => {
      var r;
      return c(), b("div", xu, [
        f(Du, {
          operator: n.node.operator,
          "onUpdate:modelValue": o[0] || (o[0] = (i) => a("update:operator", i))
        }, null, 8, ["operator"]),
        f(Cu, {
          "is-negated": n.node.isNegated || !1,
          "onUpdate:modelValue": o[1] || (o[1] = (i) => a("update:negation", i))
        }, null, 8, ["is-negated"]),
        f(Fu, {
          "child-count": ((r = n.node.children) == null ? void 0 : r.length) || 0
        }, null, 8, ["child-count"])
      ]);
    };
  }
}), Uu = /* @__PURE__ */ E(wu, [["__scopeId", "data-v-77aab341"]]);
function Iu(t) {
  return {
    onConditionNegation: (F) => t("update:condition-negation", F),
    onSwitchMode: (F) => t("switch:mode", F),
    onUpdateField: (F) => t("update:field", F),
    onUpdateArrayIndex: (F) => t("update:array-index", F),
    onUpdateComparison: (F) => t("update:comparison", F),
    onUpdateValue: (F) => t("update:value", F),
    onUpdateExtraComparison: (F) => t("update:extra-comparison", F),
    onUpdateValueDataType: (F) => t("update:value-data-type", F),
    onUpdateFunction: (F) => t("update:function", F),
    onUpdateParameter: (F) => t("update:parameter", F),
    onUpdateParameterType: (F) => t("update:parameter-type", F),
    onUpdateParameterValueType: (F) => t("update:parameter-value-type", F),
    onUpdateFunctionValueDataType: (F) => t("update:function-value-data-type", F),
    onUpdateGroupOperator: (F) => t("update:group-operator", F),
    onUpdateGroupNegation: (F) => t("update:group-negation", F)
  };
}
function Su(t) {
  const { bindings: e } = t, a = {
    "update:negation": e.onConditionNegation,
    "switch:mode": e.onSwitchMode,
    "update:field": e.onUpdateField,
    "update:array-index": e.onUpdateArrayIndex,
    "update:comparison": e.onUpdateComparison,
    "update:value": e.onUpdateValue,
    "update:extra-comparison": e.onUpdateExtraComparison,
    "update:value-data-type": e.onUpdateValueDataType,
    "update:function": e.onUpdateFunction,
    "update:parameter": e.onUpdateParameter,
    "update:parameter-type": e.onUpdateParameterType,
    "update:parameter-value-type": e.onUpdateParameterValueType,
    "update:function-value-data-type": e.onUpdateFunctionValueDataType
  }, n = {
    "update:operator": e.onUpdateGroupOperator,
    "update:negation": e.onUpdateGroupNegation
  };
  return {
    conditionListeners: a,
    groupListeners: n
  };
}
function Au(t) {
  const e = Iu(t.emit), a = Su({ bindings: e });
  return {
    conditionListeners: a.conditionListeners,
    groupListeners: a.groupListeners
  };
}
const Mu = /* @__PURE__ */ V({
  __name: "TreeNodeEditorPanel",
  props: {
    node: {},
    availableFields: {},
    availableOperators: {},
    expectedReturnType: {},
    getParameterDataType: { type: Function }
  },
  emits: ["switch:mode", "update:condition-negation", "update:field", "update:array-index", "update:comparison", "update:value", "update:extra-comparison", "update:value-data-type", "update:function", "update:parameter", "update:parameter-type", "update:parameter-value-type", "update:function-value-data-type", "update:group-operator", "update:group-negation"],
  setup(t, { emit: e }) {
    const a = e, {
      conditionListeners: n,
      groupListeners: o
    } = Au({
      emit: a
    });
    return (r, i) => (c(), b(S, null, [
      r.node.type === "condition" ? (c(), y(Vu, h({
        key: 0,
        node: r.node,
        "available-fields": r.availableFields,
        "available-operators": r.availableOperators,
        "expected-return-type": r.expectedReturnType,
        "get-parameter-data-type": r.getParameterDataType
      }, P(p(n))), null, 16, ["node", "available-fields", "available-operators", "expected-return-type", "get-parameter-data-type"])) : D("", !0),
      r.node.type === "group" ? (c(), y(Uu, h({
        key: 1,
        node: r.node
      }, P(p(o))), null, 16, ["node"])) : D("", !0)
    ], 64));
  }
});
function Bu(t) {
  const { dragBindings: e, listeners: a } = t.setupResult;
  return {
    onDragStart: e.onDragStart,
    onDragEnd: e.onDragEnd,
    affordanceListeners: a.affordanceListeners,
    editorListeners: a.editorListeners,
    actionListeners: a.actionListeners
  };
}
function Ru(t) {
  return {
    onAddChild: (i, l) => t("add-child", i, l),
    onMoveUp: (i) => t("move-up", i),
    onMoveDown: (i) => t("move-down", i),
    onCopyNode: () => t("copy-node"),
    onRemoveNode: (i) => t("remove-node", i)
  };
}
function $u(t) {
  return {
    onDragStart: (o) => t("drag-start", o),
    onDragEnd: (o) => t("drag-end", o),
    onToggleExpanded: () => t("toggle-expanded")
  };
}
function Ou(t) {
  return {
    onConditionNegation: (F) => t("update:condition-negation", F),
    onSwitchMode: (F) => t("switch:mode", F),
    onUpdateField: (F) => t("update:field", F),
    onUpdateArrayIndex: (F) => t("update:array-index", F),
    onUpdateComparison: (F) => t("update:comparison", F),
    onUpdateValue: (F) => t("update:value", F),
    onUpdateExtraComparison: (F) => t("update:extra-comparison", F),
    onUpdateValueDataType: (F) => t("update:value-data-type", F),
    onUpdateFunction: (F) => t("update:function", F),
    onUpdateParameter: (F) => t("update:parameter", F),
    onUpdateParameterType: (F) => t("update:parameter-type", F),
    onUpdateParameterValueType: (F) => t("update:parameter-value-type", F),
    onUpdateFunctionValueDataType: (F) => t("update:function-value-data-type", F),
    onUpdateGroupOperator: (F) => t("update:group-operator", F),
    onUpdateGroupNegation: (F) => t("update:group-negation", F)
  };
}
function ku(t) {
  const { dragBindings: e, editorBindings: a, actionBindings: n } = t, o = {
    "toggle-expanded": e.onToggleExpanded
  }, r = {
    "update:condition-negation": a.onConditionNegation,
    "switch:mode": a.onSwitchMode,
    "update:field": a.onUpdateField,
    "update:array-index": a.onUpdateArrayIndex,
    "update:comparison": a.onUpdateComparison,
    "update:value": a.onUpdateValue,
    "update:extra-comparison": a.onUpdateExtraComparison,
    "update:value-data-type": a.onUpdateValueDataType,
    "update:function": a.onUpdateFunction,
    "update:parameter": a.onUpdateParameter,
    "update:parameter-type": a.onUpdateParameterType,
    "update:parameter-value-type": a.onUpdateParameterValueType,
    "update:function-value-data-type": a.onUpdateFunctionValueDataType,
    "update:group-operator": a.onUpdateGroupOperator,
    "update:group-negation": a.onUpdateGroupNegation
  }, i = {
    "add-child": n.onAddChild,
    "move-up": n.onMoveUp,
    "move-down": n.onMoveDown,
    "copy-node": n.onCopyNode,
    "remove-node": n.onRemoveNode
  };
  return {
    affordanceListeners: o,
    editorListeners: r,
    actionListeners: i
  };
}
function zu(t) {
  const e = $u(t.emit), a = Ou(t.emit), n = Ru(t.emit), o = ku({
    dragBindings: e,
    editorBindings: a,
    actionBindings: n
  });
  return {
    dragBindings: e,
    listeners: o
  };
}
function Gu(t) {
  const e = zu(t);
  return Bu({ setupResult: e });
}
const ju = ["draggable"], Hu = /* @__PURE__ */ V({
  __name: "TreeNodeContent",
  props: {
    node: {},
    availableFields: {},
    availableOperators: {},
    hideActions: { type: Boolean },
    hasError: { type: Boolean },
    expectedReturnType: {},
    getParameterDataType: { type: Function }
  },
  emits: ["toggle-expanded", "drag-start", "drag-end", "switch:mode", "update:condition-negation", "update:field", "update:array-index", "update:comparison", "update:value", "update:extra-comparison", "update:value-data-type", "update:function", "update:parameter", "update:parameter-type", "update:parameter-value-type", "update:function-value-data-type", "update:group-operator", "update:group-negation", "add-child", "move-up", "move-down", "copy-node", "remove-node"],
  setup(t, { emit: e }) {
    const a = e, {
      onDragStart: n,
      onDragEnd: o,
      affordanceListeners: r,
      editorListeners: i,
      actionListeners: l
    } = Gu({
      emit: a
    });
    return (u, s) => (c(), b("div", {
      class: "node-content",
      draggable: !u.hideActions,
      onDragstart: s[0] || (s[0] = //@ts-ignore
      (...d) => p(n) && p(n)(...d)),
      onDragend: s[1] || (s[1] = //@ts-ignore
      (...d) => p(o) && p(o)(...d))
    }, [
      f(bt, h({
        node: u.node,
        "hide-actions": u.hideActions
      }, P(p(r))), null, 16, ["node", "hide-actions"]),
      f(Mu, h({
        node: u.node,
        "available-fields": u.availableFields,
        "available-operators": u.availableOperators,
        "expected-return-type": u.expectedReturnType,
        "get-parameter-data-type": u.getParameterDataType
      }, P(p(i))), null, 16, ["node", "available-fields", "available-operators", "expected-return-type", "get-parameter-data-type"]),
      f(Vt, h({
        node: u.node,
        "hide-actions": u.hideActions,
        "has-error": u.hasError
      }, P(p(l))), null, 16, ["node", "hide-actions", "has-error"])
    ], 40, ju));
  }
}), Wu = /* @__PURE__ */ E(Hu, [["__scopeId", "data-v-bfb3eb44"]]), qu = {
  key: 0,
  class: "connection-line"
}, Yu = /* @__PURE__ */ V({
  __name: "TreeNodeShell",
  props: {
    nodeClasses: {},
    indentSize: {},
    level: {}
  },
  emits: ["node-dragover", "node-dragleave", "node-drop"],
  setup(t, { emit: e }) {
    const a = e;
    return (n, o) => (c(), b("div", {
      class: $e(["tree-node", n.nodeClasses]),
      style: W({ paddingLeft: `${n.indentSize}px` }),
      onDragover: o[0] || (o[0] = (r) => a("node-dragover", r)),
      onDragleave: o[1] || (o[1] = (r) => a("node-dragleave", r)),
      onDrop: o[2] || (o[2] = (r) => a("node-drop", r))
    }, [
      Oe(n.$slots, "default", {}, void 0, !0),
      n.level > 0 ? (c(), b("div", qu)) : D("", !0)
    ], 38));
  }
}), Xu = /* @__PURE__ */ E(Yu, [["__scopeId", "data-v-72b8977f"]]);
function Ku(t) {
  const { setupResult: e } = t;
  return {
    hasError: e.exposedBindings.hasError,
    indentSize: e.exposedBindings.indentSize,
    nodeClasses: e.exposedBindings.nodeClasses,
    getAvailableOperators: e.exposedBindings.getAvailableOperators,
    shellListeners: e.listeners.shellListeners,
    contentListeners: e.listeners.contentListeners,
    childrenListeners: e.listeners.childrenListeners
  };
}
function Ju(t) {
  return {
    forwardUpdateNode: (d, m) => {
      t("update-node", d, m);
    },
    forwardAddChild: (d, m) => {
      t("add-child", d, m);
    },
    forwardRemoveNode: (d) => {
      t("remove-node", d);
    },
    forwardMoveUp: (d) => {
      t("move-up", d);
    },
    forwardMoveDown: (d) => {
      t("move-down", d);
    },
    forwardCopyNode: (d) => {
      t("copy-node", d);
    },
    forwardUpdateParameterType: (d, m) => {
      t("update-parameter-type", d, m);
    },
    forwardUpdateParameterValueDataType: (d, m, T) => {
      t("update-parameter-value-data-type", d, m, T);
    },
    forwardDragNode: (d, m, T) => {
      t("drag-node", d, m, T);
    }
  };
}
function Qu(t) {
  const {
    updateConditionValueDataType: e,
    updateFunctionValueDataType: a,
    updateParameter: n,
    updateParameterType: o,
    updateParameterValueDataType: r
  } = t;
  return {
    onConditionValueDataType: ({ fieldName: m, dataType: T }) => {
      e(m, T);
    },
    onFunctionValueDataType: ({ fieldName: m, dataType: T }) => {
      a(m, T);
    },
    onParameterUpdate: ({ paramName: m, value: T }) => {
      n(m, T);
    },
    onParameterTypeUpdate: ({ paramName: m, type: T }) => {
      o(m, T);
    },
    onParameterValueTypeUpdate: ({ paramName: m, dataType: T }) => {
      r(m, T);
    }
  };
}
function Zu(t) {
  const { drag: e, mutation: a } = t;
  return {
    isDragOver: e.isDragOver,
    dragPosition: e.dragPosition,
    handleDragStart: e.handleDragStart,
    handleDragEnd: e.handleDragEnd,
    handleDragOver: e.handleDragOver,
    handleDragLeave: e.handleDragLeave,
    handleDrop: e.handleDrop,
    hasError: a.hasError,
    indentSize: a.indentSize,
    toggleExpanded: a.toggleExpanded,
    updateOperator: a.updateOperator,
    updateConditionNegation: a.updateConditionNegation,
    updateGroupNegation: a.updateGroupNegation,
    copyNode: a.copyNode,
    updateBaseField: a.updateBaseField,
    updateArrayIndex: a.updateArrayIndex,
    getAvailableOperators: a.getAvailableOperators,
    switchConditionMode: a.switchConditionMode,
    updateComparison: a.updateComparison,
    updateValue: a.updateValue,
    updateExtraComparison: a.updateExtraComparison,
    updateFunction: a.updateFunction,
    updateParameter: a.updateParameter,
    updateParameterType: a.updateParameterType,
    updateParameterValueDataType: a.updateParameterValueDataType,
    updateConditionValueDataType: a.updateConditionValueDataType,
    updateFunctionValueDataType: a.updateFunctionValueDataType
  };
}
function ed(t) {
  const { startEndHandlers: e, overDropHandlers: a, leaveHandler: n } = t;
  return {
    handleDragStart: e.handleDragStart,
    handleDragEnd: e.handleDragEnd,
    handleDragOver: a.handleDragOver,
    handleDrop: a.handleDrop,
    handleDragLeave: n.handleDragLeave
  };
}
function td(t) {
  const { clearDragState: e } = t;
  return {
    handleDragLeave: (n) => {
      const o = n.relatedTarget, r = n.currentTarget;
      (!r || !o || !r.contains(o)) && e();
    }
  };
}
function ad(t, e, a) {
  return t === "group" ? e < a * 0.25 ? "before" : e > a * 0.75 ? "after" : "inside" : e < a * 0.5 ? "before" : "after";
}
function de(t, e) {
  const a = t.currentTarget;
  a && (a.style.opacity = e);
}
function nd(t) {
  const e = t.currentTarget;
  return (e == null ? void 0 : e.getBoundingClientRect()) ?? null;
}
function od(t) {
  const {
    nodeId: e,
    nodeType: a,
    isDragOver: n,
    dragPosition: o,
    emitDragNode: r,
    clearAllDragStates: i
  } = t;
  return {
    handleDragOver: (s) => {
      if (s.preventDefault(), s.stopPropagation(), !s.dataTransfer)
        return;
      if (s.dataTransfer.getData("text/plain") === e) {
        s.dataTransfer.dropEffect = "none";
        return;
      }
      s.dataTransfer.dropEffect = "move", n.value = !0;
      const m = nd(s);
      if (!m)
        return;
      const T = s.clientY - m.top;
      o.value = ad(a, T, m.height);
    },
    handleDrop: (s) => {
      if (s.preventDefault(), s.stopPropagation(), !s.dataTransfer)
        return;
      const d = s.dataTransfer.getData("text/plain");
      if (d === e) {
        i();
        return;
      }
      o.value && r(d, e, o.value), i();
    }
  };
}
function rd(t) {
  const { nodeId: e, clearAllDragStates: a } = t;
  return {
    handleDragStart: (r) => {
      r.dataTransfer && (r.dataTransfer.setData("text/plain", e), r.dataTransfer.effectAllowed = "move", de(r, "0.5"), a());
    },
    handleDragEnd: (r) => {
      de(r, "1"), a();
    }
  };
}
function id(t) {
  const e = rd({
    nodeId: t.nodeId,
    clearAllDragStates: t.clearAllDragStates
  }), a = od(t), n = td({
    clearDragState: t.clearDragState
  });
  return ed({
    startEndHandlers: e,
    overDropHandlers: a,
    leaveHandler: n
  });
}
let z = 0, G = !1;
const Le = () => {
  if (typeof document > "u")
    return;
  document.querySelectorAll(".tree-node").forEach((e) => {
    const a = e;
    a.classList.remove("drag-over", "drag-before", "drag-after", "drag-inside");
    const n = a.querySelector(".node-content");
    n && (n.style.border = "", n.style.background = "", n.style.boxShadow = "");
  });
}, j = () => {
  Le();
}, ld = () => {
  typeof document > "u" || (G || (document.addEventListener("dragend", j), document.addEventListener("drop", j), G = !0), z += 1);
}, sd = () => {
  typeof document > "u" || (z = Math.max(0, z - 1), z === 0 && G && (document.removeEventListener("dragend", j), document.removeEventListener("drop", j), G = !1));
};
function ud(t) {
  const { props: e, emitDragNode: a } = t, n = I(!1), o = I(null), r = () => {
    n.value = !1, o.value = null;
  }, i = () => {
    Le(), r();
  };
  ke(() => {
    ld();
  }), ze(() => {
    sd();
  });
  const {
    handleDragStart: l,
    handleDragEnd: u,
    handleDragOver: s,
    handleDragLeave: d,
    handleDrop: m
  } = id({
    nodeId: e.node.id,
    nodeType: e.node.type,
    isDragOver: n,
    dragPosition: o,
    emitDragNode: a,
    clearDragState: r,
    clearAllDragStates: i
  });
  return {
    isDragOver: n,
    dragPosition: o,
    handleDragStart: l,
    handleDragEnd: u,
    handleDragOver: s,
    handleDragLeave: d,
    handleDrop: m
  };
}
function dd(t) {
  const { props: e, emitUpdateNode: a, emitUpdateParameterValueDataType: n } = t, o = (s) => {
    const d = e.availableFields.find((m) => m.value === s);
    return (d == null ? void 0 : d.type) || "string";
  }, r = () => {
    if (!e.node.field)
      return "";
    const s = e.node.field.match(/^([a-z_][\w.]*)(\[[^\]]+\])?$/i);
    return s ? s[1] : e.node.field;
  };
  return {
    getFieldType: o,
    updateBaseField: (s) => {
      const d = o(s);
      a(e.node.id, { field: s, fieldType: d }), n(
        e.node.id,
        "condition_value",
        O(d === "array" ? "string" : d)
      );
    },
    updateArrayIndex: (s) => {
      const d = r();
      if (!d)
        return;
      const m = s !== void 0 ? `${d}[${s}]` : d, T = o(d);
      a(e.node.id, { field: m, fieldType: T });
    },
    getAvailableOperators: () => {
      const s = r(), d = o(s || "");
      return e.node.field && d === "array" && !/\[\d+\]$/.test(e.node.field) ? k.array : k[d] || k.string;
    }
  };
}
const pd = /* @__PURE__ */ new Set(["== nil", "!= nil", "== ''", "!= ''"]);
function cd(t, e) {
  if (!!pd.has(e))
    return {
      comparison: e,
      value: void 0
    };
  const n = { comparison: e };
  return e === "match" && !t.extraComparison ? n.extraComparison = "== nil" : e !== "match" && t.extraComparison && (n.extraComparison = void 0), n;
}
function md(t) {
  return { value: t };
}
function fd(t) {
  return { extraComparison: t };
}
function vd(t, e, a) {
  const n = t.field || (e.length > 0 ? e[0].value : ""), o = a(n);
  return {
    updates: {
      functionName: void 0,
      functionCategory: void 0,
      parameters: void 0,
      field: n,
      comparison: t.comparison || "=="
    },
    valueDataType: O(o)
  };
}
function yd() {
  const t = R[0], e = t.parameters.map((a) => ({
    ...a,
    value: void 0
  }));
  return {
    field: void 0,
    comparison: void 0,
    value: void 0,
    valueDataType: void 0,
    functionName: t.name,
    functionCategory: t.category,
    parameters: e
  };
}
function gd(t) {
  const e = R.find((n) => n.name === t);
  if (!e)
    return null;
  const a = e.parameters.map((n) => ({
    ...n,
    value: void 0
  }));
  return {
    functionName: t,
    functionCategory: e.category,
    parameters: a,
    comparison: e.returnType === "boolean" ? void 0 : "==",
    value: e.returnType === "boolean" ? void 0 : "",
    isNegated: !1
  };
}
function _d(t) {
  const {
    props: e,
    emitUpdateNode: a,
    emitUpdateParameterValueDataType: n,
    getFieldType: o
  } = t;
  return {
    switchConditionMode: (d) => {
      if (d === "condition") {
        const m = vd(
          e.node,
          e.availableFields,
          o
        );
        a(e.node.id, m.updates), n(
          e.node.id,
          "condition_value",
          m.valueDataType
        );
        return;
      }
      a(e.node.id, yd());
    },
    updateComparison: (d) => {
      a(e.node.id, cd(e.node, d));
    },
    updateValue: (d) => {
      a(e.node.id, md(d));
    },
    updateExtraComparison: (d) => {
      a(e.node.id, fd(d));
    },
    updateFunction: (d) => {
      const m = gd(d);
      m && a(e.node.id, m);
    }
  };
}
function Td(t) {
  const { uiMutation: e, fieldMutation: a, conditionMutation: n, parameterMutation: o } = t;
  return {
    hasError: e.hasError,
    indentSize: e.indentSize,
    toggleExpanded: e.toggleExpanded,
    updateOperator: e.updateOperator,
    updateConditionNegation: e.updateConditionNegation,
    updateGroupNegation: e.updateGroupNegation,
    copyNode: e.copyNode,
    updateBaseField: a.updateBaseField,
    updateArrayIndex: a.updateArrayIndex,
    getAvailableOperators: a.getAvailableOperators,
    switchConditionMode: n.switchConditionMode,
    updateComparison: n.updateComparison,
    updateValue: n.updateValue,
    updateExtraComparison: n.updateExtraComparison,
    updateFunction: n.updateFunction,
    updateParameter: o.updateParameter,
    updateParameterType: o.updateParameterType,
    updateParameterValueDataType: o.updateParameterValueDataType,
    updateConditionValueDataType: o.updateConditionValueDataType,
    updateFunctionValueDataType: o.updateFunctionValueDataType
  };
}
function Vd(t) {
  const { props: e, emitUpdateNode: a, emitCopyNode: n } = t, o = _(() => {
    var m;
    return (m = e.validationErrors) != null && m.length ? e.validationErrors.some((T) => T.nodeId === e.node.id) : !1;
  }), r = _(() => {
    const m = e.level;
    return m === 0 ? 0 : m === 1 ? 20 : m === 2 ? 36 : m === 3 ? 48 : Math.min(48 + (m - 3) * 8, 80);
  });
  return {
    hasError: o,
    indentSize: r,
    toggleExpanded: () => {
      a(e.node.id, { expanded: !e.node.expanded });
    },
    updateOperator: (m) => {
      a(e.node.id, { operator: m });
    },
    updateConditionNegation: (m) => {
      a(e.node.id, { isNegated: m });
    },
    updateGroupNegation: (m) => {
      a(e.node.id, { isNegated: m });
    },
    copyNode: () => {
      n(e.node.id);
    }
  };
}
const hd = (t) => typeof t == "object" && t !== null && "id" in t;
function Pd(t) {
  const {
    props: e,
    emitUpdateNode: a,
    emitUpdateParameterType: n,
    emitUpdateParameterValueDataType: o
  } = t;
  return {
    updateParameter: (d, m) => {
      const T = (e.node.parameters || []).map((C) => ({ ...C })), L = T.findIndex((C) => C.name === d);
      L < 0 || (hd(m) ? T[L] = {
        ...T[L],
        nestedNode: m,
        isNested: !0,
        value: void 0
      } : T[L] = {
        ...T[L],
        value: m,
        isNested: !1,
        nestedNode: void 0
      }, a(e.node.id, { parameters: T }));
    },
    updateParameterType: (d, m) => {
      const T = (e.node.parameters || []).map((C) => ({ ...C })), L = T.findIndex((C) => C.name === d);
      L < 0 || (T[L] = {
        ...T[L],
        type: m
      }, a(e.node.id, { parameters: T }), n(d, m));
    },
    updateParameterValueDataType: (d, m) => {
      o(e.node.id, d, m);
    },
    updateConditionValueDataType: (d, m) => {
      o(e.node.id, "condition_value", m);
    },
    updateFunctionValueDataType: (d, m) => {
      o(e.node.id, d, m);
    }
  };
}
function Fd(t) {
  const {
    props: e,
    emitUpdateNode: a,
    emitCopyNode: n,
    emitUpdateParameterType: o,
    emitUpdateParameterValueDataType: r
  } = t, i = dd({
    props: e,
    emitUpdateNode: a,
    emitUpdateParameterValueDataType: r
  }), l = Pd({
    props: e,
    emitUpdateNode: a,
    emitUpdateParameterType: o,
    emitUpdateParameterValueDataType: r
  }), u = Vd({
    props: e,
    emitUpdateNode: a,
    emitCopyNode: n
  }), s = _d({
    props: e,
    emitUpdateNode: a,
    emitUpdateParameterValueDataType: r,
    getFieldType: i.getFieldType
  });
  return Td({
    uiMutation: u,
    fieldMutation: i,
    conditionMutation: s,
    parameterMutation: l
  });
}
function bd(t) {
  const e = Fd(t), a = ud(t);
  return Zu({
    drag: a,
    mutation: e
  });
}
function Nd(t, e) {
  return bd({
    props: t,
    emitUpdateNode: (a, n) => e("update-node", a, n),
    emitCopyNode: (a) => e("copy-node", a),
    emitUpdateParameterType: (a, n) => e("update-parameter-type", a, n),
    emitUpdateParameterValueDataType: (a, n, o) => e("update-parameter-value-data-type", a, n, o),
    emitDragNode: (a, n, o) => e("drag-node", a, n, o)
  });
}
function Ed(t) {
  const { controller: e, handlers: a, forwarders: n, nodeClasses: o } = t;
  return {
    hasError: e.hasError,
    indentSize: e.indentSize,
    nodeClasses: o,
    toggleExpanded: e.toggleExpanded,
    updateBaseField: e.updateBaseField,
    updateArrayIndex: e.updateArrayIndex,
    switchConditionMode: e.switchConditionMode,
    updateComparison: e.updateComparison,
    updateValue: e.updateValue,
    updateExtraComparison: e.updateExtraComparison,
    updateOperator: e.updateOperator,
    updateFunction: e.updateFunction,
    updateConditionNegation: e.updateConditionNegation,
    updateGroupNegation: e.updateGroupNegation,
    copyNode: e.copyNode,
    getAvailableOperators: e.getAvailableOperators,
    handleDragStart: e.handleDragStart,
    handleDragEnd: e.handleDragEnd,
    handleDragOver: e.handleDragOver,
    handleDragLeave: e.handleDragLeave,
    handleDrop: e.handleDrop,
    onConditionValueDataType: a.onConditionValueDataType,
    onFunctionValueDataType: a.onFunctionValueDataType,
    onParameterUpdate: a.onParameterUpdate,
    onParameterTypeUpdate: a.onParameterTypeUpdate,
    onParameterValueTypeUpdate: a.onParameterValueTypeUpdate,
    forwardUpdateNode: n.forwardUpdateNode,
    forwardAddChild: n.forwardAddChild,
    forwardRemoveNode: n.forwardRemoveNode,
    forwardMoveUp: n.forwardMoveUp,
    forwardMoveDown: n.forwardMoveDown,
    forwardCopyNode: n.forwardCopyNode,
    forwardUpdateParameterType: n.forwardUpdateParameterType,
    forwardUpdateParameterValueDataType: n.forwardUpdateParameterValueDataType,
    forwardDragNode: n.forwardDragNode
  };
}
function Cd(t) {
  return {
    "update-node": t.forwardUpdateNode,
    "add-child": t.forwardAddChild,
    "remove-node": t.forwardRemoveNode,
    "move-up": t.forwardMoveUp,
    "move-down": t.forwardMoveDown,
    "copy-node": t.forwardCopyNode,
    "update-parameter-type": t.forwardUpdateParameterType,
    "update-parameter-value-data-type": t.forwardUpdateParameterValueDataType,
    "drag-node": t.forwardDragNode
  };
}
function Ld(t) {
  const { controller: e, handlers: a, forwarders: n } = t;
  return {
    "toggle-expanded": e.toggleExpanded,
    "drag-start": e.handleDragStart,
    "drag-end": e.handleDragEnd,
    "update:condition-negation": e.updateConditionNegation,
    "switch:mode": e.switchConditionMode,
    "update:field": e.updateBaseField,
    "update:array-index": e.updateArrayIndex,
    "update:comparison": e.updateComparison,
    "update:value": e.updateValue,
    "update:extra-comparison": e.updateExtraComparison,
    "update:value-data-type": a.onConditionValueDataType,
    "update:function": e.updateFunction,
    "update:parameter": a.onParameterUpdate,
    "update:parameter-type": a.onParameterTypeUpdate,
    "update:parameter-value-type": a.onParameterValueTypeUpdate,
    "update:function-value-data-type": a.onFunctionValueDataType,
    "update:group-operator": e.updateOperator,
    "update:group-negation": e.updateGroupNegation,
    "add-child": n.forwardAddChild,
    "move-up": n.forwardMoveUp,
    "move-down": n.forwardMoveDown,
    "copy-node": e.copyNode,
    "remove-node": n.forwardRemoveNode
  };
}
function Dd(t) {
  return {
    "node-dragover": t.handleDragOver,
    "node-dragleave": t.handleDragLeave,
    "node-drop": t.handleDrop
  };
}
function xd(t) {
  const { controller: e, handlers: a, forwarders: n } = t, o = Dd(e), r = Ld({
    controller: e,
    handlers: a,
    forwarders: n
  }), i = Cd(n);
  return {
    shellListeners: o,
    contentListeners: r,
    childrenListeners: i
  };
}
function wd(t) {
  const { props: e, isDragOver: a, dragPosition: n, hasError: o } = t;
  return _(() => ({
    "node-condition": e.node.type === "condition" && !e.node.functionName,
    "node-function": e.node.type === "condition" && !!e.node.functionName,
    "node-group": e.node.type === "group",
    "node-expanded": e.node.type === "group" && e.node.expanded,
    "node-collapsed": e.node.type === "group" && !e.node.expanded,
    "drag-over": a.value,
    "drag-before": n.value === "before",
    "drag-after": n.value === "after",
    "drag-inside": n.value === "inside",
    "has-error": o.value
  }));
}
function Ud(t) {
  const { props: e, emit: a } = t, n = Nd(e, a), o = Qu({
    updateConditionValueDataType: n.updateConditionValueDataType,
    updateFunctionValueDataType: n.updateFunctionValueDataType,
    updateParameter: n.updateParameter,
    updateParameterType: n.updateParameterType,
    updateParameterValueDataType: n.updateParameterValueDataType
  }), r = Ju(a), i = wd({
    props: e,
    isDragOver: n.isDragOver,
    dragPosition: n.dragPosition,
    hasError: n.hasError
  }), l = xd({
    controller: n,
    handlers: o,
    forwarders: r
  });
  return {
    exposedBindings: Ed({
      controller: n,
      handlers: o,
      forwarders: r,
      nodeClasses: i
    }),
    listeners: l
  };
}
function Id(t) {
  const e = Ud(t);
  return Ku({ setupResult: e });
}
const Z = /* @__PURE__ */ V({
  __name: "TreeNodeComponent",
  props: {
    node: {},
    availableFields: {},
    level: {},
    allowedFunctions: {},
    hideActions: { type: Boolean },
    expectedReturnType: {},
    getParameterDataType: { type: Function },
    validationErrors: {}
  },
  emits: ["update-node", "add-child", "remove-node", "move-up", "move-down", "copy-node", "update-parameter-type", "update-parameter-value-data-type", "drag-node"],
  setup(t, { emit: e }) {
    const a = t, n = e, {
      hasError: o,
      indentSize: r,
      nodeClasses: i,
      getAvailableOperators: l,
      shellListeners: u,
      contentListeners: s,
      childrenListeners: d
    } = Id({
      props: a,
      emit: n
    });
    return (m, T) => (c(), y(Xu, h({
      "node-classes": p(i),
      "indent-size": p(r),
      level: m.level
    }, P(p(u))), {
      default: g(() => [
        f(Wu, h({
          node: m.node,
          "available-fields": m.availableFields,
          "available-operators": p(l)(),
          "hide-actions": m.hideActions,
          "has-error": p(o),
          "expected-return-type": m.expectedReturnType,
          "get-parameter-data-type": m.getParameterDataType
        }, P(p(s))), null, 16, ["node", "available-fields", "available-operators", "hide-actions", "has-error", "expected-return-type", "get-parameter-data-type"]),
        f(dt, h({
          node: m.node,
          "available-fields": m.availableFields,
          level: m.level,
          "expected-return-type": m.expectedReturnType,
          "get-parameter-data-type": m.getParameterDataType,
          "validation-errors": m.validationErrors
        }, P(p(d))), null, 16, ["node", "available-fields", "level", "expected-return-type", "get-parameter-data-type", "validation-errors"])
      ]),
      _: 1
    }, 16, ["node-classes", "indent-size", "level"]));
  }
});
function Sd(t) {
  const { listeners: e } = t.setupResult;
  return {
    nodeListeners: e.nodeListeners,
    emptyStateButtonListeners: e.emptyStateButtonListeners
  };
}
function Ad(t) {
  return {
    onAddGroup: () => {
      t("add-group");
    }
  };
}
function Md(t) {
  const { nodeForwarders: e, groupForwarders: a } = t, { treeNodeListeners: n } = be({
    forwarders: e
  }), o = {
    click: a.onAddGroup
  };
  return {
    nodeListeners: n,
    emptyStateButtonListeners: o
  };
}
function Bd(t) {
  return Fe(t);
}
function Rd(t) {
  const e = Bd(t.emit), a = Ad(t.emit);
  return {
    listeners: Md({
      nodeForwarders: e,
      groupForwarders: a
    })
  };
}
function $d(t) {
  const e = Rd(t);
  return Sd({ setupResult: e });
}
const Od = { class: "expression-tree" }, kd = {
  key: 0,
  class: "empty-state"
}, zd = /* @__PURE__ */ V({
  __name: "TreeCanvas",
  props: {
    rootNodes: {},
    availableFields: {},
    validationErrors: {},
    getParameterDataType: { type: Function }
  },
  emits: ["update-node", "add-child", "remove-node", "move-up", "move-down", "copy-node", "update-parameter-type", "update-parameter-value-data-type", "drag-node", "add-group"],
  setup(t, { emit: e }) {
    const a = e, {
      nodeListeners: n,
      emptyStateButtonListeners: o
    } = $d({
      emit: a
    });
    return (r, i) => {
      const l = v("a-button"), u = v("a-empty");
      return c(), b("div", Od, [
        (c(!0), b(S, null, M(r.rootNodes, (s) => (c(), y(Z, h({
          key: s.id,
          node: s,
          "available-fields": r.availableFields,
          level: 0,
          "get-parameter-data-type": r.getParameterDataType,
          "validation-errors": r.validationErrors
        }, P(p(n))), null, 16, ["node", "available-fields", "get-parameter-data-type", "validation-errors"]))), 128)),
        r.rootNodes.length === 0 ? (c(), b("div", kd, [
          f(u, { description: "还没有任何节点" }, {
            default: g(() => [
              f(l, h({ type: "primary" }, P(p(o))), {
                default: g(() => i[0] || (i[0] = [
                  w("添加第一个分组")
                ])),
                _: 1
              }, 16)
            ]),
            _: 1
          })
        ])) : D("", !0)
      ]);
    };
  }
}), Gd = /* @__PURE__ */ E(zd, [["__scopeId", "data-v-16fbdb15"]]), jd = { class: "validation-status" }, Hd = { class: "error-list" }, Wd = { class: "error-number" }, qd = { class: "error-message" }, Yd = /* @__PURE__ */ V({
  __name: "ValidationStatusPanel",
  props: {
    allErrors: {}
  },
  setup(t) {
    return (e, a) => {
      const n = v("a-alert");
      return c(), b("div", jd, [
        e.allErrors.length > 0 ? (c(), y(n, {
          key: 0,
          type: "error",
          "show-icon": "",
          closable: ""
        }, {
          title: g(() => [
            w(" 发现 " + U(e.allErrors.length) + " 个问题 ", 1)
          ]),
          default: g(() => [
            N("div", Hd, [
              (c(!0), b(S, null, M(e.allErrors, (o, r) => (c(), b("div", {
                key: `${o.nodeId}-${r}`,
                class: "error-item"
              }, [
                N("span", Wd, U(r + 1) + ".", 1),
                N("span", qd, U(o.message), 1)
              ]))), 128))
            ])
          ]),
          _: 1
        })) : D("", !0)
      ]);
    };
  }
}), Xd = /* @__PURE__ */ E(Yd, [["__scopeId", "data-v-55746b55"]]);
function Kd(t) {
  const { controller: e, listeners: a, hasDataPreview: n } = t.setupResult;
  return {
    extractedFields: e.extractedFields,
    dataSourceInfo: e.dataSourceInfo,
    rootNodes: e.rootNodes,
    availableFields: e.availableFields,
    validationErrors: e.validationErrors,
    allErrors: e.allErrors,
    generatedExpression: e.generatedExpression,
    validating: e.validating,
    validationResult: e.validationResult,
    addGroup: e.addGroup,
    expandAll: e.expandAll,
    collapseAll: e.collapseAll,
    updateNode: e.updateNode,
    addChildNode: e.addChildNode,
    removeNode: e.removeNode,
    moveNodeUpAction: e.moveNodeUpAction,
    moveNodeDownAction: e.moveNodeDownAction,
    copyNodeAction: e.copyNodeAction,
    handleParameterTypeUpdate: e.handleParameterTypeUpdate,
    handleParameterValueDataTypeUpdate: e.handleParameterValueDataTypeUpdate,
    handleDragNode: e.handleDragNode,
    clearExpression: e.clearExpression,
    validateExpressionManually: e.validateExpressionManually,
    copyExpression: e.copyExpression,
    formatExpression: e.formatExpression,
    getParameterDataType: e.getParameterDataType,
    hasDataPreview: n,
    toolbarListeners: a.toolbarListeners,
    treeCanvasListeners: a.treeCanvasListeners,
    expressionPreviewListeners: a.expressionPreviewListeners
  };
}
function Jd(t) {
  const { nodeActions: e, expressionActions: a } = t;
  return {
    addGroup: e.addGroup,
    expandAll: e.expandAll,
    collapseAll: e.collapseAll,
    updateNode: e.updateNode,
    addChildNode: e.addChildNode,
    removeNode: e.removeNode,
    moveNodeUpAction: e.moveNodeUpAction,
    moveNodeDownAction: e.moveNodeDownAction,
    copyNodeAction: e.copyNodeAction,
    handleParameterTypeUpdate: e.handleParameterTypeUpdate,
    handleParameterValueDataTypeUpdate: e.handleParameterValueDataTypeUpdate,
    handleDragNode: e.handleDragNode,
    getParameterDataType: e.getParameterDataType,
    clearExpression: a.clearExpression,
    validateExpressionManually: a.validateExpressionManually,
    copyExpression: a.copyExpression,
    formatExpression: a.formatExpression
  };
}
function Qd(t, e) {
  return {
    copyExpression: async () => {
      if (!t.generatedExpression.value) {
        e.warning("当前没有可复制的表达式");
        return;
      }
      try {
        await navigator.clipboard.writeText(t.generatedExpression.value), e.success("表达式已复制");
      } catch {
        e.error("复制失败");
      }
    }
  };
}
function Zd(t) {
  const { lifecycleActions: e, clipboardActions: a, validationActions: n } = t;
  return {
    clearExpression: e.clearExpression,
    formatExpression: e.formatExpression,
    copyExpression: a.copyExpression,
    validateExpressionManually: n.validateExpressionManually
  };
}
function ep(t, e) {
  return {
    clearExpression: () => {
      t.rootNodes.value = [], t.service.clearParameterDataTypes(), t.parseError.value = null, t.validationErrors.value = [], t.validationResult.value = null, t.emitExpression(""), e.success("表达式已清空");
    },
    formatExpression: () => {
      if (!t.generatedExpression.value)
        return;
      const o = ri(t.generatedExpression.value);
      t.emitExpression(o);
    }
  };
}
function tp(t, e) {
  return {
    validateExpressionManually: async () => {
      var n;
      if (!t.generatedExpression.value) {
        e.warning("请先构建表达式");
        return;
      }
      t.validating.value = !0;
      try {
        const o = ii(t.generatedExpression.value) && t.allErrors.value.length === 0;
        t.validationResult.value = o ? { success: !0 } : { success: !1, message: ((n = t.allErrors.value[0]) == null ? void 0 : n.message) || "表达式校验失败" }, o ? e.success("表达式验证通过") : e.error(t.validationResult.value.message || "表达式验证失败");
      } finally {
        t.validating.value = !1;
      }
    }
  };
}
function ap(t, e) {
  const a = ep(t, e), n = Qd(t, e), o = tp(t, e);
  return Zd({
    lifecycleActions: a,
    clipboardActions: n,
    validationActions: o
  });
}
function H(t, e, a = null) {
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    if (o.id === e)
      return { node: o, parent: a, index: n };
    if (o.children) {
      const r = H(o.children, e, o);
      if (r.node)
        return r;
    }
  }
  return { node: null, parent: null, index: -1 };
}
function np(t, e, a) {
  const n = (r) => {
    for (const i of r)
      if (i.id === a || i.children && n(i.children))
        return !0;
    return !1;
  }, o = H(t, e).node;
  return o != null && o.children ? n(o.children) : !1;
}
function De(t, e, a) {
  t.parentId = e, t.level = a, t.children && t.children.forEach((n) => De(n, t.id, a + 1));
}
function xe(t, e, a) {
  const n = (o) => {
    const r = o.findIndex((l) => l.id === e), i = r + a;
    if (r >= 0 && i >= 0 && i < o.length) {
      const l = o[r];
      return o[r] = o[i], o[i] = l, !0;
    }
    for (const l of o)
      if (l.children && n(l.children))
        return !0;
    return !1;
  };
  return n(t);
}
function op(t, e) {
  return xe(t, e, -1);
}
function rp(t, e) {
  return xe(t, e, 1);
}
function we(t) {
  return `${t}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
function ip(t) {
  return JSON.parse(JSON.stringify(t));
}
function Ue(t, e, a) {
  const n = t.get(e);
  n && t.set(a, new Map(n));
}
function Ie(t) {
  const { targetNode: e, parameterDataTypes: a, parentId: n } = t;
  n && (e.parentId = n), e.children && e.children.forEach((o) => {
    const r = o.id;
    o.id = we(o.type), o.parentId = e.id, Ue(a, r, o.id), Ie({
      targetNode: o,
      parameterDataTypes: a,
      parentId: e.id
    });
  });
}
function Se(t) {
  const { nodes: e, nodeId: a, parameterDataTypes: n } = t;
  for (const o of e) {
    if (o.id === a) {
      const r = ip(o);
      return r.id = we(o.type), Ie({
        targetNode: r,
        parameterDataTypes: n,
        parentId: o.parentId
      }), Ue(n, o.id, r.id), r;
    }
    if (o.children) {
      const r = Se({
        nodes: o.children,
        nodeId: a,
        parameterDataTypes: n
      });
      if (r)
        return r;
    }
  }
  return null;
}
function Ae(t) {
  const { nodes: e, targetId: a, copiedNode: n } = t, o = e.findIndex((r) => r.id === a);
  if (o >= 0)
    return e.splice(o + 1, 0, n), !0;
  for (const r of e)
    if (r.children && Ae({
      nodes: r.children,
      targetId: a,
      copiedNode: n
    }))
      return !0;
  return !1;
}
function lp(t, e, a) {
  const n = Se({
    nodes: t,
    nodeId: e,
    parameterDataTypes: a
  });
  return n ? Ae({
    nodes: t,
    targetId: e,
    copiedNode: n
  }) ? { success: !0 } : { success: !1, reason: "node_not_found" } : { success: !1, reason: "node_not_found" };
}
function sp(t) {
  const { nodes: e, sourceNode: a, sourceResult: n } = t;
  if (n.parent) {
    n.parent.children || (n.parent.children = []), n.parent.children.splice(n.index, 0, a);
    return;
  }
  e.splice(n.index, 0, a);
}
function up(t) {
  var r;
  const { nodes: e, sourceNodeId: a, sourceResult: n } = t;
  if (n.parent) {
    n.parent.children = ((r = n.parent.children) == null ? void 0 : r.filter((i) => i.id !== a)) || [];
    return;
  }
  const o = e.findIndex((i) => i.id === a);
  o >= 0 && e.splice(o, 1);
}
function dp(t) {
  const { sourceNode: e, targetNode: a } = t;
  a.children || (a.children = []), a.children.push(e);
}
function pp(t) {
  const { nodes: e, sourceNode: a, targetNodeId: n, targetResult: o, position: r } = t, i = o.parent, l = o.index, u = r === "before" ? l : l + 1;
  if (i) {
    i.children || (i.children = []), i.children.splice(u, 0, a);
    return;
  }
  const s = e.findIndex((m) => m.id === n), d = r === "before" ? s : s + 1;
  e.splice(d, 0, a);
}
function cp(t, e, a, n) {
  var d;
  const o = H(t, e), r = H(t, a), i = o.node, l = r.node;
  if (!i || !l)
    return console.error("无法找到源节点或目标节点"), { success: !1, reason: "node_not_found" };
  if (np(t, e, a))
    return { success: !1, reason: "descendant_target" };
  up({
    nodes: t,
    sourceNodeId: e,
    sourceResult: o
  });
  let u, s;
  if (n === "inside") {
    if (l.type !== "group")
      return sp({
        nodes: t,
        sourceNode: i,
        sourceResult: o
      }), { success: !1, reason: "invalid_target" };
    u = l.id, s = l.level + 1, dp({
      sourceNode: i,
      targetNode: l
    });
  } else
    u = (d = r.parent) == null ? void 0 : d.id, s = l.level, pp({
      nodes: t,
      sourceNode: i,
      targetNodeId: a,
      targetResult: r,
      position: n
    });
  return De(i, u, s), { success: !0 };
}
function mp(t) {
  const { state: e, commitNodeMutation: a, notifyDragFailure: n, notifier: o } = t;
  return {
    moveNodeUpAction: (s) => {
      op(e.rootNodes.value, s) && a();
    },
    moveNodeDownAction: (s) => {
      rp(e.rootNodes.value, s) && a();
    },
    copyNodeAction: (s) => {
      lp(e.rootNodes.value, s, e.parameterDataTypes).success && (a({ validate: !0 }), o.success("节点已复制"));
    },
    handleDragNode: (s, d, m) => {
      const T = cp(e.rootNodes.value, s, d, m);
      if (!T.success) {
        n(T.reason);
        return;
      }
      a(), o.success("节点移动成功");
    }
  };
}
function fp(t) {
  const { structureActions: e, reorderActions: a } = t;
  return {
    addGroup: e.addGroup,
    expandAll: e.expandAll,
    collapseAll: e.collapseAll,
    updateNode: e.updateNode,
    addChildNode: e.addChildNode,
    removeNode: e.removeNode,
    handleParameterTypeUpdate: e.handleParameterTypeUpdate,
    handleParameterValueDataTypeUpdate: e.handleParameterValueDataTypeUpdate,
    getParameterDataType: e.getParameterDataType,
    moveNodeUpAction: a.moveNodeUpAction,
    moveNodeDownAction: a.moveNodeDownAction,
    copyNodeAction: a.copyNodeAction,
    handleDragNode: a.handleDragNode
  };
}
function vp(t, e) {
  return {
    commitNodeMutation: (o) => {
      t.parseError.value = null, t.regenerateExpression(), o != null && o.validate && t.runValidation();
    },
    notifyDragFailure: (o) => {
      if (o === "descendant_target") {
        e.warning("不能将节点拖拽到自己的子节点中");
        return;
      }
      o === "invalid_target" && e.warning("只能拖拽到分组内部");
    }
  };
}
function yp(t) {
  const { state: e, commitNodeMutation: a } = t;
  return {
    addGroup: () => {
      e.rootNodes.value.push(ce(void 0, 0)), a({ validate: !0 });
    },
    expandAll: () => {
      re(e.rootNodes.value, !0);
    },
    collapseAll: () => {
      re(e.rootNodes.value, !1);
    },
    updateNode: (T, L) => {
      Ve(e.rootNodes.value, T, L);
      const C = "expanded" in L && Object.keys(L).length === 1;
      a({ validate: !C });
    },
    addChildNode: (T, L) => {
      const C = Pe(e.rootNodes.value, T, L, e.availableFields.value);
      C.updated && (C.addedConditionNodeId && e.service.setParameterDataType(
        C.addedConditionNodeId,
        "condition_value",
        C.addedConditionDataType || O()
      ), a({ validate: !0 }));
    },
    removeNode: (T) => {
      e.rootNodes.value = he(e.rootNodes.value, T), a({ validate: !0 });
    },
    handleParameterTypeUpdate: (T, L) => {
      e.regenerateExpression();
    },
    handleParameterValueDataTypeUpdate: (T, L, C) => {
      e.service.setParameterDataType(T, L, C), e.regenerateExpression();
    },
    getParameterDataType: (T, L) => {
      var C;
      return (C = e.parameterDataTypes.get(T)) == null ? void 0 : C.get(L);
    }
  };
}
function gp(t, e) {
  const a = vp(t, e), n = yp({
    state: t,
    commitNodeMutation: a.commitNodeMutation
  }), o = mp({
    state: t,
    commitNodeMutation: a.commitNodeMutation,
    notifyDragFailure: a.notifyDragFailure,
    notifier: e
  });
  return fp({
    structureActions: n,
    reorderActions: o
  });
}
const Qp = {
  success: () => {
  },
  warning: () => {
  },
  error: () => {
  }
}, Me = {
  success: (t) => {
    $.success(t);
  },
  warning: (t) => {
    $.warning(t);
  },
  error: (t) => {
    $.error(t);
  }
};
function _p(t, e) {
  const a = e || Me, n = gp(t, a), o = ap(t, a);
  return Jd({
    nodeActions: n,
    expressionActions: o
  });
}
function Tp(t) {
  const { state: e, actions: a } = t;
  return {
    extractedFields: e.extractedFields,
    dataSourceInfo: e.dataSourceInfo,
    rootNodes: e.rootNodes,
    availableFields: e.availableFields,
    validationErrors: e.validationErrors,
    allErrors: e.allErrors,
    generatedExpression: e.generatedExpression,
    validating: e.validating,
    validationResult: e.validationResult,
    addGroup: a.addGroup,
    expandAll: a.expandAll,
    collapseAll: a.collapseAll,
    updateNode: a.updateNode,
    addChildNode: a.addChildNode,
    removeNode: a.removeNode,
    moveNodeUpAction: a.moveNodeUpAction,
    moveNodeDownAction: a.moveNodeDownAction,
    copyNodeAction: a.copyNodeAction,
    handleParameterTypeUpdate: a.handleParameterTypeUpdate,
    handleParameterValueDataTypeUpdate: a.handleParameterValueDataTypeUpdate,
    handleDragNode: a.handleDragNode,
    clearExpression: a.clearExpression,
    validateExpressionManually: a.validateExpressionManually,
    copyExpression: a.copyExpression,
    formatExpression: a.formatExpression,
    getParameterDataType: a.getParameterDataType
  };
}
function Vp(t) {
  const {
    props: e,
    generatedExpression: a,
    loadExpression: n,
    syncServiceFields: o,
    runValidation: r
  } = t;
  B(
    () => e.modelValue,
    (i) => {
      i !== a.value && n(i);
    },
    { immediate: !0 }
  ), B(
    () => [e.fieldOptions, e.dataPreview],
    () => {
      o(), a.value && r();
    }
  );
}
function hp(t) {
  const { service: e, parameterDataTypes: a, rootNodes: n, fieldState: o, validationState: r, expressionState: i } = t.setupResult;
  return {
    service: e,
    parameterDataTypes: a,
    rootNodes: n,
    generatedExpression: i.generatedExpression,
    validationErrors: r.validationErrors,
    parseError: r.parseError,
    validating: r.validating,
    validationResult: r.validationResult,
    extractedFields: o.extractedFields,
    availableFields: o.availableFields,
    dataSourceInfo: o.dataSourceInfo,
    allErrors: r.allErrors,
    syncServiceFields: o.syncServiceFields,
    emitExpression: i.emitExpression,
    regenerateExpression: i.regenerateExpression,
    runValidation: r.runValidation,
    loadExpression: i.loadExpression
  };
}
function Pp(t) {
  const {
    service: e,
    rootNodes: a,
    emitUpdateModelValue: n,
    syncServiceFields: o,
    runValidation: r,
    validationRefs: i
  } = t, {
    parseError: l,
    validationErrors: u,
    validationResult: s
  } = i, d = I(""), m = (x) => {
    d.value = x, n(x);
  }, T = () => {
    o();
    const x = e.generate(a.value);
    m(x);
  }, L = () => {
    a.value = [], d.value = "", l.value = null, u.value = [], s.value = null;
  };
  return {
    generatedExpression: d,
    emitExpression: m,
    regenerateExpression: T,
    loadExpression: (x) => {
      if (o(), e.clearParameterDataTypes(), !x || !x.trim()) {
        L();
        return;
      }
      const F = e.parseDetailed(x);
      if (d.value = x, F.success) {
        a.value = F.nodes, l.value = null, r();
        return;
      }
      a.value = [], u.value = [], l.value = F.error || "表达式解析失败";
    }
  };
}
function Fp(t) {
  const { props: e, service: a } = t, n = Ge([...ai]), o = I(null), r = _(() => {
    var s;
    if (!e.dataPreview)
      return [];
    if (((s = o.value) == null ? void 0 : s.preview) === e.dataPreview)
      return o.value.fields;
    try {
      const d = He(e.dataPreview);
      return o.value = {
        preview: e.dataPreview,
        fields: d
      }, d;
    } catch {
      return [];
    }
  }), i = _(() => ni(r.value, e.fieldOptions, n)), l = _(() => oi(r.value));
  return {
    extractedFields: r,
    availableFields: i,
    dataSourceInfo: l,
    syncServiceFields: () => {
      a.setAvailableFields(i.value);
    }
  };
}
function bp(t) {
  const { service: e, rootNodes: a } = t, n = I(null), o = I([]), r = I(!1), i = I(null), l = _(() => {
    const d = [];
    return n.value && d.push({ nodeId: "root", message: n.value }), d.push(...o.value), d;
  }), u = () => {
    o.value = e.validate(a.value);
  }, s = {
    parseError: n,
    validationErrors: o,
    validating: r,
    validationResult: i
  };
  return {
    parseError: s.parseError,
    validationErrors: s.validationErrors,
    validating: s.validating,
    validationResult: s.validationResult,
    allErrors: l,
    runValidation: u
  };
}
function Np(t) {
  const { props: e, emitUpdateModelValue: a } = t, n = We({ availableFields: [] }), o = n.getParameterDataTypes(), r = I([]), i = Fp({
    props: e,
    service: n,
    rootNodes: r
  }), l = bp({
    props: e,
    service: n,
    rootNodes: r
  }), u = Pp({
    props: e,
    service: n,
    rootNodes: r,
    emitUpdateModelValue: a,
    syncServiceFields: i.syncServiceFields,
    runValidation: l.runValidation,
    validationRefs: {
      parseError: l.parseError,
      validationErrors: l.validationErrors,
      validating: l.validating,
      validationResult: l.validationResult
    }
  });
  return {
    service: n,
    parameterDataTypes: o,
    rootNodes: r,
    fieldState: i,
    validationState: l,
    expressionState: u
  };
}
function Ep(t) {
  const e = Np(t);
  return hp({ setupResult: e });
}
function Cp(t) {
  const e = Ep(t), a = _p(e, t.props.notifier);
  return Vp({
    props: t.props,
    generatedExpression: e.generatedExpression,
    loadExpression: e.loadExpression,
    syncServiceFields: e.syncServiceFields,
    runValidation: e.runValidation
  }), Tp({
    state: e,
    actions: a
  });
}
function Lp(t) {
  return {
    clear: t.clearExpression,
    validate: t.validateExpressionManually,
    copy: t.copyExpression,
    format: t.formatExpression
  };
}
function Dp(t) {
  return {
    "add-group": t.addGroup,
    "expand-all": t.expandAll,
    "collapse-all": t.collapseAll
  };
}
function xp(t) {
  return {
    "update-node": t.updateNode,
    "add-child": t.addChildNode,
    "remove-node": t.removeNode,
    "move-up": t.moveNodeUpAction,
    "move-down": t.moveNodeDownAction,
    "copy-node": t.copyNodeAction,
    "update-parameter-type": t.handleParameterTypeUpdate,
    "update-parameter-value-data-type": t.handleParameterValueDataTypeUpdate,
    "drag-node": t.handleDragNode,
    "add-group": t.addGroup
  };
}
function wp(t) {
  const { controller: e } = t, a = Dp(e), n = xp(e), o = Lp(e);
  return {
    toolbarListeners: a,
    treeCanvasListeners: n,
    expressionPreviewListeners: o
  };
}
function Up(t) {
  const { props: e, emit: a } = t, n = Cp({
    props: e,
    emitUpdateModelValue: (i) => a("update:modelValue", i)
  }), o = wp({ controller: n }), r = _(() => !!e.dataPreview);
  return {
    controller: n,
    listeners: o,
    hasDataPreview: r
  };
}
function Ip(t) {
  const e = Up(t);
  return Kd({ setupResult: e });
}
const Sp = { class: "tree-expression-builder" }, Ap = /* @__PURE__ */ V({
  __name: "TreeExpressionBuilder",
  props: {
    modelValue: {},
    fieldOptions: {},
    dataPreview: {},
    notifier: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = t, n = e, {
      extractedFields: o,
      dataSourceInfo: r,
      hasDataPreview: i,
      rootNodes: l,
      availableFields: u,
      getParameterDataType: s,
      validationErrors: d,
      allErrors: m,
      generatedExpression: T,
      validating: L,
      validationResult: C,
      toolbarListeners: x,
      treeCanvasListeners: F,
      expressionPreviewListeners: q
    } = Ip({
      props: a,
      emit: n
    });
    return (ee, Be) => {
      const te = v("a-card");
      return c(), b("div", Sp, [
        f(te, { bordered: !1 }, {
          default: g(() => [
            f(et, {
              "extracted-field-count": p(o).length,
              "has-data-preview": p(i),
              "data-source-info": p(r)
            }, null, 8, ["extracted-field-count", "has-data-preview", "data-source-info"]),
            f(Ke, P(p(x)), null, 16),
            f(Gd, h({
              "root-nodes": p(l),
              "available-fields": p(u),
              "validation-errors": p(d),
              "get-parameter-data-type": p(s)
            }, P(p(F))), null, 16, ["root-nodes", "available-fields", "validation-errors", "get-parameter-data-type"]),
            f(Xd, { "all-errors": p(m) }, null, 8, ["all-errors"]),
            f(ot, h({
              "generated-expression": p(T),
              validating: p(L),
              "validation-result": p(C)
            }, P(p(q))), null, 16, ["generated-expression", "validating", "validation-result"])
          ]),
          _: 1
        })
      ]);
    };
  }
}), Mp = /* @__PURE__ */ E(Ap, [["__scopeId", "data-v-ea71b296"]]);
function Bp(t) {
  const { setupResult: e } = t;
  return {
    onUpdateModelValue: e.onUpdateModelValue
  };
}
function Rp(t) {
  return {
    onUpdateModelValue: (a) => {
      t.emit("update:modelValue", a);
    }
  };
}
function $p(t) {
  const e = Rp(t);
  return Bp({ setupResult: e });
}
const Op = /* @__PURE__ */ V({
  __name: "AviatorExpressionBuilder",
  props: {
    modelValue: {},
    fields: { default: () => [] },
    dataPreview: { default: "" },
    notifier: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e, {
      onUpdateModelValue: n
    } = $p({
      emit: a
    });
    return (o, r) => (c(), y(Mp, {
      "model-value": o.modelValue,
      "field-options": o.fields,
      "data-preview": o.dataPreview,
      notifier: o.notifier,
      "onUpdate:modelValue": p(n)
    }, null, 8, ["model-value", "field-options", "data-preview", "notifier", "onUpdate:modelValue"]));
  }
});
function kp(t) {
  const { handleSave: e, handleCancel: a } = t;
  return {
    modalListeners: {
      ok: () => e(),
      cancel: () => a()
    },
    footerListeners: {
      save: () => e(),
      cancel: () => a()
    }
  };
}
function zp(t) {
  const { localExpression: e, handleSave: a, handleCancel: n } = t.setupResult, o = kp({
    handleSave: a,
    handleCancel: n
  });
  return {
    localExpression: e,
    modalListeners: o.modalListeners,
    footerListeners: o.footerListeners
  };
}
function Gp(t) {
  const { props: e, emit: a } = t, n = I(e.modelValue || "");
  return B(
    () => e.visible,
    (i) => {
      i && (n.value = e.modelValue || "");
    }
  ), B(
    () => e.modelValue,
    (i) => {
      i !== n.value && (n.value = i || "");
    }
  ), B(n, (i) => {
    a("update:modelValue", i);
  }), {
    localExpression: n,
    handleSave: () => {
      a("save", n.value), a("update:visible", !1);
    },
    handleCancel: () => {
      n.value = e.modelValue || "", a("cancel"), a("update:visible", !1);
    }
  };
}
function jp(t) {
  const e = Gp(t);
  return zp({ setupResult: e });
}
const Hp = /* @__PURE__ */ V({
  __name: "AviatorExpressionBuilderModal",
  props: {
    visible: { type: Boolean },
    modelValue: {},
    title: { default: "Aviator 表达式构建器" },
    width: { default: 1200 },
    fields: { default: () => [] },
    dataPreview: { default: "" },
    notifier: {}
  },
  emits: ["update:visible", "update:modelValue", "save", "cancel"],
  setup(t, { emit: e }) {
    const a = t, n = e, {
      localExpression: o,
      modalListeners: r,
      footerListeners: i
    } = jp({
      props: a,
      emit: n
    });
    return (l, u) => {
      const s = v("a-button"), d = v("a-space"), m = v("a-modal");
      return c(), y(m, {
        visible: l.visible,
        title: l.title,
        width: l.width,
        "mask-closable": !1,
        "esc-to-close": !1,
        onOk: p(r).ok,
        onCancel: p(r).cancel
      }, {
        footer: g(() => [
          f(d, null, {
            default: g(() => [
              f(s, {
                onClick: p(i).cancel
              }, {
                default: g(() => u[1] || (u[1] = [
                  w("取消")
                ])),
                _: 1
              }, 8, ["onClick"]),
              f(s, {
                type: "primary",
                disabled: !p(o),
                onClick: p(i).save
              }, {
                default: g(() => u[2] || (u[2] = [
                  w("保存")
                ])),
                _: 1
              }, 8, ["disabled", "onClick"])
            ]),
            _: 1
          })
        ]),
        default: g(() => [
          f(Op, {
            modelValue: p(o),
            "onUpdate:modelValue": u[0] || (u[0] = (T) => Y(o) ? o.value = T : null),
            fields: l.fields,
            "data-preview": l.dataPreview,
            notifier: l.notifier
          }, null, 8, ["modelValue", "fields", "data-preview", "notifier"])
        ]),
        _: 1
      }, 8, ["visible", "title", "width", "onOk", "onCancel"]);
    };
  }
});
function Wp(t) {
  const {
    visible: e,
    currentExpression: a,
    dataPreview: n,
    fieldOptions: o,
    handleOk: r,
    handleCancel: i,
    open: l,
    updateFieldOptions: u
  } = t.setupResult;
  return {
    visible: e,
    currentExpression: a,
    dataPreview: n,
    fieldOptions: o,
    handleOk: r,
    handleCancel: i,
    exposedApi: {
      open: l,
      updateFieldOptions: u
    }
  };
}
function qp(t) {
  const { emit: e, notifier: a } = t, n = I(!1), o = I(""), r = I(""), i = I([]), l = () => {
    o.value = "";
  };
  return {
    visible: n,
    currentExpression: o,
    dataPreview: r,
    fieldOptions: i,
    handleOk: (T) => {
      const L = T ?? o.value;
      if (!L) {
        a.warning("请构建表达式");
        return;
      }
      o.value = L, e("save", L), n.value = !1, l();
    },
    handleCancel: () => {
      n.value = !1, l();
    },
    open: (T, L, C) => {
      o.value = T || "", r.value = C || "", L && L.length > 0 ? i.value = L : i.value = [], n.value = !0;
    },
    updateFieldOptions: (T) => {
      i.value = T;
    }
  };
}
function Yp(t) {
  const e = qp(t);
  return Wp({ setupResult: e });
}
const Zp = /* @__PURE__ */ V({
  __name: "AviatorExpressionBuilderLegacyModal",
  props: {
    notifier: {}
  },
  emits: ["save"],
  setup(t, { expose: e, emit: a }) {
    const n = t, o = a, r = n.notifier || Me, {
      visible: i,
      currentExpression: l,
      dataPreview: u,
      fieldOptions: s,
      handleOk: d,
      handleCancel: m,
      exposedApi: T
    } = Yp({
      emit: o,
      notifier: r
    });
    return e({
      open: T.open,
      updateFieldOptions: T.updateFieldOptions
    }), (L, C) => (c(), y(Hp, {
      visible: p(i),
      "onUpdate:visible": C[0] || (C[0] = (x) => Y(i) ? i.value = x : null),
      modelValue: p(l),
      "onUpdate:modelValue": C[1] || (C[1] = (x) => Y(l) ? l.value = x : null),
      title: "高级表达式构建器",
      width: 1200,
      fields: p(s),
      "data-preview": p(u),
      notifier: p(r),
      onSave: p(d),
      onCancel: p(m)
    }, null, 8, ["visible", "modelValue", "fields", "data-preview", "notifier", "onSave", "onCancel"]));
  }
});
export {
  Zp as _,
  Op as a,
  Hp as b,
  Me as d,
  Qp as n
};
//# sourceMappingURL=AviatorExpressionBuilderLegacyModal.vue_vue_type_script_setup_true_lang-CjWgNhEl.js.map
