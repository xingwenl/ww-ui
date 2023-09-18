declare type Recordable<T = any> = Record<string, T>;
declare interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}
declare type EmitType = (event: string, ...args: any[]) => void;

declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>;
declare type Nullable<T> = T | null;
declare type NonNullable<T> = T extends null | undefined ? never : T;

interface ImportMetaEnv extends ViteEnv {
  __: unknown;
}

declare interface ViteEnv {
  VITE_GLOB_APP_TITLE: string;
}
