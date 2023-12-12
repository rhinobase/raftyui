import { createContext } from "../utils";

export const [PaginationProvider, usePaginationContext] =
  createContext<PaginationContext>({
    strict: false,
    name: "PaginationContext",
    hookName: "usePaginationContext",
    providerName: "<Pagination />",
  });

export interface PaginationContext {
  readonly size: "sm" | "md" | "lg";
  readonly isDisabled: boolean | undefined;
  readonly total: number;
  readonly current: number;
  readonly pageSize: number;
  readonly onChange: ((page: number, pageSize: number) => void) | undefined;
}
