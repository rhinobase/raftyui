"use client";
import { cva } from "class-variance-authority";
import { type HTMLAttributes, type SVGAttributes, forwardRef } from "react";
import { classNames } from "../utils/index.js";
import { type StatContext, StatProvider, useStatContext } from "./context.js";

export type Stat = HTMLAttributes<HTMLDivElement> & StatContext;

export const Stat = forwardRef<HTMLDivElement, Stat>(function Stat(
  { children, className, type = "normal", ...props },
  forwardedRef,
) {
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
});

export type StatLabel = HTMLAttributes<HTMLDivElement>;

export const StatLabel = forwardRef<HTMLDivElement, StatLabel>(
  function StatLabel({ children, className, ...props }, forwardedRef) {
    return (
      <div
        {...props}
        className={classNames(
          "text-secondary-600 dark:text-secondary-400 text-sm font-medium",
          className,
        )}
        ref={forwardedRef}
      >
        {children}
      </div>
    );
  },
);

export type StatValue = HTMLAttributes<HTMLDivElement>;

export const StatValue = forwardRef<HTMLDivElement, StatValue>(
  function StatValue({ className, children, ...props }, forwardedRef) {
    return (
      <div
        {...props}
        className={classNames(
          "text-2xl font-semibold text-black dark:text-white",
          className,
        )}
        ref={forwardedRef}
      >
        {children}
      </div>
    );
  },
);

export const statHelpTextClasses = cva("flex items-center gap-1 text-sm", {
  variants: {
    type: {
      increase:
        "text-green-500 dark:text-green-300 fill-green-500 dark:fill-green-300",
      decrease: "text-red-500 dark:text-red-300 fill-red-500 dark:fill-red-300",
      normal:
        "text-secondary-500 dark:text-secondary-400 stroke-secondary-500 dark:stroke-secondary-400 stroke-2",
    },
  },
  defaultVariants: {
    type: "normal",
  },
});

export type StatHelpText = HTMLAttributes<HTMLDivElement>;

export const StatHelpText = forwardRef<HTMLDivElement, StatHelpText>(
  function StatHelpText({ className, children, ...props }, forwardedRef) {
    const { type } = useStatContext();

    return (
      <div
        {...props}
        className={classNames(statHelpTextClasses({ type }), className)}
        ref={forwardedRef}
      >
        <StatIcon />
        {children}
      </div>
    );
  },
);

type StatIcon = SVGAttributes<SVGSVGElement>;

function StatIcon({ height = "14", width = "14", ...props }: StatIcon) {
  const { type } = useStatContext();

  let iconPath = "M5 9h14";

  if (type === "increase")
    iconPath = "M14 10.44l-.413.56H2.393L2 10.46 7.627 5h.827L14 10.44z";

  if (type === "decrease")
    iconPath = "M2 5.56L2.413 5h11.194l.393.54L8.373 11h-.827L2 5.56z";

  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{type}</title>
      <path d={iconPath} />
    </svg>
  );
}
