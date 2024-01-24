import { createThread, useThread } from "@fibr/react";
import { InputField } from "@rafty/ui";
import { useFormContext } from "react-hook-form";
import { FieldWrapper } from "../FieldWrapper";

export type RadioGroupField = {
  name: string;
  label: string;
};

export function RadioGroupField() {
  // Getting component config
  const config = useThread<RadioGroupField>();
  const { register } = useFormContext();

  return (
    <FieldWrapper name={config.name} label={config.label}>
      <InputField {...register(config.name)} />
    </FieldWrapper>
  );
}

export const radioGroup = createThread<RadioGroupField>("radio-group");
