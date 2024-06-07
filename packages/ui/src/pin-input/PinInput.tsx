"use client";
import { PinInput as ArkPinInput, type PinInputRootProps } from "@ark-ui/react";
import { cva } from "class-variance-authority";
import { type ElementRef, forwardRef } from "react";
import { useFieldControlContext } from "../field-control";
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
      sm: "gap-1.5",
      md: "gap-2",
      lg: "gap-2.5",
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
  isInvalid?: ValueOrFunction;
};

export const PinInput = forwardRef<
  ElementRef<typeof ArkPinInput.Root>,
  PinInput
>(function PinInput(
  {
    size = "md",
    name,
    disabled,
    invalid,
    length,
    isLoading,
    isDisabled,
    isInvalid,
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
    (getValue(isLoading) ?? fieldControlContext.isLoading);
  const _invalid = invalid ?? getValue(isInvalid);

  const pinInputProps: PinInputRootProps = {
    ...props,
    name: _name,
    disabled: _disabled,
    invalid: _invalid,
  };

  return (
    <ArkPinInput.Root {...pinInputProps} ref={forwardedRef}>
      <ArkPinInput.Control className={pinInputControlClasses({ size })}>
        {Array.from({ length }).map((_, index) => (
          <ArkPinInput.Input
            // biome-ignore lint/suspicious/noArrayIndexKey: index is a good key in this case
            key={index}
            index={index}
            asChild
          >
            <InputField
              size={size}
              className={inputClasses({ size })}
              isInvalid={_invalid}
            />
          </ArkPinInput.Input>
        ))}
      </ArkPinInput.Control>
      <ArkPinInput.HiddenInput />
    </ArkPinInput.Root>
  );
});
