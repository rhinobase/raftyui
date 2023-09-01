import React from "react";

// Text Component
export type Text = React.HTMLAttributes<HTMLParagraphElement>;

export const Text = React.forwardRef<HTMLParagraphElement, Text>(
  ({ children, className, ...props }, forwardedRef) => (
    <p {...props} className={className} ref={forwardedRef}>
      {children}
    </p>
  ),
);

Text.displayName = "Text";
