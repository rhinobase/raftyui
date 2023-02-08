import * as RadixSelect from "@radix-ui/react-select";
import { ComponentProps, forwardRef, ReactNode } from "react";
import { classNames } from "@rhinobase/utils";
import { Button } from "../button";
import React from "react";

// Select Component
export type Select = ComponentProps<(typeof RadixSelect)["Root"]>;
export const Select = forwardRef<HTMLDivElement, Select>(
  ({ children, ...props }, forwardedRef) => (
    <RadixSelect.Root {...props}>{children}</RadixSelect.Root>
  )
);

// SelectButton Component (SelectValue, SelectIcon Component inside SelectButton Component )
export type SelectButton = ComponentProps<(typeof RadixSelect)["Trigger"]> & {
  variant?: Button["variant"];
  size?: Button["size"];
  placeholder?: string;
  icon?: ReactNode;
};
export const SelectButton = forwardRef<HTMLButtonElement, SelectButton>(
  (
    { className, children, variant, size, placeholder, icon, ...props },
    forwardedRef
  ) => (
    <RadixSelect.Trigger {...props} ref={forwardedRef} asChild>
      <Button
        variant={variant}
        size={size}
        className={classNames("justify-between", className)}
      >
        <SelectValue placeholder={placeholder} />
        <SelectIcon>{icon}</SelectIcon>
      </Button>
    </RadixSelect.Trigger>
  )
);

// SelectContent Component (SelectScrollUpButton, SelectScrollDownButton, SelectViewport Component inside SelectContent Component)
export type SelectContent = ComponentProps<(typeof RadixSelect)["Content"]>;
export const SelectContent = forwardRef<HTMLDivElement, SelectContent>(
  ({ className, children, ...props }, forwardedRef) => (
    <RadixSelect.Content {...props} className={className} ref={forwardedRef}>
      <SelectScrollUpButton />
      <SelectViewport>{children}</SelectViewport>
      <SelectScrollDownButton />
    </RadixSelect.Content>
  )
);

// SelectGroup Component
export type SelectGroup = ComponentProps<(typeof RadixSelect)["Group"]>;
export const SelectGroup = forwardRef<HTMLDivElement, SelectGroup>(
  ({ className, children, ...props }, forwardedRef) => (
    <RadixSelect.Group
      {...props}
      className={classNames("space-y-1", className)}
      ref={forwardedRef}
    >
      {children}
    </RadixSelect.Group>
  )
);

// SelectItem Component
export type SelectItem = ComponentProps<(typeof RadixSelect)["Item"]>;
export const SelectItem = forwardRef<HTMLDivElement, SelectItem>(
  ({ className, children, ...props }, forwardedRef) => (
    <RadixSelect.Item
      {...props}
      className={classNames(
        "text-secondary-700 hover:bg-secondary-100 dark:text-secondary-300 dark:hover:bg-secondary-700/40 px-2xl py-md relative flex items-center rounded-md text-sm font-medium",
        "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[disabled]:hover:bg-transparent dark:data-[disabled]:hover:bg-transparent",
        "data-[state=checked]:bg-secondary-200/60 dark:data-[state=checked]:bg-secondary-700/70",
        "select-none focus:outline-none",
        className
      )}
      ref={forwardedRef}
    >
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
    </RadixSelect.Item>
  )
);

// SelectSeparator Component
export type SelectDivider = ComponentProps<(typeof RadixSelect)["Separator"]>;
export const SelectDivider = forwardRef<HTMLDivElement, SelectDivider>(
  ({ className, ...props }, forwardedRef) => (
    <RadixSelect.Separator
      {...props}
      className={classNames(
        "bg-secondary-200 dark:bg-secondary-700 my-1 h-[1px]",
        className
      )}
      ref={forwardedRef}
    />
  )
);

// SelectValue Component
const SelectValue = RadixSelect.Value;

// SelectIcon Component
export type SelectIcon = ComponentProps<(typeof RadixSelect)["Icon"]>;
const SelectIcon = forwardRef<HTMLDivElement, SelectIcon>(
  ({ className, children, ...props }, forwardedRef) => (
    <RadixSelect.Icon
      {...props}
      className={props.asChild ? className : classNames("ml-2", className)}
      ref={forwardedRef}
    >
      {children ?? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      )}
    </RadixSelect.Icon>
  )
);

// SelectScrollUpButton Component
export type SelectScrollUpButton = ComponentProps<
  (typeof RadixSelect)["ScrollUpButton"]
>;
const SelectScrollUpButton = forwardRef<HTMLDivElement, SelectScrollUpButton>(
  ({ className, children, ...props }, forwardedRef) => (
    <RadixSelect.ScrollUpButton
      {...props}
      className={
        props.asChild
          ? className
          : classNames(
              "text-secondary-700 dark:text-secondary-300 flex items-center justify-center",
              className
            )
      }
      ref={forwardedRef}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>
    </RadixSelect.ScrollUpButton>
  )
);

//SelectScrollDownButton Component
export type SelectScrollDownButton = ComponentProps<
  (typeof RadixSelect)["ScrollDownButton"]
>;
const SelectScrollDownButton = forwardRef<
  HTMLDivElement,
  SelectScrollDownButton
>(({ className, children, ...props }, forwardedRef) => (
  <RadixSelect.ScrollDownButton
    {...props}
    className={
      props.asChild
        ? className
        : classNames(
            "text-secondary-700 dark:text-secondary-300 flex items-center justify-center",
            className
          )
    }
    ref={forwardedRef}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  </RadixSelect.ScrollDownButton>
));

// SelectViewport Component
type SelectViewport = ComponentProps<(typeof RadixSelect)["Viewport"]>;
const SelectViewport = forwardRef<HTMLDivElement, SelectViewport>(
  ({ className, children, ...props }, forwardedRef) => (
    <RadixSelect.Viewport
      {...props}
      className={
        props.asChild
          ? className
          : classNames(
              "dark:bg-secondary-800 p-md rounded-lg bg-white shadow-lg",
              className
            )
      }
      ref={forwardedRef}
    >
      {children}
    </RadixSelect.Viewport>
  )
);
