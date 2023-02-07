import { classNames } from "@rhinobase/utils";
import React from "react";
import { forwardRef } from "react";

// TableHead Component (Used in Table Component)
export const TableHead = forwardRef<
  HTMLTableSectionElement,
  JSX.IntrinsicElements["thead"]
>(({ children, ...props }, forwardedRef) => (
  <thead
    {...props}
    className={classNames(
      "bg-secondary-100 dark:bg-secondary-700/80",
      props.className
    )}
    ref={forwardedRef}
  >
    {children}
  </thead>
));
