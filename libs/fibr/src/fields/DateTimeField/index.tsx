"use client";
import type { FDateTimeFieldType } from "@fibr/core";
import type { FieldProps } from "@fibr/react";
import { InputField, classNames } from "@rafty/ui";
import { useFormContext } from "react-hook-form";
import { FieldWrapper } from "../FieldWrapper";

export function DatetimeField({ name, field }: FieldProps<FDateTimeFieldType>) {
  const { register } = useFormContext();

  const readOnly = field.readOnly as boolean | undefined;

  return (
    <FieldWrapper
      name={name}
      label={field.label}
      description={field.description}
      className={classNames(field.hidden ? "hidden" : "flex")}
      required={field.required as boolean | undefined}
    >
      <InputField
        {...register(name, { valueAsDate: true })}
        type="datetime-local"
        readOnly={readOnly}
      />
    </FieldWrapper>
  );
}
