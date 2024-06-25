"use client";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva } from "class-variance-authority";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import { classNames } from "../utils";
import { type TabContext, TabProvider, useTabContext } from "./context";

export type Tab = ComponentPropsWithoutRef<typeof TabsPrimitive.Root> &
  Partial<TabContext> & { isUnstyled?: boolean };

export const Tab = forwardRef<ElementRef<typeof TabsPrimitive.Root>, Tab>(
  function Tab(
    { className, size = "md", variant = "line", isUnstyled = false, ...props },
    forwardedRef,
  ) {
    return (
      <TabProvider value={{ size, variant, isUnstyled }}>
        <TabsPrimitive.Root
          {...props}
          className={
            isUnstyled
              ? className
              : classNames("w-full data-[orientation=vertical]:flex", className)
          }
          ref={forwardedRef}
        />
      </TabProvider>
    );
  },
);

export type TabList = ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
  isUnstyled?: boolean;
};

export const TabList = forwardRef<
  ElementRef<typeof TabsPrimitive.List>,
  TabList
>(function TabList({ className, isUnstyled = false, ...props }, forwardedRef) {
  const { isUnstyled: isParentUnstyled } = useTabContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <TabsPrimitive.List
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              "flex",
              "data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:border-b",
              "data-[orientation=vertical]:flex-col data-[orientation=vertical]:border-r",
              "border-secondary-300 dark:border-secondary-700",
              className,
            )
      }
      ref={forwardedRef}
    />
  );
});

export const tabTriggerClasses = cva(
  "font-medium text-secondary-600 dark:text-secondary-400 hover:text-black dark:hover:text-secondary-100 data-[state=active]:text-black dark:data-[state=active]:text-secondary-100 data-[disabled]:text-secondary-400 dark:data-[disabled]:text-secondary-600 data-[disabled]:cursor-not-allowed transition-colors ease-in-out",
  {
    variants: {
      size: {
        sm: "text-sm px-2 py-1.5",
        md: "text-base px-3 py-2",
        lg: "text-lg px-4 py-2.5",
      },
      variant: {
        line: "data-[orientation=horizontal]:border-b-2 data-[orientation=vertical]:border-r-2 border-transparent data-[state=active]:border-primary-500 dark:data-[state=active]:border-primary-300 data-[orientation=vertical]:data-[state=active]:bg-secondary-100 dark:data-[orientation=vertical]:data-[state=active]:bg-secondary-800 data-[orientation=horizontal]:-mb-px data-[orientation=vertical]:-mr-px",
        enclosed:
          "data-[state=active]:bg-white dark:data-[state=active]:bg-secondary-900 data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-x data-[orientation=vertical]:border-y data-[orientation=vertical]:border-l border-transparent data-[state=active]:border-secondary-300 dark:data-[state=active]:border-secondary-700 data-[orientation=horizontal]:-mb-px data-[orientation=vertical]:-mr-px",
      },
    },
    compoundVariants: [
      {
        size: "sm",
        variant: "enclosed",
        className:
          "data-[orientation=horizontal]:rounded-t-sm data-[orientation=vertical]:rounded-l-sm",
      },
      {
        size: "md",
        variant: "enclosed",
        className:
          "data-[orientation=horizontal]:rounded-t-md data-[orientation=vertical]:rounded-l-md",
      },
      {
        size: "lg",
        variant: "enclosed",
        className:
          "data-[orientation=horizontal]:rounded-t-lg data-[orientation=vertical]:rounded-l-lg",
      },
    ],
    defaultVariants: {
      size: "md",
      variant: "line",
    },
  },
);

export type TabTrigger = ComponentPropsWithoutRef<
  typeof TabsPrimitive.Trigger
> & {
  isUnstyled?: boolean;
};

export const TabTrigger = forwardRef<
  ElementRef<typeof TabsPrimitive.Trigger>,
  TabTrigger
>(function TabTrigger(
  { className, isUnstyled = false, ...props },
  forwardedRef,
) {
  const { size, variant, isUnstyled: isParentUnstyled } = useTabContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <TabsPrimitive.Trigger
      {...props}
      className={
        unstyle
          ? className
          : classNames(tabTriggerClasses({ size, variant }), className)
      }
      ref={forwardedRef}
    />
  );
});

export const tabContentClasses = cva("w-full text-black dark:text-white", {
  variants: {
    size: {
      sm: "data-[orientation=vertical]:px-2 data-[orientation=horizontal]:py-1.5 text-sm",
      md: "data-[orientation=vertical]:px-3 data-[orientation=horizontal]:py-2 text-base",
      lg: "data-[orientation=vertical]:px-4 data-[orientation=horizontal]:py-2.5 text-lg",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type TabContent = ComponentPropsWithoutRef<
  typeof TabsPrimitive.Content
> & {
  isUnstyled?: boolean;
};

export const TabContent = forwardRef<
  ElementRef<typeof TabsPrimitive.Content>,
  TabContent
>(function TabContent(
  { className, isUnstyled = false, ...props },
  forwardedRef,
) {
  const { size, isUnstyled: isParentUnstyled } = useTabContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <TabsPrimitive.Content
      {...props}
      className={
        unstyle ? className : classNames(tabContentClasses({ size }), className)
      }
      ref={forwardedRef}
    />
  );
});
