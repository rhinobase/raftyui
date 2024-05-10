import type { InputField } from "@rafty/ui";

export type StringProps = {
  type: "string";
  inputType?: InputField["type"];
  placeholder?: string;
  defaultValue?: string;
  inputMode?: InputField["inputMode"];
  maxLength?: number;
  minLength?: number;
};
