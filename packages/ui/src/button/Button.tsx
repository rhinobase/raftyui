import { cva } from "class-variance-authority";
import React, {
  type ButtonHTMLAttributes,
  cloneElement,
  forwardRef,
} from "react";
import { Spinner } from "../spinner/index.js";
import {
  type SizeType,
  type ValueOrFunction,
  classNames,
  getValue,
} from "../utils/index.js";

type ButtonSize = SizeType<"icon" | "fab">;

export const buttonClasses = cva(
  "whitespace-nowrap font-semibold h-max transition-all border select-none outline-none",
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
        sm: "px-2 py-1 leading-5 rounded text-xs" /* For backwards compatibility */,
        md: "px-3 py-2 text-sm",
        lg: "px-4 py-3 text-base leading-5",
        icon: "",
        fab: "rounded-full",
      },
      loading: {
        true: "cursor-wait",
        false: "",
      },
      disabled: {
        true: "cursor-not-allowed",
        false: "",
      },
      active: {
        true: "",
        false: "",
      },
      hidden: {
        true: "hidden",
        false: "flex items-center justify-center",
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
        colorScheme: ["primary", "error", "success"],
        variant: "solid",
        disabled: false,
        loading: false,
        className: "text-white dark:text-black",
      },
      {
        disabled: false,
        loading: false,
        className:
          "focus-visible:ring-2 ring-offset-2 ring-offset-white dark:ring-offset-secondary-950",
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
      {
        disabled: true,
        colorScheme: ["primary", "success", "error"],
        variant: "solid",
        className: "text-secondary-100 dark:text-secondary-800",
      },
      {
        loading: true,
        colorScheme: ["primary", "success", "error"],
        variant: "solid",
        className: "text-secondary-100 dark:text-secondary-800",
      },
      {
        colorScheme: "secondary",
        disabled: false,
        loading: false,
        className: "text-secondary-600 dark:text-secondary-200",
      },
      // Primary Solid
      {
        disabled: true,
        colorScheme: "primary",
        variant: "solid",
        className: "bg-primary-500/75 dark:bg-primary-300/80",
      },
      {
        loading: true,
        colorScheme: "primary",
        variant: "solid",
        className: "bg-primary-500/75 dark:bg-primary-300/80",
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
          "bg-secondary-300/80 dark:bg-secondary-500 text-secondary-500 dark:text-secondary-300",
      },
      {
        loading: true,
        colorScheme: "secondary",
        variant: "solid",
        className:
          "bg-secondary-300/80 dark:bg-secondary-500 text-secondary-500 dark:text-secondary-300",
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
        className: "bg-red-500/75 dark:bg-red-300/80",
      },
      {
        loading: true,
        colorScheme: "error",
        variant: "solid",
        className: "bg-red-500/75 dark:bg-red-300/80",
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
        className: "bg-green-500/75 dark:bg-green-300/80",
      },
      {
        loading: true,
        colorScheme: "success",
        variant: "solid",
        className: "bg-green-500/75 dark:bg-green-300/80",
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
        className: "border-primary-400/70 dark:border-primary-200/70",
      },
      {
        loading: true,
        colorScheme: "primary",
        variant: "outline",
        className: "border-primary-400/70 dark:border-primary-200/70",
      },
      {
        active: true,
        colorScheme: "primary",
        variant: "outline",
        className:
          "border-primary-500 dark:border-primary-300 bg-primary-200/70 dark:bg-primary-400/20",
      },
      {
        disabled: false,
        loading: false,
        active: false,
        colorScheme: "primary",
        variant: "outline",
        className:
          "border-primary-500/90 dark:border-primary-300 hover:bg-primary-200/30 dark:hover:bg-primary-400/20",
      },
      // Secondary Outline
      {
        disabled: true,
        colorScheme: "secondary",
        variant: "outline",
        className: "border-secondary-300/80 dark:border-secondary-500/80",
      },
      {
        loading: true,
        colorScheme: "secondary",
        variant: "outline",
        className: "border-secondary-300/80 dark:border-secondary-500/80",
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
        className: "border-red-300/75 dark:border-red-200/50",
      },
      {
        loading: true,
        colorScheme: "error",
        variant: "outline",
        className: "border-red-300/75 dark:border-red-200/50",
      },
      {
        active: true,
        colorScheme: "error",
        variant: "outline",
        className:
          "border-red-500 dark:border-red-300/80 bg-red-200/60 dark:bg-red-300/30",
      },
      {
        disabled: false,
        loading: false,
        active: false,
        colorScheme: "error",
        variant: "outline",
        className:
          "border-red-500 dark:border-red-300/80 hover:bg-red-200/30 dark:hover:bg-red-300/10",
      },
      // Success Outline
      {
        disabled: true,
        colorScheme: "success",
        variant: "outline",
        className: "border-green-300/75 dark:border-green-200/50",
      },
      {
        loading: true,
        colorScheme: "success",
        variant: "outline",
        className: "border-green-300/75 dark:border-green-200/50",
      },
      {
        active: true,
        colorScheme: "success",
        variant: "outline",
        className:
          "border-green-500 dark:border-green-300/80 bg-green-200/60 dark:bg-green-300/30",
      },
      {
        disabled: false,
        loading: false,
        active: false,
        colorScheme: "success",
        variant: "outline",
        className:
          "border-green-500 dark:border-green-300/80 hover:bg-green-200/30 dark:hover:bg-green-300/10",
      },
      // Primary Ghost
      {
        disabled: true,
        colorScheme: "primary",
        variant: ["ghost", "outline"],
        className: "text-primary-400/80 dark:text-primary-300/60",
      },
      {
        loading: true,
        colorScheme: "primary",
        variant: ["ghost", "outline"],
        className: "text-primary-400/80 dark:text-primary-300/60",
      },
      {
        colorScheme: "primary",
        variant: ["ghost", "outline"],
        disabled: false,
        loading: false,
        className: "text-primary-500 dark:text-primary-300",
      },
      {
        active: true,
        colorScheme: "primary",
        variant: "ghost",
        className: "bg-primary-200/70 dark:bg-primary-400/20",
      },
      {
        disabled: false,
        loading: false,
        active: false,
        colorScheme: "primary",
        variant: "ghost",
        className: "hover:bg-primary-200/30 dark:hover:bg-primary-400/10",
      },
      // Secondary Ghost
      {
        disabled: true,
        colorScheme: "secondary",
        variant: ["ghost", "outline"],
        className: "text-secondary-400/80 dark:text-secondary-300/60",
      },
      {
        loading: true,
        colorScheme: "secondary",
        variant: ["ghost", "outline"],
        className: "text-secondary-400/80 dark:text-secondary-300/60",
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
        variant: ["ghost", "outline"],
        className: "text-red-400/80 dark:text-red-300/60",
      },
      {
        loading: true,
        colorScheme: "error",
        variant: ["ghost", "outline"],
        className: "text-red-400/80 dark:text-red-300/60",
      },
      {
        colorScheme: "error",
        variant: ["ghost", "outline"],
        disabled: false,
        loading: false,
        className: "text-red-500 dark:text-red-300",
      },
      {
        active: true,
        colorScheme: "error",
        variant: "ghost",
        className: "bg-red-200/60 dark:bg-red-300/30",
      },
      {
        disabled: false,
        loading: false,
        active: false,
        colorScheme: "error",
        variant: "ghost",
        className: "hover:bg-red-200/40 dark:hover:bg-red-300/10",
      },
      // Success Ghost
      {
        disabled: true,
        colorScheme: "success",
        variant: ["ghost", "outline"],
        className: "text-green-400/80 dark:text-green-300/60",
      },
      {
        loading: true,
        colorScheme: "success",
        variant: ["ghost", "outline"],
        className: "text-green-400/80 dark:text-green-300/60",
      },
      {
        colorScheme: "success",
        variant: ["ghost", "outline"],
        disabled: false,
        loading: false,
        className: "text-green-500 dark:text-green-300",
      },
      {
        active: true,
        colorScheme: "success",
        variant: "ghost",
        className: "bg-green-200/60 dark:bg-green-300/30",
      },
      {
        disabled: false,
        loading: false,
        active: false,
        colorScheme: "success",
        variant: "ghost",
        className: "hover:bg-green-200/40 dark:hover:bg-green-300/10",
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
      hidden: false,
    },
  },
);

const buttonLoadingIconClasses = {
  size: {
    sm: "size-[15px] min-h-[15px] min-w-[15px]",
    md: "size-[17px] min-h-[17px] min-w-[17px]",
    lg: "size-[20px] min-h-[20px] min-w-[20px]",
    icon: "size-[17px] min-h-[17px] min-w-[17px]",
    fab: "size-[17px] min-h-[17px] min-w-[17px]",
  },
};

const buttonLeftAndRightIconStyle = {
  size: {
    sm: 4,
    md: 6,
    lg: 8,
    icon: 0,
    fab: 0,
  },
};

export type Button = ButtonHTMLAttributes<HTMLButtonElement> & {
  /* Left aligned icon*/
  leftIcon?: JSX.Element;
  /* Right aligned icon */
  rightIcon?: JSX.Element;
  loadingText?: string;
  isUnstyled?: boolean;
  colorScheme?: "primary" | "secondary" | "error" | "success";
  variant?: "solid" | "outline" | "ghost";
  size?: ButtonSize;
  isLoading?: ValueOrFunction;
  isActive?: ValueOrFunction;
  isDisabled?: ValueOrFunction;
  isHidden?: ValueOrFunction;
};

export const Button = forwardRef<HTMLButtonElement, Button>(function Button(
  {
    type = "button",
    disabled = false,
    hidden = false,
    size = "md",
    colorScheme = "secondary",
    variant = "solid",
    className,
    children,
    isLoading,
    isActive,
    isDisabled,
    isHidden,
    leftIcon,
    rightIcon,
    loadingText,
    isUnstyled = false,
    ...props
  },
  forwardedRef,
) {
  // Buttons are **always** disabled if we're in a `loading` state
  const _loading = getValue(isLoading);
  const _disabled = disabled || getValue(isDisabled) || _loading;
  const _hidden = hidden || getValue(isHidden);
  const _active = getValue(isActive);
  const _className = isUnstyled
    ? className
    : classNames(
        buttonClasses({
          colorScheme,
          variant,
          size,
          disabled: _disabled,
          loading: _loading,
          active: _active,
          hidden: _hidden,
        }),
        className,
      );

  const buttonProps = {
    ...props,
    type,
    disabled: _disabled,
    hidden: _hidden,
    className: _className,
    ref: forwardedRef,
  };

  return (
    <button {...buttonProps}>
      <ChildrenRender
        size={size}
        loading={_loading}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        loadingText={loadingText}
      >
        {children}
      </ChildrenRender>
    </button>
  );
});

type ChildrenRender = {
  size: ButtonSize;
  loading?: boolean;
} & Pick<Button, "leftIcon" | "rightIcon" | "children" | "loadingText">;

function ChildrenRender({
  size,
  loading,
  loadingText,
  leftIcon,
  rightIcon,
  children,
}: ChildrenRender) {
  const loadingIcon = (
    <Spinner
      inheritParent
      className={buttonLoadingIconClasses.size[size]}
      style={{ marginRight: buttonLeftAndRightIconStyle.size[size] }}
    />
  );

  const _leftIcon =
    leftIcon &&
    cloneElement(leftIcon, {
      style: { marginRight: buttonLeftAndRightIconStyle.size[size] },
    });

  const _rightIcon =
    rightIcon &&
    cloneElement(rightIcon, {
      style: { marginLeft: buttonLeftAndRightIconStyle.size[size] },
    });

  if (size === "icon" || size === "fab") {
    if (loading) return loadingIcon;
    return children;
  }
  if (loading)
    return (
      <>
        {loadingIcon}
        {loadingText ?? children}
        {_rightIcon}
      </>
    );
  return (
    <>
      {_leftIcon}
      {children}
      {_rightIcon}
    </>
  );
}
