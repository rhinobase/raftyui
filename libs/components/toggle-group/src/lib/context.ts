import { createContext } from "@rafty/utils";

export const [ToggleGroupProvider, useToggleGroupContext] =
  createContext<ToggleGroupContext>({
    name: "ToggleGroupContext",
    hookName: "useToggleGroupContext",
    providerName: "<ToggleGroup />",
  });

export interface ToggleGroupContext {
  size: "sm" | "md" | "lg";
  isBarebone: boolean;
}
