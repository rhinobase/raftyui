"use client";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { BooleanOrFunction, getValue } from "@rafty/shared";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Button } from "../button";
import { classNames } from "../utils";
import { PopoverContext, PopoverProvider, usePopoverContext } from "./context";

// Popover Component
export type Popover = ComponentPropsWithoutRef<typeof PopoverPrimitive.Root> &
  Partial<PopoverContext>;

export const Popover = ({
  size = "md",
  isUnstyled = false,
  ...props
}: Popover) => (
  <PopoverProvider value={{ size, isUnstyled }}>
    <PopoverPrimitive.Root {...props} />
  </PopoverProvider>
);
Popover.displayName = "Popover";

// PopoverTrigger Component
export type PopoverTrigger = ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Trigger
> &
  Button;

export const PopoverTrigger = forwardRef<
  ElementRef<typeof PopoverPrimitive.Trigger>,
  PopoverTrigger
>(
  (
    {
      children,
      asChild = false,
      variant = "solid",
      colorScheme = "secondary",
      leftIcon = undefined,
      rightIcon = undefined,
      isDisabled = false,
      isActive = false,
      isLoading = false,
      isUnstyled = false,
      size = "md",
      ...props
    },
    forwardedRef,
  ) => {
    const { isUnstyled: isParentUnstyled } = usePopoverContext();
    const unstyle = isParentUnstyled || isUnstyled;

    const buttonProps = {
      children,
      size,
      variant,
      colorScheme,
      leftIcon,
      rightIcon,
      isDisabled,
      isActive,
      isLoading,
      isUnstyled: unstyle,
    };

    return (
      <PopoverPrimitive.Trigger {...props} ref={forwardedRef} asChild>
        {asChild ? children : <Button {...buttonProps} />}
      </PopoverPrimitive.Trigger>
    );
  },
);
PopoverTrigger.displayName = "PopoverTrigger";

const POPOVER_CONTENT_CLASSES = {
  sm: "max-w-[20rem] p-3",
  md: "max-w-[30rem] p-4",
  lg: "max-w-[40rem] p-5",
} as const;

// PopoverContent Component
export type PopoverContent = ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Content
> & {
  isUnstyled?: boolean;
  showArrow?: BooleanOrFunction;
  arrowClassName?: string;
};

export const PopoverContent = forwardRef<
  ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContent
>(
  (
    {
      children,
      className,
      sideOffset = 10,
      isUnstyled = false,
      showArrow,
      arrowClassName,
      ...props
    },
    forwardedRef,
  ) => {
    const { isUnstyled: isParentUnstyled, size } = usePopoverContext();
    const unstyle = isParentUnstyled || isUnstyled;

    return (
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          {...props}
          sideOffset={sideOffset}
          className={
            unstyle
              ? className
              : classNames(
                  POPOVER_CONTENT_CLASSES[size],
                  "z-50 w-full rounded-md shadow-[0px_4px_10px_6px_rgba(60,60,60,0.1)] outline-none",
                  "dark:bg-secondary-800 dark:text-secondary-100 bg-white",
                  "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                  className,
                )
          }
          ref={forwardedRef}
        >
          {children}
          {getValue(showArrow) && (
            <PopoverPrimitive.Arrow
              className={classNames(
                "dark:fill-secondary-800 fill-white",
                arrowClassName,
              )}
            />
          )}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    );
  },
);
PopoverContent.displayName = "PopoverContent";

export const PopoverClose = PopoverPrimitive.Close;
PopoverClose.displayName = "PopoverClose";
