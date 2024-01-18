import { createThread, useThread } from "@fibr/react";
import { RadioGroup, RadioGroupItem } from "@rafty/ui";
import { FieldWrapper } from "../FieldWrapper";

export type RadioGroupField = {
  name: string;
  label: string;
  size?: "sm" | "md" | "lg";
};

export function RadioGroupField() {
  // Getting component config
  const config = useThread<RadioGroupField>();
  const { size = "md" } = config;

  return (
    <FieldWrapper name={config.name} label={config.label}>
      <RadioGroup size={size}>
        <RadioGroupItem value={config.name} id={config.name}>
          {config.label}
        </RadioGroupItem>
      </RadioGroup>
    </FieldWrapper>
  );
}

export const radioGroup = createThread<RadioGroupField>("radio-group");
