import { type SizeType, createContext } from "../utils/index.js";

export const [TooltipProvider, useTooltipContext] =
  createContext<TooltipContext>({
    name: "TooltipContext",
    hookName: "useTooltipContext",
    providerName: "<Tooltip />",
  });

export interface TooltipContext {
  readonly size: SizeType;
  readonly isDisabled: boolean;
}
