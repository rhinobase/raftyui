import { classNames } from "@rhinobase/utils";
import React, { forwardRef } from "react";

export type StatGroup = JSX.IntrinsicElements["div"];
export const StatGroup = forwardRef<HTMLDivElement, StatGroup>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <div
        {...props}
        className={classNames(
          "w-full group flex flex-wrap justify-around items-start",
          className,
        )}
        ref={forwardedRef}
      >
        {children}
      </div>
    );
  },
);

export type Stat = JSX.IntrinsicElements["div"];
export const Stat = forwardRef<HTMLDivElement, Stat>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <div
        {...props}
        className={classNames("flex flex-col gap-1", className)}
        ref={forwardedRef}
      >
        {children}
      </div>
    );
  },
);

export type StatLabel = JSX.IntrinsicElements["div"];
export const StatLabel = forwardRef<HTMLDivElement, StatLabel>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <div
        {...props}
        className={classNames(
          "text-secondary-600 dark:text-secondary-400 text-sm font-semibold",
          className,
        )}
        ref={forwardedRef}
      >
        {children}
      </div>
    );
  },
);

export type StatValue = JSX.IntrinsicElements["div"];
export const StatValue = forwardRef<HTMLDivElement, StatValue>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <div
        {...props}
        className={classNames(
          "text-2xl font-semibold dark:text-white",
          className,
        )}
        ref={forwardedRef}
      >
        {children}
      </div>
    );
  },
);

export type StatHelpText = JSX.IntrinsicElements["div"];
export const StatHelpText = forwardRef<HTMLDivElement, StatHelpText>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <div
        {...props}
        className={classNames(
          "text-sm font-light flex items-center gap-1.5 dark:text-secondary-300",
          className,
        )}
        ref={forwardedRef}
      >
        {children}
      </div>
    );
  },
);

export type StatIcon = {
  type: "increase" | "decrease";
} & JSX.IntrinsicElements["svg"];
export const StatIcon = forwardRef<SVGSVGElement, StatIcon>(
  ({ type, className, height, width, ...props }, forwardedRef) => {
    if (type == "increase")
      return (
        <svg
          {...props}
          width={width ?? "14"}
          height={height ?? "14"}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          className={classNames("text-success-500", className)}
          fill="currentColor"
          ref={forwardedRef}
        >
          <path d="M14 10.44l-.413.56H2.393L2 10.46 7.627 5h.827L14 10.44z" />
        </svg>
      );
    return (
      <svg
        {...props}
        width={width ?? "14"}
        height={height ?? "14"}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        className={classNames("text-error-500", className)}
        fill="currentColor"
        ref={forwardedRef}
      >
        <path d="M2 5.56L2.413 5h11.194l.393.54L8.373 11h-.827L2 5.56z" />
      </svg>
    );
  },
);
