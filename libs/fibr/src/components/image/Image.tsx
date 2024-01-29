import { createThread, useThread } from "@fibr/react";
import { classNames } from "@rafty/ui";
import { TooltipWrapper } from "../TooltipWrapper";

export type Image = {
  src: string;
  alt: string;
  hidden?: boolean;
  tooltip?: string;
};

export function Image() {
  const { src, alt, hidden, tooltip } = useThread<Image>();

  const component = (
    <img
      src={src}
      alt={alt}
      className={classNames(hidden && "hidden", "w-full object-cover")}
    />
  );

  if (tooltip)
    return <TooltipWrapper content={tooltip}>{component}</TooltipWrapper>;

  return component;
}

export const image = createThread<Image>("image");
