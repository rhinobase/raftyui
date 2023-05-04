import { forwardRef } from "react";
import { classNames } from "../utils";

// Card Component
export const Card = forwardRef<HTMLDivElement, JSX.IntrinsicElements["div"]>(
  ({ children, className, ...props }, forwardedRef) => (
    <div
      {...props}
      className={classNames(
        "dark:bg-secondary-800 flex flex-col dark:text-white",
        className
      )}
      ref={forwardedRef}
    >
      {children}
    </div>
  )
);
Card.displayName = "Card";

// CardHeader Component
export const CardHeader = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements["div"]
>(({ children, className, ...props }, forwardedRef) => (
  <div
    {...props}
    className={classNames(
      "dark:border-secondary-700 p-5 text-xl font-semibold",
      className
    )}
    ref={forwardedRef}
  >
    {children}
  </div>
));

CardHeader.displayName = "CardHeader";

// CardBody Component
export const CardBody = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements["div"]
>(({ children, className, ...props }, forwardedRef) => (
  <div {...props} className={classNames("p-5", className)} ref={forwardedRef}>
    {children}
  </div>
));
CardBody.displayName = "CardBody";

// CardFooter Component
export const CardFooter = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements["div"]
>(({ children, className, ...props }, forwardedRef) => (
  <div
    {...props}
    className={classNames("dark:border-secondary-700 p-5", className)}
    ref={forwardedRef}
  >
    {children}
  </div>
));
CardFooter.displayName = "CardFooter";
