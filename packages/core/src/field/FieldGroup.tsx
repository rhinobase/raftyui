import { ErrorMessage } from "@hookform/error-message";
import { useEffect, useRef } from "react";
import { useController, useFormContext } from "react-hook-form";
import { IconType } from "react-icons";
import { classNames } from "@rhinobase/lib";
import { Spinner } from "@rhinobase/ui";
import { useFieldControl } from "./context";

export interface IFieldGroup {
  children: JSX.Element;
  clear?: boolean | string;
  prefix?: string;
  suffix?: string;
  prefixIcon?: IconType;
  suffixIcon?: IconType;
  help?: string;
}

export function FieldGroup({ children, ...props }: IFieldGroup) {
  const ref = useRef<HTMLDivElement>(null);

  const { name, isDev, disabled, readOnly, loading } = useFieldControl();
  const { control, resetField } = useFormContext();
  const {
    field,
    formState: { errors },
  } = useController({ name, control });

  const isInvalid = errors[name];

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (disabled || readOnly || loading) {
      element.setAttribute("data-state", "off");
      return;
    }

    const handleClick = (event: MouseEvent) => {
      // @ts-ignore
      if (!element.contains(event.target)) element.setAttribute("data-state", "off");
      else element.setAttribute("data-state", "on");
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, disabled, readOnly, isInvalid, loading]);

  // const show_dropdown_icon = ["select", "multi-select"].includes(type);

  // const show_stepper_icon = ["number_input", "date", "time"].includes(type);

  return (
    <>
      <div
        ref={ref}
        role="group"
        className={classNames(
          isInvalid ? "border-error-500 dark:border-error-400" : "border-secondary-300 dark:border-secondary-700",
          (disabled || loading) && "bg-secondary-50 dark:bg-secondary-800",
          loading && "cursor-progress",
          isDev && "data-[state=off]:hover:border-secondary-400 dark:data-[state=off]:hover:border-secondary-600",
          "data-[state=on]:ring-primary-200 data-[state=on]:border-primary-300 group flex flex-1 items-stretch divide-secondary-300 overflow-hidden rounded-md border ring-2 ring-transparent transition-all aria-disabled:cursor-not-allowed dark:divide-secondary-700 dark:text-secondary-100"
        )}
        data-state="off"
        aria-disabled={disabled || readOnly}>
        {props.prefix ? (
          <>
            <div className="select-none self-center bg-secondary-100 p-2 text-sm font-medium text-secondary-500 dark:bg-secondary-700/50 dark:text-secondary-400">
              {props.prefix}
            </div>
            <div className="border-l" />
          </>
        ) : undefined}
        <div className="flex w-full">
          <>
            {loading ? (
              <Spinner size="sm" className="self-center" />
            ) : (
              props.prefixIcon && (
                <props.prefixIcon className="self-center text-secondary-500 dark:text-secondary-400" />
              )
            )}
            {children}
            {props.suffixIcon && (
              <props.suffixIcon className="self-center text-secondary-500 dark:text-secondary-400" />
            )}
          </>
        </div>
        {props.suffix ? (
          <>
            <div className="border-l" />
            <div className="select-none self-center bg-secondary-100 p-2 text-sm font-medium text-secondary-500 dark:bg-secondary-700/50 dark:text-secondary-400">
              {props.suffix}
            </div>
          </>
        ) : undefined}
        {/* {show_dropdown_icon && (
          <>
            <div className="border-l" />
            <div className="self-center bg-secondary-100 p-2 text-sm font-medium text-secondary-500 transition-all hover:bg-secondary-200/80 dark:bg-secondary-700/50 dark:text-secondary-400 dark:hover:bg-secondary-700">
              <HiChevronDown />
            </div>
          </>
        )} */}
        {/* {show_stepper_icon && (
          <>
            <div className="border-l" />
            <div className="flex flex-col divide-y divide-secondary-300 self-center bg-secondary-100 text-sm font-medium text-secondary-500 transition-all dark:divide-secondary-700 dark:bg-secondary-700/50 dark:text-secondary-400">
              <button className="px-1 hover:text-black dark:hover:text-secondary-100">
                <Icon.HiChevronUp className="stroke-1" />
              </button>
              <button className="px-1 hover:text-black dark:hover:text-secondary-100">
                <Icon.HiChevronDown className="stroke-1" />
              </button>
            </div>
          </>
        )} */}
      </div>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p className="text-sm text-error-600 dark:text-error-400">{message}</p>}
      />
    </>
  );
}
