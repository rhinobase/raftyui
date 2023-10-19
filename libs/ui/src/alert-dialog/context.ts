import { createContext } from "../utils";

export const [AlertDialogProvider, useAlertDialogContext] =
  createContext<AlertDialogContext>({
    name: "AlertDialogContext",
    hookName: "useAlertDialogContext",
    providerName: "<AlertDialog />",
  });

export interface AlertDialogContext {
  readonly size: "sm" | "md" | "lg" | "xl";
  readonly isBarebone: boolean;
}
