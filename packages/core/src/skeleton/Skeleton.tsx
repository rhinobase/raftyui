import { forwardRef } from "react";
import { classNames } from "../utils";

export type Skeleton = JSX.IntrinsicElements["div"];

export const Skeleton = forwardRef<HTMLDivElement, Skeleton>(
  ({ children, className, ...props }, forwardedRef) => {
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
