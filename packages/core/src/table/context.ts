import { createContext } from "@rhinobase/utils";

export const [TableProvider, useTableContext] = createContext<TableContext>({
  name: "TableContext",
  hookName: "useTableContext",
  providerName: "<Table />",
});

export interface TableContext {
  size: "sm" | "md" | "lg";
}
