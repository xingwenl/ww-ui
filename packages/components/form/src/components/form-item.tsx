import { PropType, defineComponent } from 'vue'
import { FormSchema, FormProps } from '../types/form'
import { componentMap } from '../componentMap'
import { ElCol, ElFormItem } from 'element-plus'
import { isFunction } from 'lodash-es'
import { getSlot } from 'ww-ui/utils/helper/tsxHelper'

export default defineComponent({
  name: 'WFormItem',
  props: {
    schema: {
      type: Object as PropType<FormSchema>,
      default: () => ({})
    },
    modelValue: {
      type: [String, Object],
      default: ''
    },
    formProps: {
      type: Object as PropType<FormProps>,
      default: () => ({})
    },
    formModel: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit, slots }) {
    function renderComponent() {
      const { component, componentProps } = props.schema
      const CompInstance = componentMap.get(component) //as ReturnType<typeof defineComponent>
      const Comp = CompInstance?.component as ReturnType<typeof defineComponent>
      const eventKey = CompInstance?.options?.eventKey || 'onChange'
      const valueKey = CompInstance?.options?.valueKey || 'modelValue'
      const on = {
        [eventKey]: (e: any) => {
          const target = e ? e.target : null
          const value = target ? target.value : e
          emit('update:modelValue', value)
        }
      }
      const value = {
        [valueKey]: props.modelValue
      }
      return <Comp {...componentProps} {...value} {...on} />
    }

    function getColProps() {
      const baseColProps = props.formProps.baseColProps || { span: 24 }

      const { colProps = {} } = props.schema

      return { ...baseColProps, ...colProps }
    }
    function getItemProps() {
      const { itemProps = {}, label, field } = props.schema
      return { ...itemProps, label, field, prop: field }
    }

    function getShow() {
      const { ifShow = true, field, show = true } = props.schema
      let isIfShow = ifShow
      let isShow = show
      if (isFunction(ifShow)) {
        isIfShow = ifShow({
          field,
          model: props.formModel
        })
      }
      if (isFunction(show)) {
        isShow = show({
          field,
          model: props.formModel
        })
      }
      return { ifShow: isIfShow, show: isShow }
    }
    function getContent() {
      const { slot, field } = props.schema
      return slot
        ? getSlot(slots, slot, {
            field,
            model: props.formModel
          })
        : renderComponent()
    }
    return () => {
      const { ifShow, show } = getShow()
      return (
        ifShow && (
          <ElCol {...getColProps()} v-show={show}>
            <ElFormItem {...getItemProps()}>{getContent()}</ElFormItem>
          </ElCol>
        )
      )
    }
  }
})
