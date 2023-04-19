import { createContext } from "@rhinobase/utils";

export const [FieldControlProvider, useFieldControlContext] =
  createContext<FieldControlContext>({
    name: "FieldControlContext",
    hookName: "useFieldControlContext",
    providerName: "<FieldControl />",
  });

export interface FieldControlContext {
  name: string;
  orientation?: "row" | "col" | "row-reverse";
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  invalid?: boolean;
  isDev?: boolean;
  loading?: boolean;
}
