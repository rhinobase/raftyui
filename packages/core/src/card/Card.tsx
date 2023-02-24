import { forwardRef } from "react";
import { classNames } from "@rhinobase/utils";
import React from "react";

// Card Component
export const Root = forwardRef<HTMLDivElement, JSX.IntrinsicElements["div"]>(
  ({ children, className, ...props }, forwardedRef) => (
    <div
      {...props}
      className={classNames(
        "dark:bg-secondary-800 flex flex-col rounded-md border dark:border-none dark:text-white dark:shadow-md",
        className,
      )}
      ref={forwardedRef}
    >
      {children}
    </div>
  ),
);
Root.displayName = "Card.Root";

// CardHeader Component
export const Header = forwardRef<HTMLDivElement, JSX.IntrinsicElements["div"]>(
  ({ children, className, ...props }, forwardedRef) => (
    <div
      {...props}
      className={classNames(
        "dark:border-secondary-700 border-b px-6 py-3 text-lg font-semibold",
        className,
      )}
      ref={forwardedRef}
    >
      {children}
    </div>
  ),
);

Header.displayName = "Card.Header";

// CardBody Component
export const Body = forwardRef<HTMLDivElement, JSX.IntrinsicElements["div"]>(
  ({ children, className, ...props }, forwardedRef) => (
    <div
      {...props}
      className={classNames("px-6 py-4", className)}
      ref={forwardedRef}
    >
      {children}
    </div>
  ),
);
Body.displayName = "Card.Body";

// CardFooter Component
export const Footer = forwardRef<HTMLDivElement, JSX.IntrinsicElements["div"]>(
  ({ children, className, ...props }, forwardedRef) => (
    <div
      {...props}
      className={classNames(
        "dark:border-secondary-700 flex w-full space-x-2 border-t px-6 py-3",
        className,
      )}
      ref={forwardedRef}
    >
      {children}
    </div>
  ),
);
Footer.displayName = "Card.Footer";
