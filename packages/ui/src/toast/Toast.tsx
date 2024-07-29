import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";
import {
  Fragment,
  type HTMLAttributes,
  type PropsWithChildren,
  forwardRef,
} from "react";
import type { ValueOrFunction } from "../types";
import { type SizeType, classNames, getValue } from "../utils";

export const toastClasses = cva(
  "w-full drop-shadow-lg flex items-center text-white dark:text-black",
  {
    variants: {
      size: {
        sm: "gap-2.5 p-2.5 rounded-md max-w-xs",
        md: "gap-3 p-3 rounded-lg max-w-sm",
        lg: "gap-3.5 p-3.5 rounded-xl max-w-md",
      },
      severity: {
        error: "bg-red-600 dark:bg-red-300",
        warning: "bg-amber-500 dark:bg-amber-300",
        info: "bg-blue-500 dark:bg-blue-200",
        success: "bg-green-600 dark:bg-green-200",
      },
      visible: {
        false: "animate-leave",
        true: "animate-enter",
      },
    },
    defaultVariants: {
      size: "md",
      severity: "info",
      visible: false,
    },
  },
);

export const toastTitleAndMessageWrapperClasses = cva("", {
  variants: {
    size: {
      sm: "space-y-1",
      md: "space-y-1",
      lg: "space-y-1",
    },
  },
});

export const toastIconClasses = cva("", {
  variants: {
    size: {
      sm: "size-5 stroke-2",
      md: "size-6",
      lg: "size-7",
    },
  },
});

export const toastTitleClasses = cva("font-medium", {
  variants: {
    size: {
      sm: "text-sm leading-tight",
      md: "text-base leading-tight",
      lg: "text-lg leading-tight",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const toastMessageClasses = cva("", {
  variants: {
    size: {
      sm: "text-xs leading-tight",
      md: "text-sm leading-tight",
      lg: "text-base leading-tight",
    },
  },
  defaultVariants: { size: "md" },
});

export type Toast = Omit<
  HTMLAttributes<HTMLDivElement>,
  "children" | "title"
> & {
  title: string;
  message?: string;
  severity: "error" | "warning" | "info" | "success";
  visible?: ValueOrFunction;
  size?: SizeType;
};

export const Toast = forwardRef<HTMLDivElement, Toast>(function Toast(
  { className, severity, visible, title, message, size = "md", ...props },
  forwardedRef,
) {
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

  const Component = message
    ? ({ children }: PropsWithChildren) => (
        <div className={toastTitleAndMessageWrapperClasses({ size })}>
          {children}
        </div>
      )
    : Fragment;

  return (
    <div
      {...props}
      className={classNames(
        toastClasses({ severity, visible: getValue(visible), size }),
        className,
      )}
      ref={forwardedRef}
    >
      <ToastIcon className={toastIconClasses({ size })} />
      <Component>
        <h6 className={toastTitleClasses({ size })}>{title}</h6>
        {message && <p className={toastMessageClasses({ size })}>{message}</p>}
      </Component>
    </div>
  );
});
