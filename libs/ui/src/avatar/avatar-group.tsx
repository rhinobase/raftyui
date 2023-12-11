"use client";
import React from "react";
import { classNames, getValidChildren } from "../utils";
import { AvatarGroupContext, AvatarGroupProvider } from "./context";
import { Avatar } from "./avatar";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { calculateWidth } from "./utils";

const LEFT_OFFSET = {
  sm: 22,
  md: 28,
  lg: 37,
} as const;

export type AvatarGroup = React.HTMLAttributes<HTMLDivElement> &
  Partial<AvatarGroupContext> & { max?: number };

export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroup>(
  (
    { max, className, children, size = "md", style, ...props },
    forwardedRef,
  ) => {
    const validChildren = getValidChildren(children);

    // Max should be one less than number of avatars
    let childrenToShow = validChildren.length;
    if (max && max > 0) {
      childrenToShow = max;
    }

    // Get the avatars within the max
    const childrenWithinMax = validChildren.slice(0, childrenToShow);

    // Get the remaining avatar count
    const excess = validChildren.length - childrenToShow;

    // Adding the last Avatar component to show the remaing number of children
    if (excess > 0) {
      childrenWithinMax.push(<Avatar key="excess" name={`+${excess}`} />);
    }

    // Childrens with correct left offset in a group
    const clones = childrenWithinMax.map((child, index) => {
      const childProps = {
        style: {
          left: index * LEFT_OFFSET[size],
          zIndex: 10 - index,
        },
      };

      return React.cloneElement(child, childProps);
    });

    // Width of the Avatar Group component
    const groupWidth = calculateWidth(size, childrenWithinMax.length);

    return (
      <AvatarGroupProvider value={{ size }}>
        <div
          {...props}
          className={classNames("group relative flex items-center", className)}
          style={{ width: groupWidth }}
          data-group={true}
          ref={forwardedRef}
        >
          {clones}
        </div>
      </AvatarGroupProvider>
    );
  },
);

AvatarGroup.displayName = "AvatarGroup";
