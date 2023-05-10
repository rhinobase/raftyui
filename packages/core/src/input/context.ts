import { createContext } from "../utils/context";

export const [InputGroupProvider, useInputGroupContext] =
  createContext<InputGroupContext>({
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
