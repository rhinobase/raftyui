import { createContext } from "../utils/client/index.js";
import type { SizeType } from "../utils/index.js";

export const [AlertProvider, useAlertContext] = createContext<AlertContext>({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />",
});

export interface AlertContext {
  readonly size: SizeType;
  readonly status: "success" | "warning" | "error" | "info";
  readonly variant: "simple" | "solid" | "left-accent" | "top-accent";
  readonly isUnstyled: boolean;
}
