import React from "react";
import { classNames } from "../utils";

// UnorderedList Component
export type UnorderedList = JSX.IntrinsicElements["ul"] & {
  isUnstyled?: boolean;
};

export const UnorderedList = React.forwardRef<HTMLUListElement, UnorderedList>(
  ({ className, children, isUnstyled = false, ...props }, forwardedRef) => {
    return (
      <ul
        ref={forwardedRef}
        {...props}
        className={
          isUnstyled
            ? className
            : classNames("list-inside list-disc", className)
        }
      >
        {children}
      </ul>
    );
  },
);

UnorderedList.displayName = "UnorderedList";
