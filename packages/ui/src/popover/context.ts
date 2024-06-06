import { type SizeType, createContext } from "../utils";

export const [PopoverProvider, usePopoverContext] =
  createContext<PopoverContext>({
    name: "PopoverContext",
    hookName: "usePopoverContext",
    providerName: "<Popover />",
  });

export interface PopoverContext {
  readonly size: SizeType;
  readonly isUnstyled: boolean;
}
