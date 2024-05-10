"use client";
import { useThread } from "@fibr/react";
import { InputField } from "@rafty/ui";
import { useFormContext } from "react-hook-form";
import type { DateFieldProps } from "../types";
import { FieldWrapper, InputWrapper, TooltipWrapper } from "../utils";

export function DateField() {
  const { id, placeholder } = useThread<DateFieldProps>();

  const { register } = useFormContext();

  return (
    <TooltipWrapper>
      <FieldWrapper>
        <InputWrapper>
          <InputField
            id={id}
            type="date"
            placeholder={placeholder}
            {...register(id)}
          />
        </InputWrapper>
      </FieldWrapper>
    </TooltipWrapper>
  );
}
