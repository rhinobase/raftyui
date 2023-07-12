import React from "react";
import { classNames, getValidChildren } from "@rafty/utils";

export type AvatarGroup = { max?: number } & JSX.IntrinsicElements["div"];

export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroup>(
  ({ max, className, children, ...props }, forwardedRef) => {
    const validChildren = getValidChildren(children);

    //get the avatars within the max
    const childrenWithinMax =
      max != null ? validChildren.slice(0, max) : validChildren;

    //get the remaining avatar count
    const excess = max != null ? validChildren.length - max : 0;

    const clones = childrenWithinMax.map((child, index) => {
      const childProps = {
        style: {
          left: 0 + index * 25,
          zIndex: 10 - index,
        },
      };

      return React.cloneElement(child, childProps);
    });

    return (
      <div
        {...props}
        className={classNames(
          "group relative flex items-center w-[200px]",
          className
        )}
        data-group={true}
        ref={forwardedRef}
      >
        {excess > 0 && <span>{`+${excess}`}</span>}
        {clones}
      </div>
    );
  }
);
AvatarGroup.displayName = "AvatarGroup";
