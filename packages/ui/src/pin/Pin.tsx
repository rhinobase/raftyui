import { PinInput } from "@ark-ui/react";
import { cva } from "class-variance-authority";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import { InputField } from "../input-field";
import { classNames } from "../utils";

const INPUT_SIZE = {
  sm: "size-[30px]",
  md: "size-[38px]",
  lg: "size-[46px]",
};

export const menuLabelClasses = cva("flex", {
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
export type Pin = Pick<
  ComponentPropsWithoutRef<typeof PinInput.Root>,
  | "autoFocus"
  | "defaultValue"
  | "disabled"
  | "form"
  | "id"
  | "name"
  | "onValueChange"
  | "onValueComplete"
  | "otp"
  | "pattern"
  | "placeholder"
  | "type"
  | "value"
> & {
  length: number;
  className?: HTMLDivElement["className"];
  size?: "sm" | "md" | "lg";
};

export const Pin = forwardRef<ElementRef<typeof PinInput.Root>, Pin>(
  ({ length, className, size = "md", ...props }, forwardedRef) => (
    <PinInput.Root {...props} ref={forwardedRef}>
      <PinInput.Control className={menuLabelClasses({ size })}>
        {Array.from({ length }).map((_, index) => (
          <PinInput.Input
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            index={index}
            asChild
          >
            <InputField
              size={size}
              className={classNames("text-center", INPUT_SIZE[size], className)}
            />
          </PinInput.Input>
        ))}
      </PinInput.Control>
      <PinInput.HiddenInput />
    </PinInput.Root>
  ),
);

Pin.displayName = "Pin";
