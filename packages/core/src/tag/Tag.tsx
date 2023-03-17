import { classNames } from "@rhinobase/utils";
import React, { forwardRef, ReactNode } from "react";

export type Tag = {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  colorScheme?: "primary" | "secondary" | "error" | "success" | "warning";
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
};

export const Tag = forwardRef<HTMLDivElement, Tag>(
  (
    {
      children,
      size = "md",
      colorScheme = "secondary",
      leftIcon,
      rightIcon,
      className,
      ...props
    },
    forwardedRef,
  ) => {
    return (
      <div
        {...props}
        className={classNames(
          size == "sm" && "rounded-sm px-2 text-sm",
          size == "md" && "rounded-[4px] px-2.5",
          size == "lg" && "rounded-md px-3 py-0.5 text-lg",
          colorScheme == "primary" &&
            "text-primary-500 dark:text-primary-300 bg-primary-200/30 dark:bg-primary-400/10",
          colorScheme == "secondary" &&
            "bg-secondary-200/60 dark:bg-secondary-700/50 dark:text-secondary-100",
          colorScheme == "error" &&
            "text-error-500 dark:text-error-300 bg-error-200/40 dark:bg-error-300/10",
          colorScheme == "success" &&
            "text-success-600 dark:text-success-300 bg-success-200/40 dark:bg-success-300/10",
          colorScheme == "warning" &&
            "text-warning-600 dark:text-warning-300 bg-warning-200/40 dark:bg-warning-300/10",
          "h-max w-max font-medium",
          className,
        )}
        ref={forwardedRef}
      >
        {children}
      </div>
    );
  },
);

Tag.displayName = "Tag";
