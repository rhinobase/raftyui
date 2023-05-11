import { forwardRef, ReactNode } from "react";
import { classNames } from "../utils";
import { cva } from "class-variance-authority";

const tagClasses = cva("h-max w-max font-medium", {
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
      error:
        "text-error-500 dark:text-error-300 bg-error-200/40 dark:bg-error-300/10",
      success:
        "text-success-600 dark:text-success-300 bg-success-200/40 dark:bg-success-300/10",
      warning:
        "text-warning-600 dark:text-warning-300 bg-warning-200/40 dark:bg-warning-300/10",
    },
  },
});

export type Tag = {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  colorScheme?: "primary" | "secondary" | "error" | "success" | "warning";
};

export const Tag = forwardRef<HTMLDivElement, Tag>(
  (
    { children, size = "md", colorScheme = "secondary", className, ...props },
    forwardedRef
  ) => {
    return (
      <div
        {...props}
        className={classNames(tagClasses({ size, colorScheme }), className)}
        ref={forwardedRef}
      >
        {children}
      </div>
    );
  }
);

Tag.displayName = "Tag";
