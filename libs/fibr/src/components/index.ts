import { CheckboxField, checkbox } from "./checkbox";
import { EditableTextField, editableText } from "./editable-text";
import { EditableTextareaField, editableTextarea } from "./editable-textarea";
import { EmailField, email } from "./email";
import { Form, form } from "./form";
import { PasswordField, password } from "./password";
import { RadioGroupField, radioGroup } from "./radio-group";
import { SwitchField, switchField } from "./switch";
import { SwitchGroupField } from "./switch-group";
import { TextField, text } from "./text";
import { TextareaField, textarea } from "./textarea";
import { url, UrlField } from "./url";

export const plugin = [
  {
    password: PasswordField,
    "editable-text": EditableTextField,
    form: Form,
    text: TextField,
    textarea: TextareaField,
  },
];

export const f = {
  password,
  editableText,
  text,
  textarea,
  form,
};
