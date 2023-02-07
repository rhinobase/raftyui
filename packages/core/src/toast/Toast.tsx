import { IconType } from "react-icons";
import {
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
  HiOutlineInformationCircle,
} from "react-icons/hi2";
import { classNames } from "@rhinobase/lib";

export interface IToast {
  className?: string;
  title: string;
  message?: string;
  severity: "error" | "warning" | "info" | "success";
  visible: boolean;
}
// Toast Component
export function Toast(props: IToast) {
  let ToastIcon: IconType;

  switch (props.severity) {
    case "error":
    case "warning":
      ToastIcon = HiOutlineExclamationCircle;
      break;
    case "info":
      ToastIcon = HiOutlineInformationCircle;
      break;
    case "success":
      ToastIcon = HiOutlineCheckCircle;
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
        props.className
      )}>
      <div className="p-xl">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <ToastIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <div className="pt-sm ml-3 w-0 flex-1">
            <p className="text-sm font-medium text-white">{props.title}</p>
            <p className="mt-1 text-sm text-white">{props.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
