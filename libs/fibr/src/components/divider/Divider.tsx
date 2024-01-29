import { createThread, useThread } from "@fibr/react";
import { BooleanOrFunction } from "@rafty/shared";
import { classNames } from "@rafty/ui";
import { TooltipWrapper } from "../TooltipWrapper";

export type Divider = {
  hidden?: BooleanOrFunction;
  tooltip?: string;
};

export function Divider() {
  const { hidden, tooltip } = useThread<Divider>();

  const component = (
    <div
      className={classNames(
        hidden && "hidden",
        "bg-secondary-300 dark:bg-secondary-700 h-px w-full",
      )}
    />
  );

  if (tooltip)
    return <TooltipWrapper content={tooltip}>{component}</TooltipWrapper>;

  return component;
}

export const divider = createThread<Divider>("divider");
