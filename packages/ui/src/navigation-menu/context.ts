import { createContext } from "../utils";

export const [NavigationMenuProvider, useNavigationMenuContext] =
  createContext<NavigationMenuContext>({
    name: "NavigationMenuContext",
    hookName: "useNavigationMenuContext",
    providerName: "<NavigationMenu />",
  });

export interface NavigationMenuContext {
  readonly isUnstyled: boolean;
}
