import { createContext } from "../utils";

export const [AlertProvider, useAlertContext] = createContext<AlertContext>({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />",
});

export interface AlertContext {
  readonly size: "sm" | "md" | "lg";
  readonly status: "success" | "warning" | "error" | "info";
  readonly variant: "simple" | "solid" | "left-accent" | "top-accent";
  readonly isBarebone: boolean;
}
