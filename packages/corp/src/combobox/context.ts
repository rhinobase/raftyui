import { createContext } from "@rafty/ui";
import type { Dispatch, RefObject, SetStateAction } from "react";
import type { ComboboxOptionType } from "./types";

export const [ComboboxProvider, useComboboxContext] =
  createContext<ComboboxContext>({
    name: "ComboboxContext",
    hookName: "useComboboxContext",
    providerName: "<Combobox />",
  });

export type ComboboxContext = {
  readonly id?: string;
  readonly type?: "single" | "multi";
  readonly options: ComboboxOptionType[];
  readonly isDisabled: boolean;
  readonly isLoading: boolean;
  readonly isReadOnly: boolean;
  readonly isInvalid: boolean;
  readonly placeholder?: {
    readonly trigger?: string;
    readonly search?: string;
  };
  readonly triggerRef: RefObject<HTMLButtonElement>;
  readonly isOpen: boolean;
  readonly setOpen: Dispatch<SetStateAction<boolean>>;
  readonly selected: (string | number)[];
  readonly onSelectionChange: Dispatch<string | number | null>;
};
