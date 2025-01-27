import { type SizeType, createContext } from "../utils/index.js";

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
