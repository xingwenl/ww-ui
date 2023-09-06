<template>
  <el-form v-bind="bindFormProps" ref="formRef" :model="formModel">
    <el-row :gutter="gutter">
      <slot name="formHeader" />
      <template v-for="schema in schemas" :key="schema.field">
        <WFormItem
          v-model="formModel[schema.field]"
          :form-model="formModel"
          :schema="schema"
          :formProps="getProps">
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
import { computed, reactive, watch, ref, useAttrs } from 'vue'
import { ElForm, ElRow } from 'element-plus'
import WFormItem from './components/form-item'
import { FormProps } from './types/form'
import { useFormValues } from './hooks/useFormValues'
const props = withDefaults(defineProps<FormProps>(), {
  gutter: 16
})
const emit = defineEmits(['update:model'])
const formModel = reactive<Record<string, any>>({})
const formRef = ref()
const attrs = useAttrs()
defineOptions({
  name: 'CoForm',
  inheritAttrs: true
})
defineExpose({
  getFieldsValue() {
    return formModel
  },
  formRef: formRef
})
const { initDefault } = useFormValues({ props, formModel })

const getProps = computed(() => ({
  ...props
}))
const bindFormProps = computed(() => ({
  ...props,
  ...attrs
}))

function setFieldsValue(values?: Record<string, any>) {
  if (!values) return
  Object.keys(values).forEach((key) => {
    formModel[key] = values[key]
  })
}
watch(
  () => props.schemas,
  () => {
    initDefault()
  },
  {
    immediate: true
  }
)
watch(
  () => props.model,
  () => {
    setFieldsValue(props.model)
  },
  {
    immediate: true
  }
)
watch(
  () => formModel,
  () => {
    emit('update:model', formModel)
  },
  {
    deep: true
  }
)
</script>
