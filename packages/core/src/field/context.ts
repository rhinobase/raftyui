import { createContext } from "@rhinobase/utils";
import { FieldControl } from "./FieldControl";

export const [FieldProvider, useFieldControl] = createContext<FieldControl>({
  name: "FieldControl",
  hookName: "useFieldControl",
  providerName: "<FieldControlProvider />",
});

export function useFieldControlProvider(name: string, type: string) {
  const orientation = "col",
    required = false,
    disabled = false,
    readOnly = false,
    hidden = false,
    invalid = false,
    isDev = false,
    isLoading = false;

  return {
    name,
    orientation,
    required,
    disabled,
    readOnly,
    hidden,
    invalid,
    isDev,
    isLoading,
  };
}
