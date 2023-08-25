import React from "react";
import { classNames } from "@rafty/utils";

// OrderedList Component
export type OrderedList = JSX.IntrinsicElements["ol"] & {
  isUnstyled?: boolean;
};

export const OrderedList = React.forwardRef<HTMLOListElement, OrderedList>(
  ({ className, children, isUnstyled = false, ...props }, forwardedRef) => {
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
  }
);

OrderedList.displayName = "OrderedList";
