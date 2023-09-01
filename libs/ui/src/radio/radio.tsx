"use client";
import React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import {
  RadioGroupContext,
  RadioGroupProvider,
  useRadioGroupContext,
} from "./context";
import { classNames } from "../utils";
import { Label } from "../field";

// RadioGroup Component
export type RadioGroup = React.ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Root
> &
  Partial<RadioGroupContext>;

export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroup
>(
  (
    { className, size = "md", isDisabled = false, disabled, ...props },
    forwardedRef,
  ) => {
    return (
      <RadioGroupProvider value={{ size: size, isDisabled: isDisabled }}>
        <RadioGroupPrimitive.Root
          {...props}
          disabled={isDisabled || disabled}
          className={classNames(
            size === "sm" ? "gap-2" : "gap-3",
            "flex flex-col disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={forwardedRef}
        />
      </RadioGroupProvider>
    );
  },
);
RadioGroup.displayName = "RadioGroup";

// RadioGroupItem Component
export type RadioGroupItem = React.ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Item
>;

export const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItem
>(({ className, children, ...props }, forwardedref) => {
  const { size, isDisabled } = useRadioGroupContext();

  const disabled = isDisabled || props.disabled;

  const radioItem = (
    <RadioGroupPrimitive.Item
      {...props}
      className={classNames(
        size === "sm" && "h-3.5 w-3.5",
        size === "md" && "h-5 w-5",
        size === "lg" && "h-6 w-6",
        "aspect-square  rounded-full border border-secondary-400 dark:border-secondary-700 data-[state=checked]:border-primary-500 dark:data-[state=checked]:border-primary-300 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={forwardedref}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <div
          className={classNames(
            size === "sm" && "h-2 w-2",
            size === "md" && "h-2.5 w-2.5",
            size === "lg" && "h-3.5 w-3.5",
            " bg-primary-500 dark:bg-primary-300 rounded-full",
          )}
        />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );

  if (children)
    return (
      <div className="flex items-center w-max">
        {radioItem}
        <Label
          htmlFor={props.id}
          className={classNames(
            disabled && "cursor-not-allowed opacity-50",
            "pl-2",
          )}
        >
          {children}
        </Label>
      </div>
    );
  else return radioItem;
});
RadioGroupItem.displayName = "RadioGroupItem";
