import type { ValueOrFunction } from "../types";
import { createContext } from "../utils";

export const [RadioGroupProvider, useRadioGroupContext] =
  createContext<RadioGroupContext>({
    name: "RadioGroupContext",
    hookName: "useRadioGroupContext",
    providerName: "<RadioGroup />",
  });

export interface RadioGroupContext {
  readonly size: "sm" | "md" | "lg";
  readonly isDisabled: ValueOrFunction;
}
