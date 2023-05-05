import { createContext } from "../utils/context";

export const [CardProvider, useCardContext] = createContext<CardContext>({
  name: "CardContext",
  hookName: "useCardContext",
  providerName: "<Card />",
});

export interface CardContext {
  size: "sm" | "md" | "lg";
  variant: "solid" | "outline" | "elevated";
  barebone: boolean;
}
