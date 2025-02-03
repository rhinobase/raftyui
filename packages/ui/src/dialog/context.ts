import { createContext } from "../utils/client/index.js";
import type { SizeType } from "../utils/index.js";

export const [DialogProvider, useDialogContext] = createContext<DialogContext>({
  name: "DialogContext",
  hookName: "useDialogContext",
  providerName: "<Dialog />",
});

export interface DialogContext {
  readonly size: SizeType<"xl">;
  readonly isUnstyled: boolean;
}
