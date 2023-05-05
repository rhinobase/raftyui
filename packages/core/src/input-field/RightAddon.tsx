import React, { forwardRef } from "react";

type RightAddon = JSX.IntrinsicElements["div"];

export const RightAddon = forwardRef<HTMLDivElement, RightAddon>(
  ({ ...props }, forwardedRef) => {
    return (
      <div
        {...props}
        ref={forwardedRef}
        className="bg-secondary-300 dark:bg-secondary-700 dark:text-secondary-200 flex items-center rounded-r-lg px-4"
      >
        {props.children}
      </div>
    );
  },
);

RightAddon.displayName = "RightAddon";
