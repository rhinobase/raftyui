import { createContext } from "@rhinobase/lib/hooks/context";

export const [TabProvider, useTabContext] = createContext<TabContext>({
  name: "TabContext",
  hookName: "useTabContext",
  providerName: "<Tab />",
});

export interface TabContext {
  size?: "sm" | "md" | "lg";
  variant?: "line" | "enclosed";
}
