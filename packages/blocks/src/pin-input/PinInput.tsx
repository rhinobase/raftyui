import { useThread } from "@fibr/react";
import { PinInput as RaftyPinInput } from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { PinInputProps } from "../types";
import { FieldWrapper, TooltipWrapper } from "../utils";

export function PinInput() {
  const { id, length, placeholder } = useThread<PinInputProps>();
  const { control } = useFormContext();

  return (
    <TooltipWrapper>
      <FieldWrapper>
        <Controller
          name={id}
          control={control}
          render={({ field: { name, onChange, ref, value, disabled } }) => (
            <RaftyPinInput
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
