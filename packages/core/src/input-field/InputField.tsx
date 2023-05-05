import { forwardRef } from "react";
import { useFieldControlContext } from "../field";
import { applyStyleToMultipleVariants, classNames } from "../utils";
import { cva } from "class-variance-authority";

// InputField Component
const inputFieldClasses = cva("", {
  variants: {
    size: {
      sm: "",
      md: "",
      lg: "",
    },
    variant: {
      solid: "bg-secondary-50 dark:bg-secondary-800/20",
      outline:
        "read-only:focus:border-secondary-300 dark:read-only:focus:border-secondary-700 read-only:focus:ring-0",
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
      className: "bg-transparent",
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

export type InputField = JSX.IntrinsicElements["input"] & {
  showCount?: boolean;
  allowClear?: boolean;
  variant?: "solid" | "outline" | "ghost" | "unstyled";
  disabled?: boolean;
  sizes?: "sm" | "md" | "lg" | undefined;
};
export const InputField = forwardRef<HTMLInputElement, InputField>(
  (
    {
      defaultValue,
      className,
      showCount = false,
      allowClear = false,
      variant = "outline",
      disabled = false,
      sizes,
      ...props
    },
    forwardedRef
  ) => {
    const controls = useFieldControlContext();
    return (
      <input
        {...props}
        className={classNames(
          inputFieldClasses({ size: sizes ?? "md", variant }),
          className
        )}
        ref={forwardedRef}
        {...controls}
      />
    );
  }
);

InputField.displayName = "InputField";
