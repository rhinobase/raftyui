import { createContext } from "@rafty/shared";

export const [ToggleGroupProvider, useToggleGroupContext] =
  createContext<ToggleGroupContext>({
    name: "ToggleGroupContext",
    hookName: "useToggleGroupContext",
    providerName: "<ToggleGroup />",
  });

export interface ToggleGroupContext {
  readonly size: "sm" | "md" | "lg";
  readonly isUnstyled: boolean;
}
