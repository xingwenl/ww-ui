import { FormProps } from './../types/form'
export function useFormValues({
  props,
  formModel
}: {
  props: FormProps
  formModel: Record<string, any>
}) {
  function initDefault() {
    props.schemas?.forEach((item) => {
      const { defaultValue } = item
      if (typeof defaultValue != undefined && typeof defaultValue != null) {
        formModel[item.field] = defaultValue
      }
    })
  }
  return {
    initDefault
  }
}
