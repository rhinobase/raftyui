import { forwardRef } from "react";
import { classNames } from "../utils";

export type OrderedList = JSX.IntrinsicElements["ol"] & { unstyled?: boolean };

export const OrderedList = forwardRef<HTMLOListElement, OrderedList>(
  ({ className, children, unstyled = false, ...props }, forwardedRef) => {
    return (
      <ol
        ref={forwardedRef}
        {...props}
        className={
          unstyled
            ? className
            : classNames("list-inside list-decimal", className)
        }
      >
        {children}
      </ol>
    );
  }
);

OrderedList.displayName = "OrderedList";
