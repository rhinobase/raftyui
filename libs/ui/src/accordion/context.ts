import { createContext } from "@rafty/shared";

export const [AccordionProvider, useAccordionContext] =
  createContext<AccordionContext>({
    name: "AccordionContext",
    hookName: "useAccordionContext",
    providerName: "<Accordion />",
  });

export interface AccordionContext {
  readonly size: "sm" | "md" | "lg";
  readonly variant: "solid" | "ghost";
  readonly isUnstyled: boolean;
}
