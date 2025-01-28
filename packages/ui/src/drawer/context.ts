import { createContext } from "../utils/client/index.js";
import type { SizeType } from "../utils/index.js";

export const [DrawerProvider, useDrawerContext] = createContext<DrawerContext>({
  name: "DrawerContext",
  hookName: "useDrawerContext",
  providerName: "<Drawer />",
});

export interface DrawerContext {
  readonly size: SizeType<"full">;
  readonly side: "right" | "left";
}
