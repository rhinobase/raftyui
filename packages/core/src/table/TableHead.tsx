import { forwardRef } from "react";
import { removeDuplicate } from "@rhinobase/lib";

// TableHead Component (Used in Table Component)
export const TableHead = forwardRef<HTMLTableSectionElement, JSX.IntrinsicElements["thead"]>(
  ({ children, ...props }, forwardedRef) => (
    <thead
      {...props}
      className={removeDuplicate("bg-secondary-100 dark:bg-secondary-700/80", props.className)}
      ref={forwardedRef}>
      {children}
    </thead>
  )
);
