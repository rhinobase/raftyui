import { Combobox } from "@headlessui/react";
import React, { forwardRef } from "react";
import { ReferenceFieldProvider, useReferenceFieldContext } from "./context";

export const Root = (props: {
  children: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <Combobox value={props.value} onChange={props.onChange}>
      {({ open }) => (
        <ReferenceFieldProvider value={{ open }}>
          <div className="relative">{props.children}</div>
        </ReferenceFieldProvider>
      )}
    </Combobox>
  );
};

export const Input = forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements["input"] & {
    invalid?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    displayValue: (value: any) => string;
  }
>(({ ...props }, forwardedRef) => {
  return (
    <div className="relative ">
      <Combobox.Input
        className="px-lg py-md dark:text-secondary-200 block w-full appearance-none rounded-md border border-secondary-300 bg-transparent shadow-sm autofill:bg-transparent dark:border-zinc-700 focus:ring-primary-200 focus:border-primary-500 dark:focus:ring-primary-100/20 dark:focus:border-primary-400 focus:outline-none focus:ring-2"
        {...props}
        autoComplete="off"
      />
      <div className="absolute right-10 top-0 h-full flex items-center pr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4 text-black/50 dark:text-white/50 dark:hover:text-white cursor-pointer stroke-2 hover:text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <Combobox.Button className="absolute inset-y-0 right-0 top-0 h-full flex items-center pr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
          />
        </svg>
      </Combobox.Button>
    </div>
  );
});

export const Content = (props: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const { open } = useReferenceFieldContext();
  return (
    <Combobox.Options
      static={open}
      className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white p-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
    >
      {props.children}
    </Combobox.Options>
  );
};

export const Item = (
  props: JSX.IntrinsicElements["div"] & {
    children?: React.ReactNode;
    value?: string;
  },
) => {
  return (
    <Combobox.Option
      className={({ active, selected }) =>
        `relative cursor-default select-none py-2 pl-10 pr-4 ${
          active ? "bg-black/5" : "text-gray-900"
        }`
      }
      value={props.value}
    >
      <>
        <span className="block truncate">{props.children}</span>
      </>
    </Combobox.Option>
  );
};
