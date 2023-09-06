"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const elementPlus = require("element-plus");
const formItem = require("./components/form-item.js");
const useFormValues = require("./hooks/useFormValues.js");
const __default__ = vue.defineComponent({
  name: "CoForm",
  inheritAttrs: true
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: {
    schemas: {},
    model: {},
    labelWidth: {},
    labelAlign: {},
    baseColProps: {},
    gutter: { default: 16 },
    formRef: {}
  },
  emits: ["update:model"],
  setup(__props, { expose: __expose, emit }) {
    const props = __props;
    const formModel = vue.reactive({});
    const formRef = vue.ref();
    const attrs = vue.useAttrs();
    __expose({
      getFieldsValue() {
        return formModel;
      },
      formRef
    });
    const { initDefault } = useFormValues.useFormValues({ props, formModel });
    const getProps = vue.computed(() => ({
      ...props
    }));
    const bindFormProps = vue.computed(() => ({
      ...props,
      ...attrs
    }));
    function setFieldsValue(values) {
      if (!values)
        return;
      Object.keys(values).forEach((key) => {
        formModel[key] = values[key];
      });
    }
    vue.watch(
      () => props.schemas,
      () => {
        initDefault();
      },
      {
        immediate: true
      }
    );
    vue.watch(
      () => props.model,
      () => {
        setFieldsValue(props.model);
      },
      {
        immediate: true
      }
    );
    vue.watch(
      () => formModel,
      () => {
        emit("update:model", formModel);
      },
      {
        deep: true
      }
    );
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElForm), vue.mergeProps(bindFormProps.value, {
        ref_key: "formRef",
        ref: formRef,
        model: formModel
      }), {
        default: vue.withCtx(() => [
          vue.createVNode(vue.unref(elementPlus.ElRow), { gutter: _ctx.gutter }, {
            default: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "formHeader"),
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.schemas, (schema) => {
                return vue.openBlock(), vue.createBlock(vue.unref(formItem.default), {
                  key: schema.field,
                  modelValue: formModel[schema.field],
                  "onUpdate:modelValue": ($event) => formModel[schema.field] = $event,
                  "form-model": formModel,
                  schema,
                  formProps: getProps.value
                }, vue.createSlots({ _: 2 }, [
                  vue.renderList(Object.keys(_ctx.$slots), (item) => {
                    return {
                      name: item,
                      fn: vue.withCtx((data) => [
                        vue.renderSlot(_ctx.$slots, item, vue.normalizeProps(vue.guardReactiveProps(data || {})))
                      ])
                    };
                  })
                ]), 1032, ["modelValue", "onUpdate:modelValue", "form-model", "schema", "formProps"]);
              }), 128)),
              vue.renderSlot(_ctx.$slots, "formFooter")
            ]),
            _: 3
          }, 8, ["gutter"])
        ]),
        _: 3
      }, 16, ["model"]);
    };
  }
});
exports.default = _sfc_main;
