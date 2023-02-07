import { forwardRef } from "react";
import { classNames } from "@rhinobase/lib";

// Card Component
export const Card = forwardRef<HTMLDivElement, JSX.IntrinsicElements["div"]>(
  ({ children, className, ...props }, forwardedRef) => (
    <div
      {...props}
      className={classNames(
        "dark:bg-secondary-800 flex flex-col rounded-md border dark:border-none dark:text-white dark:shadow-md",
        className
      )}
      ref={forwardedRef}>
      {children}
    </div>
  )
);

// CardHeader Component
export const CardHeader = forwardRef<HTMLDivElement, JSX.IntrinsicElements["div"]>(
  ({ children, className, ...props }, forwardedRef) => (
    <div
      {...props}
      className={classNames(
        "px-3xl py-lg dark:border-secondary-800 border-b text-lg font-semibold",
        className
      )}
      ref={forwardedRef}>
      {children}
    </div>
  )
);

// CardBody Component
export const CardBody = forwardRef<HTMLDivElement, JSX.IntrinsicElements["div"]>(
  ({ children, className, ...props }, forwardedRef) => (
    <div {...props} className={classNames("px-3xl py-xl", className)} ref={forwardedRef}>
      {children}
    </div>
  )
);

// CardFooter Component
export const CardFooter = forwardRef<HTMLDivElement, JSX.IntrinsicElements["div"]>(
  ({ children, className, ...props }, forwardedRef) => (
    <div
      {...props}
      className={classNames(
        "px-3xl py-lg dark:border-secondary-800 flex w-full space-x-2 border-t",
        className
      )}
      ref={forwardedRef}>
      {children}
    </div>
  )
);
