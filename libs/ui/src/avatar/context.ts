import { createContext } from "@rafty/utils";

export const [AvatarGroupProvider, useAvatarGroupContext] =
  createContext<AvatarGroupContext>({
    name: "AvatarGroupContext",
    hookName: "useAvatarGroupContext",
    providerName: "<AvatarGroup />",
  });

export interface AvatarGroupContext {
  size: "sm" | "md" | "lg";
}
