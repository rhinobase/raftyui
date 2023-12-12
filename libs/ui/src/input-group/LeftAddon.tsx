import React from "react";
import { classNames } from "../utils";

export type LeftAddon = React.HTMLAttributes<HTMLDivElement>;

export const LeftAddon = React.forwardRef<HTMLDivElement, LeftAddon>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <div
        id="leftaddon"
        {...props}
        ref={forwardedRef}
        className={classNames(
          "bg-secondary-200 dark:bg-secondary-700 dark:text-secondary-200 flex items-center rounded-l-md px-3",
          className,
        )}
      >
        {children}
      </div>
    );
  },
);
LeftAddon.displayName = "LeftAddon";
