import { createThread, useThread } from "@fibr/react";
import { Checkbox } from "@rafty/ui";
import { FieldWrapper } from "../FieldWrapper";

export type CheckboxField = {
  name: string;
  label: string;
  size?: "sm" | "md" | "lg";
};

export function CheckboxField() {
  // Getting component config
  const config = useThread<CheckboxField>();
  const { size = "md" } = config;

  return (
    <FieldWrapper name={config.name} label={config.label}>
      <Checkbox size={size} />
    </FieldWrapper>
  );
}

export const checkbox = createThread<CheckboxField>("checkbox");
