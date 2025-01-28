import { createContext } from "../utils/client/index.js";
import type { SizeType } from "../utils/index.js";

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
