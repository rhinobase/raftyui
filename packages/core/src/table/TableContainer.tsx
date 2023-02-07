import { forwardRef } from "react";
import { removeDuplicate } from "@rhinobase/lib";

// TableContainer Component
export const TableContainer = forwardRef<HTMLDivElement, JSX.IntrinsicElements["div"]>(
  ({ children, ...props }, forwardedRef) => (
    <div
      {...props}
      className={removeDuplicate(
        "dark:ring-secondary-700 mx-auto inline-block w-full overflow-hidden rounded-lg align-middle shadow ring-1 ring-black ring-opacity-5",
        props.className
      )}
      ref={forwardedRef}>
      {children}
    </div>
  )
);
