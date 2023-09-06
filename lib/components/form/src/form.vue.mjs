import { defineComponent, reactive, ref, useAttrs, computed, watch, openBlock, createBlock, unref, mergeProps, withCtx, createVNode, renderSlot, createElementBlock, Fragment, renderList, createSlots, normalizeProps, guardReactiveProps } from "vue";
import { ElForm, ElRow } from "element-plus";
import WFormItem from "./components/form-item.mjs";
import { useFormValues } from "./hooks/useFormValues.mjs";
const __default__ = defineComponent({
  name: "CoForm",
  inheritAttrs: true
});
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const formModel = reactive({});
    const formRef = ref();
    const attrs = useAttrs();
    __expose({
      getFieldsValue() {
        return formModel;
      },
      formRef
    });
    const { initDefault } = useFormValues({ props, formModel });
    const getProps = computed(() => ({
      ...props
    }));
    const bindFormProps = computed(() => ({
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
    watch(
      () => props.schemas,
      () => {
        initDefault();
      },
      {
        immediate: true
      }
    );
    watch(
      () => props.model,
      () => {
        setFieldsValue(props.model);
      },
      {
        immediate: true
      }
    );
    watch(
      () => formModel,
      () => {
        emit("update:model", formModel);
      },
      {
        deep: true
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElForm), mergeProps(bindFormProps.value, {
        ref_key: "formRef",
        ref: formRef,
        model: formModel
      }), {
        default: withCtx(() => [
          createVNode(unref(ElRow), { gutter: _ctx.gutter }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "formHeader"),
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.schemas, (schema) => {
                return openBlock(), createBlock(unref(WFormItem), {
                  key: schema.field,
                  modelValue: formModel[schema.field],
                  "onUpdate:modelValue": ($event) => formModel[schema.field] = $event,
                  "form-model": formModel,
                  schema,
                  formProps: getProps.value
                }, createSlots({ _: 2 }, [
                  renderList(Object.keys(_ctx.$slots), (item) => {
                    return {
                      name: item,
                      fn: withCtx((data) => [
                        renderSlot(_ctx.$slots, item, normalizeProps(guardReactiveProps(data || {})))
                      ])
                    };
                  })
                ]), 1032, ["modelValue", "onUpdate:modelValue", "form-model", "schema", "formProps"]);
              }), 128)),
              renderSlot(_ctx.$slots, "formFooter")
            ]),
            _: 3
          }, 8, ["gutter"])
        ]),
        _: 3
      }, 16, ["model"]);
    };
  }
});
export {
  _sfc_main as default
};
