import { classNames } from "@rhinobase/utils";
import React from "react";
import { forwardRef } from "react";

// TableContainer Component
export const TableContainer = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements["div"]
>(({ children, ...props }, forwardedRef) => (
  <div
    {...props}
    className={classNames(
      "dark:ring-secondary-700 mx-auto inline-block w-full overflow-hidden rounded-lg align-middle shadow ring-1 ring-black ring-opacity-5",
      props.className
    )}
    ref={forwardedRef}
  >
    {children}
  </div>
));
