"use client";
import {
  type DetailedHTMLProps,
  type TextareaHTMLAttributes,
  forwardRef,
} from "react";
import { useFieldControlContext } from "../field-control";
import { type InputField, inputFieldClasses } from "../input-field";
import { classNames, getValue } from "../utils";

export const textareaClasses = {
  size: {
    sm: "min-h-16",
    md: "min-h-20",
    lg: "min-h-24",
  },
};

type TextareaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export type Textarea = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "size"
> &
  InputField;

export const Textarea = forwardRef<HTMLTextAreaElement, Textarea>(
  function Textarea(
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

    const _name = name ?? fieldControlContext.name;
    const _disabled =
      (disabled ?? getValue(isDisabled) ?? fieldControlContext.isDisabled) ||
      (getValue(isLoading) ?? fieldControlContext.isLoading);
    const _invalid = getValue(isInvalid) ?? fieldControlContext.isInvalid;
    const _readOnly =
      readOnly ?? getValue(isReadOnly) ?? fieldControlContext.isReadOnly;
    const _required =
      required ?? getValue(isRequired) ?? fieldControlContext.isRequired;

    const textareaProps: TextareaProps = {
      ...props,
      name: _name,
      disabled: _disabled,
      readOnly: _readOnly,
      required: _required,
      className: isUnstyled
        ? className
        : classNames(
            inputFieldClasses({
              size,
              variant,
              disabled: _disabled,
              readOnly: _readOnly,
              invalid: _invalid,
            }),
            textareaClasses.size[size],
            className,
          ),
      ref: forwardedRef,
    };

    return <textarea {...textareaProps} />;
  },
);
