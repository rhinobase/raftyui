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
  "w-full border appearance-none outline-none dark:text-secondary-200 bg-white dark:bg-secondary-900 focus-visible:ring-2 ring-offset-2 ring-offset-white dark:ring-offset-secondary-950",
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
      readOnly: {
        true: "",
        false: "",
      },
      invalid: {
        true: "ring-red-300 dark:ring-red-100 border-red-500 dark:border-red-300",
        false: "ring-primary-300 dark:ring-primary-100",
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
        readOnly: false,
        className: "bg-secondary-50 dark:bg-secondary-900",
      },
      {
        disabled: true,
        readOnly: false,
        className: "bg-secondary-100 dark:bg-secondary-800 cursor-not-allowed",
      },
      {
        variant: ["solid", "outline"],
        disabled: false,
        invalid: false,
        className:
          "group-hover/select:border-primary-500 dark:group-hover/select:border-primary-400 transition-all",
      },
      {
        invalid: false,
        variant: ["solid", "outline"],
        className: "border-secondary-300 dark:border-secondary-700",
      },
      {
        disabled: false,
        readOnly: false,
        className: "cursor-pointer",
      },
      {
        invalid: false,
        className: "focus:border-primary-500 dark:focus:border-primary-400",
      },
      {
        variant: ["outline", "ghost"],
        disabled: false,
        readOnly: false,
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
      readOnly: false,
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
  placeholder?: string;
  isUnstyled?: boolean;
  isDisabled?: ValueOrFunction;
  isInvalid?: ValueOrFunction;
  isLoading?: ValueOrFunction;
  isReadOnly?: ValueOrFunction;
  isRequired?: ValueOrFunction;
} & Partial<SelectContext>;

export const Select = forwardRef<HTMLSelectElement, Select>(function Select(
  {
    children,
    className,
    name,
    disabled,
    required,
    size = "md",
    variant = "outline",
    isUnstyled = false,
    isReadOnly,
    isDisabled,
    isInvalid,
    isLoading,
    isRequired,
    placeholder,
    ...props
  },
  forwardedRef,
) {
  const fieldControlContext = useFieldControlContext() ?? {
    isDisabled: false,
    isLoading: false,
    isReadOnly: false,
    isRequired: false,
    isInvalid: false,
  };

  const _name = name ?? fieldControlContext.name;
  const _disabled =
    (disabled ?? getValue(isDisabled) ?? fieldControlContext.isDisabled) ||
    (getValue(isLoading) ?? fieldControlContext.isLoading);
  const _invalid = getValue(isInvalid) ?? fieldControlContext.isInvalid;
  const _required =
    required ?? getValue(isRequired) ?? fieldControlContext.isRequired;
  const _readOnly = getValue(isReadOnly) ?? fieldControlContext.isReadOnly;

  const selectProps = {
    ...props,
    name: _name,
    disabled: _disabled || _readOnly,
    required: _required,
  };

  function Component(componentProps: {
    className: SelectHTMLAttributes<HTMLSelectElement>["className"];
  }) {
    return (
      <select
        {...selectProps}
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
          "group/select relative flex w-max items-center",
          className,
        )}
      >
        <Component
          className={selectClasses({
            size,
            variant,
            disabled: _disabled,
            readOnly: _readOnly,
            invalid: _invalid,
          })}
        />
        <ChevronDownIcon className={triggerIconClasses({ size })} />
      </div>
    </SelectProvider>
  );
});

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
  function SelectItem({ className, ...props }, forwardedRef) {
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
  function SelectItemGroup(props, forwardedRef) {
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
