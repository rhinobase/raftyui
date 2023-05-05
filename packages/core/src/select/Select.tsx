import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";
import { applyStyleToMultipleVariants, classNames } from "../utils";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const selectClasses = cva(
  "w-full appearance-none outline-none dark:text-secondary-200 transition-all disabled:bg-secondary-100 disabled:dark:bg-secondary-800 disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        sm: "px-2 py-1 text-sm rounded",
        md: "px-3 py-1.5 rounded-md",
        lg: "px-4 py-2 text-lg rounded-md",
      },
      variant: {
        solid: "bg-secondary-50 dark:bg-secondary-800/20",
        outline: "",
        ghost: "",
      },
    },
    compoundVariants: [
      ...applyStyleToMultipleVariants({
        variant: ["solid", "outline"],
        size: ["sm", "md", "lg"],
        className:
          "border border-secondary-300 dark:border-zinc-700 hover:border-primary-500 dark:hover:border-primary-400 focus:ring-primary-200 focus:border-primary-500 dark:focus:ring-primary-100/20 dark:focus:border-primary-400 focus:outline-none focus:ring-2 ",
      }),
      ...applyStyleToMultipleVariants({
        variant: ["outline", "ghost"],
        size: ["sm", "md", "lg"],
        className: "bg-transparent dark:bg-secondary-900",
      }),
    ],
  }
);

export type Select = Omit<JSX.IntrinsicElements["select"], "size"> &
  VariantProps<typeof selectClasses> & {
    unstyled?: boolean;
  };

export const Select = forwardRef<HTMLSelectElement, Select>(
  (
    {
      children,
      className,
      size,
      variant = "outline",
      unstyled = false,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <div className="relative">
        <select
          {...props}
          className={
            unstyled
              ? className
              : classNames(
                  selectClasses({ size: size ?? "md", variant }),
                  className
                )
          }
          ref={forwardedRef}
        >
          {children}
        </select>
        {!unstyled && (
          <div className="pointer-events-none absolute top-0 right-0 flex h-full w-10 items-center justify-center">
            <ChevronDownIcon className="dark:text-secondary-200 h-3 w-3" />
          </div>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export type Option = JSX.IntrinsicElements["option"];

export const Option = forwardRef<HTMLOptionElement, Option>(
  ({ ...props }, forwardedRef) => {
    return (
      <option {...props} ref={forwardedRef}>
        {props.children}
      </option>
    );
  }
);

Option.displayName = "Option";
