import React, { forwardRef } from "react";
import { StatContext, StatProvider, useStatContext } from "./context";
import { classNames } from "../utils";

export type StatGroup = JSX.IntrinsicElements["div"];
export const StatGroup = forwardRef<HTMLDivElement, StatGroup>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <div
        {...props}
        className={classNames(
          "group flex w-full flex-wrap items-start justify-around",
          className,
        )}
        ref={forwardedRef}
      >
        {children}
      </div>
    );
  },
);
StatGroup.displayName = "StatGroup";

export type Stat = JSX.IntrinsicElements["div"] & StatContext;
export const Stat = forwardRef<HTMLDivElement, Stat>(
  ({ children, className, type, ...props }, forwardedRef) => {
    return (
      <StatProvider value={{ type }}>
        <div
          {...props}
          className={classNames("flex flex-col gap-0.5", className)}
          ref={forwardedRef}
        >
          {children}
        </div>
      </StatProvider>
    );
  },
);
Stat.displayName = "Stat";

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
StatLabel.displayName = "StatLabel";

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
StatValue.displayName = "StatValue";

export type StatHelpText = JSX.IntrinsicElements["div"];
export const StatHelpText = forwardRef<HTMLDivElement, StatHelpText>(
  ({ className, children, ...props }, forwardedRef) => {
    const { type } = useStatContext();
    return (
      <div
        {...props}
        className={classNames(
          type == "increase"
            ? "text-success-600 dark:text-success-400"
            : "dark:text-secondary-300",
          type == "decrease"
            ? "text-error-600 dark:text-error-400"
            : "dark:text-secondary-300",
          "flex items-center gap-1.5 text-sm font-medium",
          className,
        )}
        ref={forwardedRef}
      >
        {children}
      </div>
    );
  },
);
StatHelpText.displayName = "StatHelpText";

export type StatIcon = JSX.IntrinsicElements["svg"];
export const StatIcon = forwardRef<SVGSVGElement, StatIcon>(
  ({ className, height, width, ...props }, forwardedRef) => {
    const { type } = useStatContext();
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

StatIcon.displayName = "StatIcon";
