import type { AvatarGroupContext } from "./context.js";

/**
 * Calculate the max width for AvatarGroup
 */
export function calculateWidth(
  size: AvatarGroupContext["size"],
  length: number
) {
  switch (size) {
    case "sm":
      return 6 + length * 22;
    case "md":
      return 8 + length * 28;
    case "lg":
      return 11 + length * 37;
    default:
      return 0;
  }
}
