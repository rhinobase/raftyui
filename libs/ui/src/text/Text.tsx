import { BooleanOrFunction, getValue } from "@rafty/shared";
import { HTMLAttributes, forwardRef } from "react";
import { classNames } from "../utils";

// Text Component
export type Text = HTMLAttributes<HTMLParagraphElement> & {
  isMuted?: BooleanOrFunction;
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
