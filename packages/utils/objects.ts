import { get, set } from 'lodash-unified';
import type { Entries } from 'type-fest';
import type { Arrayable } from '.';
import { isObject } from '.';
import { unref } from 'vue';

import { hasOwn } from '@vue/shared';

export const keysOf = <T extends {}>(arr: T) => Object.keys(arr) as Array<keyof T>;
export const entriesOf = <T extends {}>(arr: T) => Object.entries(arr) as Entries<T>;
export { hasOwn };

export const getProp = <T = any>(
  obj: Record<string, any>,
  path: Arrayable<string>,
  defaultValue?: any
): { value: T } => {
  return {
    get value() {
      return get(obj, path, defaultValue);
    },
    set value(val: any) {
      set(obj, path, val);
    }
  };
};

export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  for (key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key]);
  }
  return src;
}

// dynamic use hook props
export function getDynamicProps<T extends Recordable, U>(props: T): Partial<U> {
  const ret: Recordable = {};

  Object.keys(props).map((key) => {
    ret[key] = unref((props as Recordable)[key]);
  });

  return ret as Partial<U>;
}
