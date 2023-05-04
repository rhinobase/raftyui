import React from "react";
import { classNames } from "../utils";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

export interface Toast {
  className?: string;
  title: string;
  message?: string;
  severity: "error" | "warning" | "info" | "success";
  visible?: boolean;
}
// Toast Component
export function Toast(props: Toast) {
  let ToastIcon: JSX.Element;

  switch (props.severity) {
    case "error":
      ToastIcon = (
        <ExclamationTriangleIcon className="h-6 w-6 text-white dark:text-black" />
      );
      break;
    case "warning":
      ToastIcon = (
        <ExclamationCircleIcon className="h-6 w-6 text-white dark:text-black" />
      );
      break;
    case "info":
      ToastIcon = (
        <InformationCircleIcon className="h-6 w-6 text-white dark:text-black" />
      );
      break;
    case "success":
      ToastIcon = (
        <CheckCircleIcon className="h-6 w-6 text-white dark:text-black" />
      );
      break;
  }

  return (
    <div
      className={classNames(
        props.visible ? "animate-enter" : "animateLeave",
        props.severity == "error" && "bg-error-600 dark:bg-error-300 ",
        props.severity == "warning" && "bg-warning-500 dark:bg-warning-300",
        props.severity == "info" && "bg-info-500 dark:bg-info-200",
        props.severity == "success" && "bg-success-600 dark:bg-success-200",
        "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg",
        props.className
      )}
    >
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">{ToastIcon}</div>
          <div className="ml-3 w-0 flex-1 pt-[2px]">
            <p className="text-sm font-medium text-white dark:text-black">
              {props.title}
            </p>
            <p className="mt-1 text-sm text-white dark:text-black">
              {props.message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
