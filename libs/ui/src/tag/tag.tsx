import React from "react";
import { classNames } from "../utils";
import { cva } from "class-variance-authority";

// Tag Component
export const tagClasses = cva("h-max w-max font-medium", {
  variants: {
    size: {
      sm: "rounded-sm px-2 text-sm",
      md: "rounded-base px-2.5",
      lg: "rounded-md px-3 py-0.5 text-lg",
    },
    colorScheme: {
      primary:
        "text-primary-500 dark:text-primary-300 bg-primary-200/30 dark:bg-primary-400/10",
      secondary:
        "bg-secondary-200/60 dark:bg-secondary-700/50 dark:text-secondary-100",
      error: "text-red-500 dark:text-red-300 bg-red-200/40 dark:bg-red-300/10",
      success:
        "text-green-600 dark:text-green-300 bg-green-200/40 dark:bg-green-300/10",
      warning:
        "text-amber-600 dark:text-amber-300 bg-amber-200/40 dark:bg-amber-300/10",
    },
  },
  defaultVariants: {
    size: "md",
    colorScheme: "secondary",
  },
});

export type Tag = React.HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md" | "lg";
  colorScheme?: "primary" | "secondary" | "error" | "success" | "warning";
};

export const Tag = React.forwardRef<HTMLDivElement, Tag>(
  (
    { size = "md", colorScheme = "secondary", className, ...props },
    forwardedRef,
  ) => {
    return (
      <div
        {...props}
        className={classNames(tagClasses({ size, colorScheme }), className)}
        ref={forwardedRef}
      />
    );
  },
);

Tag.displayName = "Tag";
