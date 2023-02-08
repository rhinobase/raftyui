import React from "react";
import { useEffect, useRef } from "react";
import { classNames } from "@rhinobase/utils";
import { Spinner } from "../spinner";
import { useFieldControl } from "./context";

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

  const { isDev, disabled, readOnly, loading } = useFieldControl();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (disabled || readOnly || loading) {
      element.setAttribute("data-state", "off");
      return;
    }

    const handleClick = (event: MouseEvent) => {
      // @ts-ignore
      if (!element.contains(event.target))
        element.setAttribute("data-state", "off");
      else element.setAttribute("data-state", "on");
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, disabled, readOnly, isInvalid, loading]);

  return (
    <>
      <div
        ref={ref}
        role="group"
        className={classNames(
          isInvalid
            ? "border-error-500 dark:border-error-400"
            : "border-secondary-300 dark:border-secondary-700",
          (disabled || loading) && "bg-secondary-50 dark:bg-secondary-800",
          loading && "cursor-progress",
          isDev &&
            "data-[state=off]:hover:border-secondary-400 dark:data-[state=off]:hover:border-secondary-600",
          "data-[state=on]:ring-primary-200 data-[state=on]:border-primary-300 group flex flex-1 items-stretch divide-secondary-300 overflow-hidden rounded-md border ring-2 ring-transparent transition-all aria-disabled:cursor-not-allowed dark:divide-secondary-700 dark:text-secondary-100"
        )}
        data-state="off"
        aria-disabled={disabled || readOnly}
      >
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
                <span className="self-center text-secondary-500 dark:text-secondary-400">
                  {props.prefixIcon}
                </span>
              )
            )}
            {children}
            {props.suffixIcon && (
              <span className="self-center text-secondary-500 dark:text-secondary-400">
                {props.suffixIcon}
              </span>
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
      </div>
    </>
  );
}
