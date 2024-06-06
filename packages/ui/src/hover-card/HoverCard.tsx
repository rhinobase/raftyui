import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import { classNames } from "../utils";

export const HoverCard = HoverCardPrimitive.Root;
HoverCard.displayName = "HoverCard";

export const HoverCardTrigger = HoverCardPrimitive.Trigger;
HoverCardTrigger.displayName = "HoverCardTrigger";

export type HoverCardContent = ComponentPropsWithoutRef<
  typeof HoverCardPrimitive.Content
>;

export const HoverCardContent = forwardRef<
  ElementRef<typeof HoverCardPrimitive.Content>,
  HoverCardContent
>(function HoverCardContent(
  { className, align = "center", sideOffset = 4, ...props },
  forwardedRef,
) {
  const hoverCardContentProps = {
    ...props,
    align,
    sideOffset,
    ref: forwardedRef,
  };

  return (
    <HoverCardPrimitive.Content
      {...hoverCardContentProps}
      className={classNames(
        "dark:border-secondary-700 dark:bg-secondary-800 dark:text-secondary-100 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 rounded-md border bg-white p-4 shadow-md outline-none",
        className,
      )}
      ref={forwardedRef}
    />
  );
});
