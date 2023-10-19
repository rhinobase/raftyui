import { createContext } from "../utils";

export const [DrawerProvider, useDrawerContext] = createContext<DrawerContext>({
  name: "DrawerContext",
  hookName: "useDrawerContext",
  providerName: "<Drawer />",
});

export interface DrawerContext {
  readonly size: "sm" | "md" | "lg" | "full";
  readonly side: "right" | "left";
}
