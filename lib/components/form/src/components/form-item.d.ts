import { DefineComponent, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes, PropType } from 'vue';
import { FormSchema, FormProps } from '../types/form';
declare const _default: DefineComponent<{
    schema: {
        type: PropType<FormSchema>;
        default: () => {};
    };
    modelValue: {
        type: (StringConstructor | ObjectConstructor)[];
        default: string;
    };
    formProps: {
        type: PropType<FormProps>;
        default: () => {};
    };
    formModel: {
        type: ObjectConstructor;
        default: () => {};
    };
}, () => false | JSX.Element, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    schema: {
        type: PropType<FormSchema>;
        default: () => {};
    };
    modelValue: {
        type: (StringConstructor | ObjectConstructor)[];
        default: string;
    };
    formProps: {
        type: PropType<FormProps>;
        default: () => {};
    };
    formModel: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | Record<string, any>;
    schema: FormSchema;
    formProps: FormProps;
    formModel: Record<string, any>;
}, {}>;
export default _default;
