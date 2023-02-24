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
    forwardedRef,
  ) => {
    return (
      <TabProvider value={{ size, variant }}>
        <TabsPrimitive.Root
          className={classNames(
            "data-[orientation=vertical]:flex data-[orientation=vertical]:w-full data-[orientation=vertical]:flex-row",
            className,
          )}
          {...props}
          ref={forwardedRef}
        >
          {children}
        </TabsPrimitive.Root>
      </TabProvider>
    );
  },
);
Root.displayName = "Tab.Root";
// List Component
export type List = ComponentProps<(typeof TabsPrimitive)["List"]>;
export const List = forwardRef<HTMLDivElement, TabContext & List>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <TabsPrimitive.List
        className={classNames(
          "flex rounded-t-md",
          "dark:border-secondary-700 border-b",
          "data-[orientation=vertical]:bg-secondary-50 data-[orientation=vertical]:dark:bg-secondary-800 data-[orientation=vertical]:min-h-[600px] data-[orientation=vertical]:min-w-[200px] data-[orientation=vertical]:flex-col data-[orientation=vertical]:gap-1 data-[orientation=vertical]:rounded-t-none data-[orientation=vertical]:border-b-0 data-[orientation=vertical]:border-r data-[orientation=vertical]:py-2 data-[orientation=vertical]:px-1",
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
List.displayName = "Tab.List";

// Trigger Component
export type Trigger = ComponentProps<(typeof TabsPrimitive)["Trigger"]>;
export const Trigger = forwardRef<HTMLButtonElement, TabContext & Trigger>(
  ({ children, className, ...props }, forwardedRef) => {
    const { size } = useTabContext();
    const { variant } = useTabContext();
    return (
      <TabsPrimitive.Trigger
        className={classNames(
          "data-[state=active]:dark:text-secondary-100 data-[orientation=horizontal]:flex data-[orientation=horizontal]:items-center data-[orientation=horizontal]:justify-center data-[state=active]:text-black",
          variant == "line" &&
            "data-[state=active]:border-primary-500 dark:data-[state=active]:border-secondary-100 ",
          "border-b-[2px] border-b-transparent",
          variant == "enclosed" &&
            "data-[state=active]:border-secondary-200 data-[state=active]:dark:border-secondary-700 data-[state=active]:dark:border-b-secondary-800 mb-[-2px] rounded-t-md border border-transparent data-[state=active]:border-b-white",
          size == "sm" &&
            "text-sm data-[orientation=horizontal]:px-4 data-[orientation=horizontal]:py-1",
          size == "md" &&
            "data-[orientation=horizontal]:px-4 data-[orientation=horizontal]:py-2",
          size == "lg" &&
            "text-lg data-[orientation=horizontal]:px-4 data-[orientation=horizontal]:py-3",
          "text-secondary-500 dark:text-secondary-400 hover:dark:text-secondary-100 font-semibold transition-colors hover:text-black data-[orientation=vertical]:px-3 data-[orientation=vertical]:py-2",
          "data-[orientation=vertical]:data-[state=active]:bg-secondary-300/50 data-[orientation=vertical]:text-secondary-800 data-[orientation=vertical]:hover:bg-secondary-200/50 data-[orientation=vertical]:data-[state=active]:hover:bg-secondary-300/50 data-[orientation=vertical]:data-[state=active]:dark:bg-secondary-700/80 data-[orientation=vertical]:hover:data-[state=active]:dark:bg-secondary-700/80 data-[orientation=vertical]:hover:dark:bg-secondary-700/40 data-[orientation=vertical]:rounded-md data-[orientation=vertical]:border-b-0 data-[orientation=vertical]:text-left",
          "data-[disabled]:text-secondary-400 data-[disabled]:dark:text-secondary-600 data-[disabled]:cursor-not-allowed",
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
Trigger.displayName = "Tab.Trigger";

// Content Component
export type Content = ComponentProps<(typeof TabsPrimitive)["Content"]>;
export const Content = forwardRef<HTMLDivElement, Content>(
  ({ children, className, ...props }, forwardedRef) => {
    const { size } = useTabContext();
    return (
      <TabsPrimitive.Content
        className={classNames(
          size == "sm" && "data-[orientation=vertical]:p-3",
          size == "md" && "data-[orientation=vertical]:p-5",
          "w-full dark:text-white",
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </TabsPrimitive.Content>
    );
  },
);
Content.displayName = "Tab.Content";
