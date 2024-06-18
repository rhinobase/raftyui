"use client";
import { useThread } from "@fibr/react";
import { ColorPicker as RaftyColorPicker } from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { ColorPickerProps } from "../types";
import { FieldWrapper, TooltipWrapper } from "../utils";

export function ColorPicker() {
  const { id } = useThread<ColorPickerProps>();

  const { control } = useFormContext();

  return (
    <TooltipWrapper>
      <FieldWrapper>
        <Controller
          name={id}
          control={control}
          render={({ field: { name, onChange, ref, value, disabled } }) => (
            <RaftyColorPicker
              id={name}
              name={name}
              value={value}
              onValueChange={({ valueAsString }: { valueAsString: string }) =>
                onChange(valueAsString)
              }
              disabled={disabled}
              ref={ref}
            />
          )}
        />
      </FieldWrapper>
    </TooltipWrapper>
  );
}
