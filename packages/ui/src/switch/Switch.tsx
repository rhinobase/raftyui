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

export const switchClasses = cva(
  "cursor-pointer rounded-full border-2 border-transparent data-[state=checked]:bg-primary-500 dark:data-[state=checked]:bg-primary-300 data-[state=unchecked]:bg-secondary-400 dark:data-[state=unchecked]:bg-secondary-600 outline-none focus-visible:ring-2 ring-offset-2 ring-primary-300 dark:ring-primary-100 ring-offset-white dark:ring-offset-secondary-950 disabled:cursor-not-allowed disabled:opacity-50 transition-colors ease-in-out",
  {
    variants: {
      size: {
        sm: "h-[20px] w-[30px]",
        md: "h-[22px] w-[34px]",
        lg: "h-[26px] w-[40px]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const switchThumbClasses = cva(
  "bg-white pointer-events-none block rounded-full ring-0 transition-transform data-[state=unchecked]:translate-x-0",
  {
    variants: {
      size: {
        sm: "size-[16px] data-[state=checked]:translate-x-2.5",
        md: "size-[18px] data-[state=checked]:translate-x-3",
        lg: "size-[22px] data-[state=checked]:translate-x-3.5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const switchLabelClasses = cva("font-medium", {
  variants: {
    size: {
      sm: "pl-1.5 text-xs",
      md: "pl-2 text-sm",
      lg: "pl-2.5 text-base",
    },
    disabled: {
      true: "cursor-not-allowed opacity-50",
      false: "",
    },
  },
  defaultVariants: {
    size: "md",
    disabled: false,
  },
});

export type Switch = Omit<
  ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
  "value" | "disabled" | "required"
> & {
  size?: SizeType;
  isReadOnly?: ValueOrFunction;
  isDisabled?: ValueOrFunction;
  isRequired?: ValueOrFunction;
};

export const Switch = forwardRef<
  ElementRef<typeof SwitchPrimitives.Root>,
  Switch
>(function Switch(
  {
    className,
    size = "md",
    defaultChecked = false,
    isReadOnly,
    isDisabled,
    isRequired,
    children,
    ...props
  },
  forwardedRef,
) {
  const context = useFieldControlContext() ?? {};

  const name = props.name || context.name;
  const disabled =
    getValue(isDisabled) ||
    context.isDisabled ||
    getValue(isReadOnly) ||
    context.isReadOnly;
  const required = getValue(isRequired) || context.isRequired;

  const Component = (componentProps: Pick<Switch, "className">) => (
    <SwitchPrimitives.Root
      {...props}
      defaultChecked={defaultChecked}
      name={name}
      disabled={disabled}
      required={required}
      className={componentProps.className}
      ref={forwardedRef}
    >
      <SwitchPrimitives.Thumb className={switchThumbClasses({ size })} />
    </SwitchPrimitives.Root>
  );

  if (children)
    return (
      <div className={classNames("flex w-max items-center", className)}>
        <Component className={switchClasses({ size })} />
        <Label
          htmlFor={props.id}
          className={switchLabelClasses({ size, disabled })}
          isRequired={required}
        >
          {children}
        </Label>
      </div>
    );
  return (
    <Component className={classNames(switchClasses({ size }), className)} />
  );
});
