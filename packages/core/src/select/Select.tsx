import { cva } from "class-variance-authority";
import React, { forwardRef } from "react";
import { applyStyleToMultipleVariants } from "../utils";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const selectClasses = cva("", {
  variants: {
    size: {
      sm: "",
      md: "",
      lg: "",
    },
    variant: {
      solid: "bg-secondary-50 dark:bg-secondary-800/20",
      outline: "",
      ghost: "",
      unstyled: "",
    },
    invalid: {
      true: "",
    },
  },
  compoundVariants: [
    ...applyStyleToMultipleVariants({
      variant: ["solid", "outline", "ghost"],
      size: ["sm", "md", "lg"],
      className:
        "w-full appearance-none outline-none dark:text-secondary-200 transition-all",
    }),
    ...applyStyleToMultipleVariants({
      variant: ["solid", "outline"],
      size: ["sm", "md", "lg"],
      className:
        "border border-secondary-300 dark:border-zinc-700 hover:border-primary-500 dark:hover:border-primary-400 focus:ring-primary-200 focus:border-primary-500 dark:focus:ring-primary-100/20 dark:focus:border-primary-400 focus:outline-none focus:ring-2 disabled:bg-secondary-100 disabled:dark:bg-secondary-800 disabled:cursor-not-allowed",
    }),
    ...applyStyleToMultipleVariants({
      variant: ["outline", "ghost"],
      size: ["sm", "md", "lg"],
      className: "bg-transparent dark:bg-secondary-900",
    }),
    ...applyStyleToMultipleVariants({
      variant: ["solid", "outline", "ghost"],
      size: "sm",
      className: "px-2 py-1 text-sm rounded",
    }),
    ...applyStyleToMultipleVariants({
      variant: ["solid", "outline", "ghost"],
      size: "md",
      className: "px-3 py-1.5 rounded-md",
    }),
    ...applyStyleToMultipleVariants({
      variant: ["solid", "outline", "ghost"],
      size: "lg",
      className: "px-4 py-2 text-lg rounded-md",
    }),
    ...applyStyleToMultipleVariants({
      variant: ["solid", "outline", "ghost"],
      size: ["sm", "md", "lg"],
      invalid: true,
      className:
        "border-error-500 focus:ring-error-200 dark:border-error-400 dark:focus:ring-error-100/20",
    }),
  ],
});

type Select = JSX.IntrinsicElements["select"] & {
  variant?: "solid" | "outline" | "ghost" | "unstyled";
  disabled?: boolean;
  sizes?: "sm" | "md" | "lg" | undefined;
};

export const Select = forwardRef<HTMLSelectElement, Select>(
  ({ sizes, variant = "outline", ...props }, forwardedRef) => {
    return (
      <div className="relative">
        <select
          {...props}
          ref={forwardedRef}
          className={selectClasses({ size: sizes ?? "md", variant })}
        >
          {props.children}
        </select>
        {variant != "unstyled" && (
          <div className="pointer-events-none absolute top-0 right-0 flex h-full w-10 items-center justify-center">
            <ChevronDownIcon className="dark:text-secondary-200 h-3 w-3" />
          </div>
        )}
      </div>
    );
  },
);

Select.displayName = "Select";

type Option = JSX.IntrinsicElements["option"];

export const Option = forwardRef<HTMLOptionElement, Option>(
  ({ ...props }, forwardedRef) => {
    return (
      <option {...props} ref={forwardedRef}>
        {props.children}
      </option>
    );
  },
);

Option.displayName = "Option";
