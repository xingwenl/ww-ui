"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const componentMap = require("../componentMap.js");
const elementPlus = require("element-plus");
const tsxHelper = require("../../../../utils/helper/tsxHelper.js");
const isFunction = require("../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isFunction.js");
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !vue.isVNode(s);
}
const WFormItem = /* @__PURE__ */ vue.defineComponent({
  name: "WFormItem",
  props: {
    schema: {
      type: Object,
      default: () => ({})
    },
    modelValue: {
      type: [String, Object],
      default: ""
    },
    formProps: {
      type: Object,
      default: () => ({})
    },
    formModel: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(props, {
    emit,
    slots
  }) {
    function renderComponent() {
      var _a, _b;
      const {
        component,
        componentProps
      } = props.schema;
      const CompInstance = componentMap.componentMap.get(component);
      const Comp = CompInstance == null ? void 0 : CompInstance.component;
      const eventKey = ((_a = CompInstance == null ? void 0 : CompInstance.options) == null ? void 0 : _a.eventKey) || "onChange";
      const valueKey = ((_b = CompInstance == null ? void 0 : CompInstance.options) == null ? void 0 : _b.valueKey) || "modelValue";
      const on = {
        [eventKey]: (e) => {
          const target = e ? e.target : null;
          const value2 = target ? target.value : e;
          emit("update:modelValue", value2);
        }
      };
      const value = {
        [valueKey]: props.modelValue
      };
      return vue.createVNode(Comp, vue.mergeProps(componentProps, value, on), null);
    }
    function getColProps() {
      const baseColProps = props.formProps.baseColProps || {
        span: 24
      };
      const {
        colProps = {}
      } = props.schema;
      return {
        ...baseColProps,
        ...colProps
      };
    }
    function getItemProps() {
      const {
        itemProps = {},
        label,
        field
      } = props.schema;
      return {
        ...itemProps,
        label,
        field,
        prop: field
      };
    }
    function getShow() {
      const {
        ifShow = true,
        field,
        show = true
      } = props.schema;
      let isIfShow = ifShow;
      let isShow = show;
      if (isFunction.default(ifShow)) {
        isIfShow = ifShow({
          field,
          model: props.formModel
        });
      }
      if (isFunction.default(show)) {
        isShow = show({
          field,
          model: props.formModel
        });
      }
      return {
        ifShow: isIfShow,
        show: isShow
      };
    }
    function getContent() {
      const {
        slot,
        field
      } = props.schema;
      return slot ? tsxHelper.getSlot(slots, slot, {
        field,
        model: props.formModel
      }) : renderComponent();
    }
    return () => {
      let _slot;
      const {
        ifShow,
        show
      } = getShow();
      return ifShow && vue.withDirectives(vue.createVNode(elementPlus.ElCol, getColProps(), {
        default: () => [vue.createVNode(elementPlus.ElFormItem, getItemProps(), _isSlot(_slot = getContent()) ? _slot : {
          default: () => [_slot]
        })]
      }), [[vue.vShow, show]]);
    };
  }
});
exports.default = WFormItem;
