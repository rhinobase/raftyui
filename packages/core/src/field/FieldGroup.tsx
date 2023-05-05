import { useEffect, useRef } from "react";
import { Spinner } from "../spinner";
import { useFieldControlContext } from "./context";
import { classNames } from "../utils";

export interface FieldGroup {
  children: JSX.Element;
  clear?: boolean | string;
  prefix?: string;
  suffix?: string;
  prefixIcon?: JSX.Element;
  suffixIcon?: JSX.Element;
  help?: string;
}

export function FieldGroup({ children, ...props }: FieldGroup) {
  const ref = useRef<HTMLDivElement>(null);

  const { disabled, readOnly, loading, invalid } = useFieldControlContext();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (disabled || readOnly || loading) {
      element.setAttribute("data-state", "off");
      return;
    }

    const handleClick = (event: MouseEvent) => {
      if (!element.contains(event.target as Node))
        element.setAttribute("data-state", "off");
      else element.setAttribute("data-state", "on");
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, disabled, readOnly, invalid, loading]);

  return (
    <>
      <div
        ref={ref}
        role="group"
        className={classNames(
          invalid
            ? "border-error-500 dark:border-error-400"
            : "border-secondary-300 dark:border-secondary-700",
          (disabled || loading) && "bg-secondary-50 dark:bg-secondary-800",
          loading && "cursor-progress",
          "data-[state=on]:ring-primary-200 data-[state=on]:border-primary-300 divide-secondary-300 dark:divide-secondary-700 dark:text-secondary-100 group flex flex-1 items-stretch overflow-hidden rounded-md border ring-2 ring-transparent transition-all aria-disabled:cursor-not-allowed"
        )}
        data-state="off"
        aria-disabled={disabled || readOnly}
      >
        {props.prefix ? (
          <>
            <div className="bg-secondary-100 text-secondary-500 dark:bg-secondary-700/50 dark:text-secondary-400 select-none self-center p-2 text-sm font-medium">
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
                <span className="text-secondary-500 dark:text-secondary-400 self-center">
                  {props.prefixIcon}
                </span>
              )
            )}
            {children}
            {props.suffixIcon && (
              <span className="text-secondary-500 dark:text-secondary-400 self-center">
                {props.suffixIcon}
              </span>
            )}
          </>
        </div>
        {props.suffix ? (
          <>
            <div className="border-l" />
            <div className="bg-secondary-100 text-secondary-500 dark:bg-secondary-700/50 dark:text-secondary-400 select-none self-center p-2 text-sm font-medium">
              {props.suffix}
            </div>
          </>
        ) : undefined}
      </div>
    </>
  );
}
