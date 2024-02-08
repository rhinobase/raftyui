import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { BooleanOrFunction, getValue } from "@rafty/shared";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { classNames } from "../utils";

// TooltipProvider Component
const TooltipProvider = TooltipPrimitive.Provider;

// Tooltip Component
export type Tooltip = ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>;

export const Tooltip = ({ children, ...props }: Tooltip) => (
  <TooltipProvider>
    <TooltipPrimitive.Root {...props}>{children}</TooltipPrimitive.Root>
  </TooltipProvider>
);
Tooltip.displayName = "Tooltip";

// TooltipTrigger Component
export type TooltipTrigger = ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Trigger
>;

export const TooltipTrigger = forwardRef<
  ElementRef<typeof TooltipPrimitive.Trigger>,
  TooltipTrigger
>((props, forwardedRef) => (
  <TooltipPrimitive.Trigger {...props} ref={forwardedRef} />
));
TooltipTrigger.displayName = "TooltipTrigger";

// TooltipContent Component
export type TooltipContent = ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Content
> & { isArrow?: BooleanOrFunction; hasAnimation?: BooleanOrFunction };

export const TooltipContent = forwardRef<
  ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContent
>(
  (
    { children, className, hasAnimation, sideOffset = 4, isArrow, ...props },
    forwardedRef,
  ) => {
    const _isArrow = getValue(isArrow) ?? true;
    const _hasAnimation = getValue(hasAnimation) ?? true;

    return (
      <TooltipPrimitive.Content
        ref={forwardedRef}
        sideOffset={sideOffset}
        className={classNames(
          "bg-secondary-800 text-secondary-100 dark:bg-secondary-100 dark:text-secondary-700 relative z-40 max-w-[250px] rounded-md px-2 py-1 text-xs font-medium shadow-md",
          _hasAnimation &&
            "data-[side=top]:animate-slide-down-fade data-[side=right]:animate-slide-left-fade data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade",
          className,
        )}
        {...props}
      >
        {children}
        {_isArrow && (
          <TooltipPrimitive.Arrow className="fill-secondary-800 dark:fill-secondary-50" />
        )}
      </TooltipPrimitive.Content>
    );
  },
);
TooltipContent.displayName = "TooltipContent";
