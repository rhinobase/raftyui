import { HTMLAttributes, forwardRef } from "react";
import { classNames } from "../utils";
import { cva, type VariantProps } from "class-variance-authority";

const badgeClasses = cva("rounded-full", {
  variants: {
    size: {
      sm: "w-2 h-2",
      md: "w-2.5 h-2.5",
      lg: "w-3 h-3",
    },
    status: {
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

export type Badge = Omit<HTMLAttributes<HTMLDivElement>, "children"> &
  VariantProps<typeof badgeClasses>;

export const Badge = forwardRef<HTMLDivElement, Badge>(
  ({ className, size, status, ...props }, forwardedRef) => {
    return (
      <div
        {...props}
        className={classNames(badgeClasses({ size, status }), className)}
        ref={forwardedRef}
      />
    );
  },
);
Badge.displayName = "Badge";
