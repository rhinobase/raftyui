import { classNames } from "@rhinobase/utils";
import React, { forwardRef, ReactNode } from "react";

export type Tag = {
  children: ReactNode;
  className: string;
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
          size == "sm" && "px-1 text-sm",
          size == "md" && "px-1 py-0.5",
          size == "lg" && "px-2 py-1 text-lg",
          colorScheme == "primary" && "bg-primary-500",
          colorScheme == "secondary" && "bg-secondary-300",
          colorScheme == "error" && "bg-error-500",
          colorScheme == "success" && "bg-success-500",
          colorScheme == "warning" && "bg-warning-500",
          colorScheme != "secondary" ? "text-white" : "bg-secondary-800",
          "rounded-sm font-medium",
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
