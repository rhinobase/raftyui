import React, { forwardRef } from "react";

type LeftAddon = JSX.IntrinsicElements["div"];

export const LeftAddon = forwardRef<HTMLDivElement, LeftAddon>(
  ({ ...props }, forwardedRef) => {
    return (
      <div
        {...props}
        ref={forwardedRef}
        className="bg-secondary-300 dark:bg-secondary-700 dark:text-secondary-200 flex items-center rounded-l-lg px-4"
      >
        {props.children}
      </div>
    );
  },
);

LeftAddon.displayName = "LeftAddon";
