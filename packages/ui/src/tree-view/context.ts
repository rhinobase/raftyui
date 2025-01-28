import { createContext } from "../utils/client/index.js";
import type { SizeType } from "../utils/index.js";

export const [TreeViewProvider, useTreeViewContext] =
  createContext<TreeViewContext>({
    name: "TreeViewContext",
    hookName: "useTreeViewContext",
    providerName: "<Card />",
  });

export interface TreeViewContext {
  readonly size: SizeType;
}
