import { cva } from "class-variance-authority";
import { type SVGAttributes, forwardRef } from "react";
import {
  type SizeType,
  type ValueOrFunction,
  classNames,
  getValue,
} from "../utils/index.js";

export const spinnerClasses = cva("animate-spin", {
  variants: {
    size: {
      sm: "size-[18px] min-w-[18px] min-h-[18px]",
      md: "size-[24px] min-w-[24px] min-h-[24px]",
      lg: "size-[30px] min-w-[24px] min-h-[24px]",
    },
    inherit: {
      true: "",
      false: "text-secondary-600 dark:text-secondary-400",
    },
  },
  defaultVariants: {
    inherit: false,
    size: "md",
  },
});

export type Spinner = Omit<SVGAttributes<SVGSVGElement>, "children"> & {
  size?: SizeType;
  inheritParent?: ValueOrFunction;
  title?: string;
};

export const Spinner = forwardRef<SVGSVGElement, Spinner>(function Spinner(
  { inheritParent, size = "md", className, title = "loading", ...props },
  forwardedRef,
) {
  const _inheritParent = getValue(inheritParent);

  return (
    <svg
      {...props}
      className={classNames(
        spinnerClasses({ size, inherit: _inheritParent }),
        className,
      )}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      ref={forwardedRef}
    >
      <title>{title}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.917 7A6.002 6.002 0 0 0 2.083 7H1.071a7.002 7.002 0 0 1 13.858 0h-1.012z"
      />
    </svg>
  );
});
