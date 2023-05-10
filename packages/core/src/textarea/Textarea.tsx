import { forwardRef } from "react";
import { useFieldControlContext } from "../field/context";
import { applyStyleToMultipleVariants, classNames } from "../utils";
import { cva } from "class-variance-authority";

const textareaClasses = cva(
  "w-full appearance-none outline-none dark:text-secondary-200 transition-all disabled:bg-secondary-100 disabled:dark:bg-secondary-800 disabled:cursor-not-allowed p-3 rounded-md",
  {
    variants: {
      variant: {
        solid: "bg-secondary-50 dark:bg-secondary-800/20",
        outline:
          "read-only:focus:border-secondary-300 dark:read-only:focus:border-secondary-700 read-only:focus:ring-0",
        ghost: "border border-transparent",
      },
      invalid: {
        true: "border-error-500 focus:ring-error-200 dark:border-error-400 dark:focus:ring-error-100/20",
      },
    },
    compoundVariants: [
      ...applyStyleToMultipleVariants({
        variant: ["solid", "outline"],
        className:
          "border border-secondary-300 dark:border-zinc-700 hover:border-primary-500 dark:hover:border-primary-400 focus:ring-primary-200 focus:border-primary-500 dark:focus:ring-primary-100/20 dark:focus:border-primary-400 focus:outline-none focus:ring-2 ",
      }),
      ...applyStyleToMultipleVariants({
        variant: ["outline", "ghost"],
        className: "bg-transparent",
      }),
    ],
  }
);

// InputField Component (With ErrorMessage)
export type Textarea = JSX.IntrinsicElements["textarea"] & {
  variant?: "solid" | "outline" | "ghost";
};
export const Textarea = forwardRef<HTMLTextAreaElement, Textarea>(
  ({ className, variant = "outline", ...props }, forwardedRef) => {
    const controls = useFieldControlContext();
    return (
      <textarea
        {...props}
        className={classNames(
          textareaClasses({
            variant,
            invalid: controls.isInvalid,
          }),
          className
        )}
        ref={forwardedRef}
        {...controls}
      />
    );
  }
);

Textarea.displayName = "Textarea";
