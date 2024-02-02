import { createContext } from "@rafty/shared";

export const [ContextMenuProvider, useContextMenuContext] =
  createContext<ContextMenuContext>({
    name: "ContextMenuContext",
    hookName: "useContextMenuContext",
    providerName: "<ContextMenu />",
  });

export interface ContextMenuContext {
  readonly size: "sm" | "md" | "lg";
  readonly isUnstyled: boolean;
}
