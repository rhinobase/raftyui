"use client";
import { createContext } from "@rafty/shared";

export const [ThemeEditorProvider, useThemeEditorContext] =
  createContext<ThemeEditorContext>({
    name: "ThemeEditorContext",
    hookName: "useThemeEditorContext",
    providerName: "<ThemeEditor />",
  });

export interface ThemeEditorContext {
  readonly isDisabled: boolean;
}
