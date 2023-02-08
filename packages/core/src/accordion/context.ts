import { createContext } from "@rhinobase/utils";

export const [AccordionProvider, useAccordionContext] =
  createContext<AccordionContext>({
    name: "AccordionContext",
    hookName: "useAccordionContext",
    providerName: "<Accordion />",
  });

export interface AccordionContext {
  size?: "sm" | "md" | "lg";
}
