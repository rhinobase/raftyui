import { type SizeType, createContext } from "../utils";

export const [RadioGroupProvider, useRadioGroupContext] =
  createContext<RadioGroupContext>({
    name: "RadioGroupContext",
    hookName: "useRadioGroupContext",
    providerName: "<RadioGroup />",
  });

export interface RadioGroupContext {
  readonly size: SizeType;
  readonly disabled: boolean;
  readonly invalid: boolean;
}
