import { classNames } from "@rhinobase/utils";
import React, { forwardRef } from "react";

export type ListItem = JSX.IntrinsicElements["li"];

export const ListItem = forwardRef<HTMLLIElement, ListItem>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <li
        ref={forwardedRef}
        {...props}
        className={classNames(className, "dark:text-secondary-100")}
      >
        {children}
      </li>
    );
  },
);

ListItem.displayName = "ListItem";
