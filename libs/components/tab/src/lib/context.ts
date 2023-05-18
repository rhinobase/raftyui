import { createContext } from "@rhino/utils";

export const [TabProvider, useTabContext] = createContext<TabContext>({
  name: "TabContext",
  hookName: "useTabContext",
  providerName: "<Tab />",
});

export interface TabContext {
  size: "sm" | "md" | "lg";
  variant: "line" | "enclosed";
  orientation: "horizontal" | "vertical";
  isBarebone: boolean;
}
