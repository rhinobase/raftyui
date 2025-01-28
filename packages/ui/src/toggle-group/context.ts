import { createContext } from "../utils/client/index.js";
import type { SizeType } from "../utils/index.js";

export const [ToggleGroupProvider, useToggleGroupContext] =
  createContext<ToggleGroupContext>({
    name: "ToggleGroupContext",
    hookName: "useToggleGroupContext",
    providerName: "<ToggleGroup />",
  });

export interface ToggleGroupContext {
  readonly size: SizeType;
  readonly isUnstyled: boolean;
}
