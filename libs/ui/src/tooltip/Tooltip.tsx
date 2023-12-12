import React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { classNames } from "../utils";

// TooltipProvider Component
const TooltipProvider = TooltipPrimitive.Provider;

// Tooltip Component
export type Tooltip = React.ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Root
>;

export const Tooltip = ({ children, ...props }: Tooltip) => (
  <TooltipProvider>
    <TooltipPrimitive.Root {...props}>{children}</TooltipPrimitive.Root>
  </TooltipProvider>
);
Tooltip.displayName = "Tooltip";

// TooltipTrigger Component
export type TooltipTrigger = React.ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Trigger
>;

export const TooltipTrigger = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Trigger>,
  TooltipTrigger
>(({ className, children, ...props }, forwardedRef) => (
  <TooltipPrimitive.Trigger ref={forwardedRef} {...props} asChild>
    {children}
  </TooltipPrimitive.Trigger>
));
TooltipTrigger.displayName = "TooltipTrigger";

// TooltipContent Component
export type TooltipContent = React.ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Content
> & { isArrow?: boolean; hasAnimation?: boolean };

export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContent
>(
  (
    {
      children,
      className,
      hasAnimation = true,
      sideOffset = 4,
      isArrow = true,
      ...props
    },
    forwardedRef,
  ) => (
    <TooltipPrimitive.Content
      ref={forwardedRef}
      sideOffset={sideOffset}
      className={classNames(
        "bg-secondary-800 text-secondary-100 dark:bg-secondary-100 dark:text-secondary-700 relative z-40 max-w-[250px] rounded-md px-2 py-1 text-xs font-medium shadow-md",
        hasAnimation &&
          "data-[side=top]:animate-slide-down-fade data-[side=right]:animate-slide-left-fade data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade",
        className,
      )}
      {...props}
    >
      {children}
      {isArrow && (
        <TooltipPrimitive.Arrow className="fill-secondary-800 dark:fill-secondary-50" />
      )}
    </TooltipPrimitive.Content>
  ),
);
TooltipContent.displayName = "TooltipContent";
