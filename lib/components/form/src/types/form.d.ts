import { ComponentType } from '../componentMap';
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
