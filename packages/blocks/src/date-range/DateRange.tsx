"use client";
import { useThread } from "@fibr/react";
import { RangePicker } from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { DateRangeFieldProps } from "../types";
import { FieldWrapper, TooltipWrapper } from "../utils";

export function DateRangeField() {
  const { id, placeholder } = useThread<DateRangeFieldProps>();

  const { control } = useFormContext();

  return (
    <TooltipWrapper>
      <FieldWrapper>
        <Controller
          name={id}
          control={control}
          render={({ field: { name, disabled, value, onChange, ref } }) => (
            <RangePicker
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
