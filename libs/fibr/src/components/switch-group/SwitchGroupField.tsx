import { createThread, useThread } from "@fibr/react";
import { InputField, Label, Switch } from "@rafty/ui";
import { useId } from "react";
import { useFormContext } from "react-hook-form";
import { FieldWrapper } from "../FieldWrapper";

export type SwitchGroupField = {
  name: string;
  label: string;
};

export function SwitchGroupField() {
  // Getting component config
  const config = useThread<SwitchGroupField>();
  const { register } = useFormContext();

  return (
    <FieldWrapper name={config.name} label={config.label}>
      <InputField {...register(config.name)} />
    </FieldWrapper>
  );
}

export const switchGroup = createThread<SwitchGroupField>("switch-group");
