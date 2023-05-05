import { forwardRef } from "react";
import { useFieldControlContext } from "../field";
import { applyStyleToMultipleVariants, classNames } from "../utils";
import { cva } from "class-variance-authority";

// InputField Component
const inputFieldClasses = cva(
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
        outline:
          "read-only:focus:border-secondary-300 dark:read-only:focus:border-secondary-700 read-only:focus:ring-0",
        ghost: "",
      },
      invalid: {
        true: "border-error-500 focus:ring-error-200 dark:border-error-400 dark:focus:ring-error-100/20",
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
        className: "bg-transparent",
      }),
    ],
  }
);

export type InputField = Omit<JSX.IntrinsicElements["input"], "size"> & {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};
export const InputField = forwardRef<HTMLInputElement, InputField>(
  ({ className, variant = "outline", size, ...props }, forwardedRef) => {
    const controls = useFieldControlContext();
    return (
      <input
        {...props}
        className={classNames(
          inputFieldClasses({
            size: size ?? "md",
            variant,
            invalid: controls.invalid,
          }),
          className
        )}
        ref={forwardedRef}
        {...controls}
      />
    );
  }
);

InputField.displayName = "InputField";
