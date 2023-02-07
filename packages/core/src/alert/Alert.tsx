import { forwardRef, ReactNode } from "react";
import {
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
  HiOutlineExclamationTriangle,
} from "react-icons/hi2";
import { classNames } from "@rhinobase/lib";

export interface IAlert {
  title?: string;
  message?: string;
  action?: ReactNode;
  iconClassName?: string;
  status: "success" | "warning" | "error" | "info";
  className?: string;
}
// Alert Component
export const Alert = forwardRef<HTMLDivElement, IAlert>((props, forwardedRef) => {
  const { status, iconClassName } = props;
  return (
    <div
      className={classNames(
        "p-lg rounded-base border border-opacity-20",
        props.className,
        status === "error" &&
          "border-error-500 bg-error-300/75 text-secondary-900 dark:bg-error-400/40 dark:text-secondary-100",
        status === "warning" &&
          "border-warning-600 bg-warning-300/60 text-secondary-900 dark:text-secondary-100 dark:bg-amber-400/40",
        status === "info" &&
          "bg-info-200 dark:bg-info-400/40 border-info-500 text-secondary-900 dark:text-secondary-100",
        status === "success" &&
          "border-success-600 bg-success-300/75 text-secondary-900 dark:bg-success-400/40 dark:text-secondary-100"
      )}
      ref={forwardedRef}>
      <div className="flex items-center justify-between md:flex-row">
        <div className="mt-[2px] flex-shrink-0 self-start">
          {status === "error" && (
            <HiOutlineExclamationCircle
              className={classNames("text-error-500 dark:text-error-200 h-5 w-5", iconClassName)}
              aria-hidden="true"
            />
          )}
          {status === "warning" && (
            <HiOutlineExclamationTriangle
              className={classNames("text-warning-600 dark:text-warning-300 h-5 w-5", iconClassName)}
              aria-hidden="true"
            />
          )}
          {status === "info" && (
            <HiOutlineExclamationCircle
              className={classNames("text-info-500 dark:text-info-200 h-5 w-5", iconClassName)}
              aria-hidden="true"
            />
          )}
          {status === "success" && (
            <HiOutlineCheckCircle
              className={classNames("text-success-500 dark:text-success-300 h-5 w-5", iconClassName)}
              aria-hidden="true"
            />
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
});
