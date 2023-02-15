import * as RadixSelect from "@radix-ui/react-select";
import { ComponentProps, forwardRef, ReactNode } from "react";
import { classNames } from "@rhinobase/utils";
import { Button } from "../button";
import React from "react";

// Root Component
export type Root = ComponentProps<(typeof RadixSelect)["Root"]>;
export const Root = forwardRef<HTMLDivElement, Root>(
  ({ children, ...props }, forwardedRef) => (
    <RadixSelect.Root {...props}>{children}</RadixSelect.Root>
  ),
);

// Trigger Component (Value, Icon Component inside SelectButton Component )
export type Trigger = ComponentProps<(typeof RadixSelect)["Trigger"]> & {
  variant?: Button["variant"];
  size?: Button["size"];
  placeholder?: string;
  icon?: ReactNode;
};
export const Trigger = forwardRef<HTMLButtonElement, Trigger>(
  (
    { className, children, variant, size, placeholder, icon, ...props },
    forwardedRef,
  ) => (
    <RadixSelect.Trigger {...props} ref={forwardedRef} asChild>
      <Button
        variant={variant}
        size={size}
        className={classNames("text-zinc-700 !justify-between", className)}
      >
        <Value placeholder={placeholder} />
        <Icon>{icon}</Icon>
      </Button>
    </RadixSelect.Trigger>
  ),
);

// Content Component (ScrollUpButton, ScrollDownButton, Viewport Component inside Content Component)
export type Content = ComponentProps<(typeof RadixSelect)["Content"]>;
export const Content = forwardRef<HTMLDivElement, Content>(
  ({ className, children, ...props }, forwardedRef) => (
    <RadixSelect.Content {...props} className={className} ref={forwardedRef}>
      <ScrollUpButton />
      <Viewport>{children}</Viewport>
      <ScrollDownButton />
    </RadixSelect.Content>
  ),
);

// Group Component
export type Group = ComponentProps<(typeof RadixSelect)["Group"]>;
export const Group = forwardRef<HTMLDivElement, Group>(
  ({ className, children, ...props }, forwardedRef) => (
    <RadixSelect.Group
      {...props}
      className={classNames("space-y-1", className)}
      ref={forwardedRef}
    >
      {children}
    </RadixSelect.Group>
  ),
);

// Item Component
export type Item = ComponentProps<(typeof RadixSelect)["Item"]>;
export const Item = forwardRef<HTMLDivElement, Item>(
  ({ className, children, ...props }, forwardedRef) => (
    <RadixSelect.Item
      {...props}
      className={classNames(
        "text-secondary-700 hover:bg-secondary-100 dark:text-secondary-300 dark:hover:bg-secondary-700/40 px-2xl py-md relative flex items-center rounded-md text-sm font-semibold",
        "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[disabled]:hover:bg-transparent dark:data-[disabled]:hover:bg-transparent",
        "data-[state=checked]:bg-secondary-200/60 dark:data-[state=checked]:bg-secondary-700/70",
        "select-none focus:outline-none",
        className,
      )}
      ref={forwardedRef}
    >
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
    </RadixSelect.Item>
  ),
);

// SelectSeparator Component
export type Separator = ComponentProps<(typeof RadixSelect)["Separator"]>;
export const Separator = forwardRef<HTMLDivElement, Separator>(
  ({ className, ...props }, forwardedRef) => (
    <RadixSelect.Separator
      {...props}
      className={classNames(
        "bg-secondary-200 dark:bg-secondary-700 my-1 h-[1px]",
        className,
      )}
      ref={forwardedRef}
    />
  ),
);

// Value Component
const Value = RadixSelect.Value;

// Icon Component
export type Icon = ComponentProps<(typeof RadixSelect)["Icon"]>;
const Icon = forwardRef<HTMLDivElement, Icon>(
  ({ className, children, ...props }, forwardedRef) => (
    <RadixSelect.Icon
      {...props}
      className={props.asChild ? className : classNames(className)}
      ref={forwardedRef}
    >
      {children ?? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      )}
    </RadixSelect.Icon>
  ),
);

// ScrollUpButton Component
export type ScrollUpButton = ComponentProps<
  (typeof RadixSelect)["ScrollUpButton"]
>;
const ScrollUpButton = forwardRef<HTMLDivElement, ScrollUpButton>(
  ({ className, children, ...props }, forwardedRef) => (
    <RadixSelect.ScrollUpButton
      {...props}
      className={
        props.asChild
          ? className
          : classNames(
              "text-secondary-700 dark:text-secondary-300 flex items-center justify-center",
              className,
            )
      }
      ref={forwardedRef}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>
    </RadixSelect.ScrollUpButton>
  ),
);

//ScrollDownButton Component
export type ScrollDownButton = ComponentProps<
  (typeof RadixSelect)["ScrollDownButton"]
>;
const ScrollDownButton = forwardRef<HTMLDivElement, ScrollDownButton>(
  ({ className, children, ...props }, forwardedRef) => (
    <RadixSelect.ScrollDownButton
      {...props}
      className={
        props.asChild
          ? className
          : classNames(
              "text-secondary-700 dark:text-secondary-300 flex items-center justify-center",
              className,
            )
      }
      ref={forwardedRef}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </RadixSelect.ScrollDownButton>
  ),
);

// Viewport Component
type Viewport = ComponentProps<(typeof RadixSelect)["Viewport"]>;
const Viewport = forwardRef<HTMLDivElement, Viewport>(
  ({ className, children, ...props }, forwardedRef) => (
    <RadixSelect.Viewport
      {...props}
      className={
        props.asChild
          ? className
          : classNames(
              "dark:bg-secondary-800 p-md rounded-lg bg-white shadow-lg",
              className,
            )
      }
      ref={forwardedRef}
    >
      {children}
    </RadixSelect.Viewport>
  ),
);
