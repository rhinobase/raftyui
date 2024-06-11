import { useThread } from "@fibr/react";
import { EditableText as RaftyEditableText } from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { EditableTextProps } from "../types";
import { FieldWrapper, TooltipWrapper } from "../utils";

export function EditableText() {
  const { id } = useThread<EditableTextProps>();

  const { control } = useFormContext();

  return (
    <TooltipWrapper>
      <FieldWrapper>
        <Controller
          name={id}
          control={control}
          render={({ field: { name, onChange, ref, value, disabled } }) => (
            <RaftyEditableText
              id={name}
              name={name}
              value={value}
              onValueChange={(event) => onChange(event.value)}
              disabled={disabled}
              ref={ref}
            />
          )}
        />
      </FieldWrapper>
    </TooltipWrapper>
  );
}
