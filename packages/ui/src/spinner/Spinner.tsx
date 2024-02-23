import { BooleanOrFunction, getValue } from "@rafty/shared";
import { SVGAttributes, forwardRef } from "react";
import { classNames } from "../utils";

const DIMENSIONS = {
  sm: "18px",
  md: "24px",
  lg: "36px",
};

// Spinner Component
export type Spinner = SVGAttributes<SVGSVGElement> & {
  size?: keyof typeof DIMENSIONS;
  inheritParent?: BooleanOrFunction;
};

export const Spinner = forwardRef<SVGSVGElement, Spinner>(
  (
    { inheritParent, size = "md", className, children, ...props },
    forwardedRef,
  ) => (
    <svg
      {...props}
      className={classNames(
        !getValue(inheritParent) &&
          "text-secondary-700 dark:text-secondary-400",
        "animate-spin",
        className,
      )}
      width={DIMENSIONS[size]}
      height={DIMENSIONS[size]}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      ref={forwardedRef}
      style={{ minWidth: DIMENSIONS[size], minHeight: DIMENSIONS[size] }}
    >
      <title>spinner</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.917 7A6.002 6.002 0 0 0 2.083 7H1.071a7.002 7.002 0 0 1 13.858 0h-1.012z"
      />
    </svg>
  ),
);
Spinner.displayName = "Spinner";
