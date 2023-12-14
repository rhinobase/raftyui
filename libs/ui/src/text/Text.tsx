import { HTMLAttributes, forwardRef } from "react";

// Text Component
export type Text = HTMLAttributes<HTMLParagraphElement>;

export const Text = forwardRef<HTMLParagraphElement, Text>(
  ({ children, className, ...props }, forwardedRef) => (
    <p {...props} className={className} ref={forwardedRef}>
      {children}
    </p>
  ),
);

Text.displayName = "Text";
