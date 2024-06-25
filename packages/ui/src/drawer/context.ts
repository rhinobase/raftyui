import { type SizeType, createContext } from "../utils";

export const [DrawerProvider, useDrawerContext] = createContext<DrawerContext>({
  name: "DrawerContext",
  hookName: "useDrawerContext",
  providerName: "<Drawer />",
});

export interface DrawerContext {
  readonly size: SizeType<"full">;
  readonly side: "right" | "left";
}
