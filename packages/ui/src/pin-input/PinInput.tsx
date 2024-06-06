"use client";
import { PinInput as ArkPinInput, type PinInputRootProps } from "@ark-ui/react";
import { cva } from "class-variance-authority";
import { type ElementRef, forwardRef } from "react";
import { InputField } from "../input-field";
import type { ValueOrFunction } from "../types";
import { type SizeType, getValue } from "../utils";

export const inputClasses = cva("p-0 text-center", {
  variants: {
    size: {
      sm: "size-[30px]",
      md: "size-[38px]",
      lg: "size-[46px]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const pinInputControlClasses = cva("flex flex-wrap", {
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

export type PinInput = PinInputRootProps & {
  length: number;
  size?: SizeType;
  isDisabled?: ValueOrFunction;
  isLoading?: ValueOrFunction;
};

export const PinInput = forwardRef<
  ElementRef<typeof ArkPinInput.Root>,
  PinInput
>(function PinInput(
  { length, isLoading = false, isDisabled = false, size = "md", ...props },
  forwardedRef,
) {
  const disabled =
    props.disabled || getValue(isDisabled) || getValue(isLoading);

  return (
    <ArkPinInput.Root {...props} disabled={disabled} ref={forwardedRef}>
      <ArkPinInput.Control className={pinInputControlClasses({ size })}>
        {Array.from({ length }).map((_, index) => (
          <ArkPinInput.Input
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            index={index}
            asChild
          >
            <InputField size={size} className={inputClasses({ size })} />
          </ArkPinInput.Input>
        ))}
      </ArkPinInput.Control>
      <ArkPinInput.HiddenInput />
    </ArkPinInput.Root>
  );
});
