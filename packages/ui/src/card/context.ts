import { type SizeType, createContext } from "../utils";

export const [CardProvider, useCardContext] = createContext<CardContext>({
  name: "CardContext",
  hookName: "useCardContext",
  providerName: "<Card />",
});

export interface CardContext {
  readonly size: SizeType;
  readonly variant: "outline" | "elevated";
  readonly isUnstyled: boolean;
  readonly has: {
    header: boolean;
    footer: boolean;
  };
}
