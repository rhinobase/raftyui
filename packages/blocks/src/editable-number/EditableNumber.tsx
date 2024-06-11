import { useThread } from "@fibr/react";
import { EditableNumber as RaftyEditableNumber } from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { EditableNumberProps } from "../types";
import { FieldWrapper, TooltipWrapper } from "../utils";

export function EditableNumber() {
  const { id } = useThread<EditableNumberProps>();

  const { control } = useFormContext();

  return (
    <TooltipWrapper>
      <FieldWrapper>
        <Controller
          name={id}
          control={control}
          render={({ field: { name, onChange, ref, value, disabled } }) => (
            <RaftyEditableNumber
              id={name}
              name={name}
              value={value}
              onValueChange={onChange}
              disabled={disabled}
              ref={ref}
            />
          )}
        />
      </FieldWrapper>
    </TooltipWrapper>
  );
}
