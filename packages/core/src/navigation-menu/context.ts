import { createContext } from "../utils/context";

export const [NavigationMenuProvider, useNavigationMenuContext] =
  createContext<NavigationMenuContext>({
    name: "NavigationMenuContext",
    hookName: "useNavigationMenuContext",
    providerName: "<NavigationMenu />",
  });

export interface NavigationMenuContext {
  size: "sm" | "md" | "lg";
  barebone: boolean;
}
