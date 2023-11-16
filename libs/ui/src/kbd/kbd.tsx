import React from "react";
import { classNames } from "../utils";

// Kbd Component
export type Kbd = React.HTMLAttributes<HTMLElement> & {
  isUnstyled?: boolean;
};

export const Kbd = React.forwardRef<HTMLElement, Kbd>(
  ({ className, isUnstyled = false, ...props }, forwardRef) => (
    <kbd
      {...props}
      className={
        isUnstyled
          ? className
          : classNames(
              "text-secondary-600 border-secondary-300 dark:border-secondary-700/60 dark:text-secondary-300 rounded-md border px-1.5 text-sm font-medium shadow dark:shadow-none bg-secondary-50 dark:bg-secondary-800",
              className,
            )
      }
      ref={forwardRef}
    />
  ),
);
Kbd.displayName = "Kbd";
