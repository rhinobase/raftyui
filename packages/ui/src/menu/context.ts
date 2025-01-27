import { type SizeType, createContext } from "../utils/index.js";

export const [MenuProvider, useMenuContext] = createContext<MenuContext>({
  name: "MenuContext",
  hookName: "useMenuContext",
  providerName: "<Menu />",
});

export interface MenuContext {
  readonly size: SizeType;
  readonly isUnstyled: boolean;
  readonly isDisabled: boolean;
}
