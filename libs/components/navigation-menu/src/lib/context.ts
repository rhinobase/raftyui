import { createContext } from "@rafty/utils";

export const [NavigationMenuProvider, useNavigationMenuContext] =
  createContext<NavigationMenuContext>({
    name: "NavigationMenuContext",
    hookName: "useNavigationMenuContext",
    providerName: "<NavigationMenu />",
  });

export interface NavigationMenuContext {
  size: "sm" | "md" | "lg";
  isBarebone: boolean;
}
