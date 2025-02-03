"use client";
import { type HTMLAttributes, cloneElement, forwardRef, useId } from "react";
import { Avatar } from "../avatar/Avatar.js";
import { classNames, getValidChildren } from "../utils/index.js";
import { type AvatarGroupContext, AvatarGroupProvider } from "./context.js";
import { calculateWidth } from "./utils.js";

const LEFT_OFFSET = {
  sm: 22,
  md: 28,
  lg: 37,
} as const;

export type AvatarGroup = HTMLAttributes<HTMLDivElement> &
  Partial<AvatarGroupContext> & { max?: number };

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroup>(
  function AvatarGroup(
    {
      max,
      className,
      children,
      size = "md",
      style,
      isUnstyled = false,
      ...props
    },
    forwardedRef,
  ) {
    const validChildren = getValidChildren(children);

    let childrenToShow = validChildren.length;
    if (max && max > 0) {
      childrenToShow = max;
    }

    const childrenWithinMax = validChildren.slice(0, childrenToShow);

    const excess = validChildren.length - childrenToShow;

    const excessKey = useId();

    if (excess > 0) {
      childrenWithinMax.push(<Avatar key={excessKey} name={`+${excess}`} />);
    }

    const clones = childrenWithinMax.map((child, index) => {
      const childProps = {
        "data-child": true,
        style: {
          left: index * LEFT_OFFSET[size],
          zIndex: 10 - index,
        },
      };

      return cloneElement(child, childProps);
    });

    const groupWidth = calculateWidth(size, childrenWithinMax.length);

    return (
      <AvatarGroupProvider value={{ size, isUnstyled }}>
        <div
          {...props}
          className={classNames("relative flex items-center", className)}
          style={{ width: groupWidth, ...style }}
          ref={forwardedRef}
        >
          {clones}
        </div>
      </AvatarGroupProvider>
    );
  },
);
