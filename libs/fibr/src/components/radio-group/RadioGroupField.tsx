import { createThread, useThread } from "@fibr/react";
import { RadioGroup, RadioGroupItem } from "@rafty/ui";
import { useId } from "react";
import { FieldWrapper } from "../FieldWrapper";

export type RadioGroupField = {
  name: string;
  label: string;
  size?: "sm" | "md" | "lg";
  options: { label: string; value: string }[];
};

export function RadioGroupField() {
  const id = useId();
  // Getting component config
  const config = useThread<RadioGroupField>();
  const { size = "md" } = config;

  return (
    <FieldWrapper name={config.name} label={config.label}>
      <RadioGroup size={size}>
        {config.options.map(({ label, value }, index) => (
          <RadioGroupItem value={value} id={value} key={`${id}-${index}`}>
            {label}
          </RadioGroupItem>
        ))}
      </RadioGroup>
    </FieldWrapper>
  );
}

export const radioGroup = createThread<RadioGroupField>("radio-group");
