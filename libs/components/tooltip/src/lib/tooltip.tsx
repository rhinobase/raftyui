import React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { classNames } from "@rhino/utils";

export type Tooltip = {
  children: React.ReactNode;
  content: React.ReactNode;
  isArrow?: boolean;
  delayDuration?: number;
  hasAnimation?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  sideOffset?: number;
  alignOffset?: number;
  onOpenChange?: (open: boolean) => void;
  className?: string;
};
export function Tooltip({
  children,
  className,
  content,
  isArrow = true,
  delayDuration = 50,
  hasAnimation = true,
  open,
  defaultOpen,
  onOpenChange,
  side = "top",
  align = "center",
  sideOffset = 10,
  alignOffset,
}: Tooltip) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root
        delayDuration={delayDuration}
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
      >
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            align={align}
            sideOffset={sideOffset}
            alignOffset={alignOffset}
            className={classNames(
              hasAnimation === true &&
                "data-[side=top]:animate-slide-down-fade data-[side=right]:animate-slide-left-fade data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade",
              typeof content == "string" &&
                "bg-secondary-800 text-secondary-100 dark:bg-secondary-100 dark:text-secondary-700 relative z-40 max-w-[250px] rounded-md py-1 px-2 text-xs font-medium shadow-md",
              className
            )}
          >
            {content}
            {isArrow && (
              <TooltipPrimitive.Arrow className="fill-secondary-800 dark:fill-secondary-50" />
            )}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
