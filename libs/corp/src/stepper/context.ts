import { createContext } from "@rafty/ui";

export const [StepperProvider, useStepperContext] =
  createContext<StepperContext>({
    name: "StepperContext",
    hookName: "useStepperContext",
    providerName: "<Stepper />",
  });

export type StepperContext = {
  readonly direction: "horizontal" | "vertical";
  readonly isDisabled: boolean;
  readonly size: "sm" | "md" | "lg";
};
