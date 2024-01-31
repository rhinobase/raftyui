import { createThread, useThread } from "@fibr/react";
import { classNames } from "@rafty/ui";
import { TooltipWrapper, type TooltipWrapperProps } from "../TooltipWrapper";

export type Image = TooltipWrapperProps<{
  src: string;
  alt: string;
  hidden?: boolean;
}>;

export function Image() {
  const { src, alt, hidden } = useThread<Image>();

  const component = (
    <img
      src={src}
      alt={alt}
      className={classNames(hidden && "hidden", "w-full object-cover")}
    />
  );

  return <TooltipWrapper>{component}</TooltipWrapper>;
}

export const image = createThread<Image>("image");
