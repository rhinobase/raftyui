import { createContext } from "@rafty/shared";

export const [TabProvider, useTabContext] = createContext<TabContext>({
  name: "TabContext",
  hookName: "useTabContext",
  providerName: "<Tab />",
});

export interface TabContext {
  readonly size: "sm" | "md" | "lg";
  readonly variant: "line" | "enclosed";
  readonly orientation: "horizontal" | "vertical";
  readonly isUnstyled: boolean;
}
