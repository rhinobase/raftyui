"use client";
import type { ValueOrFunction } from "../types";
import { createContext } from "../utils";

export const [TagFieldProvider, useTagFieldContext] =
  createContext<TagFieldContext>({
    name: "TagFieldContext",
    hookName: "useTagFieldContext",
    providerName: "<TagField />",
  });

export interface TagFieldContext {
  readonly size: "sm" | "md" | "lg";
  readonly isReadOnly: ValueOrFunction<boolean>;
  readonly isDisabled: ValueOrFunction<boolean>;
  readonly isLoading: ValueOrFunction<boolean>;
}
