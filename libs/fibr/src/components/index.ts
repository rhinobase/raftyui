import { CheckboxField, checkbox } from "./checkbox";
import { CheckboxGroupField, checkboxGroup } from "./checkbox-group";
import { DividerField, divider } from "./divider";
import { EditableTextField, editableText } from "./editable-text";
import { EditableTextareaField, editableTextarea } from "./editable-textarea";
import { EmailField, email } from "./email";
import { Form, form } from "./form";
import { ImageField, image } from "./image";
import { PasswordField, password } from "./password";
import { PercentField, percent } from "./percent";
import { RadioGroupField, radioGroup } from "./radio-group";
import { RangeSliderField, rangeSlider } from "./range-slider";
import { SliderField, slider } from "./slider";
import { StringField, string } from "./string";
import { SwitchField, switchField } from "./switch";
import { SwitchGroupField, switchGroup } from "./switch-group";
import { TextField, text } from "./text";
import { TextareaField, textarea } from "./textarea";
import { url, UrlField } from "./url";

export const plugin = [
  {
    password: PasswordField,
    "editable-text": EditableTextField,
    "editable-textarea": EditableTextareaField,
    checkbox: CheckboxField,
    form: Form,
    string: StringField,
    textarea: TextareaField,
    url: UrlField,
    email: EmailField,
    switch: SwitchField,
    "checkbox-group": CheckboxGroupField,
    "radio-group": RadioGroupField,
    "switch-group": SwitchGroupField,
    divider: DividerField,
    image: ImageField,
    slider: SliderField,
    "range-slider": RangeSliderField,
    percent: PercentField,
    text: TextField,
  },
];

export const f = {
  password,
  editableText,
  editableTextarea,
  string,
  textarea,
  form,
  url,
  email,
  switchField,
  switchGroup,
  radioGroup,
  checkbox,
  checkboxGroup,
  divider,
  image,
  slider,
  rangeSlider,
  percent,
  text,
};
