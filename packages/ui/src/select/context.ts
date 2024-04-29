"use client";
import { createContext } from "../utils";

export const [SelectProvider, useSelectContext] = createContext<SelectContext>({
  name: "SelectContext",
  hookName: "useSelectContext",
  providerName: "<Select />",
});

export interface SelectContext {
  readonly size: "sm" | "md" | "lg";
}
