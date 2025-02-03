"use client";
import {
  Progress as ArkProgress,
  type ProgressRootProps,
  useProgressContext,
} from "@ark-ui/react";
import { cva } from "class-variance-authority";
import { type ElementRef, forwardRef } from "react";
import { type SizeType, classNames } from "../utils/index.js";

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
  "bg-secondary-200 dark:bg-secondary-700 w-full",
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

export const progressIndicatorClasses = cva("h-full", {
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

export type Progress = Omit<ProgressRootProps, "orientation"> & {
  size?: SizeType;
  colorScheme?: "error" | "warning" | "primary" | "success" | "secondary";
};

export const Progress = forwardRef<
  ElementRef<typeof ArkProgress.Root>,
  Progress
>(function Progress(
  { className, size = "md", colorScheme = "primary", ...props },
  forwardedRef,
) {
  return (
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
      <ProgressValue size={size} />
    </ArkProgress.Root>
  );
});

export const progressTextClasses = cva(
  "text-secondary-600 dark:text-secondary-400",
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

export type ProgressValue = {
  size: SizeType;
};

export function ProgressValue(props: ProgressValue) {
  const { value } = useProgressContext();

  return (
    <ArkProgress.ValueText asChild>
      <p className={progressTextClasses({ size: props.size })}>{value}%</p>
    </ArkProgress.ValueText>
  );
}
