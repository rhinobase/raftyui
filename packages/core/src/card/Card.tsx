import { forwardRef } from "react";
import React from "react";
import { classNames } from "../utils";

// Card Component
export const Root = forwardRef<HTMLDivElement, JSX.IntrinsicElements["div"]>(
  ({ children, className, ...props }, forwardedRef) => (
    <div
      {...props}
      className={classNames(
        "dark:bg-secondary-800 flex flex-col dark:text-white",
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
        "dark:border-secondary-700 p-5 text-xl font-semibold",
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
    <div {...props} className={classNames("p-5", className)} ref={forwardedRef}>
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
      className={classNames("dark:border-secondary-700 p-5", className)}
      ref={forwardedRef}
    >
      {children}
    </div>
  ),
);
Footer.displayName = "Card.Footer";
