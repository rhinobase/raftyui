import React, { forwardRef } from "react";
import { classNames } from "../utils";

export type OrderedList = JSX.IntrinsicElements["ol"];

export const OrderedList = forwardRef<HTMLOListElement, OrderedList>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <ol
        ref={forwardedRef}
        {...props}
        className={classNames("list-inside list-decimal", className)}
      >
        {children}
      </ol>
    );
  },
);

OrderedList.displayName = "OrderedList";
