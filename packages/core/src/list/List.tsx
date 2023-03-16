import { classNames } from "@rhinobase/utils";
import React, { forwardRef } from "react";

export type List = JSX.IntrinsicElements["ul"];

export const List = forwardRef<HTMLUListElement, List>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <ul ref={forwardedRef} {...props} className={classNames(className)}>
        {props.children}
      </ul>
    );
  },
);

List.displayName = "List";
