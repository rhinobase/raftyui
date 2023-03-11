import { classNames } from "@rhinobase/utils";
import React, { forwardRef } from "react";

export type OrderedList = JSX.IntrinsicElements["ol"] & {
  children: React.ReactNode;
  className?: string;
};

export const OrderedList = forwardRef<HTMLOListElement, OrderedList>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <ol
        ref={forwardedRef}
        {...props}
        className={classNames("list-inside list-decimal", className)}
      >
        {props.children}
      </ol>
    );
  },
);

OrderedList.displayName = "OrderedList";
