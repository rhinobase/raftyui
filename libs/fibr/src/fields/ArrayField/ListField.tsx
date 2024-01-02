import type { FArrayFieldType } from "@fibr/core";
import { type FieldProps, RenderField } from "@fibr/react";
import { ArrayFieldWrapper } from "./ArrayFieldWrapper";

export function ListField({ name, field }: FieldProps<FArrayFieldType>) {
  return (
    <ArrayFieldWrapper name={name}>
      {({ index }) => (
        <RenderField name={`${name}.${index}`} field={field.of} />
      )}
    </ArrayFieldWrapper>
  );
}
