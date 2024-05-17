import { useThread } from "@fibr/react";
import { PercentageInput as RaftyPercentageInput } from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { PercentageInputProps } from "../types";
import { FieldWrapper, TooltipWrapper } from "../utils";

export function PercentageInput() {
  const { id } = useThread<PercentageInputProps>();

  const { control } = useFormContext();

  return (
    <TooltipWrapper>
      <FieldWrapper>
        <Controller
          name={id}
          control={control}
          render={({ field }) => <RaftyPercentageInput {...field} />}
        />
      </FieldWrapper>
    </TooltipWrapper>
  );
}
