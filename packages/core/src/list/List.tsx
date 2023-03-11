import { classNames } from "@rhinobase/utils";
import React, { forwardRef } from "react";

export type List = JSX.IntrinsicElements["ul"] & {
  children: React.ReactNode;
  className?: string;
};

export const List = forwardRef<HTMLUListElement, List>(
  ({ defaultValue, className, ...props }, forwardedRef) => {
    return (
      <ul ref={forwardedRef} {...props} className={classNames(className)}>
        {props.children}
      </ul>
    );
  },
);

List.displayName = "List";
