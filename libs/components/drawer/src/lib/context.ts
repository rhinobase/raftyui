import { createContext } from "@rafty/utils";

export const [DrawerProvider, useDrawerContext] = createContext<DrawerContext>({
  name: "DrawerContext",
  hookName: "useDrawerContext",
  providerName: "<Drawer />",
});

export interface DrawerContext {
  size: "sm" | "md" | "lg" | "full";
  side: "right" | "left";
}
