import { createContext } from "@rafty/shared";
import { ReactNode } from "react";

export const [BreadcrumbsProvider, useBreadcrumbsContext] =
  createContext<BreadcrumbsContext>({
    name: "BreadcrumbsContext",
    hookName: "useBreadcrumbsContext",
    providerName: "<Breadcrumbs />",
  });

export type BreadcrumbsContext = {
  readonly size: "sm" | "md" | "lg";
  readonly separator: ReactNode;
};
