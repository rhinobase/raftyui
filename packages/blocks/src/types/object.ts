import type { DefaultValue } from "./defaultValue";
import type { FieldProps } from "./fieldProps";
import type { Prettify } from "./utils";

export interface ObjectProps<
  T extends Record<string, FieldProps> = Record<string, FieldProps>,
> {
  type: "object";
  blocks: T;
  defaultValue?: Prettify<DefaultValue<T>>;
}
