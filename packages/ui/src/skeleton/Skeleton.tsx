import { type HTMLAttributes, forwardRef } from "react";
import { classNames } from "../utils";

// Skeleton Component
export type Skeleton = HTMLAttributes<HTMLDivElement>;

export const Skeleton = forwardRef<HTMLDivElement, Skeleton>(
  ({ className, ...props }, forwardedRef) => (
    <div
      {...props}
      className={classNames(
        "bg-secondary-300 dark:bg-secondary-700 animate-pulse",
        className,
      )}
      ref={forwardedRef}
    />
  ),
);
Skeleton.displayName = "Skeleton";
