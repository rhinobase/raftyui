import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { ComponentProps, forwardRef } from "react";
import {
  ToggleGroupContext,
  ToggleGroupProvider,
  useToggleGroupContext,
} from "./context";
import { classNames } from "../utils";
import { cva } from "class-variance-authority";

// ToggleGroup Component
export type ToggleGroup = ComponentProps<
  (typeof ToggleGroupPrimitive)["Root"]
> &
  Partial<ToggleGroupContext> & { unstyled?: boolean };
export const ToggleGroup = forwardRef<HTMLDivElement, ToggleGroup>(
  (
    {
      children,
      className,
      size = "md",
      barebone = false,
      unstyled = false,
      ...props
    },
    forwardedRef
  ) => {
    const unstyle = barebone || unstyled;

    return (
      <ToggleGroupProvider value={{ size, barebone }}>
        <ToggleGroupPrimitive.Root
          className={
            unstyle
              ? className
              : classNames(
                  "dark:divide-secondary-700 dark:border-secondary-700 flex w-full items-center divide-x overflow-hidden rounded-md border",
                  className
                )
          }
          {...props}
          ref={forwardedRef}
        >
          {children}
        </ToggleGroupPrimitive.Root>
      </ToggleGroupProvider>
    );
  }
);
ToggleGroup.displayName = "ToggleGroup";

// ToggleItem Component
const itemClasses = cva(
  "data-[state=on]:bg-primary-50 data-[state=on]:text-primary-500 dark:data-[state=on]:text-primary-300 dark:text-secondary-200 data-[state=on]:dark:bg-primary-300/20 flex w-full items-center justify-center font-semibold transition-all",
  {
    variants: {
      size: {
        sm: "px-3 py-[2px] text-sm",
        md: "px-3 py-1",
        lg: "px-3 py-2 text-lg",
      },
    },
  }
);
export type ToggleGroupItem = ComponentProps<
  (typeof ToggleGroupPrimitive)["Item"]
> & { unstyled?: boolean };
export const ToggleGroupItem = forwardRef<
  HTMLButtonElement,
  ToggleGroupContext & ToggleGroupItem
>(({ children, className, unstyled = false, ...props }, forwardedRef) => {
  const { size, barebone } = useToggleGroupContext();
  const unstyle = barebone || unstyled;

  return (
    <ToggleGroupPrimitive.Item
      className={
        unstyle ? className : classNames(itemClasses({ size }), className)
      }
      {...props}
      ref={forwardedRef}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});
ToggleGroupItem.displayName = "ToggleGroupItem";
