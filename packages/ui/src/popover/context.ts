import { createContext } from "../utils/client/index.js";
import type { SizeType } from "../utils/index.js";

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
