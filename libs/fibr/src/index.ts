import { FieldProps } from "@fibr/react";
import {
  CommonField,
  TextField,
  DateField,
  DatetimeField,
  BooleanFields,
  ArrayFields,
  ObjectField,
} from "./fields";

export { FieldWrapper } from "./fields";
export default {
  string: CommonField,
  number: CommonField,
  boolean: BooleanFields,
  array: ArrayFields,
  text: TextField,
  date: DateField,
  datetime: DatetimeField,
  object: ObjectField,
} as Record<string, (props: FieldProps<any>) => JSX.Element>;
