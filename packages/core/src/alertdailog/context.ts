import { createContext } from "../utils/context";

export const [AlertDialogProvider, useAlertDialogContext] =
  createContext<AlertDialogContext>({
    name: "AlertDialogContext",
    hookName: "useAlertDialogContext",
    providerName: "<AlertDialog />",
  });

export interface AlertDialogContext {
  size: "sm" | "md" | "lg";
  isBarebone: boolean;
}
