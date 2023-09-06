"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const elementPlus = require("element-plus");
const input = require("./input.js");
const __default__ = vue.defineComponent({
  name: "WInput"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: input.inputProps,
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElInput), vue.mergeProps(_ctx.$attrs, { placeholder: _ctx.placeholder }), null, 16, ["placeholder"]);
    };
  }
});
exports.default = _sfc_main;
