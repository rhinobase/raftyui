"use client";
import {
  DatePicker as ArkDatePicker,
  type DatePickerRootProps,
} from "@ark-ui/react";
import { type ElementRef, forwardRef } from "react";
import {
  DatePickerDayCalendar,
  DatePickerMonthCalendar,
  DatePickerYearCalendar,
  datePickerContentClasses,
} from "../date-picker/DatePicker";
import { useFieldControlContext } from "../field-control";
import type { ValueOrFunction } from "../types";
import { type SizeType, getValue } from "../utils";

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
  size?: SizeType;
};

export const Calendar = forwardRef<
  ElementRef<typeof ArkDatePicker.Root>,
  Calendar
>(function Calendar(
  {
    name,
    disabled,
    readOnly,
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
  const _readOnly =
    readOnly ?? getValue(isReadOnly) ?? fieldControlContext.isReadOnly;

  const calendarProps: DatePickerRootProps = {
    ...props,
    name: _name,
    disabled: _disabled,
    readOnly: _readOnly,
    open: true,
    closeOnSelect: false,
    value: value ? [value] : undefined,
    onValueChange: ({ valueAsString }) => onValueChange?.(valueAsString[0]),
    defaultValue: defaultValue ? [defaultValue] : undefined,
  };

  return (
    <ArkDatePicker.Root {...calendarProps} ref={forwardedRef}>
      <ArkDatePicker.Content className={datePickerContentClasses({ size })}>
        <DatePickerDayCalendar size={size} />
        <DatePickerMonthCalendar size={size} />
        <DatePickerYearCalendar size={size} />
      </ArkDatePicker.Content>
    </ArkDatePicker.Root>
  );
});
