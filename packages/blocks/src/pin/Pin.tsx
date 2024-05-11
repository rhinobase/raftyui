import { useThread } from "@fibr/react";
import { Pin as RaftyPin } from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { PinProps } from "../types";
import { FieldWrapper, TooltipWrapper } from "../utils";

export function Pin() {
  const { id, length, placeholder } = useThread<PinProps>();
  const { control } = useFormContext();

  return (
    <TooltipWrapper>
      <FieldWrapper>
        <Controller
          name={id}
          control={control}
          render={({ field: { name, onChange, ref, value, disabled } }) => (
            <RaftyPin
              id={name}
              name={name}
              value={value}
              onValueChange={({ value }) => onChange(value)}
              placeholder={placeholder}
              length={length}
              disabled={disabled}
              ref={ref}
            />
          )}
        />
      </FieldWrapper>
    </TooltipWrapper>
  );
}
