import type { InputField } from "@rafty/ui";

export type NumberProps = {
  type: "number";
  placeholder?: string;
  defaultValue?: number;
  inputMode?: "none" | "numeric" | "decimal";
  min?: InputField["min"];
  max?: InputField["max"];
};
