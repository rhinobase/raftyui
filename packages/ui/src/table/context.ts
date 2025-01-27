import { type SizeType, createContext } from "../utils/index.js";

export const [TableProvider, useTableContext] = createContext<TableContext>({
  name: "TableContext",
  hookName: "useTableContext",
  providerName: "<Table />",
});

export interface TableContext {
  readonly size: SizeType;
  readonly variant: "simple" | "striped";
  readonly isUnstyled: boolean;
}
