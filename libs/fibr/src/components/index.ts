import { Divider, divider } from "./divider";
import { Form, form } from "./form";
import { HeadingField, heading } from "./heading";
import { Image, image } from "./image";
import { Text, text } from "./text";
import { TextInput, textInput } from "./text-input";
import { TextareaField, textarea } from "./textarea";

export type { Divider } from "./divider";
export type { Form } from "./form";
export type { HeadingField } from "./heading";
export type { Image } from "./image";
export type { Text } from "./text";
export type { TextInput } from "./text-input";
export type { TextareaField } from "./textarea";

export const plugin = {
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
