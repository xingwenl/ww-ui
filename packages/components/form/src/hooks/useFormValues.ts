import { ComputedRef, ref, unref } from 'vue';
import { FormProps } from './../types/form';
import { isNullOrUnDef, isArray, isFunction, isObject, isString } from 'ww-ui/utils';
import { set } from 'lodash-es';

export function useFormValues({
  props,
  formModel,
  getProps
}: {
  props: FormProps;
  formModel: Record<string, any>;
  getProps: ComputedRef<FormProps>;
}) {
  const defaultValueRef = ref<any>();
  function initDefault() {
    const obj: Recordable = {};
    props.schemas?.forEach((item) => {
      const { defaultValue } = item;
      if (isNullOrUnDef(defaultValue)) {
        formModel[item.field] = defaultValue;
        obj[item.field] = defaultValue;
      }
    });
    defaultValueRef.value = obj;
  }
  /**
   * @desription deconstruct array-link key. This method will mutate the target.
   */
  function tryDeconstructArray(key: string, value: any, target: Recordable) {
    const pattern = /^\[(.+)\]$/;
    if (pattern.test(key)) {
      const match = key.match(pattern);
      if (match && match[1]) {
        const keys = match[1].split(',');
        value = Array.isArray(value) ? value : [value];
        keys.forEach((k, index) => {
          set(target, k.trim(), value[index]);
        });
        return true;
      }
    }
  }
  /**
   * @desription deconstruct object-link key. This method will mutate the target.
   */
  function tryDeconstructObject(key: string, value: any, target: Recordable) {
    const pattern = /^\{(.+)\}$/;
    if (pattern.test(key)) {
      const match = key.match(pattern);
      if (match && match[1]) {
        const keys = match[1].split(',');
        value = isObject(value) ? value : {};
        keys.forEach((k) => {
          set(target, k.trim(), value[k.trim()]);
        });
        return true;
      }
    }
  }
  /**
   * @description: Processing time interval parameters
   */
  function handleRangeTimeValue(values: Recordable) {
    // const fieldMapToTime = unref(getProps).fieldMapToTime

    // if (!fieldMapToTime || !Array.isArray(fieldMapToTime)) {
    //   return values
    // }

    // for (const [field, [startTimeKey, endTimeKey], format = 'YYYY-MM-DD'] of fieldMapToTime) {
    //   if (!field || !startTimeKey || !endTimeKey || !values[field]) {
    //     continue
    //   }

    //   const [startTime, endTime]: string[] = values[field]

    //   values[startTimeKey] = dateUtil(startTime).format(format)
    //   values[endTimeKey] = dateUtil(endTime).format(format)
    //   Reflect.deleteProperty(values, field)
    // }

    return values;
  }
  // Processing form values
  function handleFormValues(values: Recordable) {
    if (!isObject(values)) {
      return {};
    }
    const res: Recordable = {};
    for (const item of Object.entries(values)) {
      let [, value] = item;
      const [key] = item;
      if (!key || (isArray(value) && value.length === 0) || isFunction(value)) {
        continue;
      }
      const transformDateFunc = unref(getProps).transformDateFunc;
      if (isObject(value)) {
        value = transformDateFunc?.(value);
      }

      if (isArray(value) && value[0]?.format && value[1]?.format) {
        value = value.map((item) => transformDateFunc?.(item));
      }
      // Remove spaces
      if (isString(value)) {
        value = value.trim();
      }
      if (!tryDeconstructArray(key, value, res) && !tryDeconstructObject(key, value, res)) {
        // 没有解构成功的，按原样赋值
        set(res, key, value);
      }
    }
    return handleRangeTimeValue(res);
  }
  return {
    initDefault,
    handleFormValues,
    defaultValueRef
  };
}
