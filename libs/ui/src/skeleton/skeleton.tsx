import React from "react";
import { classNames } from "../utils";

// Skeleton Component
export type Skeleton = React.HTMLAttributes<HTMLDivElement>;

export const Skeleton = React.forwardRef<HTMLDivElement, Skeleton>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <div
        {...props}
        className={classNames(
          "bg-secondary-200 dark:bg-secondary-700 animate-pulse",
          className,
        )}
        ref={forwardedRef}
      />
    );
  },
);
Skeleton.displayName = "Skeleton";
