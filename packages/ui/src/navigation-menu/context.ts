import { createContext } from "../utils/client/index.js";

export const [NavigationMenuProvider, useNavigationMenuContext] =
  createContext<NavigationMenuContext>({
    name: "NavigationMenuContext",
    hookName: "useNavigationMenuContext",
    providerName: "<NavigationMenu />",
  });

export interface NavigationMenuContext {
  readonly isUnstyled: boolean;
}
