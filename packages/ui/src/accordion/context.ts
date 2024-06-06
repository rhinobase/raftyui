import { type SizeType, createContext } from "../utils";

export const [AccordionProvider, useAccordionContext] =
  createContext<AccordionContext>({
    name: "AccordionContext",
    hookName: "useAccordionContext",
    providerName: "<Accordion />",
  });

export interface AccordionContext {
  readonly size: SizeType;
  readonly variant: "solid" | "ghost";
  readonly isUnstyled: boolean;
}
