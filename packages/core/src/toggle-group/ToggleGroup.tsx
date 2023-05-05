import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { ComponentProps, forwardRef } from "react";
import {
  ToggleGroupContext,
  ToggleGroupProvider,
  useToggleGroupContext,
} from "./context";
import { classNames } from "../utils";

// ToggleGroup Component
export type Root = ComponentProps<(typeof ToggleGroupPrimitive)["Root"]>;
export const Root = forwardRef<HTMLDivElement, ToggleGroupContext & Root>(
  ({ children, className, size = "md", ...props }, forwardedRef) => {
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
  }
);
Root.displayName = "ToggleGroup.Root";

// ToggleItem Component
export type Item = ComponentProps<(typeof ToggleGroupPrimitive)["Item"]>;
export const Item = forwardRef<HTMLButtonElement, ToggleGroupContext & Item>(
  ({ children, className, ...props }, forwardedRef) => {
    const { size } = useToggleGroupContext();
    return (
      <ToggleGroupPrimitive.Item
        className={classNames(
          size == "sm" && "px-3 py-[2px] text-sm",
          size == "md" && "px-3 py-1",
          size == "lg" && "px-3 py-2 text-lg",
          "data-[state=on]:bg-primary-50 data-[state=on]:text-primary-500 dark:data-[state=on]:text-primary-300 dark:text-secondary-200 data-[state=on]:dark:bg-primary-300/20 flex w-full items-center justify-center font-semibold transition-all",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </ToggleGroupPrimitive.Item>
    );
  }
);
Item.displayName = "ToggleGroup.Item";
