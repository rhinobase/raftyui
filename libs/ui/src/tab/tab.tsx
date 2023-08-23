"use client";
import React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { forwardRef } from "react";
import { TabContext, TabProvider, useTabContext } from "./context";
import { classNames } from "@rafty/utils";

// Root Component
export type Tab = React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> &
  Partial<TabContext> & { isUnstyled?: boolean };
export const Tab = forwardRef<React.ElementRef<typeof TabsPrimitive.Root>, Tab>(
  (
    {
      children,
      className,
      size = "md",
      variant = "line",
      orientation = "horizontal",
      isBarebone = false,
      isUnstyled = false,
      ...props
    },
    forwardedRef
  ) => {
    const unstyle = isBarebone || isUnstyled;

    return (
      <TabProvider value={{ size, variant, orientation, isBarebone }}>
        <TabsPrimitive.Root
          {...props}
          className={
            unstyle
              ? className
              : classNames(
                  "w-full items-stretch data-[orientation=vertical]:flex",
                  className
                )
          }
          orientation={orientation}
          ref={forwardedRef}
        >
          {children}
        </TabsPrimitive.Root>
      </TabProvider>
    );
  }
);
Tab.displayName = "Tab";

// List Component
export type TabList = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.List
> & {
  isUnstyled?: boolean;
};

export const TabList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabList
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { orientation, variant, isBarebone } = useTabContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <TabsPrimitive.List
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              orientation === "vertical" && variant === "enclosed"
                ? "dark:border-black"
                : "dark:border-secondary-700",
              "flex rounded-t-md border-b",
              "data-[orientation=vertical]:flex-col data-[orientation=vertical]:gap-0.5 data-[orientation=vertical]:rounded-t-none data-[orientation=vertical]:border-b-0 data-[orientation=vertical]:border-r",
              className
            )
      }
      ref={forwardedRef}
    >
      {children}
    </TabsPrimitive.List>
  );
});
TabList.displayName = "TabList";

// Trigger Component
const triggerClasses = {
  size: {
    sm: "text-sm px-3 py-1",
    md: "text-base px-4 py-2",
    lg: "text-lg px-5 py-3",
  },
  orientation: {
    horizontal: "font-semibold hover:text-black hover:dark:text-secondary-100",
    vertical:
      "font-medium text-left data-[state=active]:bg-secondary-100 data-[state=active]:dark:bg-secondary-800 data-[state=active]:hover:bg-secondary-100 data-[state=active]:dark:hover:bg-secondary-800",
  },
  variant: {
    line: classNames(
      "data-[orientation=horizontal]:border-b-[2px] data-[orientation=horizontal]:border-b-transparent",
      "data-[orientation=vertical]:border-r-2 data-[orientation=vertical]:border-transparent data-[orientation=vertical]:hover:bg-secondary-50 data-[orientation=vertical]:hover:dark:bg-secondary-700/40",
      "data-[orientation=horizontal]:data-[state=active]:border-primary-500 dark:data-[orientation=horizontal]:data-[state=active]:border-secondary-100",
      "data-[orientation=vertical]:data-[state=active]:border-primary-500 data-[orientation=vertical]:data-[state=active]:dark:border-primary-400"
    ),
    enclosed: classNames(
      "data-[orientation=horizontal]:-mb-[2px] data-[orientation=horizontal]:rounded-t-md data-[orientation=horizontal]:border data-[orientation=horizontal]:border-b-0 data-[orientation=horizontal]:border-transparent",
      "data-[orientation=vertical]:mr-[-3px] data-[orientation=vertical]:border-t data-[orientation=vertical]:border-b data-[orientation=vertical]:border-transparent",
      "data-[orientation=horizontal]:data-[state=active]:border-secondary-200 data-[orientation=horizontal]:data-[state=active]:dark:border-secondary-700 data-[orientation=horizontal]:data-[state=active]:dark:border-b-secondary-800 data-[orientation=horizontal]:data-[state=active]:bg-white data-[orientation=horizontal]:data-[state=active]:dark:bg-secondary-900",
      "data-[orientation=vertical]:data-[state=active]:border-secondary-200 data-[orientation=vertical]:data-[state=active]:dark:border-black"
    ),
  },
};

export type TabTrigger = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Trigger
> & {
  isUnstyled?: boolean;
};

export const TabTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabTrigger
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, variant, orientation, isBarebone } = useTabContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <TabsPrimitive.Trigger
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              triggerClasses.orientation[orientation],
              triggerClasses.size[size],
              triggerClasses.variant[variant],
              "text-secondary-500 dark:text-secondary-400 transition-colors",
              "data-[state=active]:dark:text-secondary-100 data-[state=active]:text-black",
              "data-[disabled]:text-secondary-400 data-[disabled]:dark:text-secondary-600 data-[disabled]:cursor-not-allowed",
              className
            )
      }
      ref={forwardedRef}
    >
      {children}
    </TabsPrimitive.Trigger>
  );
});
TabTrigger.displayName = "TabTrigger";

// Content Component
const tabContentClasses = {
  size: {
    sm: "w-1 min-w-[4px]",
    md: "w-1.5 min-w-[6px]",
    lg: "w-2 min-w-[8px]",
  },
};

const tabContentLineVariantClasses = {
  size: {
    sm: "data-[orientation=vertical]:p-3",
    md: "data-[orientation=vertical]:p-4",
    lg: "data-[orientation=vertical]:p-5",
  },
};

export type TabContent = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Content
> & {
  isUnstyled?: boolean;
};

export const TabContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabContent
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, variant, orientation, isBarebone } = useTabContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <TabsPrimitive.Content
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              variant === "line" && tabContentLineVariantClasses.size[size],
              "w-full dark:text-white",
              className
            )
      }
      ref={forwardedRef}
    >
      {orientation === "vertical" && variant === "enclosed" && !unstyle ? (
        <div className="flex items-stretch" style={{ height: "100%" }}>
          <div
            className={classNames(
              tabContentClasses.size[size],
              "bg-secondary-100 dark:bg-secondary-800 w-full border-b border-r border-t dark:border-black"
            )}
          />
          {children}
        </div>
      ) : (
        children
      )}
    </TabsPrimitive.Content>
  );
});
TabContent.displayName = "TabContent";
