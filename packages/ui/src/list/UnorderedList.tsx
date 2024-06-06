import { type HTMLAttributes, forwardRef } from "react";
import { classNames } from "../utils";

export type UnorderedList = HTMLAttributes<HTMLUListElement> & {
  isUnstyled?: boolean;
};

export const UnorderedList = forwardRef<HTMLUListElement, UnorderedList>(
  function UnorderedList(
    { className, children, isUnstyled = false, ...props },
    forwardedRef,
  ) {
    return (
      <ul
        ref={forwardedRef}
        {...props}
        className={
          isUnstyled
            ? className
            : classNames("list-inside list-disc", className)
        }
      >
        {children}
      </ul>
    );
  },
);
