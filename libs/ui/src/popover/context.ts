import { createContext } from "@rafty/utils";

export const [PopoverProvider, usePopoverContext] =
  createContext<PopoverContext>({
    name: "PopoverContext",
    hookName: "usePopoverContext",
    providerName: "<Popover />",
  });

export interface PopoverContext {
  size: "sm" | "md" | "lg";
  isBarebone: boolean;
}
