import { createContext } from "@rafty/shared";

export const [StepperProvider, useStepperContext] =
  createContext<StepperContext>({
    name: "StepperContext",
    hookName: "useStepperContext",
    providerName: "<Stepper />",
  });

export type StepperContext = {
  readonly size: "sm" | "md" | "lg";
  readonly direction: "horizontal" | "vertical";
  readonly current: number;
  readonly isDisabled: boolean;
};
