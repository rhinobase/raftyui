import { forwardRef } from "react";
import { classNames } from "../utils";
import { cva } from "class-variance-authority";

export type Kbd = JSX.IntrinsicElements["kbd"] & {
  unstyled?: boolean;
};

const kbdClasses = cva(
  "text-secondary-500 border-secondary-300 dark:border-secondary-600 dark:text-secondary-300 rounded-md border border-b-4 px-1 text-xs font-medium"
);

export const Kbd = forwardRef<HTMLElement, Kbd>(
  ({ children, className, unstyled = false, ...props }, forwardRef) => (
    <kbd
      {...props}
      className={unstyled ? className : classNames(kbdClasses(), className)}
      ref={forwardRef}
    >
      {children}
    </kbd>
  )
);
Kbd.displayName = "Kbd";
