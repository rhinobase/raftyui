import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { classNames } from "@rafty/utils";
import { useFieldControlContext } from "../field/context";

const selectClasses = cva(
  "w-full appearance-none outline-none dark:text-secondary-200 transition-all",
  {
    variants: {
      size: {
        sm: "px-2 py-1 text-sm rounded",
        md: "px-3 py-1.5 rounded-md",
        lg: "px-4 py-2 text-lg rounded-md",
      },
      disabled: {
        true: "bg-secondary-100 dark:bg-secondary-800 cursor-not-allowed",
        false: "",
      },
      readonly: {
        true: "bg-secondary-100 dark:bg-secondary-800",
        false: "",
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
        className:
          "border border-secondary-300 dark:border-zinc-700 focus:ring-primary-200 focus:border-primary-500 dark:focus:ring-primary-100/20 dark:focus:border-primary-400 focus:outline-none focus:ring-2 ",
      },
      {
        variant: ["solid", "outline"],
        disabled: false,
        readonly: false,
        className: "hover:border-primary-500 dark:hover:border-primary-400",
      },
      {
        disabled: false,
        readonly: false,
        className: "cursor-pointer",
      },
      {
        variant: ["outline", "ghost"],
        className: "bg-transparent dark:bg-secondary-900",
      },
    ],
  }
);

export type Select = Omit<
  JSX.IntrinsicElements["select"],
  "size" | "disabled" | "required"
> & {
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "ghost";
  isUnstyled?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  isReadOnly?: boolean;
};

export const Select = forwardRef<HTMLSelectElement, Select>(
  (
    {
      children,
      className,
      name,
      size = "md",
      variant = "outline",
      isDisabled = false,
      isRequired = false,
      isUnstyled = false,
      isReadOnly = false,
      ...props
    },
    forwardedRef
  ) => {
    const context = useFieldControlContext() ?? {
      isDisabled: false,
      isLoading: false,
      isReadOnly: false,
      isRequired: false,
    };

    const field_name = name || context.name,
      disabled = isDisabled || context.isDisabled || context.isLoading,
      required = isRequired || context.isRequired,
      readonly = isReadOnly || context.isReadOnly;

    return (
      <div className="relative flex w-full items-center">
        <select
          {...props}
          name={field_name}
          disabled={disabled || readonly}
          required={required}
          className={
            isUnstyled
              ? className
              : classNames(
                  selectClasses({
                    size: size,
                    variant,
                    disabled,
                    readonly,
                  }),
                  className
                )
          }
          ref={forwardedRef}
        >
          {children}
        </select>
        {!isUnstyled && (
          <ChevronDownIcon
            className={classNames(
              size == "sm" && "right-2",
              size == "md" && "right-3",
              size == "lg" && "right-4",
              "dark:text-secondary-200 h-3.5 w-3.5 absolute"
            )}
          />
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export type SelectItem = JSX.IntrinsicElements["option"];

export const SelectItem = forwardRef<HTMLOptionElement, SelectItem>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <option {...props} ref={forwardedRef}>
        {children}
      </option>
    );
  }
);

SelectItem.displayName = "SelectItem";
