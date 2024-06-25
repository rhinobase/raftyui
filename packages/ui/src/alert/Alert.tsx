"use client";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";
import { type HTMLAttributes, forwardRef } from "react";
import { classNames } from "../utils";
import { type AlertContext, AlertProvider, useAlertContext } from "./context";

export const alertClasses = cva("flex w-full items-center", {
  variants: {
    size: {
      sm: "p-2 gap-2",
      md: "p-3 gap-3",
      lg: "p-4 gap-4",
    },
    status: {
      success: "",
      warning: "",
      error: "",
      info: "",
    },
    variant: {
      simple: "border",
      solid: "text-white dark:text-secondary-100",
      "left-accent": "",
      "top-accent": "",
    },
  },
  compoundVariants: [
    {
      size: "sm",
      variant: "left-accent",
      className: "border-l-[3px]",
    },
    {
      size: "md",
      variant: "left-accent",
      className: "border-l-4",
    },
    {
      size: "lg",
      variant: "left-accent",
      className: "border-l-[5px]",
    },
    {
      size: "sm",
      variant: "top-accent",
      className: "border-t-[3px]",
    },
    {
      size: "md",
      variant: "top-accent",
      className: "border-t-4",
    },
    {
      size: "lg",
      variant: "top-accent",
      className: "border-t-[5px]",
    },
    {
      size: "sm",
      variant: ["simple", "solid"],
      className: "rounded",
    },
    {
      size: "md",
      variant: ["simple", "solid"],
      className: "rounded-md",
    },
    {
      size: "lg",
      variant: ["simple", "solid"],
      className: "rounded-lg",
    },
    {
      status: "success",
      variant: ["simple", "left-accent", "top-accent"],
      className: "text-green-500 dark:text-green-300",
    },
    {
      status: "warning",
      variant: ["simple", "left-accent", "top-accent"],
      className: "text-amber-500 dark:text-amber-300",
    },
    {
      status: "error",
      variant: ["simple", "left-accent", "top-accent"],
      className: "text-red-500 dark:text-red-300",
    },
    {
      status: "info",
      variant: ["simple", "left-accent", "top-accent"],
      className: "text-blue-500 dark:text-blue-300",
    },
    {
      status: "success",
      variant: ["simple", "left-accent", "top-accent"],
      className: "border-green-500 bg-green-300/75 dark:bg-green-400/40",
    },
    {
      status: "warning",
      variant: ["simple", "left-accent", "top-accent"],
      className: "border-amber-500 bg-amber-300/60 dark:bg-amber-400/40",
    },
    {
      status: "error",
      variant: ["simple", "left-accent", "top-accent"],
      className: "border-red-500 bg-red-300/75 dark:bg-red-400/40",
    },
    {
      status: "info",
      variant: ["simple", "left-accent", "top-accent"],
      className: "border-blue-500 bg-blue-200 dark:bg-blue-400/40",
    },
    {
      variant: "solid",
      status: "success",
      className: "bg-green-500 dark:bg-green-400",
    },
    {
      variant: "solid",
      status: "warning",
      className: "border-amber-500 bg-amber-500 dark:bg-amber-400",
    },
    {
      variant: "solid",
      status: "error",
      className: "border-red-500 bg-red-500 dark:bg-red-400",
    },
    {
      variant: "solid",
      status: "info",
      className: "bg-blue-500 dark:bg-blue-400 border-blue-500",
    },
  ],
  defaultVariants: {
    size: "md",
    status: "info",
    variant: "simple",
  },
});

export type Alert = HTMLAttributes<HTMLDivElement> & Partial<AlertContext>;

export const Alert = forwardRef<HTMLDivElement, Alert>(function Alert(
  {
    status = "info",
    size = "md",
    variant = "simple",
    isUnstyled = false,
    className,
    ...props
  },
  forwardedRef,
) {
  return (
    <AlertProvider value={{ status, size, variant, isUnstyled }}>
      <div
        {...props}
        className={
          isUnstyled
            ? className
            : classNames(alertClasses({ size, status, variant }), className)
        }
        ref={forwardedRef}
      />
    </AlertProvider>
  );
});

export const alertIconClasses = cva("stroke-2", {
  variants: {
    size: {
      sm: "size-5",
      md: "size-6",
      lg: "size-7",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const ICONS = {
  error: ExclamationCircleIcon,
  warning: ExclamationTriangleIcon,
  info: InformationCircleIcon,
  success: CheckCircleIcon,
};

export type AlertIcon = {
  className?: string;
  isUnstyled?: boolean;
};

export function AlertIcon({ className, isUnstyled = false }: AlertIcon) {
  const { size, status, isUnstyled: isParentUnstyled } = useAlertContext();
  const unstyle = isParentUnstyled || isUnstyled;
  const Icon = ICONS[status];

  return (
    <Icon
      className={
        unstyle ? className : classNames(alertIconClasses({ size }), className)
      }
    />
  );
}

export const alertTitleClasses = cva("font-medium", {
  variants: {
    size: {
      sm: "text-base",
      md: "text-lg",
      lg: "text-xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type AlertTitle = HTMLAttributes<HTMLHeadingElement> & {
  isUnstyled?: boolean;
};

export const AlertTitle = forwardRef<HTMLHeadingElement, AlertTitle>(
  function AlertTitle(
    { className, isUnstyled = false, ...props },
    forwardedRef,
  ) {
    const { size, isUnstyled: isParentUnstyled } = useAlertContext();
    const unstyle = isParentUnstyled || isUnstyled;

    return (
      <h5
        {...props}
        className={
          unstyle
            ? className
            : classNames(alertTitleClasses({ size }), className)
        }
        ref={forwardedRef}
      />
    );
  },
);

export const alertDescriptionClasses = cva("", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
    variant: {
      simple: "",
      solid: "text-white dark:text-secondary-100",
      "left-accent": "",
      "top-accent": "",
    },
  },
  compoundVariants: [
    {
      variant: ["simple", "left-accent", "top-accent"],
      className: "text-secondary-500 dark:text-secondary-200",
    },
  ],
  defaultVariants: {
    size: "md",
    variant: "simple",
  },
});

export type AlertDescription = HTMLAttributes<HTMLParagraphElement> & {
  isUnstyled?: boolean;
};

export const AlertDescription = forwardRef<
  HTMLParagraphElement,
  AlertDescription
>(function AlertDescription(
  { className, isUnstyled = false, ...props },
  forwardedRef,
) {
  const { size, isUnstyled: isParentUnstyled, variant } = useAlertContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <p
      {...props}
      className={
        unstyle
          ? className
          : classNames(alertDescriptionClasses({ size, variant }), className)
      }
      ref={forwardedRef}
    />
  );
});
