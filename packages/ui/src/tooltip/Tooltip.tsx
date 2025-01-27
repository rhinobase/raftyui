"use client";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cva } from "class-variance-authority";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import type { ValueOrFunction } from "../types/index.js";
import { classNames, getValue } from "../utils/index.js";
import {
  type TooltipContext,
  TooltipProvider,
  useTooltipContext,
} from "./context.js";

export type Tooltip = ComponentPropsWithoutRef<typeof TooltipPrimitive.Root> &
  Partial<TooltipContext>;

export function Tooltip({
  children,
  size = "md",
  isDisabled = false,
  ...props
}: Tooltip) {
  return (
    <TooltipProvider
      value={{
        size,
        isDisabled,
      }}
    >
      <TooltipPrimitive.Provider>
        <TooltipPrimitive.Root {...props}>{children}</TooltipPrimitive.Root>
      </TooltipPrimitive.Provider>
    </TooltipProvider>
  );
}

export type TooltipTrigger = ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Trigger
>;

export const TooltipTrigger = forwardRef<
  ElementRef<typeof TooltipPrimitive.Trigger>,
  TooltipTrigger
>(function TooltipTrigger({ disabled = false, ...props }, forwardedRef) {
  const { isDisabled: isParentDisabled } = useTooltipContext();
  const isDisabled = isParentDisabled || disabled;

  return (
    <TooltipPrimitive.Trigger
      {...props}
      disabled={isDisabled}
      ref={forwardedRef}
    />
  );
});

export const tooltipContentClasses = cva(
  "bg-secondary-800 text-secondary-100 dark:bg-secondary-100 dark:text-secondary-700 relative z-40 font-medium shadow-md",
  {
    variants: {
      size: {
        sm: "max-w-[220px] rounded px-1 py-0.5 text-[11px] leading-tight",
        md: "max-w-[250px] rounded-md px-1.5 py-1 text-[12px] leading-tight",
        lg: "max-w-[280px] rounded-lg px-2 py-1.5 text-[13px] leading-tight",
      },
      animated: {
        true: "data-[side=top]:animate-slide-down-fade data-[side=right]:animate-slide-left-fade data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export type TooltipContent = ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Content
> & { isArrow?: ValueOrFunction; hasAnimation?: ValueOrFunction };

export const TooltipContent = forwardRef<
  ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContent
>(function TooltipContent(
  { children, className, hasAnimation, sideOffset = 4, isArrow, ...props },
  forwardedRef
) {
  const _isArrow = getValue(isArrow) ?? true;
  const _hasAnimation = getValue(hasAnimation) ?? true;
  const { isDisabled, size } = useTooltipContext();

  if (isDisabled) return;

  return (
    <TooltipPrimitive.Content
      ref={forwardedRef}
      sideOffset={sideOffset}
      className={classNames(
        tooltipContentClasses({ size, animated: _hasAnimation }),
        className
      )}
      {...props}
    >
      {children}
      {_isArrow && (
        <TooltipPrimitive.Arrow className="fill-secondary-800 dark:fill-secondary-50" />
      )}
    </TooltipPrimitive.Content>
  );
});
