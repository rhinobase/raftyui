import React, { forwardRef } from "react";
import { classNames } from "../utils";

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
