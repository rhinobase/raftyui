import { forwardRef } from "react";
import { removeDuplicate } from "@rhinobase/lib";

// Tr Component (Used in Table Component)
export const Tr = forwardRef<HTMLTableRowElement, JSX.IntrinsicElements["tr"]>(
  ({ children, ...props }, forwardedRef) => (
    <tr
      {...props}
      className={removeDuplicate("even:bg-secondary-100 dark:even:bg-secondary-700/50", props.className)}
      ref={forwardedRef}>
      {children}
    </tr>
  )
);
