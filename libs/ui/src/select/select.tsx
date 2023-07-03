import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { classNames } from "@rafty/utils";
import { useFieldControlContext } from "../field/context";

const selectClasses = cva(
  "w-full appearance-none outline-none dark:text-secondary-200 transition-all disabled:bg-secondary-100 disabled:dark:bg-secondary-800 disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        sm: "px-2 py-1 text-sm rounded",
        md: "px-3 py-1.5 rounded-md",
        lg: "px-4 py-2 text-lg rounded-md",
      },
      invalid: {
        true: "!border-error-500 focus:!ring-error-200 dark:!border-error-400 dark:!focus:ring-error-100/20",
      },
      variant: {
        solid: "bg-secondary-50 dark:bg-secondary-800",
        outline: "",
        ghost: "",
      },
    },
    compoundVariants: [
      {
        variant: ["solid", "outline"],
        size: ["sm", "md", "lg"],
        className:
          "border border-secondary-300 dark:border-zinc-700 hover:border-primary-500 dark:hover:border-primary-400 focus:ring-primary-200 focus:border-primary-500 dark:focus:ring-primary-100/20 dark:focus:border-primary-400 focus:outline-none focus:ring-2 ",
      },
      {
        variant: ["outline", "ghost"],
        size: ["sm", "md", "lg"],
        className: "bg-transparent dark:bg-secondary-900",
      },
    ],
  }
);

export type Select = Omit<JSX.IntrinsicElements["select"], "size"> & {
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "ghost";
  isUnstyled?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
};

export const Select = forwardRef<HTMLSelectElement, Select>(
  (
    {
      children,
      className,
      size,
      variant = "outline",
      isDisabled,
      isRequired,
      isInvalid,
      isUnstyled = false,
      ...props
    },
    forwardedRef
  ) => {
    const context = useFieldControlContext() ?? {};

    const name = props.name || context.name,
      disabled =
        isDisabled || props.disabled || context.isDisabled || context.isLoading,
      invalid = isInvalid || context.isInvalid,
      required = isRequired || props.required || context.isRequired;
    return (
      <div className="relative">
        <select
          {...props}
          name={name}
          disabled={disabled}
          required={required}
          className={
            isUnstyled
              ? className
              : classNames(
                  selectClasses({ size: size ?? "md", variant, invalid }),
                  className
                )
          }
          ref={forwardedRef}
        >
          {children}
        </select>
        {!isUnstyled && (
          <div className="pointer-events-none absolute top-0 right-0 flex h-full w-8 items-center justify-center">
            <ChevronDownIcon className="dark:text-secondary-200 h-3.5 w-3.5" />
          </div>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export type SelectItem = JSX.IntrinsicElements["option"];

export const SelectItem = forwardRef<HTMLOptionElement, SelectItem>(
  ({ ...props }, forwardedRef) => {
    return (
      <option {...props} ref={forwardedRef}>
        {props.children}
      </option>
    );
  }
);

SelectItem.displayName = "SelectItem";
