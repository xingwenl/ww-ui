import type { Component } from 'vue';
import { ElInput, ElInputNumber, ElDatePicker, ElSwitch, ElSelect, ElCheckbox } from 'element-plus';
import type { ComponentType } from './types/index';

// import Select from '@/components/co-select/index.vue'
// import Radio from '@/components/co-radio/index.vue'
// import Checkbox from '@/components/co-checkbox/index.vue'
// import CoImageUpload from '@/components/co-image-upload/index.vue'
// import CoFileUpload from '@/components/co-file-upload/index.vue'

// export type ComponentType =
//   | 'Input'
//   | 'InputNumber'
//   | 'Select'
//   | 'Radio'
//   | 'DatePicker'
//   | 'Switch'
//   | 'Checkbox'
//   | 'ImageUpload'
//   | 'FileUpload'
//   | 'Divider'

const componentMap = new Map<
  ComponentType,
  { component: Component; options?: { valueKey?: string; eventKey?: string } }
>();

componentMap.set('Input', { component: ElInput, options: { eventKey: 'onInput' } });
componentMap.set('InputNumber', { component: ElInputNumber });
componentMap.set('Select', { component: ElSelect });
componentMap.set('DatePicker', { component: ElDatePicker });
componentMap.set('Switch', { component: ElSwitch });
componentMap.set('Checkbox', { component: ElCheckbox });
// componentMap.set('ImageUpload', {
//   component: CoImageUpload,
//   options: { valueKey: 'files', eventKey: 'onUpdate:files' }
// })
// componentMap.set('FileUpload', {
//   component: CoFileUpload,
//   options: { valueKey: 'files', eventKey: 'onUpdate:files' }
// })

export { componentMap };
