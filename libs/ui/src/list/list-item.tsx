import { classNames } from "@rafty/utils";
import React from "react";

// ListItem Component
export type ListItem = JSX.IntrinsicElements["li"] & { isUnstyled?: boolean };

export const ListItem = React.forwardRef<HTMLLIElement, ListItem>(
  ({ className, children, isUnstyled = false, ...props }, forwardedRef) => {
    return (
      <li
        ref={forwardedRef}
        {...props}
        className={
          isUnstyled
            ? className
            : classNames(className, "dark:text-secondary-100")
        }
      >
        {children}
      </li>
    );
  }
);

ListItem.displayName = "ListItem";
