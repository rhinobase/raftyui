import { createContext } from "../utils/client/index.js";
import type { SizeType } from "../utils/index.js";

export const [AlertDialogProvider, useAlertDialogContext] =
  createContext<AlertDialogContext>({
    name: "AlertDialogContext",
    hookName: "useAlertDialogContext",
    providerName: "<AlertDialog />",
  });

export interface AlertDialogContext {
  readonly size: SizeType<"xl">;
  readonly isUnstyled: boolean;
}
