import { createContext } from "../utils";

export const [ScrollAreaProvider, useScrollAreaContext] =
  createContext<ScrollAreaContext>({
    name: "ScrollAreaContext",
    hookName: "useScrollAreaContext",
    providerName: "<ScrollArea />",
  });

export interface ScrollAreaContext {
  readonly orientation: "horizontal" | "vertical";
  readonly itemCount: number;
}
