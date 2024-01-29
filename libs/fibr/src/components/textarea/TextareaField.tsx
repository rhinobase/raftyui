import { createThread, useThread } from "@fibr/react";
import { Textarea } from "@rafty/ui";
import { useFormContext } from "react-hook-form";
import { FieldWrapper } from "../FieldWrapper";

export type TextareaField = {
  name: string;
  label?: string;
  description?: string;
  placeholder?: string;
  defaultValue?: string;
  hidden?: boolean;
  required?: boolean;
  disabled?: boolean;
  tooltip?: string;
};

export function TextareaField() {
  const {
    name,
    defaultValue,
    description,
    disabled,
    hidden,
    label,
    placeholder,
    required,
    tooltip,
  } = useThread<TextareaField>();
  const { register } = useFormContext();

  const fieldWrapperProps = {
    name,
    label,
    description,
    required,
    disabled,
    tooltip,
    hidden,
  };

  return (
    <FieldWrapper {...fieldWrapperProps}>
      <Textarea
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register(name)}
      />
    </FieldWrapper>
  );
}

export const textarea = createThread<TextareaField>("textarea");
