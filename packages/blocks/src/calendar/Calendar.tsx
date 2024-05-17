"use client";
import { useThread } from "@fibr/react";
import { Calendar as RaftyCalendar } from "@rafty/ui";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import type { CalendarProps } from "../types";
import { FieldWrapper, TooltipWrapper } from "../utils";

export function Calendar() {
  const { id, placeholder } = useThread<CalendarProps>();

  const { control } = useFormContext();

  return (
    <TooltipWrapper>
      <FieldWrapper>
        <Controller
          name={id}
          control={control}
          render={({ field: { name, disabled, value, onChange, ref } }) => (
            <RaftyCalendar
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
