import { createContext } from "@rafty/shared";

export const [PaginationProvider, usePaginationContext] =
  createContext<PaginationContext>({
    strict: false,
    name: "PaginationContext",
    hookName: "usePaginationContext",
    providerName: "<Pagination />",
  });

export interface PaginationContext {
  readonly size: "sm" | "md" | "lg";
  readonly isDisabled: boolean;
  readonly pages: number;
  readonly currentPage: number;
  readonly pageLimit: number;
  readonly onChange: ((page: number, pageSize: number) => void) | undefined;
}
