"use client";
import React from "react";
import { classNames, getValidChildren } from "../utils";
import { AvatarGroupContext, AvatarGroupProvider } from "./context";
import { Avatar } from "./Avatar";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { calculateWidth } from "./utils";

export type AvatarGroup = React.HTMLAttributes<HTMLDivElement> &
  Partial<AvatarGroupContext> & { max?: number };

export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroup>(
  (
    { max, className, children, size = "md", style, ...props },
    forwardedRef,
  ) => {
    const validChildren = getValidChildren(children);

    //get the avatars within the max
    const childrenWithinMax =
      max != null ? validChildren.slice(0, max) : validChildren;

    const groupWidth = calculateWidth(size, childrenWithinMax.length);

    //get the remaining avatar count
    const excess = max != null ? validChildren.length - max : 0;

    if (excess > 0) {
      childrenWithinMax.push(<Avatar name={"+" + excess} />);
    }

    const clones = childrenWithinMax.map((child, index) => {
      const leftOffset = size === "sm" ? 22 : size === "md" ? 28 : 37;
      const childProps = {
        style: {
          left: 0 + index * leftOffset,
          zIndex: 10 - index,
        },
      };
      return React.cloneElement(child, childProps);
    });

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
