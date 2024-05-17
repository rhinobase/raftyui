import type { CalendarProps } from "./calendar";
import type { CheckboxProps } from "./checkbox";
import type { CheckboxGroupProps } from "./checkboxGroup";
import type { ColorPickerProps } from "./colorPicker";
import type { CustomFieldProps } from "./custom";
import type { DateFieldProps } from "./date";
import type { DateRangeFieldProps } from "./dateRange";
import type { EditableNumberProps } from "./editableNumber";
import type { EditableTextProps } from "./editableText";
import type { EditableTextareaProps } from "./editableTextarea";
import type { ListboxProps } from "./listbox";
import type { MultiListboxProps } from "./multiListbox";
import type { NumberProps } from "./number";
import type { ObjectProps } from "./object";
import type { PasswordProps } from "./password";
import type { PermissionFieldProps } from "./permission";
import type { PinInputProps } from "./pinInput";
import type { RadioGroupProps } from "./radio";
import type { RangeSliderProps } from "./rangeSlider";
import type { RatingProps } from "./rating";
import type { ReferenceFieldProps } from "./reference";
import type { SegmentedControlProps } from "./segmentedControl";
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
  | GeneralWrapperProps<DateRangeFieldProps & InputWrapperProps>
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
  | GeneralWrapperProps<PinInputProps>
  | GeneralWrapperProps<RatingProps>
  | GeneralWrapperProps<ColorPickerProps>
  | GeneralWrapperProps<SegmentedControlProps>
  | GeneralWrapperProps<EditableTextProps>
  | GeneralWrapperProps<EditableTextareaProps>
  | GeneralWrapperProps<MultiListboxProps>
  | GeneralWrapperProps<ListboxProps>
  | GeneralWrapperProps<EditableNumberProps>
  | GeneralWrapperProps<CalendarProps>
  | CustomFieldProps;

export type FieldPropsMap = {
  [K in FieldProps["type"]]: Extract<FieldProps, { type: K }>;
};
