import { createContext } from "../utils/context";

export const [AccordionProvider, useAccordionContext] =
  createContext<AccordionContext>({
    name: "AccordionContext",
    hookName: "useAccordionContext",
    providerName: "<Accordion />",
  });

export interface AccordionContext {
  size: "sm" | "md" | "lg";
  variant: "solid" | "ghost";
  isBarebone: boolean;
}
