"use client";
import React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { classNames } from "../utils";

const progressClasses = {
  size: {
    sm: "h-2",
    md: "h-3",
    lg: "h-4",
  },
  colorScheme: {
    error:
      "bg-error-500 dark:bg-error-300 group-data-[indeterminate=true]:bg-gradient-to-r group-data-[indeterminate=true]:from-error-300 group-data-[indeterminate=true]:via-error-500 group-data-[indeterminate=true]:to-error-300",
    warning:
      "bg-warning-500 dark:bg-warning-300 group-data-[indeterminate=true]:bg-gradient-to-r group-data-[indeterminate=true]:from-warning-300 group-data-[indeterminate=true]:via-warning-500 group-data-[indeterminate=true]:to-warning-300",
    primary:
      "bg-primary-500 dark:bg-primary-300 group-data-[indeterminate=true]:bg-gradient-to-r group-data-[indeterminate=true]:from-primary-300 group-data-[indeterminate=true]:via-primary-500 group-data-[indeterminate=true]:to-primary-300",
    success:
      "bg-success-500 dark:bg-success-300 group-data-[indeterminate=true]:bg-gradient-to-r group-data-[indeterminate=true]:from-success-300 group-data-[indeterminate=true]:via-success-500 group-data-[indeterminate=true]:to-success-300",
  },
};

// Progress Component
export type Progress = React.ComponentPropsWithoutRef<
  typeof ProgressPrimitive.Root
> & {
  size?: "sm" | "md" | "lg";
  colorScheme?: "error" | "warning" | "primary" | "success";
};

export const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  Progress
>(
  (
    { className, value, size = "md", colorScheme = "primary", ...props },
    ref,
  ) => (
    <ProgressPrimitive.Root
      ref={ref}
      {...props}
      className={classNames(
        progressClasses.size[size],
        "bg-secondary-700 overflow-hidden",
      )}
    >
      <ProgressPrimitive.Indicator
        className={classNames(
          progressClasses.colorScheme[colorScheme],
          "h-full flex-1 bg-primary transition-all",
          className,
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  ),
);
Progress.displayName = "Progress";
