import { type SizeType, createContext } from "../utils";

export const [StepperProvider, useStepperContext] =
  createContext<StepperContext>({
    name: "StepperContext",
    hookName: "useStepperContext",
    providerName: "<Stepper />",
  });

export type StepperContext = {
  readonly size: SizeType;
  readonly direction: "horizontal" | "vertical";
  readonly value: number;
  readonly isDisabled: boolean;
};
