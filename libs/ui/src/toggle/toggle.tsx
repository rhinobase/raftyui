"use client";
import React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import { classNames } from "@rafty/utils";

export const toggleVariants = cva(
  "flex whitespace-nowrap items-center justify-center font-semibold h-max transition-all border select-none text-secondary-600 dark:text-secondary-200",
  {
    variants: {
      variant: {
        solid:
          "border-transparent data-[state=on]:bg-secondary-300 data-[state=on]:dark:bg-secondary-400/80 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-secondary-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
        outline:
          "border-secondary-300 dark:border-secondary-700 data-[state=on]:bg-secondary-200/80 data-[state=on]:dark:bg-secondary-700/80 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-secondary-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
        ghost:
          "border-transparent data-[state=on]:bg-secondary-200/80 data-[state=on]:dark:bg-secondary-700/80 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-secondary-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      },
      size: {
        md: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "ghost",
      size: "md",
    },
  },
);

// Toggle component
export type Toggle = React.ComponentPropsWithoutRef<
  typeof TogglePrimitive.Root
> &
  VariantProps<typeof toggleVariants>;

export const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  Toggle
>(({ children, className, variant, size, ...props }, forwardedref) => (
  <TogglePrimitive.Root
    ref={forwardedref}
    className={classNames(toggleVariants({ variant, size, className }))}
    {...props}
  >
    {children}
  </TogglePrimitive.Root>
));

Toggle.displayName = "Toggle";
