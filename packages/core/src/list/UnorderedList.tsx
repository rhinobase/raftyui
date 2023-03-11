import { classNames } from "@rhinobase/utils";
import React, { forwardRef } from "react";

export type UnorderedList = JSX.IntrinsicElements["ul"] & {
  children: React.ReactNode;
  className?: string;
};

export const UnorderedList = forwardRef<HTMLUListElement, UnorderedList>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <ul
        ref={forwardedRef}
        {...props}
        className={classNames("list-inside list-disc", className)}
      >
        {props.children}
      </ul>
    );
  },
);

UnorderedList.displayName = "UnorderedList";
