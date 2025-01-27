import { type SizeType, createContext } from "../utils/index.js";

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
