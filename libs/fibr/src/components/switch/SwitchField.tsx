import { createThread, useThread } from "@fibr/react";
import { Switch } from "@rafty/ui";
import { FieldWrapper } from "../FieldWrapper";

export type SwitchField = {
  name: string;
  label: string;
  value: string;
  size?: "sm" | "md" | "lg";
};

export function SwitchField() {
  // Getting component config
  const config = useThread<SwitchField>();
  const { size = "md" } = config;

  return (
    <FieldWrapper name={config.name} label={config.label}>
      <Switch size={size} />
    </FieldWrapper>
  );
}

export const switchField = createThread<SwitchField>("switch");
