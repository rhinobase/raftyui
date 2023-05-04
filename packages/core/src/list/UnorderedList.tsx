import React, { forwardRef } from "react";
import { classNames } from "../utils";

export type UnorderedList = JSX.IntrinsicElements["ul"] & {
  unstyled?: boolean;
};

export const UnorderedList = forwardRef<HTMLUListElement, UnorderedList>(
  ({ className, children, unstyled = false, ...props }, forwardedRef) => {
    return (
      <ul
        ref={forwardedRef}
        {...props}
        className={
          unstyled ? className : classNames("list-inside list-disc", className)
        }
      >
        {children}
      </ul>
    );
  }
);

UnorderedList.displayName = "UnorderedList";
