import { type SizeType, createContext } from "../utils";

export const [TabProvider, useTabContext] = createContext<TabContext>({
  name: "TabContext",
  hookName: "useTabContext",
  providerName: "<Tab />",
});

export interface TabContext {
  readonly size: SizeType;
  readonly variant: "line" | "enclosed";
  readonly isUnstyled: boolean;
}
