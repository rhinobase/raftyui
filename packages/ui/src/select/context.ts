"use client";
import { createContext } from "../utils/client/index.js";
import type { SizeType } from "../utils/index.js";

export const [SelectProvider, useSelectContext] = createContext<SelectContext>({
  name: "SelectContext",
  hookName: "useSelectContext",
  providerName: "<Select />",
});

export interface SelectContext {
  readonly size: SizeType;
}
