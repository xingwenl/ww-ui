import { DynamicProps } from 'types/utils';
import { FormActionType, FormProps } from '../types/form';
import { nextTick, onUnmounted, ref, unref, watch } from 'vue';
import { error, getDynamicProps } from 'ww-ui/utils';

export declare type Props = Partial<DynamicProps<FormProps>>;

export function useForm(props?: Props) {
  const formRef = ref<Nullable<FormActionType>>(null);
  const loadedRef = ref<Nullable<boolean>>(false);

  async function getForm() {
    const form = unref(formRef);
    if (!form) {
      error('未获取表单实例，请确保在执行表单操作时已渲染该表单!');
    }
    await nextTick();
    return form as FormActionType;
  }

  function register(instance: FormActionType) {
    onUnmounted(() => {
      formRef.value = null;
      loadedRef.value = null;
    });
    if (unref(loadedRef) && instance === unref(formRef)) return;

    formRef.value = instance;
    loadedRef.value = true;

    watch(
      () => props,
      () => {
        props && instance.setProps(getDynamicProps(props));
      },
      {
        immediate: true,
        deep: true
      }
    );
  }

  const methods: FormActionType = {
    async resetFields() {
      const form = await getForm();
      form.resetFields();
    },
    async setFieldsValue(...args) {
      const form = await getForm();
      form.setFieldsValue(...args);
    },
    async setProps(...args) {
      const form = await getForm();
      form.setProps(...args);
    },
    async resetSchema(...args) {
      const form = await getForm();
      form.resetSchema(...args);
    },
    async updateSchema(...args) {
      const form = await getForm();
      form.updateSchema(...args);
    },
    async getFieldsValue(...args) {
      const form = await getForm();
      form.getFieldsValue(...args);
    },
    async getFormElRef() {
      const form = await getForm();
      return form.getFormElRef();
    }
  };

  return [register, methods];
}
