import { HTMLAttributes, forwardRef } from "react";
import { classNames } from "@rafty/utils";

export type Skeleton = HTMLAttributes<HTMLDivElement>;

export const Skeleton = forwardRef<HTMLDivElement, Skeleton>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <div
        {...props}
        className={classNames(
          "bg-secondary-200 dark:bg-secondary-700 animate-pulse",
          className
        )}
        ref={forwardedRef}
      />
    );
  }
);
Skeleton.displayName = "Skeleton";
