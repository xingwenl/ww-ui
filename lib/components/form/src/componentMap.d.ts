import type { Component } from 'vue';
export type ComponentType = 'Input' | 'InputNumber' | 'Select' | 'Radio' | 'DatePicker' | 'Switch' | 'Checkbox' | 'ImageUpload' | 'FileUpload';
declare const componentMap: Map<ComponentType, {
    component: Component;
    options?: {
        valueKey?: string | undefined;
        eventKey?: string | undefined;
    } | undefined;
}>;
export { componentMap };
