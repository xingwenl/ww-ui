<template>
  <el-form v-bind="bindFormProps" ref="formElRef" :model="formModel">
    <el-row :gutter="gutter">
      <slot name="formHeader" />
      <template v-for="schema in getSchema" :key="schema.field">
        <WFormItem
          v-model="formModel[schema.field]"
          :form-model="formModel"
          :schema="schema"
          :formProps="getProps"
        >
          <template #[item]="data" v-for="item in Object.keys($slots)">
            <slot :name="item" v-bind="data || {}"></slot>
          </template>
        </WFormItem>
      </template>
      <slot name="formFooter" />
    </el-row>
  </el-form>
</template>
<script lang="ts" setup>
import { computed, reactive, watch, ref, useAttrs, unref } from 'vue';
import type { Ref } from 'vue';
import { ElForm, ElRow } from 'element-plus';
import type { FormInstance } from 'element-plus';
import WFormItem from './components/form-item';
import { FormProps, FormSchema } from './types/form';
import { useFormValues } from './hooks/useFormValues';
import { useFormEvents } from './hooks/useFormEvents';
import { dateItemType } from './helper';
import { dateUtil, deepMerge } from 'ww-ui/utils';

const props = withDefaults(defineProps<FormProps>(), {
  gutter: 16,
  transformDateFunc: (date: any) => {
    return date?.format?.('YYYY-MM-DD HH:mm:ss') ?? date;
  }
});
const emit = defineEmits(['update:model', 'reset']);
const formModel = reactive<Record<string, any>>({});
const formElRef = ref<FormInstance>();
const schemaRef = ref<FormSchema[] | null>(null);
const attrs = useAttrs();
const propsRef = ref<Partial<FormProps>>({});

defineOptions({
  name: 'WForm',
  inheritAttrs: true
});
const getProps = computed(() => ({
  ...props,
  ...propsRef.value
}));
const bindFormProps = computed(() => ({
  ...props,
  ...attrs
}));

const getSchema = computed((): FormSchema[] => {
  const schemas: FormSchema[] = unref(schemaRef) || (unref(getProps).schemas as any);
  for (const schema of schemas) {
    const { defaultValue, component } = schema;
    // handle date type
    if (defaultValue && dateItemType.includes(component)) {
      if (!Array.isArray(defaultValue)) {
        schema.defaultValue = dateUtil(defaultValue);
      } else {
        const def: any[] = [];
        defaultValue.forEach((item) => {
          def.push(dateUtil(item));
        });
        schema.defaultValue = def;
      }
    }
  }
  return schemas as FormSchema[];
});
const { initDefault, defaultValueRef, handleFormValues } = useFormValues({
  props,
  formModel,
  getProps
});

const { setFieldsValue, getFieldsValue, updateSchema, resetSchema, resetFields } = useFormEvents({
  emit,
  getSchema,
  defaultValueRef,
  getProps,
  formModel,
  formElRef: formElRef as Ref<FormInstance>,
  schemaRef: schemaRef as Ref<FormSchema[]>,
  handleFormValues
});

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
  () => unref(getProps).model,
  () => {
    const { model } = unref(getProps);
    if (!model) return;
    setFieldsValue(model);
  },
  {
    immediate: true
  }
);
watch(
  () => formModel,
  () => {
    emit('update:model', formModel);
  },
  {
    deep: true
  }
);
async function setProps(formProps: Partial<FormProps>): Promise<void> {
  propsRef.value = deepMerge(unref(propsRef) || {}, formProps);
}

function getFormElRef() {
  return formElRef;
}

defineExpose({
  setFieldsValue,
  getFieldsValue,
  updateSchema,
  resetSchema,
  resetFields,
  getFormElRef,
  setProps
});
</script>
