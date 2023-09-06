import { FormSchema } from './types/form';
import { DefineComponent, PropType, Ref, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _default: __VLS_WithTemplateSlots<DefineComponent<{
    gutter: {
        type: PropType<number>;
        default: number;
    };
    labelWidth: {
        type: PropType<string | number>;
    };
    schemas: {
        type: PropType<FormSchema[]>;
    };
    model: {
        type: PropType<Recordable<any>>;
    };
    labelAlign: {
        type: PropType<"right" | "left">;
    };
    baseColProps: {
        type: PropType<any>;
    };
    formRef: {
        type: PropType<any>;
    };
}, {
    getFieldsValue(): Record<string, any>;
    formRef: Ref<any>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "update:model"[], "update:model", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    gutter: {
        type: PropType<number>;
        default: number;
    };
    labelWidth: {
        type: PropType<string | number>;
    };
    schemas: {
        type: PropType<FormSchema[]>;
    };
    model: {
        type: PropType<Recordable<any>>;
    };
    labelAlign: {
        type: PropType<"right" | "left">;
    };
    baseColProps: {
        type: PropType<any>;
    };
    formRef: {
        type: PropType<any>;
    };
}>> & {
    "onUpdate:model"?: ((...args: any[]) => any) | undefined;
}, {
    gutter: number;
}, {}>, Partial<Record<string, (_: any) => any>> & {
    formHeader?(_: {}): any;
    formFooter?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
