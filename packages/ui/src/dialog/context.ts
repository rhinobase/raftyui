import { createContext } from "@rafty/shared";

export const [DialogProvider, useDialogContext] = createContext<DialogContext>({
  name: "DialogContext",
  hookName: "useDialogContext",
  providerName: "<Dialog />",
});

export interface DialogContext {
  readonly size: "sm" | "md" | "lg" | "xl";
  readonly isUnstyled: boolean;
}
