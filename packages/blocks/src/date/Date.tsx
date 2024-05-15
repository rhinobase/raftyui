"use client";
import { useThread } from "@fibr/react";
import { DatePicker } from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { DateFieldProps } from "../types";
import { FieldWrapper, InputWrapper, TooltipWrapper } from "../utils";

export function DateField() {
  const { id, placeholder } = useThread<DateFieldProps>();

  const { control } = useFormContext();

  return (
    <TooltipWrapper>
      <FieldWrapper>
        <InputWrapper>
          <Controller
            name={id}
            control={control}
            render={({ field: { name, disabled, value, onChange, ref } }) => (
              <DatePicker
                name={name}
                placeholder={placeholder}
                disabled={disabled}
                value={[value]}
                onValueChange={({ valueAsString }) =>
                  onChange(valueAsString[0])
                }
                ref={ref}
              />
            )}
          />
        </InputWrapper>
      </FieldWrapper>
    </TooltipWrapper>
  );
}
