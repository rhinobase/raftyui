import * as TabsPrimitive from "@radix-ui/react-tabs";
import { ComponentProps, forwardRef } from "react";
import { TabContext, TabProvider, useTabContext } from "./context";
import { cva, VariantProps } from "class-variance-authority";
import { applyStyleToMultipleVariants, classNames } from "../utils";

// Root Component
export type Tab = ComponentProps<(typeof TabsPrimitive)["Root"]> &
  Partial<TabContext> & { unstyled?: boolean };
export const Tab = forwardRef<HTMLDivElement, Tab>(
  (
    {
      children,
      className,
      size = "md",
      variant = "line",
      orientation = "horizontal",
      barebone = false,
      unstyled = false,
      ...props
    },
    forwardedRef
  ) => {
    const unstyle = barebone || unstyled;

    return (
      <TabProvider value={{ size, variant, orientation, barebone }}>
        <TabsPrimitive.Root
          className={
            unstyle
              ? className
              : classNames(
                  "w-full items-stretch data-[orientation=vertical]:flex",
                  className
                )
          }
          {...props}
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
export type TabList = ComponentProps<(typeof TabsPrimitive)["List"]> & {
  unstyled?: boolean;
};
export const TabList = forwardRef<HTMLDivElement, TabContext & TabList>(
  ({ children, className, unstyled = false, ...props }, forwardedRef) => {
    const { orientation, variant, barebone } = useTabContext();
    const unstyle = barebone || unstyled;

    return (
      <TabsPrimitive.List
        className={
          unstyle
            ? className
            : classNames(
                orientation == "vertical" && variant == "enclosed"
                  ? "dark:border-black"
                  : "dark:border-secondary-700",
                "flex rounded-t-md border-b",
                "data-[orientation=vertical]:flex-col data-[orientation=vertical]:gap-0.5 data-[orientation=vertical]:rounded-t-none data-[orientation=vertical]:border-b-0 data-[orientation=vertical]:border-r",
                className
              )
        }
        {...props}
        ref={forwardedRef}
      >
        {children}
      </TabsPrimitive.List>
    );
  }
);
TabList.displayName = "TabList";

// Trigger Component
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
        vertical:
          "font-medium text-left data-[state=active]:bg-secondary-100 data-[state=active]:dark:bg-secondary-800 data-[state=active]:hover:bg-secondary-100 data-[state=active]:dark:hover:bg-secondary-800",
      },
      variant: {
        line: "",
        enclosed: "",
      },
    },
    compoundVariants: [
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
  }
);
export type TabTrigger = ComponentProps<(typeof TabsPrimitive)["Trigger"]> & {
  unstyled?: boolean;
};
export const TabTrigger = forwardRef<
  HTMLButtonElement,
  TabContext & TabTrigger
>(({ children, className, unstyled = false, ...props }, forwardedRef) => {
  const { size, variant, orientation, barebone } = useTabContext();
  const unstyle = barebone || unstyled;

  return (
    <TabsPrimitive.Trigger
      className={
        unstyle
          ? className
          : classNames(
              triggerClasses({
                variant,
                orientation,
                size,
              }),
              className
            )
      }
      {...props}
      ref={forwardedRef}
    >
      {children}
    </TabsPrimitive.Trigger>
  );
});
TabTrigger.displayName = "TabTrigger";

// Content Component
export type TabContent = ComponentProps<(typeof TabsPrimitive)["Content"]> & {
  unstyled?: boolean;
};
export const TabContent = forwardRef<HTMLDivElement, TabContent>(
  ({ children, className, unstyled = false, ...props }, forwardedRef) => {
    const { size, variant, orientation, barebone } = useTabContext();
    const unstyle = barebone || unstyled;

    return (
      <TabsPrimitive.Content
        className={
          unstyle
            ? className
            : classNames(
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
                className
              )
        }
        {...props}
        ref={forwardedRef}
      >
        {orientation == "vertical" && variant == "enclosed" && !unstyle ? (
          <div className="flex items-stretch" style={{ height: "100%" }}>
            <div
              className={classNames(
                size == "sm" && "w-1 min-w-[4px]",
                size == "md" && "w-1.5 min-w-[6px]",
                size == "lg" && "w-2 min-w-[8px]",
                "bg-secondary-100 dark:bg-secondary-800 border-r border-t border-b dark:border-black"
              )}
            />
            <div
              className={classNames(
                size == "sm" && "w-full",
                size == "md" && "w-full",
                size == "lg" && "w-full"
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
  }
);
TabContent.displayName = "TabContent";
