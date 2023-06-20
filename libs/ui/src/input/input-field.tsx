import { forwardRef } from "react";
import { useFieldControlContext } from "../field/context";
import { classNames } from "@rafty/utils";
import { cva } from "class-variance-authority";
import { useInputGroupContext } from "./context";

const inputFieldClasses = cva(
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
        true: "border-error-500 focus:ring-error-200 dark:border-error-400 dark:focus:ring-error-100/20",
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
        className:
          "border border-secondary-300 dark:border-secondary-700 hover:border-primary-500 dark:hover:border-primary-400 focus:ring-primary-200 focus:border-primary-500 dark:focus:ring-primary-100/20 dark:focus:border-primary-400 focus:outline-none focus:ring-2 ",
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
  }
);

// Input Field
export type InputField = Omit<JSX.IntrinsicElements["input"], "size"> & {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isUnstyled?: boolean;
};

export const InputField = forwardRef<HTMLInputElement, InputField>(
  (
    {
      className,
      variant = "outline",
      size = "md",
      isUnstyled = false,
      ...props
    },
    forwardedRef
  ) => {
    const {
      name = props.name,
      isDisabled = props.disabled,
      isInvalid,
      isLoading,
      isReadOnly = props.readOnly,
      isRequired = props.required,
    } = useFieldControlContext() ?? {};
    const inputGroupProps = useInputGroupContext() ?? {
      isLeftAddon: false,
      isRightAddon: false,
      isPrefix: false,
      isSuffix: false,
    };

    return (
      <input
        {...props}
        name={name}
        disabled={isDisabled ?? isLoading}
        readOnly={isReadOnly}
        required={isRequired}
        className={
          isUnstyled
            ? className
            : classNames(
                inputFieldClasses({
                  size: size,
                  variant,
                  invalid: isInvalid,
                  isLeftAddon: inputGroupProps.isLeftAddon,
                  isRightAddon: inputGroupProps.isRightAddon,
                  isPrefix: inputGroupProps.isPrefix,
                  isSuffix: inputGroupProps.isSuffix,
                }),
                className
              )
        }
        ref={forwardedRef}
      />
    );
  }
);
InputField.displayName = "InputField";
