import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { ComponentProps, forwardRef } from "react";
import { classNames } from "@rhinobase/utils";
import {
  ToggleGroupContext,
  ToggleGroupProvider,
  useToggleGroupContext,
} from "./context";
import React from "react";

// ToggleGroup Component
type ToggleGroup = ComponentProps<(typeof ToggleGroupPrimitive)["Root"]>;
export const ToggleGroup = forwardRef<
  HTMLDivElement,
  ToggleGroupContext & ToggleGroup
>(({ children, className, size = "md", ...props }, forwardedRef) => {
  return (
    <ToggleGroupProvider value={{ size }}>
      <ToggleGroupPrimitive.Root
        className={classNames(
          "dark:divide-secondary-700 dark:border-secondary-700 flex w-full items-center divide-x overflow-hidden rounded-md border",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </ToggleGroupPrimitive.Root>
    </ToggleGroupProvider>
  );
});

// ToggleItem Component
type ToggleItem = ComponentProps<(typeof ToggleGroupPrimitive)["Item"]>;
export const ToggleItem = forwardRef<
  HTMLButtonElement,
  ToggleGroupContext & ToggleItem
>(({ children, className, ...props }, forwardedRef) => {
  const { size } = useToggleGroupContext();
  return (
    <ToggleGroupPrimitive.Item
      className={classNames(
        size == "sm" && "px-lg py-sm text-sm",
        size == "md" && "px-lg py-base",
        size == "lg" && "px-lg py-md text-lg",
        "data-[state=on]:bg-secondary-200 dark:text-secondary-200 data-[state=on]:dark:bg-secondary-800 flex w-full items-center justify-center font-medium transition-all",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});
