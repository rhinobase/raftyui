import React, { ComponentProps, forwardRef, useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";
import { classNames } from "@rhinobase/utils";

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

export type Input = ComponentProps<typeof ComboboxInput>;
export const Input = forwardRef<HTMLInputElement, Input>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <ComboboxInput
        {...props}
        className={classNames(
          "px-lg py-md dark:text-secondary-200 border-secondary-300 block w-full appearance-none rounded-md border bg-transparent shadow-sm autofill:bg-transparent dark:border-zinc-700",
          "focus:ring-primary-200 focus:border-primary-500 dark:focus:ring-primary-100/20 dark:focus:border-primary-400 focus:outline-none focus:ring-2",
          "read-only:focus:ring-0",
          "disabled:bg-secondary-100 disabled:dark:bg-secondary-800 disabled:cursor-not-allowed",
          props.required &&
            "!border-error-500 focus:!ring-error-200 dark:!border-error-400 dark:focus:!ring-error-100/20",
          className,
        )}
        ref={forwardedRef}
      />
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
          "p-md rounded-md shadow-lg ring-1 ring-black/5",
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
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <ComboboxList
        {...props}
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
          "hover:bg-secondary-100 data-[state=selected]:bg-secondary-200 cursor-pointer rounded-lg py-2 px-2 leading-3",
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
