import { VNode, RendererNode, RendererElement, Slots } from 'vue';
export declare function isFunction(val: unknown): val is Function;
/**
 * @description:  Get slot to prevent empty error
 */
export declare function getSlot(slots: Slots, slot?: string, data?: any): VNode<RendererNode, RendererElement, {
    [key: string]: any;
}>[] | null;
/**
 * extends slots
 * @param slots
 * @param excludeKeys
 */
export declare function extendSlots(slots: Slots, excludeKeys?: string[]): any;
