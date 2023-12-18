import { HTMLAttributes, forwardRef } from "react";
import { classNames } from "../utils";

// Text Component
export type Text = HTMLAttributes<HTMLParagraphElement> & { isMuted?: boolean };

export const Text = forwardRef<HTMLParagraphElement, Text>(
  ({ className, isMuted, ...props }, forwardedRef) => (
    <p
      {...props}
      className={classNames(isMuted && "opacity-60", className)}
      ref={forwardedRef}
    />
  ),
);

Text.displayName = "Text";
