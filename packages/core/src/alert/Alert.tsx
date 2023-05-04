import { forwardRef } from "react";
import { applyStyleToMultipleVariants, classNames } from "../utils";
import { AlertContext, AlertProvider, useAlertContext } from "./context";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";

// Alert Component
export type Alert = AlertContext & JSX.IntrinsicElements["div"];

const alertClasses = cva("rounded-base flex w-full items-center", {
  variants: {
    size: {
      sm: "p-2 gap-1.5",
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
      simple: "",
      solid: "",
      "left-accent": "",
      "top-accent": "",
    },
  },
  compoundVariants: [
    {
      variant: "simple",
      status: "success",
      className:
        "border-success-600 bg-success-300/75 text-secondary-900 dark:bg-success-400/40 dark:text-secondary-100",
    },
    {
      variant: "simple",
      status: "warning",
      className:
        "border-warning-600 bg-warning-300/60 text-secondary-900 dark:text-secondary-100 dark:bg-warning-400/40",
    },
    {
      variant: "simple",
      status: "error",
      className:
        "border-error-500 bg-error-300/75 text-secondary-900 dark:bg-error-400/40 dark:text-secondary-100",
    },
    {
      variant: "simple",
      status: "info",
      className:
        "bg-info-200 dark:bg-info-400/40 border-info-500 text-secondary-900 dark:text-secondary-100",
    },
    {
      variant: "solid",
      status: "success",
      className:
        "border-success-500 bg-success-500 text-white dark:bg-success-400 dark:text-secondary-100",
    },
    {
      variant: "solid",
      status: "warning",
      className:
        "border-warning-500 bg-warning-500 text-white dark:text-secondary-100 dark:bg-warning-400",
    },
    {
      variant: "solid",
      status: "error",
      className:
        "border-error-500 bg-error-500 text-white dark:bg-error-400 dark:text-secondary-100",
    },
    {
      variant: "solid",
      status: "info",
      className:
        "bg-info-500 dark:bg-info-400 border-info-500 text-white dark:text-secondary-100",
    },
  ],
});

export const Alert = forwardRef<HTMLDivElement, Alert>(
  (
    {
      className,
      status,
      size = "md",
      variant = "simple",
      unstyled = false,
      children,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <AlertProvider value={{ status, size, variant, unstyled }}>
        <div
          {...props}
          className={
            unstyled
              ? className
              : classNames(alertClasses({ size, status, variant }), className)
          }
          ref={forwardedRef}
        >
          {children}
        </div>
      </AlertProvider>
    );
  }
);
Alert.displayName = "Alert";

const alertIconClasses = cva("stroke-2", {
  variants: {
    size: {
      sm: "h-3 w-3",
      md: "h-5 w-5",
      lg: "h-7 w-7",
    },
    status: {
      success: "",
      warning: "",
      error: "",
      info: "",
    },
    variant: {
      simple: "",
      solid: "",
      "left-accent": "",
      "top-accent": "",
    },
  },
  compoundVariants: [
    ...applyStyleToMultipleVariants({
      size: ["sm", "md", "lg"],
      status: "error",
      variant: ["simple", "left-accent", "right-accent"],
      className: "text-error-500 dark:text-error-200",
    }),
    ...applyStyleToMultipleVariants({
      size: ["sm", "md", "lg"],
      status: "warning",
      variant: ["simple", "left-accent", "right-accent"],
      className: "text-warning-600 dark:text-warning-300",
    }),
    ...applyStyleToMultipleVariants({
      size: ["sm", "md", "lg"],
      status: "info",
      variant: ["simple", "left-accent", "right-accent"],
      className: "text-info-500 dark:text-info-200",
    }),
    ...applyStyleToMultipleVariants({
      size: ["sm", "md", "lg"],
      status: "success",
      variant: ["simple", "left-accent", "right-accent"],
      className: "text-success-500 dark:text-success-300",
    }),
  ],
});

export function AlertIcon({ className }: { className?: string }) {
  const { size, status, variant, unstyled } = useAlertContext();

  let Icon: typeof ExclamationCircleIcon;
  switch (status) {
    case "error":
      Icon = ExclamationCircleIcon;
      break;
    case "warning":
      Icon = ExclamationTriangleIcon;
      break;
    case "info":
      Icon = InformationCircleIcon;
      break;
    case "success":
      Icon = CheckCircleIcon;
      break;
  }

  return (
    <Icon
      className={
        unstyled
          ? className
          : classNames(alertIconClasses({ size, status, variant }), className)
      }
    />
  );
}

export type AlertTitle = JSX.IntrinsicElements["h6"];

const alertTitleClasses = cva("", {
  variants: {
    size: {
      sm: "font-medium",
      md: "text-lg font-medium",
      lg: "text-xl font-semibold",
    },
  },
});

export const AlertTitle = forwardRef<HTMLParagraphElement, AlertTitle>(
  ({ children, className, ...props }, forwardedRef) => {
    const { size, unstyled } = useAlertContext();

    return (
      <h6
        {...props}
        className={
          unstyled
            ? className
            : classNames(alertTitleClasses({ size }), className)
        }
        ref={forwardedRef}
      >
        {children}
      </h6>
    );
  }
);
AlertTitle.displayName = "AlertTitle";

export type AlertDescription = JSX.IntrinsicElements["p"];

const alertDescriptionClasses = cva("", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
  },
});

export const AlertDescription = forwardRef<
  HTMLParagraphElement,
  AlertDescription
>(({ children, className, ...props }, forwardedRef) => {
  const { size, unstyled } = useAlertContext();

  return (
    <p
      {...props}
      className={
        unstyled
          ? className
          : classNames(alertDescriptionClasses({ size }), className)
      }
      ref={forwardedRef}
    >
      {children}
    </p>
  );
});
AlertDescription.displayName = "AlertDescription";
