import { createContext } from "../utils/client/index.js";
import type { SizeType } from "../utils/index.js";

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
