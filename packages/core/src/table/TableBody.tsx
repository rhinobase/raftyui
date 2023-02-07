import { forwardRef } from "react";
import { removeDuplicate } from "@rhinobase/lib";

// TableBody Component (Used in Table Component)
export const TableBody = forwardRef<HTMLTableSectionElement, JSX.IntrinsicElements["tbody"]>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <tbody
        {...props}
        className={removeDuplicate("dark:bg-secondary-700/40 bg-white", props.className)}
        ref={forwardedRef}>
        {children}
      </tbody>
    );
  }
);
