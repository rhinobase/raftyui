import { createContext } from "../utils/client/index.js";
import type { SizeType } from "../utils/index.js";

export const [StepperProvider, useStepperContext] =
  createContext<StepperContext>({
    name: "StepperContext",
    hookName: "useStepperContext",
    providerName: "<Stepper />",
  });

export type StepperContext = {
  readonly size: SizeType;
  readonly direction: "horizontal" | "vertical";
  readonly isDisabled: boolean;
};
