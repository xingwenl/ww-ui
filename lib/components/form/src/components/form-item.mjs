import { defineComponent, withDirectives, createVNode, vShow, isVNode, mergeProps } from "vue";
import { componentMap } from "../componentMap.mjs";
import { ElCol, ElFormItem } from "element-plus";
import { getSlot } from "../../../../utils/helper/tsxHelper.mjs";
import isFunction from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isFunction.mjs";
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const WFormItem = /* @__PURE__ */ defineComponent({
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
      const CompInstance = componentMap.get(component);
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
      return createVNode(Comp, mergeProps(componentProps, value, on), null);
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
      if (isFunction(ifShow)) {
        isIfShow = ifShow({
          field,
          model: props.formModel
        });
      }
      if (isFunction(show)) {
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
      return slot ? getSlot(slots, slot, {
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
      return ifShow && withDirectives(createVNode(ElCol, getColProps(), {
        default: () => [createVNode(ElFormItem, getItemProps(), _isSlot(_slot = getContent()) ? _slot : {
          default: () => [_slot]
        })]
      }), [[vShow, show]]);
    };
  }
});
export {
  WFormItem as default
};
