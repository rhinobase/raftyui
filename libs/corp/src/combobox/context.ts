import { createContext } from "@rafty/ui";
import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { ComboboxOptionType } from "./types";

export const [ComboboxProvider, useComboboxContext] =
  createContext<ComboboxContext>({
    name: "ComboboxContext",
    hookName: "useComboboxContext",
    providerName: "<Combobox />",
  });

export type ComboboxContext = {
  readonly name: string;
  readonly type: "single" | "multi";
  readonly options: ComboboxOptionType[];
  readonly isDisabled: boolean;
  readonly isLoading: boolean;
  readonly isReadonly: boolean;
  readonly isInvalid: boolean;
  readonly placeholder?: {
    readonly trigger?: string;
    readonly search?: string;
  };
  readonly isOpen: boolean;
  readonly setOpen: Dispatch<SetStateAction<boolean>>;
  readonly selected: (string | number)[];
  readonly onSelectionChange: Dispatch<string | number | null>;
};
