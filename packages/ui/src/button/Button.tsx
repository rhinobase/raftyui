import { cva } from "class-variance-authority";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import { Spinner } from "../spinner";
import type { ValueOrFunction } from "../types";
import { classNames, getValue } from "../utils";

export const buttonClasses = cva(
  "[!hidden]:flex whitespace-nowrap items-center justify-center font-semibold h-max transition-all border select-none outline-none [hidden]:hidden",
  {
    variants: {
      colorScheme: {
        primary: "",
        secondary: "",
        error: "",
        success: "",
      },
      variant: {
        solid: "",
        outline: "",
        ghost: "",
      },
      size: {
        sm: "px-2 py-1 leading-5 rounded-base text-xs" /* For backwards compatibility */,
        md: "px-3 py-2 text-sm",
        lg: "px-4 py-3 text-base leading-5",
        icon: "",
        fab: "rounded-full",
      },
      loading: {
        true: "cursor-wait",
      },
      disabled: {
        true: "cursor-not-allowed",
      },
      active: {
        true: "",
      },
    },
    compoundVariants: [
      {
        size: ["icon", "fab"],
        className: "p-1.5",
      },
      {
        size: ["md", "lg", "icon"],
        className: "rounded-md",
      },
      {
        colorScheme: "secondary",
        disabled: false,
        loading: false,
        className: "text-secondary-600 dark:text-secondary-200",
      },
      {
        colorScheme: ["primary", "error", "success"],
        variant: "solid",
        disabled: false,
        loading: false,
        className: "text-white dark:text-black",
      },
      {
        disabled: false,
        loading: false,
        className: "focus:ring-2 ring-offset-1 dark:ring-offset-secondary-950",
      },
      {
        variant: ["solid", "ghost"],
        className: "border-transparent",
      },
      {
        variant: ["outline", "ghost"],
        active: false,
        className: "bg-transparent",
      },
      // Primary Solid
      {
        disabled: true,
        colorScheme: "primary",
        variant: "solid",
        className:
          "bg-primary-500/75 text-secondary-200 dark:bg-primary-300/80 dark:text-secondary-600",
      },
      {
        loading: true,
        colorScheme: "primary",
        variant: "solid",
        className:
          "bg-primary-500/75 text-secondary-200 dark:bg-primary-300/80 dark:text-secondary-600",
      },
      {
        active: true,
        colorScheme: "primary",
        variant: "solid",
        className: "bg-primary-600 dark:bg-primary-400/80",
      },
      {
        disabled: false,
        loading: false,
        active: false,
        colorScheme: "primary",
        variant: "solid",
        className:
          "bg-primary-500 hover:bg-primary-600 dark:bg-primary-300/90 dark:hover:bg-primary-400/80",
      },
      // Secondary Solid
      {
        disabled: true,
        colorScheme: "secondary",
        variant: "solid",
        className:
          "bg-secondary-300/80 text-secondary-400/90 dark:bg-secondary-500 dark:text-secondary-300/70",
      },
      {
        loading: true,
        colorScheme: "secondary",
        variant: "solid",
        className:
          "bg-secondary-300/80 text-secondary-400/90 dark:bg-secondary-500 dark:text-secondary-300/70",
      },
      {
        active: true,
        colorScheme: "secondary",
        variant: "solid",
        className: "bg-secondary-300 dark:bg-secondary-400/80",
      },
      {
        disabled: false,
        loading: false,
        active: false,
        colorScheme: "secondary",
        variant: "solid",
        className:
          "bg-secondary-200/80 hover:bg-secondary-300 dark:bg-secondary-500/60 dark:hover:bg-secondary-400/80",
      },
      // Error Solid
      {
        disabled: true,
        colorScheme: "error",
        variant: "solid",
        className:
          "bg-red-500/75 text-secondary-200 dark:bg-red-300/80 dark:text-secondary-600",
      },
      {
        loading: true,
        colorScheme: "error",
        variant: "solid",
        className:
          "bg-red-500/75 text-secondary-200 dark:bg-red-300/80 dark:text-secondary-600",
      },
      {
        active: true,
        colorScheme: "error",
        variant: "solid",
        className: "bg-red-600/90 dark:bg-red-400/80",
      },
      {
        disabled: false,
        loading: false,
        active: false,
        colorScheme: "error",
        variant: "solid",
        className:
          "bg-red-500 hover:bg-red-600/90 dark:bg-red-300 dark:hover:bg-red-400",
      },
      // Success Solid
      {
        disabled: true,
        colorScheme: "success",
        variant: "solid",
        className:
          "bg-green-500/75 text-secondary-200 dark:bg-green-300/80 dark:text-secondary-600",
      },
      {
        loading: true,
        colorScheme: "success",
        variant: "solid",
        className:
          "bg-green-500/75 text-secondary-200 dark:bg-green-300/80 dark:text-secondary-600",
      },
      {
        active: true,
        colorScheme: "success",
        variant: "solid",
        className: "bg-green-600/90 dark:bg-green-400/80",
      },
      {
        disabled: false,
        loading: false,
        active: false,
        colorScheme: "success",
        variant: "solid",
        className:
          "bg-green-500 hover:bg-green-600/90 dark:bg-green-300 dark:hover:bg-green-400",
      },
      // Primary Outline
      {
        disabled: true,
        colorScheme: "primary",
        variant: "outline",
        className:
          "border-primary-400/70 text-primary-400/70 dark:border-primary-200/70 dark:text-primary-200/70",
      },
      {
        loading: true,
        colorScheme: "primary",
        variant: "outline",
        className:
          "border-primary-400/70 text-primary-400/70 dark:border-primary-200/70 dark:text-primary-200/70",
      },
      {
        active: true,
        colorScheme: "primary",
        variant: "outline",
        className:
          "border-primary-500 dark:border-primary-300 text-primary-500 dark:text-primary-300 bg-primary-200/70 dark:bg-primary-400/20",
      },
      {
        disabled: false,
        loading: false,
        active: false,
        colorScheme: "primary",
        variant: "outline",
        className:
          "border-primary-500/90 dark:border-primary-300 text-primary-500 dark:text-primary-300 hover:bg-primary-200/30 dark:hover:bg-primary-400/20",
      },
      // Secondary Outline
      {
        disabled: true,
        colorScheme: "secondary",
        variant: "outline",
        className:
          "border-secondary-300/80 text-secondary-400/90 dark:border-secondary-500/80 dark:text-secondary-400/70",
      },
      {
        loading: true,
        colorScheme: "secondary",
        variant: "outline",
        className:
          "border-secondary-300/80 text-secondary-400/90 dark:border-secondary-500/80 dark:text-secondary-400/70",
      },
      {
        active: true,
        colorScheme: "secondary",
        variant: "outline",
        className:
          "border-secondary-300 dark:border-secondary-700 bg-secondary-200/80 dark:bg-secondary-700/80",
      },
      {
        disabled: false,
        loading: false,
        active: false,
        colorScheme: "secondary",
        variant: "outline",
        className:
          "border-secondary-300 dark:border-secondary-700 hover:bg-secondary-200/40 dark:hover:bg-secondary-700/50",
      },
      // Error Outline
      {
        disabled: true,
        colorScheme: "error",
        variant: "outline",
        className:
          "border-red-300/75 text-red-400/70 dark:border-red-200/50 dark:text-red-200/60",
      },
      {
        loading: true,
        colorScheme: "error",
        variant: "outline",
        className:
          "border-red-300/75 text-red-400/70 dark:border-red-200/50 dark:text-red-200/60",
      },
      {
        active: true,
        colorScheme: "error",
        variant: "outline",
        className:
          "border-red-500 dark:border-red-300/80 text-red-500 dark:text-red-300 bg-red-200/60 dark:bg-red-300/30",
      },
      {
        disabled: false,
        loading: false,
        active: false,
        colorScheme: "error",
        variant: "outline",
        className:
          "border-red-500 dark:border-red-300/80 text-red-500 dark:text-red-300 hover:bg-red-200/30 dark:hover:bg-red-300/10",
      },
      // Success Outline
      {
        disabled: true,
        colorScheme: "success",
        variant: "outline",
        className:
          "border-green-300/75 text-green-400/70 dark:border-green-200/50 dark:text-green-200/60",
      },
      {
        loading: true,
        colorScheme: "success",
        variant: "outline",
        className:
          "border-green-300/75 text-green-400/70 dark:border-green-200/50 dark:text-green-200/60",
      },
      {
        active: true,
        colorScheme: "success",
        variant: "outline",
        className:
          "border-green-500 dark:border-green-300/80 text-green-500 dark:text-green-300 bg-green-200/60 dark:bg-green-300/30",
      },
      {
        disabled: false,
        loading: false,
        active: false,
        colorScheme: "success",
        variant: "outline",
        className:
          "border-green-500 dark:border-green-300/80 text-green-500 dark:text-green-300 hover:bg-green-200/30 dark:hover:bg-green-300/10",
      },
      // Primary Ghost
      {
        disabled: true,
        colorScheme: "primary",
        variant: "ghost",
        className: "text-primary-400/70 dark:text-primary-300/60",
      },
      {
        loading: true,
        colorScheme: "primary",
        variant: "ghost",
        className: "text-primary-400/70 dark:text-primary-300/60",
      },
      {
        active: true,
        colorScheme: "primary",
        variant: "ghost",
        className:
          "text-primary-500 dark:text-primary-300 bg-primary-200/70 dark:bg-primary-400/20",
      },
      {
        disabled: false,
        loading: false,
        active: false,
        colorScheme: "primary",
        variant: "ghost",
        className:
          "text-primary-500 dark:text-primary-300 hover:bg-primary-200/30 dark:hover:bg-primary-400/10",
      },
      // Secondary Ghost
      {
        disabled: true,
        colorScheme: "secondary",
        variant: "ghost",
        className: "text-secondary-400/80 dark:text-secondary-500",
      },
      {
        loading: true,
        colorScheme: "secondary",
        variant: "ghost",
        className: "text-secondary-400/80 dark:text-secondary-500",
      },
      {
        active: true,
        colorScheme: "secondary",
        variant: "ghost",
        className: "bg-secondary-200/80 dark:bg-secondary-700/80",
      },
      {
        disabled: false,
        loading: false,
        active: false,
        colorScheme: "secondary",
        variant: "ghost",
        className: "hover:bg-secondary-200/60 dark:hover:bg-secondary-700/50",
      },
      // Error Ghost
      {
        disabled: true,
        colorScheme: "error",
        variant: "ghost",
        className: "text-red-400/80 dark:text-red-300/60",
      },
      {
        loading: true,
        colorScheme: "error",
        variant: "ghost",
        className: "text-red-400/80 dark:text-red-300/60",
      },
      {
        active: true,
        colorScheme: "error",
        variant: "ghost",
        className:
          "text-red-500 dark:text-red-300 bg-red-200/60 dark:bg-red-300/30",
      },
      {
        disabled: false,
        loading: false,
        active: false,
        colorScheme: "error",
        variant: "ghost",
        className:
          "text-red-500 dark:text-red-300 hover:bg-red-200/40 dark:hover:bg-red-300/10",
      },
      // Success Ghost
      {
        disabled: true,
        colorScheme: "success",
        variant: "ghost",
        className: "text-green-400/80 dark:text-green-300/60",
      },
      {
        loading: true,
        colorScheme: "success",
        variant: "ghost",
        className: "text-green-400/80 dark:text-green-300/60",
      },
      {
        active: true,
        colorScheme: "success",
        variant: "ghost",
        className:
          "text-green-500 dark:text-green-300 bg-green-200/60 dark:bg-green-300/30",
      },
      {
        disabled: false,
        loading: false,
        active: false,
        colorScheme: "success",
        variant: "ghost",
        className:
          "text-green-500 dark:text-green-300 hover:bg-green-200/40 dark:hover:bg-green-300/10",
      },
      {
        disabled: false,
        loading: false,
        colorScheme: "primary",
        className: "ring-primary-300 dark:ring-primary-100",
      },
      {
        disabled: false,
        loading: false,
        colorScheme: "secondary",
        className: "ring-secondary-200 dark:ring-secondary-100",
      },
      {
        disabled: false,
        loading: false,
        colorScheme: "error",
        className: "ring-red-300 dark:ring-red-100",
      },
      {
        disabled: false,
        loading: false,
        colorScheme: "success",
        className: "ring-green-300 dark:ring-green-100",
      },
    ],
    defaultVariants: {
      colorScheme: "secondary",
      variant: "solid",
      size: "md",
      active: false,
      disabled: false,
      loading: false,
    },
  },
);

export type Button = {
  /* Left aligned icon*/
  leftIcon?: JSX.Element;
  /* Right aligned icon */
  rightIcon?: JSX.Element;
  loadingText?: string;
  isUnstyled?: boolean;
  colorScheme?: "primary" | "secondary" | "error" | "success";
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "icon" | "fab";
  isLoading?: ValueOrFunction;
  isActive?: ValueOrFunction;
  isDisabled?: ValueOrFunction;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, Button>(
  (
    {
      isLoading,
      isActive,
      isDisabled,
      colorScheme = "secondary",
      variant = "solid",
      size = "md",
      loadingText,
      isUnstyled = false,
      className,
      children,
      leftIcon,
      rightIcon,
      type = "button",
      ...props
    },
    forwardedRef,
  ) => {
    // Buttons are **always** disabled if we're in a `loading` state
    const loading = getValue(isLoading);
    const disabled = props.disabled || getValue(isDisabled) || loading;

    return (
      <button
        {...props}
        type={type}
        disabled={disabled}
        className={
          isUnstyled
            ? className
            : classNames(
                buttonClasses({
                  colorScheme,
                  variant,
                  size,
                  disabled,
                  loading,
                  active: getValue(isActive),
                }),
                className,
              )
        }
        ref={forwardedRef}
      >
        {isLoading ? (
          <>
            <Spinner inheritParent className="mr-2" size="sm" />
            {loadingText ?? children}
          </>
        ) : (
          <>
            {leftIcon && (
              <div className="mr-1 flex h-[20px] items-center justify-center">
                {leftIcon}
              </div>
            )}
            {children}
            {rightIcon && (
              <div className="ml-1 flex h-[20px] items-center justify-center">
                {rightIcon}
              </div>
            )}
          </>
        )}
      </button>
    );
  },
);
Button.displayName = "Button";
