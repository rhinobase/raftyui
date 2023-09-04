import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { classNames } from "../utils";

// Toast Component
const toastClasses = {
  severity: {
    error: "bg-red-600 dark:bg-red-300",
    warning: "bg-amber-500 dark:bg-amber-300",
    info: "bg-blue-500 dark:bg-blue-200",
    success: "bg-green-600 dark:bg-green-200",
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

export function Toast({ className, severity, visible, title, message }: Toast) {
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
        "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg drop-shadow-lg p-4",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <ToastIcon className="h-6 w-6 text-white dark:text-black" />
        <div className="space-y-1">
          {title && (
            <h6 className="font-medium leading-4 text-white dark:text-black">
              {title}
            </h6>
          )}
          {message && (
            <p className="text-sm text-white dark:text-black">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
Toast.displayName = "Toast";
