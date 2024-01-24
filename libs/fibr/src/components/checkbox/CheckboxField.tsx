import { createThread, useThread } from "@fibr/react";
import { InputField } from "@rafty/ui";
import { useFormContext } from "react-hook-form";
import { FieldWrapper } from "../FieldWrapper";

export type CheckboxField = {
  name: string;
  label: string;
};

export function CheckboxField() {
  // Getting component config
  const config = useThread<CheckboxField>();
  const { register } = useFormContext();

  return (
    <FieldWrapper name={config.name} label={config.label}>
      <InputField {...register(config.name)} />
    </FieldWrapper>
  );
}

export const checkbox = createThread<CheckboxField>("checkbox");
