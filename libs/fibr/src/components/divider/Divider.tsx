import { createThread, useThread } from "@fibr/react";
import { BooleanOrFunction } from "@rafty/shared";
import { classNames } from "@rafty/ui";
import { TooltipWrapper, type TooltipWrapperProps } from "../TooltipWrapper";

export type Divider = TooltipWrapperProps<{
  hidden?: BooleanOrFunction;
}>;

export function Divider() {
  const { hidden } = useThread<Divider>();

  const component = (
    <div
      className={classNames(
        hidden && "hidden",
        "bg-secondary-300 dark:bg-secondary-700 h-px w-full",
      )}
    />
  );
  return <TooltipWrapper>{component}</TooltipWrapper>;
}

export const divider = createThread<Divider>("divider");
