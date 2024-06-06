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

export const toggleGroupClasses = cva(
  "dark:divide-secondary-700 dark:border-secondary-700 border-secondary-300 divide-secondary-300 flex data-[orientation='vertical']:flex-col data-[orientation='horizontal']:flex-row data-[orientation='vertical']:divide-y data-[orientation='horizontal']:divide-x overflow-hidden border",
  {
    variants: {
      size: {
        sm: "rounded-base",
        md: "rounded-md",
        lg: "rounded-lg",
      },
    },
  },
);

export type ToggleGroup = ComponentProps<typeof ToggleGroupPrimitive.Root> &
  Partial<ToggleGroupContext>;

export const ToggleGroup = forwardRef<HTMLDivElement, ToggleGroup>(
  function ToggleGroup(
    { children, className, size = "md", isUnstyled = false, ...props },
    forwardedRef,
  ) {
    return (
      <ToggleGroupProvider value={{ size, isUnstyled }}>
        <ToggleGroupPrimitive.Root
          {...props}
          className={
            isUnstyled
              ? className
              : classNames(toggleGroupClasses({ size }), className)
          }
          ref={forwardedRef}
        >
          {children}
        </ToggleGroupPrimitive.Root>
      </ToggleGroupProvider>
    );
  },
);

export const toggleGroupItemClasses = cva(
  "data-[state=on]:bg-primary-50 data-[state=on]:text-primary-500 dark:data-[state=on]:text-primary-300 text-secondary-600 dark:text-secondary-400 hover:bg-secondary-100 hover:text-black dark:hover:bg-secondary-800/80 dark:hover:text-secondary-100 data-[state=on]:dark:bg-primary-300/20 font-medium transition-all ease-in-out",
  {
    variants: {
      size: {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-1.5 text-base",
        lg: "px-5 py-2 text-lg",
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
  function ToggleGroupItem(
    { children, className, isUnstyled = false, ...props },
    forwardedRef,
  ) {
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
