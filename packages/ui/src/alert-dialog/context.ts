import { createContext } from "@rafty/shared";

export const [AlertDialogProvider, useAlertDialogContext] =
  createContext<AlertDialogContext>({
    name: "AlertDialogContext",
    hookName: "useAlertDialogContext",
    providerName: "<AlertDialog />",
  });

export interface AlertDialogContext {
  readonly size: "sm" | "md" | "lg" | "xl";
  readonly isUnstyled: boolean;
}
