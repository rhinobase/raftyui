import React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { classNames } from "../utils";
import { cva } from "class-variance-authority";

export const progressClasses = cva(
  "bg-secondary-100 dark:bg-secondary-700 w-full overflow-hidden",
  {
    variants: {
      size: {
        sm: "h-2",
        md: "h-3",
        lg: "h-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const progressIndicatorClasses = cva("h-full flex-1 transition-all", {
  variants: {
    colorScheme: {
      error:
        "bg-red-500 dark:bg-red-300 group-data-[indeterminate=true]:bg-gradient-to-r group-data-[indeterminate=true]:from-red-300 group-data-[indeterminate=true]:via-red-500 group-data-[indeterminate=true]:to-red-300",
      warning:
        "bg-amber-500 dark:bg-amber-300 group-data-[indeterminate=true]:bg-gradient-to-r group-data-[indeterminate=true]:from-amber-300 group-data-[indeterminate=true]:via-amber-500 group-data-[indeterminate=true]:to-amber-300",
      primary:
        "bg-primary-500 dark:bg-primary-300 group-data-[indeterminate=true]:bg-gradient-to-r group-data-[indeterminate=true]:from-primary-300 group-data-[indeterminate=true]:via-primary-500 group-data-[indeterminate=true]:to-primary-300",
      success:
        "bg-green-500 dark:bg-green-300 group-data-[indeterminate=true]:bg-gradient-to-r group-data-[indeterminate=true]:from-green-300 group-data-[indeterminate=true]:via-green-500 group-data-[indeterminate=true]:to-green-300",
    },
  },
  defaultVariants: {
    colorScheme: "primary",
  },
});

// Progress Component
export type Progress = React.ComponentPropsWithoutRef<
  typeof ProgressPrimitive.Root
> & {
  size?: "sm" | "md" | "lg";
  colorScheme?: "error" | "warning" | "primary" | "success";
  indicatorClassName?: string;
};

export const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  Progress
>(
  (
    {
      className,
      indicatorClassName,
      value,
      size = "md",
      colorScheme = "primary",
      ...props
    },
    forwardedRef,
  ) => (
    <ProgressPrimitive.Root
      {...props}
      className={classNames(progressClasses({ size }), className)}
      ref={forwardedRef}
    >
      <ProgressPrimitive.Indicator
        className={classNames(
          progressIndicatorClasses({ colorScheme }),
          indicatorClassName,
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  ),
);
Progress.displayName = "Progress";
