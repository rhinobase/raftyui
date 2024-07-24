"use client";
import { cva } from "class-variance-authority";
import { type InputHTMLAttributes, forwardRef } from "react";
import { useFieldControlContext } from "../field-control";
import { useInputGroupContext } from "../input-group";
import type { ValueOrFunction } from "../types";
import { type SizeType, classNames, getValue } from "../utils";

export const inputFieldClasses = cva(
  "w-full border appearance-none outline-none dark:text-secondary-100 transition-all placeholder:text-secondary-400 dark:placeholder:text-secondary-500",
  {
    variants: {
      size: {
        sm: "py-1 text-sm",
        md: "py-1.5 text-base",
        lg: "py-2 text-lg",
      },
      variant: {
        solid: "",
        outline: "",
        ghost: "",
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
        true: "border-red-500 dark:border-red-300 ring-red-300 dark:ring-red-100",
        false: "",
      },
      isLeftAddon: {
        true: "",
        false: "",
      },
      isRightAddon: {
        true: "",
        false: "",
      },
      isPrefix: {
        true: "",
        false: "",
      },
      isSuffix: {
        true: "",
        false: "",
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
        className: "bg-secondary-100 dark:bg-secondary-800 cursor-not-allowed",
      },
      {
        variant: ["solid", "outline"],
        disabled: false,
        invalid: false,
        className: "hover:border-primary-500 dark:hover:border-primary-300",
      },
      {
        variant: ["solid", "outline"],
        invalid: false,
        className: "border-secondary-300 dark:border-secondary-700",
      },
      {
        disabled: false,
        readOnly: false,
        className:
          "focus-visible:ring-2 ring-offset-2 ring-offset-white dark:ring-offset-secondary-950",
      },
      {
        disabled: false,
        readOnly: false,
        invalid: false,
        className:
          "focus:border-primary-500 dark:focus:border-primary-300 ring-primary-300 dark:ring-primary-100",
      },
      {
        variant: ["outline", "ghost"],
        disabled: false,
        className: "bg-transparent",
      },
      {
        variant: "ghost",
        className: "border-transparent dark:border-transparent",
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
      disabled: false,
      readOnly: false,
    },
  },
);

export type InputField = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  variant?: "solid" | "outline" | "ghost";
  size?: SizeType;
  isUnstyled?: boolean;
  isDisabled?: ValueOrFunction;
  isInvalid?: ValueOrFunction;
  isLoading?: ValueOrFunction;
  isReadOnly?: ValueOrFunction;
  isRequired?: ValueOrFunction;
};

export const InputField = forwardRef<HTMLInputElement, InputField>(
  function InputField(
    {
      name,
      disabled,
      readOnly,
      required,
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
  ) {
    const fieldControlContext = useFieldControlContext() ?? {
      isDisabled: false,
      isLoading: false,
      isReadOnly: false,
      isRequired: false,
      isInvalid: false,
    };

    const inputGroupContext = useInputGroupContext() ?? {
      isLeftAddon: false,
      isRightAddon: false,
      isPrefix: false,
      isSuffix: false,
      size,
    };

    const _name = name ?? fieldControlContext.name;
    const _disabled =
      (disabled ?? getValue(isDisabled) ?? fieldControlContext.isDisabled) ||
      (getValue(isLoading) ?? fieldControlContext.isLoading);
    const _invalid = getValue(isInvalid) ?? fieldControlContext.isInvalid;
    const _readOnly =
      readOnly ?? getValue(isReadOnly) ?? fieldControlContext.isReadOnly;
    const _required =
      required ?? getValue(isRequired) ?? fieldControlContext.isRequired;

    const _className = isUnstyled
      ? className
      : classNames(
          inputFieldClasses({
            size: inputGroupContext.size,
            variant,
            disabled: _disabled,
            readOnly: _readOnly,
            invalid: _invalid,
            isLeftAddon: inputGroupContext.isLeftAddon,
            isRightAddon: inputGroupContext.isRightAddon,
            isPrefix: inputGroupContext.isPrefix,
            isSuffix: inputGroupContext.isSuffix,
          }),
          className,
        );

    const inputProps = {
      ...props,
      name: _name,
      disabled: _disabled,
      readOnly: _readOnly,
      required: _required,
      className: _className,
      ref: forwardedRef,
    };

    return <input {...inputProps} />;
  },
);
