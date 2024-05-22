import { type HTMLAttributes, forwardRef } from "react";
import { classNames } from "../utils";

// ListItem Component
export type ListItem = HTMLAttributes<HTMLLIElement> & {
  isUnstyled?: boolean;
};

export const ListItem = forwardRef<HTMLLIElement, ListItem>(
  ({ className, children, isUnstyled = false, ...props }, forwardedRef) => (
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
  ),
);

ListItem.displayName = "ListItem";
