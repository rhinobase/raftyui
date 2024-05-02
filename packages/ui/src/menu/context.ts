import { createContext } from "../utils";

export const [MenuProvider, useMenuContext] = createContext<MenuContext>({
  name: "MenuContext",
  hookName: "useMenuContext",
  providerName: "<Menu />",
});

export interface MenuContext {
  readonly size: "sm" | "md" | "lg";
  readonly isUnstyled: boolean;
  readonly isDisabled: boolean;
}
