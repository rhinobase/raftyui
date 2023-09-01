"use client";
import React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { classNames } from "../utils";

// ScrollArea component
export type ScrollArea = React.ComponentPropsWithoutRef<
  typeof ScrollAreaPrimitive.Root
>;

export const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollArea
>(({ className, children, ...props }, forwardedref) => (
  <ScrollAreaPrimitive.Root
    ref={forwardedref}
    className={classNames("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = "ScrollArea";

// ScrollBar component
export type ScrollBar = React.ComponentPropsWithoutRef<
  typeof ScrollAreaPrimitive.ScrollAreaScrollbar
>;

export const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  ScrollBar
>(({ className, orientation = "vertical", ...props }, forwardedref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={forwardedref}
    orientation={orientation}
    className={classNames(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 p-[1px]",
      orientation === "horizontal" && "h-2.5 p-[1px]",
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-secondary-200 dark:bg-secondary-800" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = "ScrollBar";
