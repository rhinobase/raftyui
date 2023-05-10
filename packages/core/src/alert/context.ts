import { createContext } from "../utils/context";

export const [AlertProvider, useAlertContext] = createContext<AlertContext>({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />",
});

export interface AlertContext {
  size: "sm" | "md" | "lg";
  status: "success" | "warning" | "error" | "info";
  variant: "simple" | "solid" | "left-accent" | "top-accent";
  isBarebone: boolean;
}
