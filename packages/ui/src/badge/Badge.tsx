import { cva } from "class-variance-authority";
import { type HTMLAttributes, forwardRef } from "react";
import { type SizeType, classNames } from "../utils/index.js";

export const badgeClasses = cva("rounded-full", {
  variants: {
    size: {
      sm: "size-2",
      md: "size-2.5",
      lg: "size-3",
    },
    status: {
      primary: "bg-primary-500 dark:bg-primary-300",
      secondary: "bg-secondary-500 dark:bg-secondary-300",
      success: "bg-green-500 dark:bg-green-300",
      warning: "bg-amber-500 dark:bg-amber-300",
      error: "bg-red-500 dark:bg-red-300",
      info: "bg-blue-500 dark:bg-blue-300",
    },
  },
  defaultVariants: {
    size: "md",
    status: "secondary",
  },
});

export type Badge = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  size?: SizeType;
  status?: "primary" | "secondary" | "success" | "warning" | "error" | "info";
};

export const Badge = forwardRef<HTMLDivElement, Badge>(function Badge(
  { className, size = "md", status = "primary", ...props },
  forwardedRef,
) {
  return (
    <div
      {...props}
      className={classNames(badgeClasses({ size, status }), className)}
      ref={forwardedRef}
    />
  );
});
