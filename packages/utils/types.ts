import { isArray, isObject, isString } from '@vue/shared';
import { isNil } from 'lodash-unified';

export { isArray, isFunction, isObject, isString, isDate, isPromise, isSymbol } from '@vue/shared';
export { isBoolean, isNumber } from '@vueuse/core';
export { isVNode } from 'vue';

export const isUndefined = (val: any): val is undefined => val === undefined;

export const isEmpty = (val: unknown) =>
  (!val && val !== 0) ||
  (isArray(val) && val.length === 0) ||
  (isObject(val) && !Object.keys(val).length);

export const isElement = (e: unknown): e is Element => {
  if (typeof Element === 'undefined') return false;
  return e instanceof Element;
};

export const isPropAbsent = (prop: unknown): prop is null | undefined => {
  return isNil(prop);
};

export const isStringNumber = (val: string): boolean => {
  if (!isString(val)) {
    return false;
  }
  return !Number.isNaN(Number(val));
};

const toString = Object.prototype.toString;

export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`;
}

export function isDef<T = unknown>(val?: T): val is T {
  return typeof val !== 'undefined';
}

export function isUnDef<T = unknown>(val?: T): val is T {
  return !isDef(val);
}

export function isNull(val: unknown): val is null {
  return val === null;
}

export function isNullAndUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) && isNull(val);
}

export function isNullOrUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) || isNull(val);
}

export function isRegExp(val: unknown): val is RegExp {
  return is(val, 'RegExp');
}

export function isWindow(val: any): val is Window {
  return typeof window !== 'undefined' && is(val, 'Window');
}

export function isMap(val: unknown): val is Map<any, any> {
  return is(val, 'Map');
}

export const isServer = typeof window === 'undefined';

export const isClient = !isServer;

export function isUrl(path: string): boolean {
  const reg =
    /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
  return reg.test(path);
}
