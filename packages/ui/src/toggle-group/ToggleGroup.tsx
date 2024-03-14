"use client";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { cva } from "class-variance-authority";
import { type ComponentProps, forwardRef } from "react";
import { classNames } from "../utils";
import {
  type ToggleGroupContext,
  ToggleGroupProvider,
  useToggleGroupContext,
} from "./context";

// ToggleGroup Component
export type ToggleGroup = ComponentProps<typeof ToggleGroupPrimitive.Root> &
  Partial<ToggleGroupContext>;

export const ToggleGroup = forwardRef<HTMLDivElement, ToggleGroup>(
  (
    { children, className, size = "md", isUnstyled = false, ...props },
    forwardedRef,
  ) => {
    const unstyle = isUnstyled;

    return (
      <ToggleGroupProvider value={{ size, isUnstyled }}>
        <ToggleGroupPrimitive.Root
          {...props}
          className={
            unstyle
              ? className
              : classNames(
                  "dark:divide-secondary-700 dark:border-secondary-700 flex w-full items-center divide-x overflow-hidden rounded-md border",
                  className,
                )
          }
          ref={forwardedRef}
        >
          {children}
        </ToggleGroupPrimitive.Root>
      </ToggleGroupProvider>
    );
  },
);
ToggleGroup.displayName = "ToggleGroup";

// ToggleItem Component
export const toggleGroupItemClasses = cva(
  "data-[state=on]:bg-primary-50 data-[state=on]:text-primary-500 dark:data-[state=on]:text-primary-300 dark:text-secondary-200 data-[state=on]:dark:bg-primary-300/20 flex w-full items-center justify-center font-semibold transition-all",
  {
    variants: {
      size: {
        sm: "px-3 py-[2px] text-sm",
        md: "px-3 py-1",
        lg: "px-3 py-2 text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type ToggleGroupItem = ComponentProps<
  typeof ToggleGroupPrimitive.Item
> & { isUnstyled?: boolean };

export const ToggleGroupItem = forwardRef<HTMLButtonElement, ToggleGroupItem>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { size, isUnstyled: isParentUnstyled } = useToggleGroupContext();
    const unstyle = isParentUnstyled || isUnstyled;

    return (
      <ToggleGroupPrimitive.Item
        className={
          unstyle
            ? className
            : classNames(toggleGroupItemClasses({ size }), className)
        }
        {...props}
        ref={forwardedRef}
      >
        {children}
      </ToggleGroupPrimitive.Item>
    );
  },
);
ToggleGroupItem.displayName = "ToggleGroupItem";
