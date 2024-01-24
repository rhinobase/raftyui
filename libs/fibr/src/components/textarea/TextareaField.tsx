import { createThread, useThread } from "@fibr/react";
import { InputField } from "@rafty/ui";
import { useFormContext } from "react-hook-form";
import { FieldWrapper } from "../FieldWrapper";

export type TextareaField = {
  name: string;
  label: string;
};

export function TextareaField() {
  // Getting component config
  const config = useThread<TextareaField>();
  const { register } = useFormContext();

  return (
    <FieldWrapper name={config.name} label={config.label}>
      <InputField {...register(config.name)} />
    </FieldWrapper>
  );
}

export const textarea = createThread<TextareaField>("textarea");
