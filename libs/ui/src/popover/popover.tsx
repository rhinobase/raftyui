"use client";
import React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { classNames } from "../utils";
import { Button } from "../button";
import { PopoverContext, PopoverProvider, usePopoverContext } from "./context";

// Popover Component
export type Popover = React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Root
> &
  Partial<PopoverContext>;

export const Popover = ({
  size = "md",
  isBarebone = false,
  ...props
}: Popover) => (
  <PopoverProvider value={{ size, isBarebone }}>
    <PopoverPrimitive.Root {...props} />
  </PopoverProvider>
);
Popover.displayName = "Popover";

// PopoverTrigger Component
export type PopoverTrigger = React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Trigger
> &
  Button;

export const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Trigger>,
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
    const { isBarebone } = usePopoverContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <PopoverPrimitive.Trigger {...props} ref={forwardedRef} asChild>
        {asChild ? (
          children
        ) : (
          <Button
            variant={variant}
            colorScheme={colorScheme}
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            isDisabled={isDisabled}
            isActive={isActive}
            size={size}
            isUnstyled={unstyle}
          >
            {children}
          </Button>
        )}
      </PopoverPrimitive.Trigger>
    );
  },
);
PopoverTrigger.displayName = "PopoverTrigger";

// PopoverContent Component
export type PopoverContent = React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Content
> & { isUnstyled?: boolean; showArrow?: boolean };

export const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContent
>(
  (
    {
      children,
      className,
      sideOffset = 4,
      isUnstyled = false,
      showArrow = false,
      ...props
    },
    forwardedRef,
  ) => {
    const { isBarebone } = usePopoverContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          {...props}
          sideOffset={sideOffset}
          className={
            unstyle
              ? className
              : classNames(
                  "z-50 rounded-md p-4 shadow-[0px_4px_10px_6px_rgba(60,60,60,0.1)] outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                  "dark:bg-secondary-800 bg-white dark:text-secondary-100",
                  className,
                )
          }
          ref={forwardedRef}
        >
          {children}
          {showArrow && (
            <PopoverPrimitive.Arrow className="fill-white dark:fill-secondary-800" />
          )}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    );
  },
);
PopoverContent.displayName = "PopoverContent";

export const PopoverClose = PopoverPrimitive.Close;
PopoverClose.displayName = "PopoverClose";
