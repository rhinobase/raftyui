import { createContext } from "@rhinobase/utils";

export const [ReferenceFieldProvider, useReferenceFieldContext] =
  createContext<ReferenceFieldContext>({
    name: "ReferenceFieldContext",
    hookName: "useReferenceFieldContext",
    providerName: "<ReferenceField />",
  });

export interface ReferenceFieldContext {
  selected?: string;
}
