import { createContext } from "@rhinobase/lib/hooks/context";

export const [DrawerProvider, useDrawerContext] = createContext<DrawerContext>({
  name: "DrawerContext",
  hookName: "useDrawerContext",
  providerName: "<Drawer />",
});

export interface DrawerContext {
  size?: "sm" | "md" | "lg" | "full";
  side?: "right" | "left";
}
