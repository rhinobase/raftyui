import React, { forwardRef } from "react";

export const Text = forwardRef<HTMLDivElement, { children: React.ReactNode }>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <div {...props} ref={forwardedRef}>
        {children}
      </div>
    );
  },
);

Text.displayName = "Text";
