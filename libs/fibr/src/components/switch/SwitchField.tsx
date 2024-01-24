import { createThread, useThread } from "@fibr/react";
import { InputField, Switch } from "@rafty/ui";
import { useFormContext } from "react-hook-form";
import { FieldWrapper } from "../FieldWrapper";

export type SwitchField = {
  name: string;
  label: string;
};

export function SwitchField() {
  // Getting component config
  const config = useThread<SwitchField>();
  const { register } = useFormContext();

  return (
    <FieldWrapper name={config.name} label={config.label}>
      <InputField {...register(config.name)} />
    </FieldWrapper>
  );
}

export const switchField = createThread<SwitchField>("switch");
