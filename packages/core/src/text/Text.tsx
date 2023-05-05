import { forwardRef } from "react";

export type Text = JSX.IntrinsicElements["p"];
export const Text = forwardRef<HTMLParagraphElement, Text>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <p {...props} className={className} ref={forwardedRef}>
        {children}
      </p>
    );
  }
);

Text.displayName = "Text";
