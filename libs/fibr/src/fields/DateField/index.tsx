"use client";
import type { FDateFieldType } from "@fibr/core";
import type { FieldProps } from "@fibr/react";
import { DatePicker, classNames } from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import { FieldWrapper } from "../FieldWrapper";

export function DateField({ name, field }: FieldProps<FDateFieldType>) {
  const { control } = useFormContext();
  const readOnly = field.readOnly as boolean | undefined;
  const required = field.required as boolean | undefined;

  return (
    <FieldWrapper
      name={name}
      label={field.label}
      description={field.description}
      className={classNames(field.hidden ? "hidden" : "flex")}
      required={required}
    >
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange, ref, ...register } }) => (
          <DatePicker
            {...register}
            selected={value}
            onSelect={onChange}
            disabled={readOnly}
          />
        )}
      />
    </FieldWrapper>
  );
}
