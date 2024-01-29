import { Tooltip, TooltipContent, TooltipTrigger } from "@rafty/ui";
import { PropsWithChildren } from "react";

export type TooltipWrapper = PropsWithChildren<{
  content: string;
}>;

export function TooltipWrapper({ content, children }: TooltipWrapper) {
  return (
    <Tooltip>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent
        align="start"
        className="rounded px-1.5 py-1 leading-none"
      >
        {content}
      </TooltipContent>
    </Tooltip>
  );
}
