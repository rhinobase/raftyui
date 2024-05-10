import { Checkbox } from "./checkbox";
import { CheckboxGroup } from "./checkbox-group";
import { DateField } from "./date";
import { NumberField } from "./number";
import { ObjectField } from "./object";
import { PasswordField } from "./password";
import { PermissionField } from "./permission";
import { RadioGroup } from "./radio-group";
import { RangeSlider } from "./range-slider";
import { ReferenceField } from "./reference";
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
  "tag-field": TagField,
};
