import { createContext } from "../utils";

export const [AvatarGroupProvider, useAvatarGroupContext] =
  createContext<AvatarGroupContext>({
    strict: false,
    name: "AvatarGroupContext",
    hookName: "useAvatarGroupContext",
    providerName: "<AvatarGroup />",
  });

export interface AvatarGroupContext {
  size: "sm" | "md" | "lg";
}
