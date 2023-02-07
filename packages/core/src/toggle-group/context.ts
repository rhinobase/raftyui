import { createContext } from "@rhinobase/lib/hooks/context";

export const [ToggleGroupProvider, useToggleGroupContext] = createContext<ToggleGroupContext>({
  name: "ToggleGroupContext",
  hookName: "useToggleGroupContext",
  providerName: "<ToggleGroup />",
});

export interface ToggleGroupContext {
  size?: "sm" | "md" | "lg";
}
