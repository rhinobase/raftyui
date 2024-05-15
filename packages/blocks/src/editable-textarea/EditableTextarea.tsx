import { useThread } from "@fibr/react";
import { EditableTextarea as RaftyEditableTextarea } from "@rafty/ui";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import type { EditableTextareaProps } from "../types";
import { FieldWrapper, TooltipWrapper } from "../utils";

export function EditableTextarea() {
  const { id } = useThread<EditableTextareaProps>();

  const { control } = useFormContext();

  return (
    <TooltipWrapper>
      <FieldWrapper>
        <Controller
          name={id}
          control={control}
          render={({ field: { name, onChange, ref, value, disabled } }) => (
            <RaftyEditableTextarea
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
