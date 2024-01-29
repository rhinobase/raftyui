import { createThread, useThread } from "@fibr/react";
import { TooltipWrapper } from "../TooltipWrapper";

export type HeadingField = {
  level?: "1" | "2" | "3" | "4" | "5" | "6";
  value: string;
  hidden?: boolean;
  tooltip?: string;
};

export function HeadingField() {
  const { level = "1", value, hidden, tooltip } = useThread<HeadingField>();

  const Heading = `h${level}` as "h1";

  const component = (
    <Heading className={hidden ? "hidden" : undefined}>{value}</Heading>
  );

  if (tooltip)
    return <TooltipWrapper content={tooltip}>{component}</TooltipWrapper>;

  return component;
}

export const heading = createThread<HeadingField>("heading");
