import { CheckboxGroupState } from "react-stately";
import { createContext } from "../utils/context";

export const [CheckboxGroupProvider, useCheckboxGroupContext] =
  createContext<CheckboxGroupState | null>({
    name: "CheckboxGroupContext",
    hookName: "useCheckboxGroupContext",
    providerName: "<CheckboxGroup />",
  });
