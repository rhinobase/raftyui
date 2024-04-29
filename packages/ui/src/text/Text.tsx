import { type HTMLAttributes, forwardRef } from "react";
import type { ValueOrFunction } from "../types";
import { classNames, getValue } from "../utils";

// Text Component
export type Text = HTMLAttributes<HTMLParagraphElement> & {
  isMuted?: ValueOrFunction;
};

export const Text = forwardRef<HTMLParagraphElement, Text>(
  ({ className, isMuted, ...props }, forwardedRef) => {
    const muted = getValue(isMuted);

    return (
      <p
        {...props}
        className={classNames(muted && "opacity-60", className)}
        ref={forwardedRef}
      />
    );
  },
);

Text.displayName = "Text";
