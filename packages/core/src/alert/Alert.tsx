import { forwardRef, ReactNode } from "react";
import { classNames } from "@rhinobase/utils";
import React from "react";

export interface IAlert {
  title?: string;
  message?: string;
  action?: ReactNode;
  iconClassName?: string;
  status: "success" | "warning" | "error" | "info";
  className?: string;
}
// Alert Component
export const Alert = forwardRef<HTMLDivElement, IAlert>(
  (props, forwardedRef) => {
    const { status, iconClassName } = props;
    return (
      <div
        className={classNames(
          "rounded-base border border-opacity-20 p-3",
          props.className,
          status === "error" &&
            "border-error-500 bg-error-300/75 text-secondary-900 dark:bg-error-400/40 dark:text-secondary-100",
          status === "warning" &&
            "border-warning-600 bg-warning-300/60 text-secondary-900 dark:text-secondary-100 dark:bg-amber-400/40",
          status === "info" &&
            "bg-info-200 dark:bg-info-400/40 border-info-500 text-secondary-900 dark:text-secondary-100",
          status === "success" &&
            "border-success-600 bg-success-300/75 text-secondary-900 dark:bg-success-400/40 dark:text-secondary-100",
        )}
        ref={forwardedRef}
      >
        <div className="flex items-center justify-between md:flex-row">
          <div className="mt-[2px] flex-shrink-0 self-start">
            {status === "error" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={classNames(
                  "text-error-500 dark:text-error-200 h-5 w-5",
                  iconClassName,
                )}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            )}
            {status === "warning" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={classNames(
                  "text-warning-600 dark:text-warning-300 h-5 w-5",
                  iconClassName,
                )}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            )}
            {status === "info" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={classNames(
                  "text-info-500 dark:text-info-200 h-5 w-5",
                  iconClassName,
                )}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            )}
            {status === "success" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={classNames(
                  "text-success-500 dark:text-success-300 h-5 w-5",
                  iconClassName,
                )}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </div>
          <div className="ml-3 flex-grow">
            <p className="mb-1 font-medium">{props.title}</p>
            <div className="text-sm">{props.message}</div>
          </div>
          {props.action && <div className="ml-4 text-sm">{props.action}</div>}
        </div>
      </div>
    );
  },
);

Alert.displayName = "Alert";
