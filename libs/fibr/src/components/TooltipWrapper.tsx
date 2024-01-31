import { useThread } from "@fibr/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@rafty/ui";
import { PropsWithChildren } from "react";

export type TooltipWrapperProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = {
  tooltip: string;
} & T;

export function TooltipWrapper({ children }: PropsWithChildren) {
  const { tooltip } = useThread<TooltipWrapperProps>();

  if (tooltip)
    return (
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent
          align="start"
          className="rounded px-1.5 py-1 leading-none"
        >
          {tooltip}
        </TooltipContent>
      </Tooltip>
    );

  return children;
}
