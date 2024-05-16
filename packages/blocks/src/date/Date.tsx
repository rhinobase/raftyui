"use client";
import { useThread } from "@fibr/react";
import { DatePicker } from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { DateFieldProps } from "../types";
import { FieldWrapper, TooltipWrapper } from "../utils";

export function DateField() {
  const { id, placeholder } = useThread<DateFieldProps>();

  const { control } = useFormContext();

  return (
    <TooltipWrapper>
      <FieldWrapper>
        <Controller
          name={id}
          control={control}
          render={({ field: { name, disabled, value, onChange, ref } }) => (
            <DatePicker
              name={name}
              placeholder={placeholder}
              disabled={disabled}
              value={value}
              onValueChange={onChange}
              ref={ref}
            />
          )}
        />
      </FieldWrapper>
    </TooltipWrapper>
  );
}
