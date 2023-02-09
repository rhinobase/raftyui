import { classNames } from "@rhinobase/utils";
import React from "react";

export interface Toast {
  className?: string;
  title: string;
  message?: string;
  severity: "error" | "warning" | "info" | "success";
  visible: boolean;
}
// Toast Component
export function Toast(props: Toast) {
  var ToastIcon: JSX.Element;

  switch (props.severity) {
    case "error":
    case "warning":
      ToastIcon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
      );
      break;
    case "info":
      ToastIcon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
      );
      break;
    case "success":
      ToastIcon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
      break;
  }

  return (
    <div
      className={classNames(
        props.visible ? "animate-enter" : "animate-leave",
        props.severity == "error" && "bg-error-600 dark:bg-error-500/70",
        props.severity == "warning" && "bg-warning-500 dark:bg-warning-600",
        props.severity == "info" && "bg-primary-500 dark:bg-primary-400/70",
        props.severity == "success" && "bg-success-600 dark:bg-success-400/70",
        "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg",
        props.className,
      )}
    >
      <div className="p-xl">
        <div className="flex items-start">
          <div className="flex-shrink-0">{ToastIcon}</div>
          <div className="pt-sm ml-3 w-0 flex-1">
            <p className="text-sm font-medium text-white">{props.title}</p>
            <p className="mt-1 text-sm text-white">{props.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
