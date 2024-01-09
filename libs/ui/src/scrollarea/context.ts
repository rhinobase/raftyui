import { createContext } from "@rafty/shared";
import { Layout } from "react-window";

export const [ScrollAreaProvider, useScrollAreaContext] =
  createContext<ScrollAreaContext>({
    name: "ScrollAreaContext",
    hookName: "useScrollAreaContext",
    providerName: "<ScrollArea />",
  });

export interface ScrollAreaContext {
  readonly layout: Layout;
  readonly itemCount: number;
}
