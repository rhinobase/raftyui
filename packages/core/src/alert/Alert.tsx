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

const alertClasses = cva("", {
  variants: {
    size: {
      sm: "",
      md: "",
      lg: "",
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
      unstyled: "",
    },
  },
  compoundVariants: [
    ...applyStyleToMultipleVariants({
      size: ["sm", "md", "lg"],
      status: ["success", "warning", "error", "info"],
      variant: ["simple", "solid", "left-accent", "top-accent"],
      className: "rounded-base flex w-full items-center",
    }),
    ...applyStyleToMultipleVariants({
      size: "sm",
      status: ["success", "warning", "error", "info"],
      variant: ["simple", "solid", "left-accent", "top-accent"],
      className: "p-2 gap-1.5",
    }),
    ...applyStyleToMultipleVariants({
      size: "md",
      status: ["success", "warning", "error", "info"],
      variant: ["simple", "solid", "left-accent", "top-accent"],
      className: "p-3 gap-3",
    }),
    ...applyStyleToMultipleVariants({
      size: "lg",
      status: ["success", "warning", "error", "info"],
      variant: ["simple", "solid", "left-accent", "top-accent"],
      className: "p-4 gap-4",
    }),
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
    { className, status, size = "md", variant = "simple", children, ...props },
    forwardedRef
  ) => {
    return (
      <AlertProvider value={{ status, size, variant }}>
        <div
          {...props}
          className={classNames(
            alertClasses({ size, status, variant }),
            className
          )}
          ref={forwardedRef}
        >
          {children}
        </div>
      </AlertProvider>
    );
  }
);

Alert.displayName = "Alert";

export function AlertIcon(props: { className?: string }) {
  const { status, variant } = useAlertContext();
  const className = props;

  let Icon: JSX.Element;

  switch (status) {
    case "error":
      Icon = (
        <ExclamationCircleIcon
          className={classNames(
            variant != "solid" && "text-error-500 dark:text-error-200",
            "h-5 w-5 stroke-2",
            className
          )}
        />
      );
      break;
    case "info":
      Icon = (
        <InformationCircleIcon
          className={classNames(
            variant != "solid" && "text-info-500 dark:text-info-200",
            "h-5 w-5 stroke-2",
            className
          )}
        />
      );
      break;

    case "success":
      Icon = (
        <CheckCircleIcon
          className={classNames(
            variant != "solid" && "text-success-500 dark:text-success-300",
            "h-5 w-5 stroke-2",
            className
          )}
        />
      );
      break;

    case "warning":
      Icon = (
        <ExclamationTriangleIcon
          className={classNames(
            variant != "solid" && "text-warning-600 dark:text-warning-300",
            "h-5 w-5 stroke-2",
            className
          )}
        />
      );
      break;
  }
  return Icon;
}

export type AlertTitle = JSX.IntrinsicElements["p"];
export const AlertTitle = forwardRef<HTMLParagraphElement, AlertTitle>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <p
        {...props}
        className={classNames("font-medium", className)}
        ref={forwardedRef}
      >
        {children}
      </p>
    );
  }
);
AlertTitle.displayName = "AlertTitle";

export type AlertDescription = JSX.IntrinsicElements["p"];
export const AlertDescription = forwardRef<
  HTMLParagraphElement,
  AlertDescription
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <p
      {...props}
      className={classNames("text-sm", className)}
      ref={forwardedRef}
    >
      {children}
    </p>
  );
});

AlertDescription.displayName = "AlertDescription";
