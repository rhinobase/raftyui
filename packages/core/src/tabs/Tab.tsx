import * as TabsPrimitive from "@radix-ui/react-tabs";
import { ComponentProps, forwardRef } from "react";
import { applyStyleToMultipleVariants, classNames } from "@rhinobase/utils";
import { TabContext, TabProvider, useTabContext } from "./context";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

// Root Component
export type Root = ComponentProps<(typeof TabsPrimitive)["Root"]>;
export const Root = forwardRef<HTMLDivElement, TabContext & Root>(
  (
    {
      children,
      className,
      size = "md",
      variant = "line",
      orientation = "horizontal",
      ...props
    },
    forwardedRef,
  ) => {
    return (
      <TabProvider value={{ size, variant, orientation }}>
        <TabsPrimitive.Root
          className={classNames(
            "w-full items-stretch data-[orientation=vertical]:flex",
            className,
          )}
          {...props}
          orientation={orientation}
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
    const { orientation, variant } = useTabContext();
    return (
      <TabsPrimitive.List
        className={classNames(
          orientation == "vertical" && variant == "enclosed"
            ? "dark:border-black"
            : "dark:border-secondary-700",
          "flex rounded-t-md border-b",
          "data-[orientation=vertical]:flex-col data-[orientation=vertical]:gap-0.5 data-[orientation=vertical]:rounded-t-none data-[orientation=vertical]:border-b-0 data-[orientation=vertical]:border-r",
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
export type Trigger = ComponentProps<(typeof TabsPrimitive)["Trigger"]> &
  VariantProps<typeof triggerClasses>;
const triggerClasses = cva(
  "text-secondary-500 dark:text-secondary-400 transition-colors data-[state=active]:text-black data-[state=active]:dark:text-secondary-100 data-[disabled]:text-secondary-400 data-[disabled]:dark:text-secondary-600 data-[disabled]:cursor-not-allowed",
  {
    variants: {
      size: {
        sm: "text-sm px-3 py-1",
        md: "text-base px-4 py-2",
        lg: "text-lg px-5 py-3",
      },
      orientation: {
        horizontal:
          "font-semibold hover:text-black hover:dark:text-secondary-100",
        vertical: "font-medium",
      },
      variant: {
        line: "",
        enclosed: "",
      },
    },
    compoundVariants: [
      ...applyStyleToMultipleVariants({
        orientation: "vertical",
        variant: ["line", "enclosed"],
        className:
          "text-left data-[state=active]:bg-secondary-100 data-[state=active]:dark:bg-secondary-800 data-[state=active]:hover:bg-secondary-100 data-[state=active]:dark:hover:bg-secondary-800",
      }),
      // horizontal line
      {
        orientation: "horizontal",
        variant: "line",
        className:
          "data-[state=active]:border-primary-500 dark:data-[state=active]:border-secondary-100 border-b-[2px] border-b-transparent",
      },
      // horizontal enclosed
      {
        orientation: "horizontal",
        variant: "enclosed",
        className:
          "data-[state=active]:border-secondary-200 data-[state=active]:dark:border-secondary-700 data-[state=active]:dark:border-b-secondary-800 -mb-[2px] rounded-t-md border border-b-0 border-transparent data-[state=active]:bg-white data-[state=active]:dark:bg-secondary-900",
      },
      // vertical line
      {
        orientation: "vertical",
        variant: "line",
        className:
          "border-r-2 border-transparent data-[state=active]:border-primary-500 data-[state=active]:dark:border-primary-400 hover:bg-secondary-50 hover:dark:bg-secondary-700/40",
      },
      // vertical enclosed
      {
        orientation: "vertical",
        variant: "enclosed",
        className:
          "mr-[-3px] border-t border-b border-transparent data-[state=active]:border-secondary-200 data-[state=active]:dark:border-black",
      },
    ],
  },
);
export const Trigger = forwardRef<HTMLButtonElement, TabContext & Trigger>(
  ({ children, className, ...props }, forwardedRef) => {
    const { size, variant, orientation } = useTabContext();
    return (
      <TabsPrimitive.Trigger
        className={classNames(
          triggerClasses({
            variant,
            orientation,
            size,
          }),
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
    const { size, variant, orientation } = useTabContext();
    return (
      <TabsPrimitive.Content
        className={classNames(
          size == "sm" &&
            variant == "line" &&
            "data-[orientation=vertical]:p-3",
          size == "md" &&
            variant == "line" &&
            "data-[orientation=vertical]:p-4",
          size == "lg" &&
            variant == "line" &&
            "data-[orientation=vertical]:p-5",
          "w-full dark:text-white",
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        {orientation == "vertical" && variant == "enclosed" ? (
          <div className="flex items-stretch" style={{ height: "100%" }}>
            <div
              className={classNames(
                size == "sm" && "w-2",
                size == "md" && "w-3",
                size == "lg" && "w-4",
                "bg-secondary-100 dark:bg-secondary-800 border-r border-t border-b dark:border-black",
              )}
            />
            <div
              className={classNames(
                size == "sm" && "p-3",
                size == "md" && "p-4",
                size == "lg" && "p-5",
              )}
            >
              {children}
            </div>
          </div>
        ) : (
          children
        )}
      </TabsPrimitive.Content>
    );
  },
);
Content.displayName = "Tab.Content";
