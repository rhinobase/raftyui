import { createContext } from "@rafty/ui";
import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { ComboboxOption } from "./Combobox";

export const [ComboboxProvider, useComboboxContext] =
  createContext<ComboboxContext>({
    name: "ComboboxContext",
    hookName: "useComboboxContext",
    providerName: "<Combobox />",
  });

export type ComboboxContext = {
  readonly name: string;
  readonly type: "single" | "multi";
  readonly options: ComboboxOption[];
  readonly isDisabled: boolean;
  readonly isLoading: boolean;
  readonly isReadonly: boolean;
  readonly isInvalid: boolean;
  readonly triggerRef: MutableRefObject<null>;
  readonly contentWidth: number;
  readonly placeholder?: {
    readonly trigger?: string;
    readonly search?: string;
  };
  readonly isOpen: boolean;
  readonly setOpen: Dispatch<SetStateAction<boolean>>;
  readonly value: (string | number)[];
  readonly onChange: Dispatch<string | number | null>;
};
