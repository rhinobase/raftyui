"use client";
import { BooleanOrFunction, getValue } from "@rafty/shared";
import { cva } from "class-variance-authority";
import { InputHTMLAttributes, forwardRef } from "react";
import { useFieldControlContext } from "../field-control";
import { useInputGroupContext } from "../input-group";
import { classNames } from "../utils";

export const inputFieldClasses = cva(
  "w-full z-[1] appearance-none outline-none dark:text-secondary-200 transition-all disabled:bg-secondary-100 disabled:dark:bg-secondary-800 disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        sm: "py-1 text-sm",
        md: "py-1.5",
        lg: "py-2 text-lg",
      },
      variant: {
        solid: "bg-secondary-50 dark:bg-secondary-800/20",
        outline:
          "read-only:focus:border-secondary-300 dark:read-only:focus:border-secondary-700 read-only:focus:ring-0",
        ghost: "border border-transparent",
      },
      invalid: {
        true: "border-red-500 focus:ring-red-200 dark:border-red-400 dark:focus:ring-red-100/20",
      },
      isLeftAddon: {
        true: "",
      },
      isRightAddon: {
        true: "",
      },
      isPrefix: {
        true: "",
      },
      isSuffix: {
        true: "",
      },
    },
    compoundVariants: [
      {
        variant: ["solid", "outline"],
        size: ["sm", "md", "lg"],
        className: classNames(
          "border border-secondary-300 dark:border-secondary-700 outline-none",
          "hover:border-primary-500 dark:hover:border-primary-400 disabled:hover:border-secondary-300 dark:disabled:hover:border-secondary-700",
          "focus:border-primary-500 dark:focus:border-primary-400",
          "focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-100/20",
        ),
      },
      {
        variant: ["outline", "ghost"],
        size: ["sm", "md", "lg"],
        className: "bg-transparent",
      },
      {
        size: "sm",
        isLeftAddon: false,
        className: "rounded-l",
      },
      {
        size: "sm",
        isRightAddon: false,
        className: "rounded-r",
      },
      {
        size: "sm",
        isPrefix: true,
        isSuffix: false,
        className: "pl-8 pr-2",
      },
      {
        size: "sm",
        isPrefix: false,
        isSuffix: true,
        className: "pl-2 pr-8",
      },
      {
        size: "sm",
        isPrefix: true,
        isSuffix: true,
        className: "px-8",
      },
      {
        size: "sm",
        isPrefix: false,
        isSuffix: false,
        className: "px-2",
      },
      {
        size: ["md", "lg"],
        isLeftAddon: false,
        className: "rounded-l-md",
      },
      {
        size: ["md", "lg"],
        isRightAddon: false,
        className: "rounded-r-md",
      },
      {
        size: "md",
        isPrefix: true,
        isSuffix: false,
        className: "pl-9 pr-3",
      },
      {
        size: "md",
        isPrefix: false,
        isSuffix: true,
        className: "pl-3 pr-9",
      },
      {
        size: "md",
        isPrefix: true,
        isSuffix: true,
        className: "px-9",
      },
      {
        size: "md",
        isPrefix: false,
        isSuffix: false,
        className: "px-3",
      },
      {
        size: "lg",
        isPrefix: true,
        isSuffix: false,
        className: "pl-10 pr-4",
      },
      {
        size: "lg",
        isPrefix: false,
        isSuffix: true,
        className: "pl-4 pr-10",
      },
      {
        size: "lg",
        isPrefix: true,
        isSuffix: true,
        className: "px-10",
      },
      {
        size: "lg",
        isPrefix: false,
        isSuffix: false,
        className: "px-4",
      },
    ],
    defaultVariants: {
      size: "md",
      variant: "outline",
      invalid: false,
      isLeftAddon: false,
      isPrefix: false,
      isRightAddon: false,
      isSuffix: false,
    },
  },
);

// Input Field
export type InputField = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isUnstyled?: boolean;
  isDisabled?: BooleanOrFunction;
  isInvalid?: BooleanOrFunction;
  isLoading?: BooleanOrFunction;
  isReadOnly?: BooleanOrFunction;
  isRequired?: BooleanOrFunction;
};

export const InputField = forwardRef<HTMLInputElement, InputField>(
  (
    {
      className,
      variant = "outline",
      size = "md",
      isUnstyled = false,
      isDisabled,
      isInvalid,
      isLoading,
      isReadOnly,
      isRequired,
      ...props
    },
    forwardedRef,
  ) => {
    const fieldControlContext = useFieldControlContext() ?? {};

    const name = props.name || fieldControlContext.name;
    const disabled =
      getValue(isDisabled) ||
      props.disabled ||
      fieldControlContext.isDisabled ||
      getValue(isLoading) ||
      fieldControlContext.isLoading;

    const invalid = getValue(isInvalid) || fieldControlContext.isInvalid;
    const readonly =
      getValue(isReadOnly) || props.readOnly || fieldControlContext.isReadOnly;
    const required =
      getValue(isRequired) || props.required || fieldControlContext.isRequired;

    const inputGroupContext = useInputGroupContext() ?? {
      isLeftAddon: false,
      isRightAddon: false,
      isPrefix: false,
      isSuffix: false,
      size,
    };

    return (
      <input
        {...props}
        name={name}
        disabled={disabled}
        readOnly={readonly}
        required={required}
        className={
          isUnstyled
            ? className
            : classNames(
                inputFieldClasses({
                  size: inputGroupContext.size,
                  variant,
                  invalid,
                  isLeftAddon: inputGroupContext.isLeftAddon,
                  isRightAddon: inputGroupContext.isRightAddon,
                  isPrefix: inputGroupContext.isPrefix,
                  isSuffix: inputGroupContext.isSuffix,
                }),
                className,
              )
        }
        ref={forwardedRef}
      />
    );
  },
);
InputField.displayName = "InputField";
