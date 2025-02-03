import { type HTMLAttributes, forwardRef } from "react";
import { classNames } from "../utils/index.js";

export type Kbd = HTMLAttributes<HTMLElement> & {
  isUnstyled?: boolean;
};

export const Kbd = forwardRef<HTMLElement, Kbd>(function Kbd(
  { className, isUnstyled = false, ...props },
  forwardedRef,
) {
  return (
    <kbd
      {...props}
      className={
        isUnstyled
          ? className
          : classNames(
              "text-secondary-600 border-secondary-300 dark:border-secondary-700/60 dark:text-secondary-300 bg-secondary-50 dark:bg-secondary-800 rounded-md border px-1.5 text-sm font-medium shadow dark:shadow-none",
              className,
            )
      }
      ref={forwardedRef}
    />
  );
});
