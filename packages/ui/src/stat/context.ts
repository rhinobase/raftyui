import { createContext } from "../utils/client/index.js";

export const [StatProvider, useStatContext] = createContext<StatContext>({
  name: "StatContext",
  hookName: "useStatContext",
  providerName: "<Stat />",
});

export interface StatContext {
  readonly type: "increase" | "decrease" | "normal";
}
