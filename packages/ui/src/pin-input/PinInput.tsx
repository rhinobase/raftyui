import { PinInput as ArkPinInput } from "@ark-ui/react";
import { cva } from "class-variance-authority";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import { InputField } from "../input-field";
import type { ValueOrFunction } from "../types";
import { classNames, getValue } from "../utils";

const INPUT_SIZE = {
  sm: "size-[30px]",
  md: "size-[38px]",
  lg: "size-[46px]",
};

const menuLabelClasses = cva("flex flex-wrap", {
  variants: {
    size: {
      sm: "gap-2",
      md: "gap-2.5",
      lg: "gap-3",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type PinInput = ComponentPropsWithoutRef<typeof ArkPinInput.Root> & {
  length: number;
  size?: "sm" | "md" | "lg";
  isDisabled?: ValueOrFunction<boolean>;
  isLoading?: ValueOrFunction<boolean>;
};

export const PinInput = forwardRef<
  ElementRef<typeof ArkPinInput.Root>,
  PinInput
>(
  (
    {
      length,
      className,
      isLoading = false,
      isDisabled = false,
      size = "md",
      ...props
    },
    forwardedRef,
  ) => {
    const disabled =
      props.disabled || getValue(isDisabled) || getValue(isLoading);

    return (
      <ArkPinInput.Root {...props} disabled={disabled} ref={forwardedRef}>
        <ArkPinInput.Control className={menuLabelClasses({ size })}>
          {Array.from({ length }).map((_, index) => (
            <ArkPinInput.Input
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              index={index}
              asChild
            >
              <InputField
                size={size}
                className={classNames(
                  "text-center",
                  INPUT_SIZE[size],
                  className,
                )}
              />
            </ArkPinInput.Input>
          ))}
        </ArkPinInput.Control>
        <ArkPinInput.HiddenInput />
      </ArkPinInput.Root>
    );
  },
);

PinInput.displayName = "PinInput";
