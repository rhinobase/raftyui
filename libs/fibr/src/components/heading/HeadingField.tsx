import { createThread, useThread } from "@fibr/react";
import { TooltipWrapper, type TooltipWrapperProps } from "../TooltipWrapper";

export type HeadingField = TooltipWrapperProps<{
  level?: "1" | "2" | "3" | "4" | "5" | "6";
  value: string;
  hidden?: boolean;
}>;

export function HeadingField() {
  const { level = "1", value, hidden } = useThread<HeadingField>();

  const Heading = `h${level}` as "h1";

  const component = (
    <Heading className={hidden ? "hidden" : undefined}>{value}</Heading>
  );

  return <TooltipWrapper>{component}</TooltipWrapper>;
}

export const heading = createThread<HeadingField>("heading");
