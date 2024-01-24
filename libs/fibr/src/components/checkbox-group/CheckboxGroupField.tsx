import { createThread, useThread } from "@fibr/react";
import { InputField } from "@rafty/ui";
import { useFormContext } from "react-hook-form";
import { FieldWrapper } from "../FieldWrapper";

export type CheckboxGroupField = {
  name: string;
  label: string;
};

export function CheckboxGroupField() {
  // Getting component config
  const config = useThread<CheckboxGroupField>();
  const { register } = useFormContext();

  return (
    <FieldWrapper name={config.name} label={config.label}>
      <InputField {...register(config.name)} />
    </FieldWrapper>
  );
}

export const checkboxGroup = createThread<CheckboxGroupField>("checkbox-group");
