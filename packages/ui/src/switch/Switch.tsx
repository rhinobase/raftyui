"use client";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cva } from "class-variance-authority";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import { useFieldControlContext } from "../field-control";
import { Label } from "../label";
import type { ValueOrFunction } from "../types";
import { type SizeType, classNames, getValue } from "../utils";

const switchClasses = cva(
  classNames(
    "peer/switch cursor-pointer rounded-full p-0.5 transition-colors ease-in-out",
    "data-[state=checked]:bg-primary-500 dark:data-[state=checked]:bg-primary-300",
    "data-[state=unchecked]:bg-secondary-400 dark:data-[state=unchecked]:bg-secondary-600",
    "outline-none focus-visible:ring-2 ring-offset-2 ring-offset-white dark:ring-offset-secondary-950",
    "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70",
  ),
  {
    variants: {
      size: {
        sm: "w-[30px]",
        md: "w-[34px]",
        lg: "w-[40px]",
      },
      invalid: {
        true: "ring-red-300 dark:ring-red-100",
        false: "ring-primary-300 dark:ring-primary-100",
      },
    },
  },
);

const switchThumbClasses = cva(
  "bg-white pointer-events-none block rounded-full ring-0 transition-transform data-[state=unchecked]:translate-x-0 ease-in-out",
  {
    variants: {
      size: {
        sm: "size-[16px] data-[state=checked]:translate-x-2.5",
        md: "size-[18px] data-[state=checked]:translate-x-3",
        lg: "size-[22px] data-[state=checked]:translate-x-3.5",
      },
    },
  },
);

const switchLabelClasses = cva(
  "font-medium peer-data-[disabled]/switch:cursor-not-allowed peer-data-[disabled]/switch:opacity-70",
  {
    variants: {
      size: {
        sm: "pl-1 text-xs",
        md: "pl-1.5 text-sm",
        lg: "pl-2 text-base",
      },
    },
  },
);

export type Switch = Omit<
  ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
  "value"
> & {
  size?: SizeType;
  isDisabled?: ValueOrFunction;
  isInvalid?: ValueOrFunction;
  isLoading?: ValueOrFunction;
  isReadOnly?: ValueOrFunction;
  isRequired?: ValueOrFunction;
};

export const Switch = forwardRef<
  ElementRef<typeof SwitchPrimitives.Root>,
  Switch
>(function Switch(
  {
    name,
    disabled,
    required,
    className,
    size = "md",
    defaultChecked = false,
    isReadOnly,
    isDisabled,
    isRequired,
    isInvalid,
    isLoading,
    children,
    ...props
  },
  forwardedRef,
) {
  const fieldControlContext = useFieldControlContext() ?? {
    isDisabled: false,
    isLoading: false,
    isReadOnly: false,
    isRequired: false,
    isInvalid: false,
  };

  const _name = name ?? fieldControlContext.name;
  const _disabled =
    (disabled ?? getValue(isDisabled) ?? fieldControlContext.isDisabled) ||
    (getValue(isLoading) ?? fieldControlContext.isLoading) ||
    (getValue(isReadOnly) ?? fieldControlContext.isReadOnly);
  const _invalid = getValue(isInvalid) ?? fieldControlContext.isInvalid;
  const _required =
    required ?? getValue(isRequired) ?? fieldControlContext.isRequired;

  const switchProps = {
    ...props,
    name: _name,
    disabled: _disabled,
    required: _required,
    defaultChecked,
  };

  const Component = (componentProps: Pick<Switch, "className">) => (
    <SwitchPrimitives.Root
      {...switchProps}
      className={componentProps.className}
      ref={forwardedRef}
    >
      <SwitchPrimitives.Thumb className={switchThumbClasses({ size })} />
    </SwitchPrimitives.Root>
  );

  if (children)
    return (
      <div className={classNames("flex w-max items-center", className)}>
        <Component className={switchClasses({ size, invalid: _invalid })} />
        <Label
          htmlFor={props.id}
          className={switchLabelClasses({ size })}
          isRequired={required}
        >
          {children}
        </Label>
      </div>
    );
  return (
    <Component
      className={classNames(
        switchClasses({ size, invalid: _invalid }),
        className,
      )}
    />
  );
});
