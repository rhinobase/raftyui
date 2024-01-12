import { createContext } from "@rafty/shared";

export const [InputGroupProvider, useInputGroupContext] =
  createContext<InputGroupContext>({
    strict: false,
    name: "InputGroupContext",
    hookName: "useInputGroupContext",
    providerName: "<InputGroup />",
  });

export interface InputGroupContext {
  readonly isLeftAddon: boolean;
  readonly isRightAddon: boolean;
  readonly isPrefix: boolean;
  readonly isSuffix: boolean;
  readonly size: "sm" | "md" | "lg";
  readonly inputRef: React.RefObject<HTMLInputElement>;
}
