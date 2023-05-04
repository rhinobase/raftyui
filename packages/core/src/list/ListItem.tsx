import { forwardRef } from "react";
import { classNames } from "../utils";

export type ListItem = JSX.IntrinsicElements["li"] & { unstyled?: boolean };

export const ListItem = forwardRef<HTMLLIElement, ListItem>(
  ({ className, children, unstyled = false, ...props }, forwardedRef) => {
    return (
      <li
        ref={forwardedRef}
        {...props}
        className={
          unstyled
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
