import { PropType, ExtractPropTypes } from 'vue';
import type Input from './input.vue';
export declare const inputProps: {
    placeholder: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type InputProps = ExtractPropTypes<typeof inputProps>;
export type InputInstance = InstanceType<typeof Input>;
