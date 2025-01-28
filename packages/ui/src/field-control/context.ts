import { createContext } from "../utils/client/index.js";

export const [FieldControlProvider, useFieldControlContext] =
  createContext<FieldControlContext>({
    strict: false,
    name: "FieldControlContext",
    hookName: "useFieldControlContext",
    providerName: "<FieldControl />",
  });

export interface FieldControlContext {
  readonly name: string;
  readonly orientation: "row" | "col" | "row-reverse";
  readonly isRequired: boolean;
  readonly isDisabled: boolean;
  readonly isReadOnly: boolean;
  readonly isInvalid: boolean;
  readonly isLoading: boolean;
}
