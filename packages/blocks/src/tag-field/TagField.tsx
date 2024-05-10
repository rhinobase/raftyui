import { useThread } from "@fibr/react";
import { TagField as TagTextField } from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { TagFieldProps } from "../types";
import { FieldWrapper, TooltipWrapper } from "../utils";

export function TagField() {
  const { id, defaultValue } = useThread<TagFieldProps>();
  const { control } = useFormContext();

  return (
    <TooltipWrapper>
      <FieldWrapper>
        <Controller
          name={id}
          control={control}
          defaultValue={defaultValue}
          render={({ field: { name, onChange, value, ref } }) => (
            <TagTextField
              name={name}
              value={value}
              onChange={onChange}
              ref={ref}
            />
          )}
        />
      </FieldWrapper>
    </TooltipWrapper>
  );
}
