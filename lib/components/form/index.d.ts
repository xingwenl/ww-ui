import { ComponentInternalInstance, VNodeRef, VNode, RendererNode, RendererElement, Slot, ComponentPublicInstance, ComponentOptionsBase, ExtractPropTypes, PropType, Ref, ComponentOptionsMixin, DebuggerEvent, nextTick, WatchOptions, WatchStopHandle, ShallowUnwrapRef, ComponentCustomProperties, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import { SFCWithInstall } from '../../utils/vue/typescript';
import type { FormSchema, FormProps } from "./src/types/form";
export declare const WForm: SFCWithInstall<{
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: {
            gutter?: number | undefined;
            style?: unknown;
            class?: unknown;
            key?: string | number | symbol | undefined;
            ref?: VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            onVnodeBeforeMount?: ((vnode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeMounted?: ((vnode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUpdate?: ((vnode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUpdated?: ((vnode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUnmount?: ((vnode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUnmounted?: ((vnode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            readonly labelWidth?: string | number | undefined;
            readonly schemas?: FormSchema[] | undefined;
            readonly model?: Recordable<any> | undefined;
            readonly labelAlign?: "right" | "left" | undefined;
            readonly baseColProps?: any;
            readonly formRef?: any;
            "onUpdate:model"?: ((...args: any[]) => any) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot<any> | undefined;
        }>;
        $root: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "update:model", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<{
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
            getFieldsValue(): Record<string, any>;
            formRef: Ref<any>;
        }, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "update:model"[], string, {
            gutter: number;
        }, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<{
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
    } & ShallowUnwrapRef<{
        getFieldsValue(): Record<string, any>;
        formRef: Ref<any>;
    }> & {} & ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<{
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
    getFieldsValue(): Record<string, any>;
    formRef: Ref<any>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "update:model"[], "update:model", {
    gutter: number;
}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: Partial<Record<string, (_: any) => any>> & {
        formHeader?(_: {}): any;
        formFooter?(_: {}): any;
    };
})> & Record<string, any>;
export default WForm;
export { FormSchema, FormProps };
