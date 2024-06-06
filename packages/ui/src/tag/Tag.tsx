import { cva } from "class-variance-authority";
import { type HTMLAttributes, forwardRef } from "react";
import { type SizeType, classNames } from "../utils";

export const tagClasses = cva("size-max font-medium select-none leading-none", {
  variants: {
    size: {
      sm: "rounded-sm px-1 py-0.5 text-xs",
      md: "rounded-base px-1.5 py-1 text-sm",
      lg: "rounded-md px-2 py-1.5 text-base",
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

export type Tag = HTMLAttributes<HTMLDivElement> & {
  size?: SizeType;
  colorScheme?: "primary" | "secondary" | "error" | "success" | "warning";
};

export const Tag = forwardRef<HTMLDivElement, Tag>(function Tag(
  { size = "md", colorScheme = "secondary", className, ...props },
  forwardedRef,
) {
  return (
    <div
      {...props}
      className={classNames(tagClasses({ size, colorScheme }), className)}
      ref={forwardedRef}
    />
  );
});
