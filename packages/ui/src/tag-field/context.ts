"use client";
import { createContext } from "../utils";

export const [TagFieldProvider, useTagFieldContext] =
  createContext<TagFieldContext>({
    name: "TagFieldContext",
    hookName: "useTagFieldContext",
    providerName: "<TagField />",
  });

export interface TagFieldContext {
  readonly size: "sm" | "md" | "lg";
}
