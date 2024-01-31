import { createThread, useThread } from "@fibr/react";
import { classNames } from "@rafty/ui";
import { TooltipWrapper, type TooltipWrapperProps } from "../TooltipWrapper";

export type Text = TooltipWrapperProps<{
  value: string;
  hidden?: boolean;
}>;

export function Text() {
  // Getting component config
  const { value, hidden } = useThread<Text>();

  const component = (
    <p
      className={classNames(hidden && "hidden", "bg-secondary-100 font-medium")}
    >
      {value}
    </p>
  );
  return <TooltipWrapper>{component}</TooltipWrapper>;
}

export const text = createThread<Text>("text");
