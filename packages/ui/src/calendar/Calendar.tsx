"use client";
import {
  DatePicker as ArkDatePicker,
  type DatePickerRootProps,
} from "@ark-ui/react";
import { type ElementRef, forwardRef } from "react";
import {
  CONTENT_CLASSES,
  DayCalender,
  MonthCalender,
  YearCalender,
} from "../date-picker/DatePicker";
import type { ValueOrFunction } from "../types";
import { classNames, getValue } from "../utils";

export type Calendar = Omit<
  DatePickerRootProps,
  "value" | "onValueChange" | "defaultValue" | "open" | "closeOnSelect"
> & {
  isDisabled?: ValueOrFunction;
  isReadOnly?: ValueOrFunction;
  isLoading?: ValueOrFunction;
  placeholder?: string;
  value?: string;
  onValueChange?: (value?: string) => void;
  defaultValue?: string;
  size?: "sm" | "md" | "lg";
};

export const Calendar = forwardRef<
  ElementRef<typeof ArkDatePicker.Root>,
  Calendar
>(
  (
    {
      size = "md",
      isDisabled,
      isLoading,
      isReadOnly,
      placeholder,
      value,
      onValueChange,
      defaultValue,
      ...props
    },
    forwardedRef,
  ) => {
    const disabled =
      props.disabled || getValue(isDisabled) || getValue(isLoading);
    const readOnly = props.readOnly || getValue(isReadOnly);

    return (
      <ArkDatePicker.Root
        {...props}
        open
        closeOnSelect={false}
        value={value ? [value] : undefined}
        onValueChange={({ valueAsString }) => onValueChange?.(valueAsString[0])}
        defaultValue={defaultValue ? [defaultValue] : undefined}
        disabled={disabled}
        readOnly={readOnly}
        ref={forwardedRef}
      >
        <ArkDatePicker.Content
          className={classNames(
            "dark:bg-secondary-900 dark:border-secondary-800 w-max rounded-lg border bg-white shadow-lg dark:text-white",
            CONTENT_CLASSES[size],
          )}
        >
          <DayCalender size={size} />
          <MonthCalender size={size} />
          <YearCalender size={size} />
        </ArkDatePicker.Content>
      </ArkDatePicker.Root>
    );
  },
);
Calendar.displayName = "Calendar";
