"use client";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cva } from "class-variance-authority";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import { useFieldControlContext } from "../field-control";
import type { ValueOrFunction } from "../types";
import { classNames, getValue } from "../utils";
import {
  type SliderContext,
  SliderProvider,
  useSliderContext,
} from "./context";

export type Slider = ComponentPropsWithoutRef<typeof SliderPrimitive.Root> &
  Partial<SliderContext> & {
    isDisabled?: ValueOrFunction;
    isLoading?: ValueOrFunction;
    isReadOnly?: ValueOrFunction;
  };

export const Slider = forwardRef<
  ElementRef<typeof SliderPrimitive.Root>,
  Slider
>(function Slider(
  {
    name,
    disabled,
    className,
    colorScheme = "primary",
    size = "md",
    isDisabled,
    isReadOnly,
    isLoading,
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

  const sliderProps = {
    ...props,
    name: _name,
    disabled: _disabled,
    className: classNames(
      "relative flex w-full touch-none select-none items-center data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70",
      className,
    ),
  };

  return (
    <SliderProvider value={{ colorScheme, size }}>
      <SliderPrimitive.Root {...sliderProps} ref={forwardedRef} />
    </SliderProvider>
  );
});

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
>(function SliderTrack({ className, ...props }, forwardedRef) {
  const { size } = useSliderContext();

  return (
    <SliderPrimitive.Track
      {...props}
      className={classNames(sliderTrackClasses({ size }), className)}
      ref={forwardedRef}
    />
  );
});

export const sliderRangeClasses = cva("absolute h-full", {
  variants: {
    colorScheme: {
      primary: "bg-primary-500 dark:bg-primary-300",
      secondary: "bg-secondary-500 dark:bg-secondary-400",
      error: "bg-red-500 dark:bg-red-300",
      info: "bg-blue-600 dark:bg-blue-300",
      success: "bg-green-500 dark:bg-green-300",
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
>(function SliderRange({ className, ...props }, forwardedRef) {
  const { colorScheme } = useSliderContext();

  return (
    <SliderPrimitive.Range
      {...props}
      className={classNames(sliderRangeClasses({ colorScheme }), className)}
      ref={forwardedRef}
    />
  );
});

export const sliderThumbClasses = cva(
  "block rounded-full border border-secondary-300 dark:border-secondary-700 bg-white outline-none focus-visible:ring-2 ring-offset-2 ring-offset-white dark:ring-offset-secondary-950",
  {
    variants: {
      size: {
        sm: "size-4 shadow-sm",
        md: "size-5 shadow",
        lg: "size-6 shadow-md",
      },
      colorScheme: {
        primary: "ring-primary-300 dark:ring-primary-100",
        secondary: "ring-secondary-300 dark:ring-secondary-100",
        error: "ring-red-300 dark:ring-red-100",
        info: "ring-blue-300 dark:ring-blue-100",
        success: "ring-green-300 dark:ring-green-100",
        warning: "ring-amber-300 dark:ring-amber-100",
      },
    },
    defaultVariants: {
      colorScheme: "primary",
      size: "md",
    },
  },
);

export type SliderThumb = ComponentPropsWithoutRef<
  typeof SliderPrimitive.Thumb
>;

export const SliderThumb = forwardRef<
  ElementRef<typeof SliderPrimitive.Thumb>,
  SliderThumb
>(function SliderThumb({ className, ...props }, forwardedRef) {
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
