import { Divider, divider } from "./divider";
import { EditableTextField } from "./editable-text";
import { EditableTextareaField } from "./editable-textarea";
import { Form, form } from "./form";
import { HeadingField, heading } from "./heading";
import { Image, image } from "./image";
import { Text, text } from "./text";
import { TextInput, textInput } from "./text-input";
import { TextareaField, textarea } from "./textarea";

export const plugin = {
  // "editable-text": EditableTextField,
  // "editable-textarea": EditableTextareaField,
  form: Form,
  "text-input": TextInput,
  textarea: TextareaField,
  divider: Divider,
  image: Image,
  text: Text,
  heading: HeadingField,
};

export const f = {
  textInput,
  textarea,
  form,
  divider,
  image,
  text,
  heading,
};
