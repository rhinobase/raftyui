import { createContext } from "@rhinobase/lib/hooks/context";

export const [AlertDialogProvider, useAlertDialogContext] = createContext<AlertDialogContext>({
  name: "AlertDialogContext",
  hookName: "useAlertDialogContext",
  providerName: "<AlertDialog />",
});

export interface AlertDialogContext {
  size?: "sm" | "md" | "lg";
}
