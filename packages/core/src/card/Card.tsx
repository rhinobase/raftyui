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

// CardHeader Component
export const Header = forwardRef<HTMLDivElement, JSX.IntrinsicElements["div"]>(
  ({ children, className, ...props }, forwardedRef) => (
    <div
      {...props}
      className={classNames(
        "px-3xl py-lg dark:border-secondary-700 border-b text-lg font-semibold",
        className,
      )}
      ref={forwardedRef}
    >
      {children}
    </div>
  ),
);

// CardBody Component
export const Body = forwardRef<HTMLDivElement, JSX.IntrinsicElements["div"]>(
  ({ children, className, ...props }, forwardedRef) => (
    <div
      {...props}
      className={classNames("px-3xl py-xl", className)}
      ref={forwardedRef}
    >
      {children}
    </div>
  ),
);

// CardFooter Component
export const Footer = forwardRef<HTMLDivElement, JSX.IntrinsicElements["div"]>(
  ({ children, className, ...props }, forwardedRef) => (
    <div
      {...props}
      className={classNames(
        "px-3xl py-lg dark:border-secondary-700 flex w-full space-x-2 border-t",
        className,
      )}
      ref={forwardedRef}
    >
      {children}
    </div>
  ),
);
