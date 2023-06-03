import { createContext } from "@rafty/utils";

export const [DialogProvider, useDialogContext] = createContext<DialogContext>({
  name: "DialogContext",
  hookName: "useDialogContext",
  providerName: "<Dialog />",
});

export interface DialogContext {
  size: "sm" | "md" | "lg";
  isBarebone: boolean;
}
