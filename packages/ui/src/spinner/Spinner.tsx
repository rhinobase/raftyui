import { type SVGAttributes, forwardRef } from "react";
import type { ValueOrFunction } from "../types";
import { classNames, getValue } from "../utils";

const DIMENSIONS = {
  sm: "18px",
  md: "24px",
  lg: "30px",
};

// Spinner Component
export type Spinner = SVGAttributes<SVGSVGElement> & {
  size?: keyof typeof DIMENSIONS;
  inheritParent?: ValueOrFunction;
  title?: string;
};

export const Spinner = forwardRef<SVGSVGElement, Spinner>(
  (
    {
      inheritParent,
      size = "md",
      className,
      title = "loading",
      children,
      style,
      ...props
    },
    forwardedRef,
  ) => (
    <svg
      {...props}
      className={classNames(
        !getValue(inheritParent) &&
          "text-secondary-600 dark:text-secondary-400",
        className,
        "animate-spin",
      )}
      width={DIMENSIONS[size]}
      height={DIMENSIONS[size]}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      style={{
        minWidth: DIMENSIONS[size],
        minHeight: DIMENSIONS[size],
        ...style,
      }}
      ref={forwardedRef}
    >
      <title>{title}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.917 7A6.002 6.002 0 0 0 2.083 7H1.071a7.002 7.002 0 0 1 13.858 0h-1.012z"
      />
    </svg>
  ),
);
Spinner.displayName = "Spinner";
