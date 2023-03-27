import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { classNames } from "@rhinobase/utils";
import React from "react";

export interface Tooltip {
  children: React.ReactNode;
  content: React.ReactNode;
  hasArrow?: boolean;
  delayDuration?: number;
  hasAnimation?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  onOpenChange?: (open: boolean) => void;
}
// Tooltip Component
export function Tooltip({
  children,
  content,
  hasArrow = true,
  delayDuration = 50,
  hasAnimation = true,
  open,
  defaultOpen,
  onOpenChange,
  side = "top",
  align = "center",
  ...props
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
            className={classNames(
              side === "top" && "-mt-7",
              side === "right" && "ml-2",
              hasAnimation == true &&
                "data-[side=top]:animate-slide-down-fade data-[side=right]:animate-slide-left-fade data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade",
              "bg-secondary-800 text-secondary-100 dark:bg-secondary-100 dark:text-secondary-700 relative z-40 max-w-[250px] rounded-md py-1 px-2 text-xs font-medium shadow-md",
            )}
            side={side}
            align={align}
            {...props}
          >
            {content}
            {hasArrow && (
              <TooltipPrimitive.Arrow className="fill-secondary-800 dark:fill-secondary-50" />
            )}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}

export default Tooltip;
