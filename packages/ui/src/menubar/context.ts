import { type SizeType, createContext } from "../utils/index.js";

export const [MenuBarProvider, useMenuBarContext] =
  createContext<MenuBarContext>({
    name: "MenuBarContext",
    hookName: "useMenuBarContext",
    providerName: "<MenuBar />",
  });

export interface MenuBarContext {
  readonly size: SizeType;
  readonly isUnstyled: boolean;
  readonly isDisabled: boolean;
}
