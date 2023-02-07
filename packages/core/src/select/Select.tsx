import * as RadixSelect from "@radix-ui/react-select";
import { ComponentProps, forwardRef, ReactNode } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { classNames } from "@rhinobase/lib";
import { Button, ButtonProps } from "@rhinobase/ui";

// Select Component
export const Select = RadixSelect.Root;

// SelectButton Component (SelectValue, SelectIcon Component inside SelectButton Component )
type SelectButtonProps = ComponentProps<typeof RadixSelect["Trigger"]> & {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  placeholder?: string;
  icon?: ReactNode;
};
export const SelectButton = forwardRef<HTMLButtonElement, SelectButtonProps>(
  ({ className, children, variant, size, placeholder, icon, ...props }, forwardedRef) => (
    <RadixSelect.Trigger {...props} ref={forwardedRef} asChild>
      <Button variant={variant} size={size} className={classNames("justify-between", className)}>
        <SelectValue placeholder={placeholder} />
        <SelectIcon>{icon}</SelectIcon>
      </Button>
    </RadixSelect.Trigger>
  )
);

// SelectContent Component (SelectScrollUpButton, SelectScrollDownButton, SelectViewport Component inside SelectContent Component)
type SelectContentProps = ComponentProps<typeof RadixSelect["Content"]>;
export const SelectContent = forwardRef<HTMLDivElement, SelectContentProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <RadixSelect.Content {...props} className={className} ref={forwardedRef}>
      <SelectScrollUpButton />
      <SelectViewport>{children}</SelectViewport>
      <SelectScrollDownButton />
    </RadixSelect.Content>
  )
);

// SelectGroup Component
type SelectGroupProps = ComponentProps<typeof RadixSelect["Group"]>;
export const SelectGroup = forwardRef<HTMLDivElement, SelectGroupProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <RadixSelect.Group {...props} className={classNames("space-y-1", className)} ref={forwardedRef}>
      {children}
    </RadixSelect.Group>
  )
);

// SelectItem Component
type SelectItemProps = ComponentProps<typeof RadixSelect["Item"]>;
export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
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
      ref={forwardedRef}>
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
    </RadixSelect.Item>
  )
);

// SelectSeparator Component
type SelectDividerProps = ComponentProps<typeof RadixSelect["Separator"]>;
export const SelectDivider = forwardRef<HTMLDivElement, SelectDividerProps>(
  ({ className, ...props }, forwardedRef) => (
    <RadixSelect.Separator
      {...props}
      className={classNames("bg-secondary-200 dark:bg-secondary-700 my-1 h-[1px]", className)}
      ref={forwardedRef}
    />
  )
);

// SelectValue Component
const SelectValue = RadixSelect.Value;

// SelectIcon Component
type SelectIconProps = ComponentProps<typeof RadixSelect["Icon"]>;
const SelectIcon = forwardRef<HTMLDivElement, SelectIconProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <RadixSelect.Icon
      {...props}
      className={props.asChild ? className : classNames("ml-2", className)}
      ref={forwardedRef}>
      {children ?? <HiChevronDown />}
    </RadixSelect.Icon>
  )
);

// SelectScrollUpButton Component
type SelectScrollUpButtonProps = ComponentProps<typeof RadixSelect["ScrollUpButton"]>;
const SelectScrollUpButton = forwardRef<HTMLDivElement, SelectScrollUpButtonProps>(
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
      ref={forwardedRef}>
      <HiChevronUp />
    </RadixSelect.ScrollUpButton>
  )
);

//SelectScrollDownButton Component
type SelectScrollDownButtonProps = ComponentProps<typeof RadixSelect["ScrollDownButton"]>;
const SelectScrollDownButton = forwardRef<HTMLDivElement, SelectScrollDownButtonProps>(
  ({ className, children, ...props }, forwardedRef) => (
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
      ref={forwardedRef}>
      <HiChevronDown />
    </RadixSelect.ScrollDownButton>
  )
);

// SelectViewport Component
type SelectViewportProps = ComponentProps<typeof RadixSelect["Viewport"]>;
const SelectViewport = forwardRef<HTMLDivElement, SelectViewportProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <RadixSelect.Viewport
      {...props}
      className={
        props.asChild
          ? className
          : classNames("dark:bg-secondary-800 p-md rounded-lg bg-white shadow-lg", className)
      }
      ref={forwardedRef}>
      {children}
    </RadixSelect.Viewport>
  )
);
