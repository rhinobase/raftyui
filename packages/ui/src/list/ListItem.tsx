import { type HTMLAttributes, forwardRef } from "react";
import { classNames } from "../utils";

export type ListItem = HTMLAttributes<HTMLLIElement> & {
  isUnstyled?: boolean;
};

export const ListItem = forwardRef<HTMLLIElement, ListItem>(function ListItem(
  { className, children, isUnstyled = false, ...props },
  forwardedRef,
) {
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
});
