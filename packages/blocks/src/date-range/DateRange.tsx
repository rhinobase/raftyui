"use client";
import { useThread } from "@fibr/react";
import { RangePicker } from "@rafty/ui";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import type { DateRangeFieldProps } from "../types";
import { FieldWrapper, InputWrapper, TooltipWrapper } from "../utils";

export function DateRangeField() {
  const { id, placeholder } = useThread<DateRangeFieldProps>();

  const { control } = useFormContext();

  return (
    <TooltipWrapper>
      <FieldWrapper>
        <InputWrapper>
          <Controller
            name={id}
            control={control}
            render={({ field: { name, disabled, value, onChange, ref } }) => (
              <RangePicker
                name={name}
                placeholder={placeholder}
                disabled={disabled}
                value={value}
                onValueChange={({ valueAsString }) => onChange(valueAsString)}
                ref={ref}
              />
            )}
          />
        </InputWrapper>
      </FieldWrapper>
    </TooltipWrapper>
  );
}
