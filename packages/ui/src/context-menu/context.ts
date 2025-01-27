import { type SizeType, createContext } from "../utils/index.js";

export const [ContextMenuProvider, useContextMenuContext] =
  createContext<ContextMenuContext>({
    name: "ContextMenuContext",
    hookName: "useContextMenuContext",
    providerName: "<ContextMenu />",
  });

export interface ContextMenuContext {
  readonly size: SizeType;
  readonly isUnstyled: boolean;
}
