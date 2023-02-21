import { Combobox } from "@headlessui/react";
import { classNames } from "@rhinobase/utils";
import React, { Children, ComponentProps, forwardRef, useState } from "react";
import { InputField } from "../input-field";

type ReferenceProps<T> = {
  invalid?: boolean;
  initialData?: T[];
  isLoading?: boolean;
  onChange: (value: string) => void;
  onBlur?: (value: string) => void;
  onSelect?: (value: T) => void;
  getNextPage?: (index: number) => T[];
};

export const Root = (props: { children: React.ReactNode }) => {
  return <div className="relative">{props.children}</div>;
};

export const Input = forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements["input"] & ReferenceProps<any>
>(({ ...props }, forwardedRef) => {
  return (
    <input
      {...props}
      type="search"
      className={classNames(
        "px-lg py-md dark:text-secondary-200 block w-full appearance-none rounded-md border border-secondary-300 bg-transparent shadow-sm autofill:bg-transparent dark:border-zinc-700",
        "focus:ring-primary-200 focus:border-primary-500 dark:focus:ring-primary-100/20 dark:focus:border-primary-400 focus:outline-none focus:ring-2",
        "read-only:focus:ring-0",
        "disabled:bg-secondary-100 disabled:dark:bg-secondary-800 disabled:cursor-not-allowed",
        props.invalid &&
          "!border-error-500 focus:!ring-error-200 dark:!border-error-400 dark:focus:!ring-error-100/20",
        props.required &&
          "!border-error-500 focus:!ring-error-200 dark:!border-error-400 dark:focus:!ring-error-100/20",
        props.className,
      )}
      ref={forwardedRef}
    />
  );
});

export const Content = (props: {
  open?: boolean;
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={classNames(
        !props.open && "hidden",
        "absolute border dark:border-black/50 p-2 w-full mt-1 rounded-md shadow-lg bg-white dark:bg-zinc-800",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
};

type Item = JSX.IntrinsicElements["div"];

export const Item = (
  props: Item & {
    children?: React.ReactNode;
    value?: string;
    onClick: (value: string) => void;
  },
) => {
  return (
    <div
      className={classNames(
        "px-3 py-2 transition-all block w-full text-left hover:bg-black/5 rounded-md select-none cursor-pointer dark:text-white/90 dark:hover:bg-white/5",
        props.className,
      )}
      onClick={() => props.onClick(props.value!)}
    >
      {props.children}
    </div>
  );
};
