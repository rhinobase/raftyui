import { classNames } from "@rhino/utils";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

const toastClasses = {
  severity: {
    error: "bg-error-600 dark:bg-error-300",
    warning: "bg-warning-500 dark:bg-warning-300",
    info: "bg-info-500 dark:bg-info-200",
    success: "bg-success-600 dark:bg-success-200",
  },
  visible: [
    "animate-leave", // false
    "animate-enter", // true
  ],
};

export type Toast = {
  className?: string;
  title: string;
  message?: string;
  severity: "error" | "warning" | "info" | "success";
  visible?: boolean;
};

export function Toast({ className, severity, visible, ...props }: Toast) {
  let ToastIcon: typeof ExclamationTriangleIcon;

  switch (severity) {
    case "error":
      ToastIcon = ExclamationTriangleIcon;
      break;
    case "warning":
      ToastIcon = ExclamationCircleIcon;
      break;
    case "info":
      ToastIcon = InformationCircleIcon;
      break;
    case "success":
      ToastIcon = CheckCircleIcon;
      break;
  }

  return (
    <div
      className={classNames(
        toastClasses.severity[severity],
        toastClasses.visible[Number(visible)],
        "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg drop-shadow-lg",
        className
      )}
    >
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <ToastIcon className="h-6 w-6 text-white dark:text-black" />
          </div>
          <div>
            <h6 className="font-medium leading-4 text-white dark:text-black">
              {props.title}
            </h6>
            <p className="mt-1 text-sm text-white dark:text-black">
              {props.message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
