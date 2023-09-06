import type { Entries } from 'type-fest';
import type { Arrayable } from '.';
export declare const keysOf: <T extends {}>(arr: T) => (keyof T)[];
export declare const entriesOf: <T extends {}>(arr: T) => Entries<T>;
export { hasOwn } from '@vue/shared';
export declare const getProp: <T = any>(obj: Record<string, any>, path: Arrayable<string>, defaultValue?: any) => {
    value: T;
};
