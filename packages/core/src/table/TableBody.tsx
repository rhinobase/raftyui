import { classNames } from "@rhinobase/utils";
import React from "react";
import { forwardRef } from "react";

// TableBody Component (Used in Table Component)
export const TableBody = forwardRef<
  HTMLTableSectionElement,
  JSX.IntrinsicElements["tbody"]
>(({ children, ...props }, forwardedRef) => {
  return (
    <tbody
      {...props}
      className={classNames(
        "dark:bg-secondary-700/40 bg-white",
        props.className
      )}
      ref={forwardedRef}
    >
      {children}
    </tbody>
  );
});
