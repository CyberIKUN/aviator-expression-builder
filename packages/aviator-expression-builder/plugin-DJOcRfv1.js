import { a as i, b as c, _ as r } from "./AviatorExpressionBuilderLegacyModal.vue_vue_type_script_setup_true_lang-CjWgNhEl.js";
import "@arco-design/web-vue";
const s = [
  { key: "builder", defaultName: "AviatorExpressionBuilder", component: i },
  { key: "modal", defaultName: "AviatorExpressionBuilderModal", component: c }
], l = {
  key: "legacyModal",
  defaultName: "AviatorExpressionBuilderLegacyModal",
  component: r
};
function m(n, e) {
  return e ? `${e}${n}` : n;
}
function u(n, e) {
  var o;
  const a = (o = e.componentNames) == null ? void 0 : o[n.key];
  return m(a || n.defaultName, e.prefix);
}
function t(n, e, a) {
  const o = u(e, a);
  n.component(o) || n.component(o, e.component);
}
function f(n, e = {}) {
  const { includeLegacy: a = !1 } = e;
  s.forEach((o) => {
    t(n, o, e);
  }), a && t(n, l, e);
}
const N = {
  install(n, e) {
    f(n, e);
  }
};
export {
  N as A,
  f as i
};
//# sourceMappingURL=plugin-DJOcRfv1.js.map
