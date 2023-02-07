import { createContext } from "@rhinobase/lib/hooks/context";

export const [TableProvider, useTableContext] = createContext<TableContext>({
  name: "TableContext",
  hookName: "useTableContext",
  providerName: "<Table />",
});

export interface TableContext {
  size: "sm" | "md" | "lg";
}
