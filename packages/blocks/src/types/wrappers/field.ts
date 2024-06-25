import type { FieldWrapper, ValueOrFunction } from "@rafty/ui";

export type FieldWrapperProps = {
  label?: string;
  description?: string;
  primary?: boolean;
  unique?: boolean;
  required?: ValueOrFunction;
  disabled?: ValueOrFunction;
  readonly?: ValueOrFunction;
  hidden?: ValueOrFunction;
  orientation?: FieldWrapper["orientation"];
};
