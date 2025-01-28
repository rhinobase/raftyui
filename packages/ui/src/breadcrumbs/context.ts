import { createContext } from "../utils/client/index.js";
import type { SizeType } from "../utils/index.js";

export const [BreadcrumbsProvider, useBreadcrumbsContext] =
  createContext<BreadcrumbsContext>({
    name: "BreadcrumbsContext",
    hookName: "useBreadcrumbsContext",
    providerName: "<Breadcrumbs />",
  });

export type BreadcrumbsContext = {
  readonly size: SizeType;
};
