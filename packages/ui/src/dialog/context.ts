import { type SizeType, createContext } from "../utils";

export const [DialogProvider, useDialogContext] = createContext<DialogContext>({
  name: "DialogContext",
  hookName: "useDialogContext",
  providerName: "<Dialog />",
});

export interface DialogContext {
  readonly size: SizeType<"xl">;
  readonly isUnstyled: boolean;
}
