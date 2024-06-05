"use client";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";
import {
  type OptgroupHTMLAttributes,
  type OptionHTMLAttributes,
  type SelectHTMLAttributes,
  forwardRef,
} from "react";
import { useFieldControlContext } from "../field-control";
import type { ValueOrFunction } from "../types";
import { classNames, getValue } from "../utils";
import {
  type SelectContext,
  SelectProvider,
  useSelectContext,
} from "./context";

export const selectClasses = cva(
  "w-full border appearance-none outline-none dark:text-secondary-200 bg-white dark:bg-secondary-900",
  {
    variants: {
      size: {
        sm: "pl-2 pr-6 py-1 text-sm rounded",
        md: "pl-3 pr-8 py-1.5 rounded-md",
        lg: "pl-4 pr-10 py-2 text-lg rounded-md",
      },
      disabled: {
        true: "",
        false: "",
      },
      readonly: {
        true: "",
        false: "",
      },
      variant: {
        solid: "",
        outline: "",
        ghost: "",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        disabled: false,
        readonly: false,
        className: "bg-secondary-50 dark:bg-secondary-900",
      },
      {
        disabled: true,
        readonly: false,
        className: "bg-secondary-100 dark:bg-secondary-800 cursor-not-allowed",
      },
      {
        variant: ["solid", "outline"],
        disabled: false,
        className:
          "group-hover:border-primary-500 dark:group-hover:border-primary-400 transition-all",
      },
      {
        variant: ["solid", "outline"],
        className: "border-secondary-300 dark:border-secondary-700",
      },
      {
        disabled: false,
        readonly: false,
        className:
          "cursor-pointer focus:border-primary-500 dark:focus:border-primary-400 focus-visible:ring-2 ring-offset-2 ring-primary-300 dark:ring-primary-100 ring-offset-white dark:ring-offset-secondary-950",
      },
      {
        variant: ["outline", "ghost"],
        disabled: false,
        readonly: false,
        className: "bg-transparent",
      },
      {
        variant: "ghost",
        className: "border-transparent",
      },
    ],
    defaultVariants: {
      size: "md",
      variant: "outline",
      disabled: false,
      readonly: false,
    },
  },
);

export const triggerIconClasses = cva(
  "stroke-secondary-600 dark:stroke-secondary-400 pointer-events-none absolute stroke-[2.5]",
  {
    variants: {
      size: {
        sm: "right-[7px] size-3",
        md: "right-2.5 size-3.5",
        lg: "right-[13px] size-4",
      },
    },
  },
);

export type Select = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "size" | "placeholder"
> & {
  variant?: "solid" | "outline" | "ghost";
  isUnstyled?: boolean;
  isDisabled?: ValueOrFunction;
  isRequired?: ValueOrFunction;
  isReadOnly?: ValueOrFunction;
  placeholder?: string;
} & Partial<SelectContext>;

export const Select = forwardRef<HTMLSelectElement, Select>(
  (
    {
      children,
      className,
      name,
      size = "md",
      variant = "outline",
      isDisabled,
      isRequired,
      isUnstyled = false,
      isReadOnly,
      placeholder,
      ...props
    },
    forwardedRef,
  ) => {
    const context = useFieldControlContext() ?? {
      isDisabled: false,
      isLoading: false,
      isReadOnly: false,
      isRequired: false,
    };

    const field_name = name || context.name;
    const disabled =
      getValue(isDisabled) ||
      props.disabled ||
      context.isDisabled ||
      context.isLoading;
    const required =
      getValue(isRequired) || props.required || context.isRequired;
    const readonly = getValue(isReadOnly) || context.isReadOnly;

    function Component(componentProps: {
      className: SelectHTMLAttributes<HTMLSelectElement>["className"];
    }) {
      return (
        <select
          {...props}
          name={field_name}
          disabled={disabled || readonly}
          required={required}
          className={componentProps.className}
          ref={forwardedRef}
        >
          {placeholder && <SelectItem value="">{placeholder}</SelectItem>}
          {children}
        </select>
      );
    }

    if (isUnstyled)
      return (
        <SelectProvider value={{ size }}>
          <Component className={className} />
        </SelectProvider>
      );

    return (
      <SelectProvider value={{ size }}>
        <div
          className={classNames(
            "group relative flex w-max items-center",
            className,
          )}
        >
          <Component
            className={selectClasses({
              size,
              variant,
              disabled,
              readonly,
            })}
          />
          <ChevronDownIcon className={triggerIconClasses({ size })} />
        </div>
      </SelectProvider>
    );
  },
);

Select.displayName = "Select";

export const selectItemClasses = cva("text-black dark:text-secondary-100", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
});

export type SelectItem = OptionHTMLAttributes<HTMLOptionElement>;

export const SelectItem = forwardRef<HTMLOptionElement, SelectItem>(
  ({ className, ...props }, forwardedRef) => {
    const { size } = useSelectContext();

    return (
      <option
        {...props}
        className={classNames(selectItemClasses({ size }), className)}
        ref={forwardedRef}
      />
    );
  },
);
SelectItem.displayName = "SelectItem";

export const selectItemGroupClasses = cva("not-italic bg-[inherit]", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
  },
});

export type SelectItemGroup = OptgroupHTMLAttributes<HTMLOptGroupElement>;

export const SelectItemGroup = forwardRef<HTMLOptGroupElement, SelectItemGroup>(
  (props, forwardedRef) => {
    const { size } = useSelectContext();

    return (
      <optgroup
        {...props}
        className={selectItemGroupClasses({ size })}
        ref={forwardedRef}
      />
    );
  },
);
SelectItemGroup.displayName = "SelectItemGroup";
