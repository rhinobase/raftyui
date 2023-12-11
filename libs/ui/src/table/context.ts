import { createContext } from "../utils";

export const [TableProvider, useTableContext] = createContext<TableContext>({
  name: "TableContext",
  hookName: "useTableContext",
  providerName: "<Table />",
});

export interface TableContext {
  readonly size: "sm" | "md" | "lg";
  readonly variant: "simple" | "striped";
  readonly isUnstyled: boolean;
}
