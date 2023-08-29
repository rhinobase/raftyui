import { createContext } from "../utils";

export const [InputGroupProvider, useInputGroupContext] =
  createContext<InputGroupContext>({
    strict: false,
    name: "InputGroupContext",
    hookName: "useInputGroupContext",
    providerName: "<InputGroup />",
  });

export interface InputGroupContext {
  isLeftAddon: boolean;
  isRightAddon: boolean;
  isPrefix: boolean;
  isSuffix: boolean;
}
