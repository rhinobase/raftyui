import { Checkbox } from "./checkbox";
import { CheckboxGroup } from "./checkbox-group";
import { ColorPicker } from "./color-picker";
import { DateField } from "./date";
import { DateRangeField } from "./date-range";
import { EditableNumber } from "./editable-number";
import { EditableText } from "./editable-text";
import { EditableTextarea } from "./editable-textarea";
import { Listbox } from "./listbox";
import { MultiListbox } from "./multi-listbox";
import { NumberField } from "./number";
import { ObjectField } from "./object";
import { PasswordField } from "./password";
import { PermissionField } from "./permission";
import { PinInput } from "./pin-input";
import { RadioGroup } from "./radio-group";
import { RangeSlider } from "./range-slider";
import { Rating } from "./rating";
import { ReferenceField } from "./reference";
import { SegmentedControl } from "./segmented-control";
import { Select } from "./select";
import { Slider } from "./slider";
import { StringField } from "./string";
import { Switch } from "./switch";
import { SwitchGroup } from "./switch-group";
import { TagField } from "./tag-field";
import { Textarea } from "./textarea";
import type { FieldProps } from "./types";

export const blocks: Record<FieldProps["type"], () => JSX.Element> = {
  checkbox: Checkbox,
  checkboxGroup: CheckboxGroup,
  object: ObjectField,
  date: DateField,
  dateRange: DateRangeField,
  number: NumberField,
  password: PasswordField,
  radio: RadioGroup,
  rangeSlider: RangeSlider,
  select: Select,
  slider: Slider,
  string: StringField,
  switch: Switch,
  switchGroup: SwitchGroup,
  textarea: Textarea,
  permission: PermissionField,
  reference: ReferenceField,
  tagField: TagField,
  pinInput: PinInput,
  rating: Rating,
  colorPicker: ColorPicker,
  segmentedControl: SegmentedControl,
  editableText: EditableText,
  editableTextarea: EditableTextarea,
  editableNumber: EditableNumber,
  multiListbox: MultiListbox,
  listbox: Listbox,
};
