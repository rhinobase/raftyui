/**
 * Calculate the max width for AvatarGroup
 * @param {"sm" | "md" | "lg"} size - Size of the AvatarGroup component
 * @param {number} length - No of Avatar components in the group
 * @returns {number} The width of the AvatarGroup
 */
export function calculateWidth(size, length) {
  switch (size) {
    case "sm":
      return 28 + length * 22;
    case "md":
      return 36 + length * 28;
    case "lg":
      return 48 + length * 37;
    default:
      return 0;
  }
}
