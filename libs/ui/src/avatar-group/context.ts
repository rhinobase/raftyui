import { createContext } from "@rafty/shared";

export const [AvatarGroupProvider, useAvatarGroupContext] =
  createContext<AvatarGroupContext>({
    strict: false,
    name: "AvatarGroupContext",
    hookName: "useAvatarGroupContext",
    providerName: "<AvatarGroup />",
  });

export interface AvatarGroupContext {
  readonly size: "sm" | "md" | "lg";
}
