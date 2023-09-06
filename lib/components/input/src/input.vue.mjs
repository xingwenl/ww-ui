import { defineComponent, openBlock, createBlock, unref, mergeProps } from "vue";
import { ElInput } from "element-plus";
import { inputProps } from "./input.mjs";
const __default__ = defineComponent({
  name: "WInput"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: inputProps,
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElInput), mergeProps(_ctx.$attrs, { placeholder: _ctx.placeholder }), null, 16, ["placeholder"]);
    };
  }
});
export {
  _sfc_main as default
};
