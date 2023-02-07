import { cva, VariantProps } from "class-variance-authority";
import React, { forwardRef } from "react";
import { classNames, applyStyleToMultipleVariants } from "@rhinobase/utils";
import { Spinner, Tooltip } from "@rhinobase/core";

export type ButtonBaseProps = {
  /* Action that happens when the button is clicked */
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  /* Left aligned icon*/
  leftIcon?: JSX.Element;
  /* Right aligned icon */
  rightIcon?: JSX.Element;
  shallow?: boolean;
  /* Tool tip used when icon size is set to small */
  tooltip?: string;
  loadingText?: string;
} & VariantProps<typeof buttonClasses>;

export type Button = ButtonBaseProps &
  Omit<JSX.IntrinsicElements["button"], "onClick" | "ref"> & {
    href?: never;
  };

const buttonClasses = cva(
  "flex whitespace-nowrap items-center justify-center text-sm font-medium h-max transition-all",
  {
    variants: {
      colorScheme: {
        primary: "text-white dark:text-black",
        secondary: "text-secondary-600 dark:text-secondary-200",
        error: "text-white dark:text-black",
      },
      variant: {
        solid: "",
        outline: "",
        ghost: "",
      },
      size: {
        sm: "px-md py-xs leading-5 rounded-base" /* For backwards compatibility */,
        base: "px-lg py-md rounded-md",
        lg: "px-xl py-lg text-base leading-5 rounded-md",
        icon: "flex justify-center p-1.5 stroke-2 rounded-md",
        fab: "rounded-full p-1.5 stroke-2",
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
      // Primary Solid
      {
        disabled: true,
        colorScheme: "primary",
        variant: "solid",
        className:
          "border border-transparent bg-primary-500/75 text-secondary-200 dark:bg-primary-300/80 dark:text-secondary-600",
      },
      {
        loading: true,
        colorScheme: "primary",
        variant: "solid",
        className:
          "border border-transparent bg-primary-500/75 text-secondary-200 dark:bg-primary-300/80 dark:text-secondary-600",
      },
      {
        active: true,
        colorScheme: "primary",
        variant: "solid",
        className:
          "border border-transparent bg-primary-600 dark:bg-primary-400/80 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-500 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      },
      ...applyStyleToMultipleVariants({
        disabled: [undefined, false],
        loading: false,
        active: false,
        colorScheme: "primary",
        variant: "solid",
        className:
          "bg-primary-500 border border-transparent hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-500 dark:bg-primary-300/90 dark:hover:bg-primary-400/80 dark:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      }),
      // Secondary Solid
      {
        disabled: true,
        colorScheme: "secondary",
        variant: "solid",
        className:
          "border border-transparent bg-secondary-300/80 text-secondary-400/90 dark:bg-secondary-500 dark:text-secondary-300/70",
      },
      {
        loading: true,
        colorScheme: "secondary",
        variant: "solid",
        className:
          "border border-transparent bg-secondary-300/80 text-secondary-400/90 dark:bg-secondary-500 dark:text-secondary-300/70",
      },
      {
        active: true,
        colorScheme: "secondary",
        variant: "solid",
        className:
          "border border-transparent bg-secondary-300 dark:bg-secondary-400/80 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-secondary-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      },
      ...applyStyleToMultipleVariants({
        disabled: [undefined, false],
        loading: false,
        active: false,
        colorScheme: "secondary",
        variant: "solid",
        className:
          "border border-transparent bg-secondary-200/80 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-secondary-200 hover:bg-secondary-300 dark:bg-secondary-500/60 dark:hover:bg-secondary-400/80 dark:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      }),
      // Error Solid
      {
        disabled: true,
        colorScheme: "error",
        variant: "solid",
        className:
          "border border-transparent bg-error-500/75 text-secondary-200 dark:bg-error-300/80 dark:text-secondary-600",
      },
      {
        loading: true,
        colorScheme: "error",
        variant: "solid",
        className:
          "border border-transparent bg-error-500/75 text-secondary-200 dark:bg-error-300/80 dark:text-secondary-600",
      },
      {
        active: true,
        colorScheme: "error",
        variant: "solid",
        className:
          "border border-transparent bg-error-600/90 dark:bg-error-400/80 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-error-500 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      },
      ...applyStyleToMultipleVariants({
        disabled: [undefined, false],
        loading: false,
        active: false,
        colorScheme: "error",
        variant: "solid",
        className:
          "border border-transparent bg-error-500 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-error-500 hover:bg-error-600/90 dark:bg-error-300 dark:hover:bg-error-400 dark:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      }),
      // Primary Outline
      {
        disabled: true,
        colorScheme: "primary",
        variant: "outline",
        className:
          "border bg-transparent border-primary-400/70 text-primary-400/70 dark:border-primary-200/70 dark:text-primary-200/70",
      },
      {
        loading: true,
        colorScheme: "primary",
        variant: "outline",
        className:
          "border bg-transparent border-primary-400/70 text-primary-400/70 dark:border-primary-200/70 dark:text-primary-200/70",
      },
      {
        active: true,
        colorScheme: "primary",
        variant: "outline",
        className:
          "border border-primary-500 dark:border-primary-300 !text-primary-500 dark:!text-primary-300 bg-primary-200/70 dark:bg-primary-400/20 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      },
      ...applyStyleToMultipleVariants({
        disabled: [undefined, false],
        loading: false,
        active: false,
        colorScheme: "primary",
        variant: "outline",
        className:
          "border border-primary-500/90 dark:border-primary-300 !text-primary-500 dark:!text-primary-300 bg-transparent hover:bg-primary-200/30 dark:hover:bg-primary-400/20 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      }),
      // Secondary Outline
      {
        disabled: true,
        colorScheme: "secondary",
        variant: "outline",
        className:
          "border bg-transparent border-secondary-300/80 text-secondary-400/90 dark:border-secondary-500/80 dark:text-secondary-400/70",
      },
      {
        loading: true,
        colorScheme: "secondary",
        variant: "outline",
        className:
          "border bg-transparent border-secondary-300/80 text-secondary-400/90 dark:border-secondary-500/80 dark:text-secondary-400/70",
      },
      {
        active: true,
        colorScheme: "secondary",
        variant: "outline",
        className:
          "border border-secondary-300 dark:border-secondary-700 bg-secondary-200/80 dark:bg-secondary-700/80 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-secondary-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      },
      ...applyStyleToMultipleVariants({
        disabled: [undefined, false],
        loading: false,
        active: false,
        colorScheme: "secondary",
        variant: "outline",
        className:
          "border border-secondary-300 dark:border-secondary-700 bg-transparent hover:bg-secondary-200/40 dark:hover:bg-secondary-700/50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-secondary-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      }),
      // Error Outline
      {
        disabled: true,
        colorScheme: "error",
        variant: "outline",
        className:
          "border bg-transparent border-error-300/75 text-error-400/70 dark:border-error-200/50 dark:text-error-200/60",
      },
      {
        loading: true,
        colorScheme: "error",
        variant: "outline",
        className:
          "border bg-transparent border-error-300/75 text-error-400/70 dark:border-error-200/50 dark:text-error-200/60",
      },
      {
        active: true,
        colorScheme: "error",
        variant: "outline",
        className:
          "border border-error-500 dark:border-error-300/80 !text-error-500 dark:!text-error-300 bg-error-200/60 dark:bg-error-300/30 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-error-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      },
      ...applyStyleToMultipleVariants({
        disabled: [undefined, false],
        loading: false,
        active: false,
        colorScheme: "error",
        variant: "outline",
        className:
          "border bg-transparent border-error-500 dark:border-error-300/80 !text-error-500 dark:!text-error-300 hover:bg-error-200/30 dark:hover:bg-error-300/10 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-error-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      }),
      // Primary Ghost
      {
        disabled: true,
        colorScheme: "primary",
        variant: "ghost",
        className:
          "border border-transparent bg-transparent text-primary-400/70 dark:text-primary-300/60",
      },
      {
        loading: true,
        colorScheme: "primary",
        variant: "ghost",
        className:
          "border border-transparent bg-transparent text-primary-400/70 dark:text-primary-300/60",
      },
      {
        active: true,
        colorScheme: "primary",
        variant: "ghost",
        className:
          "border border-transparent !text-primary-500 dark:!text-primary-300 bg-primary-200/70 dark:bg-primary-400/20 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      },
      ...applyStyleToMultipleVariants({
        disabled: [undefined, false],
        loading: false,
        active: false,
        colorScheme: "primary",
        variant: "ghost",
        className:
          "border border-transparent !text-primary-500 dark:!text-primary-300 bg-transparent hover:bg-primary-200/30 dark:hover:bg-primary-400/10 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      }),
      // Secondary Ghost
      {
        disabled: true,
        colorScheme: "secondary",
        variant: "ghost",
        className:
          "border border-transparent bg-transparent text-secondary-400/80 dark:text-secondary-500",
      },
      {
        loading: true,
        colorScheme: "secondary",
        variant: "ghost",
        className:
          "border border-transparent bg-transparent text-secondary-400/80 dark:text-secondary-500",
      },
      {
        active: true,
        colorScheme: "secondary",
        variant: "ghost",
        className:
          "border border-transparent bg-secondary-200/80 dark:bg-secondary-700/80 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-secondary-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      },
      ...applyStyleToMultipleVariants({
        disabled: [undefined, false],
        loading: false,
        active: false,
        colorScheme: "secondary",
        variant: "ghost",
        className:
          "border border-transparent bg-transparent hover:bg-secondary-200/60 dark:hover:bg-secondary-700/50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-secondary-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      }),
      // Error Ghost
      {
        disabled: true,
        colorScheme: "error",
        variant: "ghost",
        className:
          "border bg-transparent border-transparent text-error-400/80 dark:text-error-300/60",
      },
      {
        loading: true,
        colorScheme: "error",
        variant: "ghost",
        className:
          "border bg-transparent border-transparent text-error-400/80 dark:text-error-300/60",
      },
      {
        active: true,
        colorScheme: "error",
        variant: "ghost",
        className:
          "border border-transparent !text-error-500 dark:!text-error-300 bg-error-200/60 dark:bg-error-300/30 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-error-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      },
      ...applyStyleToMultipleVariants({
        disabled: [undefined, false],
        loading: false,
        active: false,
        colorScheme: "error",
        variant: "ghost",
        className:
          "border bg-transparent border-transparent !text-error-500 dark:!text-error-300 hover:bg-error-200/40 dark:hover:bg-error-300/10 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-error-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      }),
    ],
    defaultVariants: {
      colorScheme: "secondary",
      variant: "solid",
      size: "base",
    },
  }
);

export const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, Button>(
  function Button(
    {
      loading = false,
      active = false,
      colorScheme = "secondary",
      variant = "solid",
      size = "base",
      type = "button",
      loadingText,
      ...props
    }: Button,
    forwardedRef
  ) {
    const {
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      shallow,
      // attributes propagated from `HTMLAnchorProps` or `HTMLButtonProps`
      ...passThroughProps
    } = props;
    // Buttons are **always** disabled if we're in a `loading` state
    const disabled = props.disabled || loading;
    // If pass an `href`-attr is passed it's `<Link>`, otherwise it's a `<button />`
    const isLink = typeof props.href !== "undefined";
    const elementType = isLink ? "Link" : "button";
    const element = React.createElement(
      elementType,
      {
        ...passThroughProps,
        disabled,
        type: !isLink ? type : undefined,
        ref: forwardedRef,
        className: classNames(
          buttonClasses({
            colorScheme,
            variant,
            size,
            loading,
            disabled: props.disabled,
            active,
          }),
          props.className
        ),
        // if we click a disabled button, we prevent going through the click handler
        onClick: disabled
          ? (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
              e.preventDefault();
            }
          : props.onClick,
      },
      <>
        {loading ? (
          <>
            <Spinner inheritParent className="mr-2" size="sm" />
            {loadingText ?? props.children}
          </>
        ) : (
          <>
            {LeftIcon}
            {props.children}
            {RightIcon}
          </>
        )}
      </>
    );

    return <Wrapper tooltip={props.tooltip}>{element}</Wrapper>;
  }
);

const Wrapper = ({
  children,
  tooltip,
}: {
  tooltip?: string;
  children: React.ReactNode;
}) => {
  if (!tooltip) {
    return <>{children}</>;
  }

  return <Tooltip content={tooltip}>{children}</Tooltip>;
};
