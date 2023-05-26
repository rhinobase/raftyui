import { forwardRef } from "react";
import { useFieldControlContext } from "@rafty/field";
import { classNames } from "@rafty/utils";
import { cva } from "class-variance-authority";

const textareaClasses = cva(
  "w-full appearance-none outline-none dark:text-secondary-200 transition-all disabled:bg-secondary-100 disabled:dark:bg-secondary-800 disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        sm: "rounded px-2 py-1 text-sm",
        md: "rounded-md px-3 py-1.5",
        lg: "rounded-md px-4 py-2 text-lg",
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
    },
    compoundVariants: [
      {
        variant: ["solid", "outline"],
        className:
          "border border-secondary-300 dark:border-zinc-700 hover:border-primary-500 dark:hover:border-primary-400 focus:ring-primary-200 focus:border-primary-500 dark:focus:ring-primary-100/20 dark:focus:border-primary-400 focus:outline-none focus:ring-2 ",
      },
      {
        variant: ["outline", "ghost"],
        className: "bg-transparent",
      },
    ],
  }
);

// InputField Component (With ErrorMessage)
export type Textarea = JSX.IntrinsicElements["textarea"] & {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isUnStyled?: boolean;
};
export const Textarea = forwardRef<HTMLTextAreaElement, Textarea>(
  (
    {
      className,
      variant = "outline",
      isUnStyled = false,
      size = "md",
      ...props
    },
    forwardedRef
  ) => {
    const controls = useFieldControlContext() ?? {};
    return (
      <textarea
        {...controls}
        {...props}
        className={
          isUnStyled
            ? className
            : classNames(
                textareaClasses({
                  size,
                  variant,
                  invalid: controls.isInvalid,
                }),
                className
              )
        }
        ref={forwardedRef}
      />
    );
  }
);

Textarea.displayName = "Textarea";
