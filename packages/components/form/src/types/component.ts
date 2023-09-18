import {
  InputNumberProps,
  InputProps,
  RadioButtonProps,
  RadioProps,
  CheckboxProps,
  AutocompleteProps,
  CascaderProps,
  DatePickerProps,
  SwitchProps,
  SliderProps,
  RateProps,
  DividerProps
} from 'element-plus';
type OptionsItem = {
  label: string;
  value: any;
};
type SelectProps = {
  options: OptionsItem[];
};

export type ComponentTypeRecord = {
  Input: InputProps;
  InputGroup: InputProps;
  InputPassword: InputProps;
  InputSearch: InputProps;
  InputTextArea: InputProps;
  InputNumber: InputNumberProps;
  InputCountDown: Recordable;
  Select: SelectProps;
  ApiSelect: Recordable;
  TreeSelect: Recordable;
  ApiTree: Recordable;
  ApiTreeSelect: Recordable;
  ApiRadioGroup: Recordable;
  RadioButtonGroup: RadioButtonProps;
  RadioGroup: RadioProps;
  Checkbox: CheckboxProps;
  CheckboxGroup: CheckboxProps;
  AutoComplete: AutocompleteProps;
  ApiCascader: any;
  Cascader: CascaderProps;
  DatePicker: DatePickerProps;
  Switch: SwitchProps;
  StrengthMeter: any;
  Upload: any;
  IconPicker: any;
  Render: any;
  Slider: SliderProps;
  Rate: RateProps;
  Divider: DividerProps;
};
export type ComponentType =
  | 'Input'
  | 'InputGroup'
  | 'InputPassword'
  | 'InputSearch'
  | 'InputTextArea'
  | 'InputNumber'
  | 'InputCountDown'
  | 'Select'
  | 'ApiSelect'
  | 'TreeSelect'
  | 'ApiTree'
  | 'ApiTreeSelect'
  | 'ApiRadioGroup'
  | 'RadioButtonGroup'
  | 'RadioGroup'
  | 'Checkbox'
  | 'CheckboxGroup'
  | 'AutoComplete'
  | 'ApiCascader'
  | 'Cascader'
  | 'DatePicker'
  | 'MonthPicker'
  | 'RangePicker'
  | 'WeekPicker'
  | 'TimePicker'
  | 'Switch'
  | 'StrengthMeter'
  | 'Upload'
  | 'IconPicker'
  | 'Render'
  | 'Slider'
  | 'Rate'
  | 'Divider';
