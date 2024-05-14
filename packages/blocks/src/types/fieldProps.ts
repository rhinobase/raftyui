import type { CheckboxProps } from "./checkbox";
import type { CheckboxGroupProps } from "./checkboxGroup";
import type { ColorPickerProps } from "./colorPicker";
import type { CustomFieldProps } from "./custom";
import type { DateFieldProps } from "./date";
import type { NumberProps } from "./number";
import type { ObjectProps } from "./object";
import type { PasswordProps } from "./password";
import type { PermissionFieldProps } from "./permission";
import type { PinProps } from "./pin";
import type { RadioGroupProps } from "./radio";
import type { RangeSliderProps } from "./rangeSlider";
import type { RatingProps } from "./rating";
import type { ReferenceFieldProps } from "./reference";
import type { SelectProps } from "./select";
import type { SliderProps } from "./slider";
import type { StringProps } from "./string";
import type { SwitchProps } from "./switch";
import type { SwitchGroupProps } from "./switchGroup";
import type { TagFieldProps } from "./tagField";
import type { TextareaProps } from "./textarea";
import type { GeneralWrapperProps, InputWrapperProps } from "./wrappers";

export type FieldProps =
  | GeneralWrapperProps<CheckboxProps>
  | GeneralWrapperProps<CheckboxGroupProps>
  | GeneralWrapperProps<DateFieldProps & InputWrapperProps>
  | ObjectProps
  | GeneralWrapperProps<NumberProps & InputWrapperProps>
  | GeneralWrapperProps<PasswordProps & InputWrapperProps>
  | GeneralWrapperProps<RadioGroupProps>
  | GeneralWrapperProps<RangeSliderProps>
  | GeneralWrapperProps<SelectProps>
  | GeneralWrapperProps<SliderProps>
  | GeneralWrapperProps<StringProps & InputWrapperProps>
  | GeneralWrapperProps<SwitchProps>
  | GeneralWrapperProps<SwitchGroupProps>
  | GeneralWrapperProps<TextareaProps>
  | GeneralWrapperProps<PermissionFieldProps>
  | GeneralWrapperProps<ReferenceFieldProps>
  | GeneralWrapperProps<TagFieldProps>
  | GeneralWrapperProps<PinProps>
  | GeneralWrapperProps<RatingProps>
  | GeneralWrapperProps<ColorPickerProps>
  | CustomFieldProps;

export type FieldPropsMap = {
  [K in FieldProps["type"]]: Extract<FieldProps, { type: K }>;
};
