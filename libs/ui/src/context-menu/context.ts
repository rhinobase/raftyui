import { createContext } from "../utils";

export const [ContextMenuProvider, useContextMenuContext] =
  createContext<ContextMenuContext>({
    name: "ContextMenuContext",
    hookName: "useContextMenuContext",
    providerName: "<ContextMenu />",
  });

export interface ContextMenuContext {
  readonly size: "sm" | "md" | "lg";
  readonly isBarebone: boolean;
}
