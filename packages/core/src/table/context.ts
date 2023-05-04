import { createContext } from "../utils/context";

export const [TableProvider, useTableContext] = createContext<TableContext>({
  name: "TableContext",
  hookName: "useTableContext",
  providerName: "<Table />",
});

export interface TableContext {
  size: "sm" | "md" | "lg";
  variant?: "simple" | "striped";
  barebone?: boolean;
}
