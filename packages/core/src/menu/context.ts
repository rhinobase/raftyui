import { createContext } from "../utils/context";

export const [MenuProvider, useMenuContext] = createContext<MenuContext>({
  name: "MenuContext",
  hookName: "useMenuContext",
  providerName: "<Menu />",
});

export interface MenuContext {
  size: "sm" | "md" | "lg";
  isBarebone: boolean;
}
