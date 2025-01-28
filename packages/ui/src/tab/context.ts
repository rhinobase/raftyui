import { createContext } from "../utils/client/index.js";
import type { SizeType } from "../utils/index.js";

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
