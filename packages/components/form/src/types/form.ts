import { FormInstance } from 'element-plus';
import { ComponentType } from './index';
import { Ref } from 'vue';

export interface RenderCallbackParams {
  model: Recordable;
  field: string;
}

export interface FormProps {
  schemas?: FormSchema[];
  model?: Recordable;
  labelWidth?: number | string;
  labelAlign?: 'left' | 'right';
  baseColProps?: any;
  gutter?: number;
  formRef?: any;
  transformDateFunc?: Fn;
  // rules?: any
}

export interface FormSchema {
  field: string;
  label: string;
  labelWidth?: string | number;
  component: ComponentType;
  componentProps?: any;
  ifShow?: boolean | ((renderCallbackParams: RenderCallbackParams) => boolean);
  show?: boolean | ((renderCallbackParams: RenderCallbackParams) => boolean);
  /** 包裹 FormItem Col的props */
  colProps?: any;
  defaultValue?: any;
  /** FormItem的props */
  itemProps?: any;
  slot?: string;
}

export interface FormActionType {
  setFieldsValue: <T>(values: T) => Promise<void>;
  resetFields: () => Promise<void>;
  getFieldsValue: () => Recordable;
  updateSchema: (data: Partial<FormSchema> | Partial<FormSchema>[]) => Promise<void>;
  resetSchema: (data: Partial<FormSchema> | Partial<FormSchema>[]) => Promise<void>;
  getFormElRef: () => Promise<Ref<FormInstance>>;
  setProps: (formProps: Partial<FormProps>) => Promise<void>;
}
