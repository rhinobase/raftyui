import { createContext } from "@rhinobase/lib/hooks/context";

export const [FieldProvider, useFieldControl] = createContext<IFieldControl>({
  name: "FieldControl",
  hookName: "useFieldControl",
  providerName: "<FieldControlProvider />",
});

export interface IFieldControl {
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
