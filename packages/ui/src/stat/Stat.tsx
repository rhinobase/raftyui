"use client";
import { cva } from "class-variance-authority";
import { type HTMLAttributes, type SVGAttributes, forwardRef } from "react";
import { classNames } from "../utils";
import { type StatContext, StatProvider, useStatContext } from "./context";

// Stat Component
export type Stat = HTMLAttributes<HTMLDivElement> & StatContext;

export const Stat = forwardRef<HTMLDivElement, Stat>(
  ({ children, className, type = "normal", ...props }, forwardedRef) => (
    <StatProvider value={{ type }}>
      <div
        {...props}
        className={classNames("flex flex-col gap-0.5", className)}
        ref={forwardedRef}
      >
        {children}
      </div>
    </StatProvider>
  ),
);
Stat.displayName = "Stat";

// StatLabel Component
export type StatLabel = HTMLAttributes<HTMLDivElement>;

export const StatLabel = forwardRef<HTMLDivElement, StatLabel>(
  ({ children, className, ...props }, forwardedRef) => (
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
  ),
);
StatLabel.displayName = "StatLabel";

// StatValue Component
export type StatValue = HTMLAttributes<HTMLDivElement>;

export const StatValue = forwardRef<HTMLDivElement, StatValue>(
  ({ className, children, ...props }, forwardedRef) => (
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
  ),
);
StatValue.displayName = "StatValue";

// StatHelpText Component
export const statHelpTextClasses = cva(
  "flex items-center gap-1.5 text-sm font-medium",
  {
    variants: {
      type: {
        increase: "text-green-600 dark:text-green-400",
        decrease: "text-red-600 dark:text-red-400",
        normal: "dark:text-secondary-300",
      },
    },
    defaultVariants: {
      type: "normal",
    },
  },
);

export type StatHelpText = HTMLAttributes<HTMLDivElement>;

export const StatHelpText = forwardRef<HTMLDivElement, StatHelpText>(
  ({ className, children, ...props }, forwardedRef) => {
    const { type } = useStatContext();

    return (
      <div
        {...props}
        className={classNames(statHelpTextClasses({ type }), className)}
        ref={forwardedRef}
      >
        {children}
      </div>
    );
  },
);
StatHelpText.displayName = "StatHelpText";

// StatIcon Component
export type StatIcon = SVGAttributes<SVGSVGElement>;

export const StatIcon = forwardRef<SVGSVGElement, StatIcon>(
  ({ className, height = "14", width = "14", ...props }, forwardedRef) => {
    const { type } = useStatContext();

    if (type === "increase")
      return (
        <svg
          {...props}
          width={width}
          height={height}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          className={classNames(
            "fill-green-500 dark:fill-green-400",
            className,
          )}
          ref={forwardedRef}
        >
          <title>increase</title>
          <path d="M14 10.44l-.413.56H2.393L2 10.46 7.627 5h.827L14 10.44z" />
        </svg>
      );

    if (type === "decrease")
      return (
        <svg
          {...props}
          width={width}
          height={height}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          className={classNames("fill-red-500 dark:fill-red-400", className)}
          ref={forwardedRef}
        >
          <title>decrease</title>
          <path d="M2 5.56L2.413 5h11.194l.393.54L8.373 11h-.827L2 5.56z" />
        </svg>
      );

    return undefined;
  },
);

StatIcon.displayName = "StatIcon";
