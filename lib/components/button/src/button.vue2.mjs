import { defineComponent, openBlock, createElementBlock, createTextVNode, toDisplayString, createElementVNode, renderSlot } from "vue";
const _hoisted_1 = { class: "ww-button" };
const __default__ = defineComponent({
  name: "WButton"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const test = "et";
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createTextVNode(toDisplayString(test) + " "),
        createElementVNode("button", null, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
