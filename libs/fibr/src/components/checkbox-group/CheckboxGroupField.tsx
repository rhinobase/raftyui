import { createThread, useThread } from "@fibr/react";
import { Checkbox, Label } from "@rafty/ui";
import { useId } from "react";
import { FieldWrapper } from "../FieldWrapper";

export type CheckboxGroupField = {
  name: string;
  label: string;
  size?: "sm" | "md" | "lg";
  options: { label: string; value: string }[];
};

export function CheckboxGroupField() {
  const id = useId();
  // Getting component config
  const config = useThread<CheckboxGroupField>();

  return (
    <FieldWrapper name={config.name} label={config.label}>
      <div className="space-y-2.5">
        {config.options.map(({ label, value }, index) => (
          <div key={`${id}-${index}`} className="flex gap-2">
            <Checkbox id={String(value)} defaultValue={value} />
            <Label htmlFor={String(value)}>{label}</Label>
          </div>
        ))}
      </div>
    </FieldWrapper>
  );
}

export const checkboxGroup = createThread<CheckboxGroupField>("checkbox-group");
