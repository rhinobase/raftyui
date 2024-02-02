import { HTMLAttributes, forwardRef } from "react";
import { classNames } from "../utils";

// Kbd Component
export type Kbd = HTMLAttributes<HTMLElement> & {
  isUnstyled?: boolean;
};

export const Kbd = forwardRef<HTMLElement, Kbd>(
  ({ className, isUnstyled = false, ...props }, forwardRef) => (
    <kbd
      {...props}
      className={
        isUnstyled
          ? className
          : classNames(
              "text-secondary-600 border-secondary-300 dark:border-secondary-700/60 dark:text-secondary-300 bg-secondary-50 dark:bg-secondary-800 rounded-md border px-1.5 text-sm font-medium shadow dark:shadow-none",
              className,
            )
      }
      ref={forwardRef}
    />
  ),
);
Kbd.displayName = "Kbd";
