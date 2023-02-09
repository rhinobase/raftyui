import { forwardRef } from "react";
import { classNames } from "@rhinobase/utils";
import React from "react";

export type Kbd = {
  size?: "sm" | "md" | "lg";
} & JSX.IntrinsicElements["kbd"];

// Kdb Component
export const Kbd = forwardRef<HTMLElement, Kbd>(
  ({ children, className = "", ...props }, forwardRef) => (
    <kbd
      {...props}
      className={classNames(
        "px-base text-secondary-500 dark:border-secondary-600 dark:bg-secondary-800 dark:text-secondary-300 rounded-md border border-b-4 text-xs",
        className,
      )}
      ref={forwardRef}
    >
      {children}
    </kbd>
  ),
);
