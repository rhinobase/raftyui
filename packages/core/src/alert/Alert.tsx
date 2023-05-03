import { forwardRef } from "react";
import { classNames } from "../utils";
import { AlertContext, AlertProvider, useAlertContext } from "./context";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { VariantProps, cva } from "class-variance-authority";

// Alert Component
export type Alert = AlertContext &
  JSX.IntrinsicElements["div"] &
  VariantProps<typeof alertClasses>;

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
        "border-warning-600 bg-warning-300/60 text-secondary-900 dark:text-secondary-100 dark:bg-amber-400/40",
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
            "rounded-base flex w-full items-center gap-3 border border-opacity-20 p-3",
            className,
            status === "error" &&
              "border-error-500 bg-error-300/75 text-secondary-900 dark:bg-error-400/40 dark:text-secondary-100",
            status === "warning" &&
              "border-warning-600 bg-warning-300/60 text-secondary-900 dark:text-secondary-100 dark:bg-amber-400/40",
            status === "info" &&
              "bg-info-200 dark:bg-info-400/40 border-info-500 text-secondary-900 dark:text-secondary-100",
            status === "success" &&
              "border-success-600 bg-success-300/75 text-secondary-900 dark:bg-success-400/40 dark:text-secondary-100"
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
  const { status } = useAlertContext();
  const className = props;

  let Icon: JSX.Element;

  switch (status) {
    case "error":
      Icon = (
        <ExclamationCircleIcon
          className={classNames(
            "text-error-500 dark:text-error-200 h-5 w-5",
            className
          )}
        />
      );
      break;
    case "info":
      Icon = (
        <InformationCircleIcon
          className={classNames(
            "text-info-500 dark:text-info-200 h-5 w-5",
            className
          )}
        />
      );
      break;

    case "success":
      Icon = (
        <CheckCircleIcon
          className={classNames(
            "text-success-500 dark:text-success-300 h-5 w-5",
            className
          )}
        />
      );
      break;

    case "warning":
      Icon = (
        <ExclamationTriangleIcon
          className={classNames(
            "text-warning-600 dark:text-warning-300 h-5 w-5",
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
