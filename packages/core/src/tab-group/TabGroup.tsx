import * as TabsPrimitive from "@radix-ui/react-tabs";
import { ComponentProps, forwardRef } from "react";
import { classNames } from "@rhinobase/utils";
import { TabContext, TabProvider, useTabContext } from "./context";
import React from "react";

// Root Component
export type Root = ComponentProps<(typeof TabsPrimitive)["Root"]>;
export const Root = forwardRef<HTMLDivElement, TabContext & Root>(
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
          <List>{children}</List>
        </TabsPrimitive.Root>
      </TabProvider>
    );
  }
);

// List Component
export type List = ComponentProps<(typeof TabsPrimitive)["List"]>;
const List = forwardRef<HTMLDivElement, TabContext & List>(
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
export type Trigger = ComponentProps<(typeof TabsPrimitive)["Trigger"]>;
export const Trigger = forwardRef<HTMLButtonElement, TabContext & Trigger>(
  ({ children, className, ...props }, forwardedRef) => {
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
  }
);
