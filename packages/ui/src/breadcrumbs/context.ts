import { createContext } from "../utils";

export const [BreadcrumbsProvider, useBreadcrumbsContext] =
  createContext<BreadcrumbsContext>({
    name: "BreadcrumbsContext",
    hookName: "useBreadcrumbsContext",
    providerName: "<Breadcrumbs />",
  });

export type BreadcrumbsContext = {
  readonly size: "sm" | "md" | "lg";
};
