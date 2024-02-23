import { createContext } from "@rafty/shared";

export const [RadioGroupProvider, useRadioGroupContext] =
  createContext<RadioGroupContext>({
    name: "RadioGroupContext",
    hookName: "useRadioGroupContext",
    providerName: "<RadioGroup />",
  });

export interface RadioGroupContext {
  readonly size: "sm" | "md" | "lg";
  readonly isDisabled: boolean;
}
