import { type SizeType, createContext } from "../utils/index.js";

export const [TreeViewProvider, useTreeViewContext] =
  createContext<TreeViewContext>({
    name: "TreeViewContext",
    hookName: "useTreeViewContext",
    providerName: "<Card />",
  });

export interface TreeViewContext {
  readonly size: SizeType;
}
