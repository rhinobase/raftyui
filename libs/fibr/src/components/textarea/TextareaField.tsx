import { createThread, useThread } from "@fibr/react";
import { Textarea } from "@rafty/ui";
import { useFormContext } from "react-hook-form";
import { FieldWrapper, FieldWrapperProps } from "../FieldWrapper";
import { TooltipWrapperProps } from "../TooltipWrapper";

export type TextareaField = TooltipWrapperProps<
  FieldWrapperProps<{
    placeholder?: string;
    defaultValue?: string;
  }>
>;

export function TextareaField() {
  const { name, defaultValue, placeholder } = useThread<TextareaField>();
  const { register } = useFormContext();

  return (
    <FieldWrapper>
      <Textarea
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register(name)}
      />
    </FieldWrapper>
  );
}

export const textarea = createThread<TextareaField>("textarea");
