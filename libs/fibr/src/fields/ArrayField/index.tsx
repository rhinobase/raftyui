import type { FArrayFieldType } from "@fibr/core";
import type { FieldProps } from "@fibr/react";
import { classNames } from "@rafty/ui";
import { FieldWrapper } from "../FieldWrapper";
import { ListField } from "./ListField";

export function ArrayFields({ name, field }: FieldProps<FArrayFieldType>) {
  const required = field.required as boolean | undefined;

  return (
    <FieldWrapper
      required={required}
      name={name}
      label={field.label}
      description={field.description}
      className={classNames(field.hidden ? "hidden" : "flex")}
    >
      <ListField name={name} field={field} />
    </FieldWrapper>
  );
}
