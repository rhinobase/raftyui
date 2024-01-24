import { createThread, useThread } from "@fibr/react";
import { InputField } from "@rafty/ui";
import { useState } from "react";
import { FieldWrapper } from "../FieldWrapper";

export type PercentField = {
  name: string;
  label: string;
  size?: "sm" | "md" | "lg";
};

export function PercentField() {
  // Getting component config
  const config = useThread<PercentField>();
  const { size = "md" } = config;
  const [percentage, setPercentage] = useState(0);

  return (
    <FieldWrapper name={config.name} label={config.label}>
      <InputField
        size={size}
        type="number"
        value={percentage}
        min={0}
        onChange={(e) => setPercentage(Number(e.target.value))}
      />
    </FieldWrapper>
  );
}

export const percent = createThread<PercentField>("percent");
