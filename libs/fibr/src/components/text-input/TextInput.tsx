import { createThread, useThread } from "@fibr/react";
import { InputField } from "@rafty/ui";
import { useFormContext } from "react-hook-form";
import { FieldWrapper, type FieldWrapperProps } from "../FieldWrapper";
import { InputWrapper, type InputWrapperProps } from "../InputWrapper";
import type { TooltipWrapperProps } from "../TooltipWrapper";

export type TextInput = TooltipWrapperProps<
  FieldWrapperProps<
    InputWrapperProps<{
      placeholder?: string;
      defaultValue?: string;
      inputType?: string;
    }>
  >
>;

export function TextInput() {
  const {
    name,
    inputType = "text",
    defaultValue,
    placeholder,
  } = useThread<TextInput>();

  const { register } = useFormContext();

  return (
    <FieldWrapper>
      <InputWrapper>
        <InputField
          type={inputType}
          placeholder={placeholder}
          defaultValue={defaultValue}
          {...register(name)}
        />
      </InputWrapper>
    </FieldWrapper>
  );
}

export const textInput = createThread<TextInput>("text-input");
