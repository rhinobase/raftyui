import * as TabsPrimitive from "@radix-ui/react-tabs";
import { ComponentProps, forwardRef } from "react";
import { classNames } from "@rhinobase/utils";
import { TabContext, TabProvider, useTabContext } from "./context";
import React from "react";

// Root Component
export type Root = ComponentProps<(typeof TabsPrimitive)["Root"]>;
export const Root = forwardRef<HTMLDivElement, TabContext & Root>(
  ({ children, className, size = "md", ...props }, forwardedRef) => {
    return (
      <TabProvider value={{ size }}>
        <TabsPrimitive.Root
          className={classNames("flex w-full", className)}
          {...props}
          ref={forwardedRef}
        >
          <List>{children}</List>
        </TabsPrimitive.Root>
      </TabProvider>
    );
  },
);
Root.displayName = "TabGroup.Root";

// List Component
type List = ComponentProps<(typeof TabsPrimitive)["List"]>;
const List = forwardRef<HTMLDivElement, TabContext & List>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <TabsPrimitive.List
        className={classNames(
          "dark:divide-secondary-700 dark:border-secondary-700 flex w-full items-center divide-x overflow-hidden rounded-md border",
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </TabsPrimitive.List>
    );
  },
);
List.displayName = "TabGroup.List";

// Tab Component
export type Trigger = ComponentProps<(typeof TabsPrimitive)["Trigger"]>;
export const Trigger = forwardRef<HTMLButtonElement, TabContext & Trigger>(
  ({ children, className, ...props }, forwardedRef) => {
    const { size } = useTabContext();
    return (
      <TabsPrimitive.Trigger
        className={classNames(
          size == "sm" && "px-3 py-1 text-sm",
          size == "md" && "px-3 py-2",
          size == "lg" && "px-3 py-3 text-lg",
          "data-[state=active]:bg-primary-50 dark:text-secondary-200 data-[state=active]:dark:bg-primary-300/10 data-[state=active]:text-primary-500 data-[state=active]:dark:text-primary-300 flex w-full items-center justify-center font-semibold text-black/60 transition-all",
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </TabsPrimitive.Trigger>
    );
  },
);
Trigger.displayName = "TabGroup.Trigger";
