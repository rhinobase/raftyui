import React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import {
  ToggleGroupContext,
  ToggleGroupProvider,
  useToggleGroupContext,
} from "./context";
import { classNames } from "@rafty/utils";

// ToggleGroup Component
export type ToggleGroup = React.ComponentProps<
  (typeof ToggleGroupPrimitive)["Root"]
> &
  Partial<ToggleGroupContext> & { isUnstyled?: boolean };
export const ToggleGroup = React.forwardRef<HTMLDivElement, ToggleGroup>(
  (
    {
      children,
      className,
      size = "md",
      isBarebone = false,
      isUnstyled = false,
      ...props
    },
    forwardedRef,
  ) => {
    const unstyle = isBarebone || isUnstyled;

    return (
      <ToggleGroupProvider value={{ size, isBarebone }}>
        <ToggleGroupPrimitive.Root
          {...props}
          className={
            unstyle
              ? className
              : classNames(
                  "dark:divide-secondary-700 dark:border-secondary-700 flex w-full items-center divide-x overflow-hidden rounded-md border",
                  className,
                )
          }
          ref={forwardedRef}
        >
          {children}
        </ToggleGroupPrimitive.Root>
      </ToggleGroupProvider>
    );
  },
);
ToggleGroup.displayName = "ToggleGroup";

// ToggleItem Component
const itemClasses = {
  size: {
    sm: "px-3 py-[2px] text-sm",
    md: "px-3 py-1",
    lg: "px-3 py-2 text-lg",
  },
};

export type ToggleGroupItem = React.ComponentProps<
  (typeof ToggleGroupPrimitive)["Item"]
> & { isUnstyled?: boolean };

export const ToggleGroupItem = React.forwardRef<
  HTMLButtonElement,
  ToggleGroupItem
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isBarebone } = useToggleGroupContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <ToggleGroupPrimitive.Item
      className={
        unstyle
          ? className
          : classNames(
              itemClasses.size[size],
              "data-[state=on]:bg-primary-50 data-[state=on]:text-primary-500 dark:data-[state=on]:text-primary-300 dark:text-secondary-200 data-[state=on]:dark:bg-primary-300/20 flex w-full items-center justify-center font-semibold transition-all",
              className,
            )
      }
      {...props}
      ref={forwardedRef}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});
ToggleGroupItem.displayName = "ToggleGroupItem";
