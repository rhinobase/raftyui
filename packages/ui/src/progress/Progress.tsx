import { Progress as ArkProgress } from "@ark-ui/react";
import { cva } from "class-variance-authority";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import { classNames } from "../utils";

export const progressClasses = cva("flex w-full items-center flex-col", {
  variants: {
    size: {
      sm: "gap-1.5",
      md: "gap-2",
      lg: "gap-2.5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const progressTrackClasses = cva(
  "bg-secondary-100 dark:bg-secondary-700 rounded-lg w-full",
  {
    variants: {
      size: {
        sm: "h-1",
        md: "h-2",
        lg: "h-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const progressIndicatorClasses = cva("h-full rounded-lg", {
  variants: {
    colorScheme: {
      error: "bg-red-500 dark:bg-red-300",
      warning: "bg-amber-500 dark:bg-amber-300",
      primary: "bg-primary-500 dark:bg-primary-300",
      success: "bg-green-500 dark:bg-green-300",
      secondary: "bg-secondary-500 dark:bg-secondary-300",
    },
  },
  defaultVariants: {
    colorScheme: "primary",
  },
});

export const progressTextClasses = cva(
  "text-secondary-500 dark:text-secondary-400",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

// Progress Component
export type Progress = Omit<
  ComponentPropsWithoutRef<typeof ArkProgress.Root>,
  "orientation"
> & {
  size?: "sm" | "md" | "lg";
  colorScheme?: "error" | "warning" | "primary" | "success" | "secondary";
};

export const Progress = forwardRef<
  ElementRef<typeof ArkProgress.Root>,
  Progress
>(
  (
    { className, size = "md", colorScheme = "primary", ...props },
    forwardedRef,
  ) => (
    <ArkProgress.Root
      {...props}
      className={classNames(progressClasses({ size }), className)}
      ref={forwardedRef}
    >
      <ArkProgress.Track className={progressTrackClasses({ size })}>
        <ArkProgress.Range
          className={progressIndicatorClasses({ colorScheme })}
        />
      </ArkProgress.Track>
      <ArkProgress.ValueText className={progressTextClasses({ size })} />
    </ArkProgress.Root>
  ),
);
Progress.displayName = "Progress";
