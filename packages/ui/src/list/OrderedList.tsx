import { type OlHTMLAttributes, forwardRef } from "react";
import { classNames } from "../utils/index.js";

export type OrderedList = OlHTMLAttributes<HTMLOListElement> & {
  isUnstyled?: boolean;
};

export const OrderedList = forwardRef<HTMLOListElement, OrderedList>(
  function OrderedList(
    { className, children, isUnstyled = false, ...props },
    forwardedRef,
  ) {
    return (
      <ol
        ref={forwardedRef}
        {...props}
        className={
          isUnstyled
            ? className
            : classNames("list-inside list-decimal", className)
        }
      >
        {children}
      </ol>
    );
  },
);
