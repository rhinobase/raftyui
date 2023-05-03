import { cva, VariantProps } from "class-variance-authority";
import { Spinner } from "../spinner";
import { forwardRef } from "react";
import { applyStyleToMultipleVariants, classNames } from "../utils";

export type Button = {
  /* Left aligned icon*/
  leftIcon?: JSX.Element;
  /* Right aligned icon */
  rightIcon?: JSX.Element;
  loadingText?: string;
} & VariantProps<typeof buttonClasses> &
  Omit<JSX.IntrinsicElements["button"], "ref">;

const buttonClasses = cva(
  "flex whitespace-nowrap items-center justify-center font-semibold h-max transition-all border select-none data-[hidden=true]:hidden",
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
        base: "px-3 py-2 rounded-md text-sm",
        lg: "px-4 py-3 text-base leading-5 rounded-md",
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
      ...applyStyleToMultipleVariants({
        colorScheme: "secondary",
        variant: ["solid", "outline", "ghost"],
        className: "text-secondary-600 dark:text-secondary-200",
        disabled: [false, undefined],
        loading: [false, undefined],
      }),
      ...applyStyleToMultipleVariants({
        colorScheme: ["primary", "error", "success"],
        variant: "solid",
        className: "text-white dark:text-black",
        disabled: [false, undefined],
        loading: [false, undefined],
      }),
      // Primary Solid
      {
        disabled: true,
        colorScheme: "primary",
        variant: "solid",
        className:
          "border-transparent bg-primary-500/75 text-secondary-200 dark:bg-primary-300/80 dark:text-secondary-600",
      },
      {
        loading: true,
        colorScheme: "primary",
        variant: "solid",
        className:
          "border-transparent bg-primary-500/75 text-secondary-200 dark:bg-primary-300/80 dark:text-secondary-600",
      },
      {
        active: true,
        colorScheme: "primary",
        variant: "solid",
        className:
          "border-transparent bg-primary-600 dark:bg-primary-400/80 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-500 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      },
      ...applyStyleToMultipleVariants({
        disabled: [undefined, false],
        loading: false,
        active: false,
        colorScheme: "primary",
        variant: "solid",
        className:
          "bg-primary-500 border-transparent hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-500 dark:bg-primary-300/90 dark:hover:bg-primary-400/80 dark:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      }),
      // Secondary Solid
      {
        disabled: true,
        colorScheme: "secondary",
        variant: "solid",
        className:
          "border-transparent bg-secondary-300/80 text-secondary-400/90 dark:bg-secondary-500 dark:text-secondary-300/70",
      },
      {
        loading: true,
        colorScheme: "secondary",
        variant: "solid",
        className:
          "border-transparent bg-secondary-300/80 text-secondary-400/90 dark:bg-secondary-500 dark:text-secondary-300/70",
      },
      {
        active: true,
        colorScheme: "secondary",
        variant: "solid",
        className:
          "border-transparent bg-secondary-300 dark:bg-secondary-400/80 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-secondary-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      },
      ...applyStyleToMultipleVariants({
        disabled: [undefined, false],
        loading: false,
        active: false,
        colorScheme: "secondary",
        variant: "solid",
        className:
          "border-transparent bg-secondary-200/80 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-secondary-200 hover:bg-secondary-300 dark:bg-secondary-500/60 dark:hover:bg-secondary-400/80 dark:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      }),
      // Error Solid
      {
        disabled: true,
        colorScheme: "error",
        variant: "solid",
        className:
          "border-transparent bg-error-500/75 text-secondary-200 dark:bg-error-300/80 dark:text-secondary-600",
      },
      {
        loading: true,
        colorScheme: "error",
        variant: "solid",
        className:
          "border-transparent bg-error-500/75 text-secondary-200 dark:bg-error-300/80 dark:text-secondary-600",
      },
      {
        active: true,
        colorScheme: "error",
        variant: "solid",
        className:
          "border-transparent bg-error-600/90 dark:bg-error-400/80 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-error-500 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      },
      ...applyStyleToMultipleVariants({
        disabled: [undefined, false],
        loading: false,
        active: false,
        colorScheme: "error",
        variant: "solid",
        className:
          "border-transparent bg-error-500 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-error-500 hover:bg-error-600/90 dark:bg-error-300 dark:hover:bg-error-400 dark:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      }),
      // Success Solid
      {
        disabled: true,
        colorScheme: "success",
        variant: "solid",
        className:
          "border-transparent bg-success-500/75 text-secondary-200 dark:bg-success-300/80 dark:text-secondary-600",
      },
      {
        loading: true,
        colorScheme: "success",
        variant: "solid",
        className:
          "border-transparent bg-success-500/75 text-secondary-200 dark:bg-success-300/80 dark:text-secondary-600",
      },
      {
        active: true,
        colorScheme: "success",
        variant: "solid",
        className:
          "border-transparent bg-success-600/90 dark:bg-success-400/80 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-success-500 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      },
      ...applyStyleToMultipleVariants({
        disabled: [undefined, false],
        loading: false,
        active: false,
        colorScheme: "success",
        variant: "solid",
        className:
          "border-transparent bg-success-500 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-success-500 hover:bg-success-600/90 dark:bg-success-300 dark:hover:bg-success-400 dark:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      }),
      // Primary Outline
      {
        disabled: true,
        colorScheme: "primary",
        variant: "outline",
        className:
          "bg-transparent border-primary-400/70 text-primary-400/70 dark:border-primary-200/70 dark:text-primary-200/70",
      },
      {
        loading: true,
        colorScheme: "primary",
        variant: "outline",
        className:
          "bg-transparent border-primary-400/70 text-primary-400/70 dark:border-primary-200/70 dark:text-primary-200/70",
      },
      {
        active: true,
        colorScheme: "primary",
        variant: "outline",
        className:
          "border-primary-500 dark:border-primary-300 text-primary-500 dark:text-primary-300 bg-primary-200/70 dark:bg-primary-400/20 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      },
      ...applyStyleToMultipleVariants({
        disabled: [undefined, false],
        loading: false,
        active: false,
        colorScheme: "primary",
        variant: "outline",
        className:
          "border-primary-500/90 dark:border-primary-300 text-primary-500 dark:text-primary-300 bg-transparent hover:bg-primary-200/30 dark:hover:bg-primary-400/20 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      }),
      // Secondary Outline
      {
        disabled: true,
        colorScheme: "secondary",
        variant: "outline",
        className:
          "bg-transparent border-secondary-300/80 text-secondary-400/90 dark:border-secondary-500/80 dark:text-secondary-400/70",
      },
      {
        loading: true,
        colorScheme: "secondary",
        variant: "outline",
        className:
          "bg-transparent border-secondary-300/80 text-secondary-400/90 dark:border-secondary-500/80 dark:text-secondary-400/70",
      },
      {
        active: true,
        colorScheme: "secondary",
        variant: "outline",
        className:
          "border-secondary-300 dark:border-secondary-700 bg-secondary-200/80 dark:bg-secondary-700/80 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-secondary-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      },
      ...applyStyleToMultipleVariants({
        disabled: [undefined, false],
        loading: false,
        active: false,
        colorScheme: "secondary",
        variant: "outline",
        className:
          "border-secondary-300 dark:border-secondary-700 bg-transparent hover:bg-secondary-200/40 dark:hover:bg-secondary-700/50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-secondary-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      }),
      // Error Outline
      {
        disabled: true,
        colorScheme: "error",
        variant: "outline",
        className:
          "bg-transparent border-error-300/75 text-error-400/70 dark:border-error-200/50 dark:text-error-200/60",
      },
      {
        loading: true,
        colorScheme: "error",
        variant: "outline",
        className:
          "bg-transparent border-error-300/75 text-error-400/70 dark:border-error-200/50 dark:text-error-200/60",
      },
      {
        active: true,
        colorScheme: "error",
        variant: "outline",
        className:
          "border-error-500 dark:border-error-300/80 text-error-500 dark:text-error-300 bg-error-200/60 dark:bg-error-300/30 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-error-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      },
      ...applyStyleToMultipleVariants({
        disabled: [undefined, false],
        loading: false,
        active: false,
        colorScheme: "error",
        variant: "outline",
        className:
          "bg-transparent border-error-500 dark:border-error-300/80 text-error-500 dark:text-error-300 hover:bg-error-200/30 dark:hover:bg-error-300/10 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-error-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      }),
      // Success Outline
      {
        disabled: true,
        colorScheme: "success",
        variant: "outline",
        className:
          "bg-transparent border-success-300/75 text-success-400/70 dark:border-success-200/50 dark:text-success-200/60",
      },
      {
        loading: true,
        colorScheme: "success",
        variant: "outline",
        className:
          "bg-transparent border-success-300/75 text-success-400/70 dark:border-success-200/50 dark:text-success-200/60",
      },
      {
        active: true,
        colorScheme: "success",
        variant: "outline",
        className:
          "border-success-500 dark:border-success-300/80 text-success-500 dark:text-success-300 bg-success-200/60 dark:bg-success-300/30 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-success-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      },
      ...applyStyleToMultipleVariants({
        disabled: [undefined, false],
        loading: false,
        active: false,
        colorScheme: "success",
        variant: "outline",
        className:
          "bg-transparent border-success-500 dark:border-success-300/80 text-success-500 dark:text-success-300 hover:bg-success-200/30 dark:hover:bg-success-300/10 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-success-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      }),
      // Primary Ghost
      {
        disabled: true,
        colorScheme: "primary",
        variant: "ghost",
        className:
          "border-transparent bg-transparent text-primary-400/70 dark:text-primary-300/60",
      },
      {
        loading: true,
        colorScheme: "primary",
        variant: "ghost",
        className:
          "border-transparent bg-transparent text-primary-400/70 dark:text-primary-300/60",
      },
      {
        active: true,
        colorScheme: "primary",
        variant: "ghost",
        className:
          "border-transparent text-primary-500 dark:text-primary-300 bg-primary-200/70 dark:bg-primary-400/20 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      },
      ...applyStyleToMultipleVariants({
        disabled: [undefined, false],
        loading: false,
        active: false,
        colorScheme: "primary",
        variant: "ghost",
        className:
          "border-transparent text-primary-500 dark:text-primary-300 bg-transparent hover:bg-primary-200/30 dark:hover:bg-primary-400/10 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      }),
      // Secondary Ghost
      {
        disabled: true,
        colorScheme: "secondary",
        variant: "ghost",
        className:
          "border-transparent bg-transparent text-secondary-400/80 dark:text-secondary-500",
      },
      {
        loading: true,
        colorScheme: "secondary",
        variant: "ghost",
        className:
          "border-transparent bg-transparent text-secondary-400/80 dark:text-secondary-500",
      },
      {
        active: true,
        colorScheme: "secondary",
        variant: "ghost",
        className:
          "border-transparent bg-secondary-200/80 dark:bg-secondary-700/80 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-secondary-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      },
      ...applyStyleToMultipleVariants({
        disabled: [undefined, false],
        loading: false,
        active: false,
        colorScheme: "secondary",
        variant: "ghost",
        className:
          "border-transparent bg-transparent hover:bg-secondary-200/60 dark:hover:bg-secondary-700/50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-secondary-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      }),
      // Error Ghost
      {
        disabled: true,
        colorScheme: "error",
        variant: "ghost",
        className:
          "bg-transparent border-transparent text-error-400/80 dark:text-error-300/60",
      },
      {
        loading: true,
        colorScheme: "error",
        variant: "ghost",
        className:
          "bg-transparent border-transparent text-error-400/80 dark:text-error-300/60",
      },
      {
        active: true,
        colorScheme: "error",
        variant: "ghost",
        className:
          "border-transparent text-error-500 dark:text-error-300 bg-error-200/60 dark:bg-error-300/30 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-error-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      },
      ...applyStyleToMultipleVariants({
        disabled: [undefined, false],
        loading: false,
        active: false,
        colorScheme: "error",
        variant: "ghost",
        className:
          "bg-transparent border-transparent text-error-500 dark:text-error-300 hover:bg-error-200/40 dark:hover:bg-error-300/10 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-error-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      }),
      // Success Ghost
      {
        disabled: true,
        colorScheme: "success",
        variant: "ghost",
        className:
          "bg-transparent border-transparent text-success-400/80 dark:text-success-300/60",
      },
      {
        loading: true,
        colorScheme: "success",
        variant: "ghost",
        className:
          "bg-transparent border-transparent text-success-400/80 dark:text-success-300/60",
      },
      {
        active: true,
        colorScheme: "success",
        variant: "ghost",
        className:
          "border-transparent text-success-500 dark:text-success-300 bg-success-200/60 dark:bg-success-300/30 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-success-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      },
      ...applyStyleToMultipleVariants({
        disabled: [undefined, false],
        loading: false,
        active: false,
        colorScheme: "success",
        variant: "ghost",
        className:
          "bg-transparent border-transparent text-success-500 dark:text-success-300 hover:bg-success-200/40 dark:hover:bg-success-300/10 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-success-200 dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900",
      }),
    ],
    defaultVariants: {
      colorScheme: "secondary",
      variant: "solid",
      size: "base",
    },
  }
);

export const Button = forwardRef<HTMLButtonElement, Button>(function Button(
  {
    loading = false,
    active = false,
    colorScheme = "secondary",
    variant = "solid",
    size = "base",
    type = "button",
    loadingText,
    hidden,
    ...props
  }: Button,
  forwardedRef
) {
  const {
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    // attributes propagated from `HTMLButtonProps`
    ...passThroughProps
  } = props;
  // Buttons are **always** disabled if we're in a `loading` state
  const disabled = props.disabled || loading;

  return (
    <button
      type={type}
      data-hidden={hidden}
      {...passThroughProps}
      disabled={disabled ?? undefined}
      ref={forwardedRef}
      className={classNames(
        buttonClasses({
          colorScheme,
          variant,
          size,
          loading,
          disabled: props.disabled,
          active,
        }),
        props.className
      )}
      // if we click a disabled button, we prevent going through the click handler
      onClick={
        disabled
          ? (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
              e.preventDefault();
            }
          : props.onClick
      }
    >
      {loading ? (
        <>
          <Spinner inheritParent className="mr-2" size="sm" />
          {loadingText ?? props.children}
        </>
      ) : (
        <>
          {LeftIcon && (
            <div className="mr-1 flex h-[20px] items-center justify-center">
              {LeftIcon}
            </div>
          )}
          {props.children}
          {RightIcon && (
            <div className="ml-1 flex h-[20px] items-center justify-center">
              {RightIcon}
            </div>
          )}
        </>
      )}
    </button>
  );
});
