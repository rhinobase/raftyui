import { createContext } from "@rafty/shared";

export const [TooltipProvider, useTooltipContext] =
  createContext<TooltipContext>({
    name: "TooltipContext",
    hookName: "useTooltipContext",
    providerName: "<Tooltip />",
  });

export interface TooltipContext {
  readonly isDisabled: boolean;
}
