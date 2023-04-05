import { classNames } from "@rhinobase/utils";
import React, { forwardRef } from "react";

export type Skeleton = JSX.IntrinsicElements["div"] & { loading?: boolean };

export const Skeleton = forwardRef<HTMLDivElement, Skeleton>(
  ({ loading = true, children, className, ...props }, forwardedRef) => {
    if (!loading) return <>{children}</>;
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
