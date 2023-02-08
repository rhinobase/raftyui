import { forwardRef } from "react";
import { classNames } from "@rhinobase/utils";
import React from "react";

type KBDProps = {
  size?: "sm" | "md" | "lg";
};

// Kdb Component
export const Kbd = forwardRef<
  HTMLElement,
  JSX.IntrinsicElements["kbd"] & KBDProps
>(({ children, className = "", ...props }, forwardRef) => (
  <kbd
    {...props}
    className={classNames(
      "rounded-md border border-b-4 px-base text-xs text-secondary-500 dark:border-secondary-600 dark:bg-secondary-800 dark:text-secondary-300",
      className
    )}
    ref={forwardRef}
  >
    {children}
  </kbd>
));
