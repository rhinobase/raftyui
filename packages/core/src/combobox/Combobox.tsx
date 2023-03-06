import React, { ComponentProps, forwardRef } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";
import { classNames } from "@rhinobase/utils";
import { Button } from "../button";

export type Root = ComponentProps<typeof Combobox>;
export const Root = forwardRef<HTMLDivElement, Root>(
  ({ children, className, openOnFocus, ...props }, forwardedRef) => {
    return (
      <Combobox
        {...props}
        openOnFocus
        className={classNames("w-full", className)}
        ref={forwardedRef}
      >
        {children}
      </Combobox>
    );
  },
);
Root.displayName = "Combobox.Root";

export type Input = ComponentProps<typeof ComboboxInput> & {
  onClick?: () => void;
};
export const Input = forwardRef<HTMLInputElement, Input>(
  ({ className, onClick, ...props }, forwardedRef) => {
    return (
      <div className="relative flex w-full items-center">
        <ComboboxInput
          {...props}
          className={classNames(
            onClick != undefined && "pr-10",
            "px-lg py-md dark:text-secondary-200 border-secondary-300 block w-full appearance-none rounded-md border bg-transparent shadow-sm autofill:bg-transparent dark:border-zinc-700",
            "focus:ring-primary-200 focus:border-primary-500 dark:focus:ring-primary-100/20 dark:focus:border-primary-400 focus:outline-none focus:ring-2",
            "read-only:focus:ring-0",
            "disabled:bg-secondary-100 disabled:dark:bg-secondary-800 disabled:cursor-not-allowed",
            props.required &&
              "!border-error-500 focus:!ring-error-200 dark:!border-error-400 dark:focus:!ring-error-100/20",
            className,
          )}
          ref={forwardedRef}
          readOnly
        />
        <Button
          variant="ghost"
          size="icon"
          className={classNames(
            onClick != undefined ? "absolute right-1.5" : "hidden",
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Button>
      </div>
    );
  },
);
Input.displayName = "Combobox.Input";

export type Content = ComponentProps<typeof ComboboxPopover>;
export const Content = forwardRef<HTMLDivElement, Content>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <ComboboxPopover
        {...props}
        className={classNames(
          "p-md dark:bg-secondary-800 rounded-md shadow-lg ring-1 ring-black/5 ",
          className,
        )}
        ref={forwardedRef}
      >
        {children}
      </ComboboxPopover>
    );
  },
);
Content.displayName = "Combobox.Content";

export type List = ComponentProps<typeof ComboboxList>;
export const List = forwardRef<HTMLUListElement, List>(
  ({ children, className, persistSelection, ...props }, forwardedRef) => {
    return (
      <ComboboxList
        {...props}
        persistSelection
        className={classNames("space-y-1", className)}
        ref={forwardedRef}
      >
        {children}
      </ComboboxList>
    );
  },
);
List.displayName = "Combobox.List";

export type Item = ComponentProps<typeof ComboboxOption>;
export const Item = forwardRef<HTMLLIElement, Item>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <ComboboxOption
        {...props}
        className={classNames(
          "hover:bg-secondary-100 dark:hover:bg-secondary-700 dark:data-[highlighted]:bg-secondary-700 data-[highlighted]:bg-secondary-200/70 cursor-pointer rounded-md py-1.5 px-2.5 dark:text-white",
          className,
        )}
        ref={forwardedRef}
      >
        {children}
      </ComboboxOption>
    );
  },
);
Item.displayName = "Combobox.Item";

export type ItemText = ComponentProps<typeof ComboboxOptionText>;
export const ItemText = forwardRef<HTMLDivElement, ItemText>(() => {
  return <ComboboxOptionText />;
});
ItemText.displayName = "Combobox.ItemText";
