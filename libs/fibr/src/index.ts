import { FieldProps } from "@fibr/react";
import {
  ArrayFields,
  BooleanFields,
  CommonField,
  DateField,
  DatetimeField,
  ObjectField,
  TextField,
} from "./fields";

export { FieldWrapper } from "./fields";
export default ({
  string: CommonField,
  number: CommonField,
  boolean: BooleanFields,
  array: ArrayFields,
  text: TextField,
  date: DateField,
  datetime: DatetimeField,
  object: ObjectField,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
} as Record<string, (props: FieldProps<any>) => JSX.Element>);
