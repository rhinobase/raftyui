import { useThread } from "@fibr/react";
import { CurrencyInput as RaftyCurrencyInput } from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { CurrencyInputProps } from "../types";
import { FieldWrapper, TooltipWrapper } from "../utils";

export function CurrencyInput() {
  const { id } = useThread<CurrencyInputProps>();

  const { control } = useFormContext();

  return (
    <TooltipWrapper>
      <FieldWrapper>
        <Controller
          name={id}
          control={control}
          render={({ field }) => <RaftyCurrencyInput {...field} />}
        />
      </FieldWrapper>
    </TooltipWrapper>
  );
}
