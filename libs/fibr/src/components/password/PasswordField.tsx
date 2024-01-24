import { createThread, useThread } from "@fibr/react";
import { InputField } from "@rafty/ui";
import { useFormContext } from "react-hook-form";
import { FieldWrapper } from "../FieldWrapper";

export type PasswordField = {
  name: string;
  label: string;
};

export function PasswordField() {
  // Getting component config
  const config = useThread<PasswordField>();
  const { register } = useFormContext();

  return (
    <FieldWrapper name={config.name} label={config.label}>
      <InputField {...register(config.name)} />
    </FieldWrapper>
  );
}

export const password = createThread<PasswordField>("password");
