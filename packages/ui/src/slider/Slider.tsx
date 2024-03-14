import * as SliderPrimitive from "@radix-ui/react-slider";
import { type BooleanOrFunction, getValue } from "@rafty/shared";
import { cva } from "class-variance-authority";
import React, {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import { useFieldControlContext } from "../field-control";
import { classNames } from "../utils";
import {
  type SliderContext,
  SliderProvider,
  useSliderContext,
} from "./context";

export const sliderClasses = cva(
  "relative flex w-full touch-none select-none items-center",
  {
    variants: {
      disabled: {
        true: "cursor-not-allowed opacity-70",
        false: "",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

export type Slider = ComponentPropsWithoutRef<typeof SliderPrimitive.Root> &
  Partial<SliderContext> & {
    isDisabled?: BooleanOrFunction;
    isReadOnly?: BooleanOrFunction;
  };

export const Slider = forwardRef<
  ElementRef<typeof SliderPrimitive.Root>,
  Slider
>(
  (
    {
      className,
      colorScheme = "primary",
      size = "md",
      isDisabled,
      isReadOnly,
      ...props
    },
    forwardedRef,
  ) => {
    const fieldControlContext = useFieldControlContext() ?? {};

    const disabled =
      getValue(isDisabled) ||
      fieldControlContext.isDisabled ||
      props.disabled ||
      fieldControlContext.isLoading;

    const readonly = getValue(isReadOnly) || fieldControlContext.isReadOnly;

    return (
      <SliderProvider value={{ colorScheme, size }}>
        <SliderPrimitive.Root
          {...props}
          disabled={disabled || readonly}
          className={classNames(sliderClasses({ disabled }), className)}
          ref={forwardedRef}
        />
      </SliderProvider>
    );
  },
);
Slider.displayName = "Slider";

export const sliderTrackClasses = cva(
  "relative w-full grow overflow-hidden rounded-full bg-secondary-200 dark:bg-secondary-800",
  {
    variants: {
      size: { sm: "h-1", md: "h-1.5", lg: "h-2" },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type SliderTrack = ComponentPropsWithoutRef<
  typeof SliderPrimitive.Track
>;

export const SliderTrack = forwardRef<
  ElementRef<typeof SliderPrimitive.Track>,
  SliderTrack
>(({ className, ...props }, forwardedRef) => {
  const { size } = useSliderContext();

  return (
    <SliderPrimitive.Track
      {...props}
      className={classNames(sliderTrackClasses({ size }), className)}
      ref={forwardedRef}
    />
  );
});
SliderTrack.displayName = "SliderTrack";

export const sliderRangeClasses = cva("absolute h-full", {
  variants: {
    colorScheme: {
      primary: "bg-primary-500 dark:bg-primary-300",
      secondary: "bg-secondary-500 dark:bg-secondary-400",
      error: "bg-red-600 dark:bg-red-300",
      info: "bg-blue-500 dark:bg-blue-200",
      success: "bg-green-600 dark:bg-green-200",
      warning: "bg-amber-500 dark:bg-amber-300",
    },
  },
  defaultVariants: {
    colorScheme: "primary",
  },
});

export type SliderRange = ComponentPropsWithoutRef<
  typeof SliderPrimitive.Range
>;

export const SliderRange = forwardRef<
  ElementRef<typeof SliderPrimitive.Range>,
  SliderRange
>(({ className, ...props }, forwardedRef) => {
  const { colorScheme } = useSliderContext();

  return (
    <SliderPrimitive.Range
      {...props}
      className={classNames(sliderRangeClasses({ colorScheme }), className)}
      ref={forwardedRef}
    />
  );
});
SliderRange.displayName = "SliderRange";

export const sliderThumbClasses = cva(
  "block rounded-full border bg-white shadow transition-colors ease-in-out focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      size: { sm: "size-4", md: "size-5", lg: "size-6" },
      colorScheme: {
        primary:
          "focus-visible:ring-primary-500 dark:focus-visible:ring-primary-300",
        secondary:
          "focus-visible:ring-secondary-500 dark:focus-visible:ring-secondary-400",
        error: "focus-visible:ring-red-600 dark:focus-visible:ring-red-300",
        info: "focus-visible:ring-blue-500 dark:focus-visible:ring-blue-200",
        success:
          "focus-visible:ring-green-600 dark:focus-visible:ring-green-200",
        warning:
          "focus-visible:ring-amber-500 dark:focus-visible:ring-amber-300",
      },
    },
    defaultVariants: {
      size: "md",
      colorScheme: "primary",
    },
  },
);

export type SliderThumb = ComponentPropsWithoutRef<
  typeof SliderPrimitive.Thumb
>;

export const SliderThumb = forwardRef<
  ElementRef<typeof SliderPrimitive.Thumb>,
  SliderThumb
>(({ className, ...props }, forwardedRef) => {
  const { size, colorScheme } = useSliderContext();

  return (
    <SliderPrimitive.Thumb
      {...props}
      className={classNames(
        sliderThumbClasses({ size, colorScheme }),
        className,
      )}
      ref={forwardedRef}
    />
  );
});
SliderThumb.displayName = "SliderThumb";
