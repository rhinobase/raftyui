import { createThread, useThread } from "@fibr/react";
import { InputField } from "@rafty/ui";
import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import { FieldWrapper } from "../FieldWrapper";
import { InputWrapper } from "../InputWrapper";

export type TextInput = {
  name: string;
  label?: string;
  description?: string;
  placeholder?: string;
  defaultValue?: string;
  hidden?: boolean;
  required?: boolean;
  disabled?: boolean;
  tooltip?: string;
  preffixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  preffixText?: string;
  suffixText?: string;
  inputType?: string;
};

export function TextInput() {
  const {
    name,
    label,
    description,
    inputType = "text",
    required,
    disabled,
    defaultValue,
    hidden,
    placeholder,
    tooltip,
    preffixIcon,
    suffixIcon,
    preffixText,
    suffixText,
  } = useThread<TextInput>();
  const { register } = useFormContext();

  const inputWrapperProps = {
    preffixIcon,
    suffixIcon,
    preffixText,
    suffixText,
  };

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
      <InputWrapper {...inputWrapperProps}>
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
