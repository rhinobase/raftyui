import { type SizeType, createContext } from "../utils/index.js";

export const [AvatarGroupProvider, useAvatarGroupContext] =
  createContext<AvatarGroupContext>({
    strict: false,
    name: "AvatarGroupContext",
    hookName: "useAvatarGroupContext",
    providerName: "<AvatarGroup />",
  });

export interface AvatarGroupContext {
  readonly size: SizeType;
  readonly isUnstyled: boolean;
}
