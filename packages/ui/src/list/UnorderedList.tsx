import { type HTMLAttributes, forwardRef } from "react";
import { classNames } from "../utils";

// UnorderedList Component
export type UnorderedList = HTMLAttributes<HTMLUListElement> & {
  isUnstyled?: boolean;
};

export const UnorderedList = forwardRef<HTMLUListElement, UnorderedList>(
  ({ className, children, isUnstyled = false, ...props }, forwardedRef) => (
    <ul
      ref={forwardedRef}
      {...props}
      className={
        isUnstyled ? className : classNames("list-inside list-disc", className)
      }
    >
      {children}
    </ul>
  ),
);

UnorderedList.displayName = "UnorderedList";
