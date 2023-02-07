import * as TabsPrimitive from "@radix-ui/react-tabs";
import { ComponentProps, forwardRef } from "react";
import { classNames } from "@rhinobase/utils";
import { TabContext, TabProvider, useTabContext } from "./context";
import React from "react";

// Tabs Component
type TabGroup = ComponentProps<(typeof TabsPrimitive)["Root"]>;
export const TabGroup = forwardRef<HTMLDivElement, TabContext & TabGroup>(
  (
    { children, className, size = "md", variant = "line", ...props },
    forwardedRef
  ) => {
    return (
      <TabProvider value={{ size, variant }}>
        <TabsPrimitive.Root
          className={classNames("flex w-full", className)}
          {...props}
          ref={forwardedRef}
        >
          <TabGroupList>{children}</TabGroupList>
        </TabsPrimitive.Root>
      </TabProvider>
    );
  }
);

// TabGroupList Component
type TabGroupList = ComponentProps<(typeof TabsPrimitive)["List"]>;
const TabGroupList = forwardRef<HTMLDivElement, TabContext & TabGroupList>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <TabsPrimitive.List
        className={classNames(
          "dark:divide-secondary-700 dark:border-secondary-700 flex w-full items-center divide-x overflow-hidden rounded-md border",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </TabsPrimitive.List>
    );
  }
);

// Tab Component
type TabGroupItem = ComponentProps<(typeof TabsPrimitive)["Trigger"]>;
export const TabGroupItem = forwardRef<
  HTMLButtonElement,
  TabContext & TabGroupItem
>(({ children, className, ...props }, forwardedRef) => {
  const { size } = useTabContext();
  const { variant } = useTabContext();
  return (
    <TabsPrimitive.Trigger
      className={classNames(
        size == "sm" && "px-lg py-sm text-sm",
        size == "md" && "px-lg py-base",
        size == "lg" && "px-lg py-md text-lg",
        "data-[state=active]:bg-secondary-200 dark:text-secondary-200 data-[state=active]:dark:bg-secondary-800 flex w-full items-center justify-center font-medium transition-all",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </TabsPrimitive.Trigger>
  );
});
