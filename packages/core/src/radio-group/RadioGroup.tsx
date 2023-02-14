import * as RadioGroupPrimitives from "@radix-ui/react-radio-group";
import { ComponentProps, forwardRef } from "react";
import { classNames } from "@rhinobase/utils";
import React from "react";

// RadioGroup Component
export type Root = ComponentProps<(typeof RadioGroupPrimitives)["Root"]>;
export const Root = forwardRef<HTMLDivElement, Root>(
  (
    { className, disabled, children, orientation = "horizontal", ...props },
    forwardedRef,
  ) => {
    return (
      <RadioGroupPrimitives.Root
        className={classNames(
          orientation == "vertical" ? "flex-col" : "flex-row",
          "dark:text-secondary-100 flex gap-3",
          "data-[disabled]:text-secondary-400",
          className,
        )}
        {...props}
        disabled={disabled}
        ref={forwardedRef}
      >
        {children}
      </RadioGroupPrimitives.Root>
    );
  },
);

// Radio Component (Indicator inside the Radio Component)
export type Item = ComponentProps<(typeof RadioGroupPrimitives)["Item"]>;
export const Item = forwardRef<
  HTMLButtonElement,
  Item & {
    caption?: string;
    hide?: boolean;
    tooltip?: string;
    isDisabled?: boolean;
  }
>(
  (
    { children, caption, hide, tooltip, isDisabled, ...props },
    forwardedRef,
  ) => {
    return (
      <div className={classNames(hide && "hidden", "flex items-center gap-1")}>
        <RadioGroupPrimitives.Item
          className="border-secondary-300 dark:border-secondary-700 dark:bg-secondary-800 relative inline-flex h-4 w-4 items-center justify-center rounded-full border-2 data-[disabled]:cursor-not-allowed data-[state=checked]:border-0"
          {...props}
          id={props.value}
          disabled={isDisabled}
          ref={forwardedRef}
        >
          <Indicator />
        </RadioGroupPrimitives.Item>
        <div className="flex flex-col">
          <label
            className={classNames(
              isDisabled && "text-secondary-400 cursor-not-allowed",
              tooltip &&
                "border-b-secondary-300 dark:border-secondary-500 border-b border-dashed",
              "text-sm font-medium",
            )}
            htmlFor={props.value}
          >
            {children}
          </label>
          {caption && (
            <p className="text-secondary-400 text-sm leading-[16px]">
              {caption}
            </p>
          )}
        </div>
      </div>
    );
  },
);

// CustomRadioBox Component (we made it for major use in pricing page)
export type Box = ComponentProps<(typeof RadioGroupPrimitives)["Item"]>;
export const Box = forwardRef<HTMLButtonElement, Box>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <RadioGroupPrimitives.Item
        className={classNames(
          "data-[state=checked]:ring-primary-500 hover:bg-secondary-100 data-[disabled]:bg-secondary-100 dark:border-secondary-700 dark:text-secondary-100 dark:hover:bg-secondary-800 dark:data-[disabled]:bg-secondary-800 p-md w-full rounded-md border data-[disabled]:cursor-not-allowed data-[state=checked]:ring-2",
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </RadioGroupPrimitives.Item>
    );
  },
);

// RadioIndicator Component (it is already used in Radio component of this file thats why we do not need to exported it)
export type Indicator = ComponentProps<
  (typeof RadioGroupPrimitives)["Indicator"]
>;
const Indicator = forwardRef<HTMLButtonElement, Indicator>(
  ({ ...props }, forwardedRef) => {
    return (
      <RadioGroupPrimitives.Indicator
        className="data-[state=checked]:dark:border-primary-300 data-[state=checked]:border-primary-500 absolute left-0 top-0 flex h-4 w-4 items-center justify-center rounded-full data-[state=checked]:border-4 data-[state=checked]:bg-transparent"
        {...props}
        ref={forwardedRef}
      />
    );
  },
);
