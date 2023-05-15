import { createContext } from "@rhino/utils";

export const [RadioGroupProvider, useRadioGroupContext] =
  createContext<RadioGroupContext>({
    name: "RadioGroupContext",
    hookName: "useRadioGroupContext",
    providerName: "<RadioGroup />",
  });

export interface RadioGroupContext {
  size: "sm" | "md" | "lg";
  isDisabled: boolean;
}
