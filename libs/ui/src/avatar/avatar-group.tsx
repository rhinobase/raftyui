import React from "react";
import { classNames, getValidChildren } from "@rafty/utils";
import { AvatarGroupContext, AvatarGroupProvider } from "./context";
import { Avatar } from "./avatar";

export type AvatarGroup = JSX.IntrinsicElements["div"] &
  Partial<AvatarGroupContext> & { max?: number };

export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroup>(
  ({ max, className, children, size = "md", ...props }, forwardedRef) => {
    const validChildren = getValidChildren(children);

    //get the avatars within the max
    const childrenWithinMax =
      max != null ? validChildren.slice(0, max) : validChildren;

    //get the remaining avatar count
    const excess = max != null ? validChildren.length - max : 0;

    if (excess > 0) childrenWithinMax.push(<Avatar name={"+" + excess} />);

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
          className={classNames(
            "group relative flex items-center w-[200px]",
            className
          )}
          data-group={true}
          ref={forwardedRef}
        >
          {clones}
        </div>
      </AvatarGroupProvider>
    );
  }
);
AvatarGroup.displayName = "AvatarGroup";
