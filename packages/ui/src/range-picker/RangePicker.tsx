"use client";
import {
  DatePicker as ArkDatePicker,
  type DatePickerRootProps,
  Portal,
  useDatePickerContext,
} from "@ark-ui/react";
import {
  ArrowRightIcon,
  CalendarIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";
import React, { type ElementRef, forwardRef } from "react";
import { Button } from "../button/index.js";
import {
  DatePickerCalendarHeader,
  DatePickerMonthCalendar,
  DatePickerYearCalendar,
  datPickerControlClasses,
  datePickerCalendarTriggerClasses,
  datePickerClearButtonClasses,
  datePickerContentClasses,
  datePickerDayCalendarButtonClasses,
} from "../date-picker/DatePicker.js";
import { useFieldControlContext } from "../field-control/index.js";
import { inputFieldClasses } from "../input-field/index.js";
import { InputGroup, Suffix } from "../input-group/index.js";
import {
  type SizeType,
  type ValueOrFunction,
  classNames,
  getValue,
} from "../utils/index.js";

type ValueType = [string] | [string, string] | undefined;

export type RangePicker = Omit<
  DatePickerRootProps,
  "value" | "onValueChange" | "defaultValue"
> & {
  placeholder?: {
    from?: string;
    to?: string;
  };
  value?: ValueType;
  onValueChange?: (value?: ValueType) => void;
  defaultValue?: ValueType;
  size?: SizeType;
  isDisabled?: ValueOrFunction;
  isInvalid?: ValueOrFunction;
  isLoading?: ValueOrFunction;
  isReadOnly?: ValueOrFunction;
};

export const RangePicker = forwardRef<
  ElementRef<typeof ArkDatePicker.Root>,
  RangePicker
>(function RangePicker(
  {
    name,
    size = "md",
    disabled,
    readOnly,
    isDisabled,
    isLoading,
    isReadOnly,
    isInvalid,
    placeholder,
    onValueChange,
    className,
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
  const _invalid = getValue(isInvalid) ?? fieldControlContext.isInvalid;
  const _readOnly =
    readOnly ?? getValue(isReadOnly) ?? fieldControlContext.isReadOnly;

  const rangePickerProps: DatePickerRootProps = {
    ...props,
    name: _name,
    disabled: _disabled,
    readOnly: _readOnly,
    selectionMode: "range",
    onValueChange: ({ valueAsString }) =>
      onValueChange?.([valueAsString[0] ?? "", valueAsString[1] ?? ""]),
    className: classNames("w-full", className),
  };

  return (
    <ArkDatePicker.Root {...rangePickerProps} ref={forwardedRef}>
      <ArkDatePicker.Control className={datPickerControlClasses({ size })}>
        <ControlRender
          placeholder={placeholder}
          size={size}
          invalid={_invalid}
          disabled={_disabled}
        />
      </ArkDatePicker.Control>
      <Portal>
        <ArkDatePicker.Positioner>
          <ArkDatePicker.Content className={datePickerContentClasses({ size })}>
            <RangePickerDayCalender size={size} />
            <DatePickerMonthCalendar size={size} />
            <DatePickerYearCalendar size={size} />
          </ArkDatePicker.Content>
        </ArkDatePicker.Positioner>
      </Portal>
    </ArkDatePicker.Root>
  );
});

const rangePickerControlInputClasses =
  "w-full bg-transparent px-2 text-center outline-none";

const rangePickerControlArrowIconClasses = cva(
  "stroke-secondary-500 stroke-[2.5]",
  {
    variants: {
      size: {
        sm: "size-3 min-h-3 min-w-3",
        md: "size-3.5 min-h-3.5 min-w-3.5",
        lg: "size-4 min-h-4 min-w-4",
      },
    },
  },
);

type ControlRender = {
  size: SizeType;
  invalid: boolean;
  disabled: boolean;
} & Pick<RangePicker, "placeholder">;

function ControlRender({
  placeholder,
  size,
  invalid,
  disabled,
}: ControlRender) {
  const { value } = useDatePickerContext();

  return (
    <>
      <InputGroup size={size} className="w-full">
        <div
          className={inputFieldClasses({
            className: "flex items-center pr-9",
            size,
            invalid,
            disabled,
          })}
        >
          <ArkDatePicker.Input
            index={0}
            placeholder={placeholder?.from}
            className={rangePickerControlInputClasses}
          />
          <ArrowRightIcon
            className={rangePickerControlArrowIconClasses({ size })}
          />
          <ArkDatePicker.Input
            index={1}
            placeholder={placeholder?.to}
            className={rangePickerControlInputClasses}
          />
        </div>
        {value.length > 0 && (
          <Suffix>
            <ArkDatePicker.ClearTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                colorScheme="error"
                className={datePickerClearButtonClasses({ size })}
              >
                <XMarkIcon className="size-full stroke-2" />
              </Button>
            </ArkDatePicker.ClearTrigger>
          </Suffix>
        )}
      </InputGroup>
      <ArkDatePicker.Trigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={datePickerCalendarTriggerClasses({ size })}
        >
          <CalendarIcon className="size-full stroke-2" />
        </Button>
      </ArkDatePicker.Trigger>
    </>
  );
}

type RangePickerDayCalender = {
  size: SizeType;
};

function RangePickerDayCalender({ size }: RangePickerDayCalender) {
  return (
    <ArkDatePicker.View view="day">
      <ArkDatePicker.Context>
        {(datePicker) => (
          <>
            <DatePickerCalendarHeader size={size} />
            <ArkDatePicker.Table>
              <ArkDatePicker.TableHead>
                <ArkDatePicker.TableRow>
                  {datePicker.weekDays.map((weekDay, index) => (
                    <ArkDatePicker.TableHeader
                      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                      key={index}
                      className={classNames(
                        "text-secondary-500 font-semibold",
                        // @ts-ignore
                        datePickerDayCalendarButtonClasses.size[size],
                      )}
                    >
                      {weekDay.narrow}
                    </ArkDatePicker.TableHeader>
                  ))}
                </ArkDatePicker.TableRow>
              </ArkDatePicker.TableHead>
              <ArkDatePicker.TableBody>
                {datePicker.weeks.map((week, index) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  <ArkDatePicker.TableRow key={index}>
                    {week.map((day, index) => (
                      <ArkDatePicker.TableCell
                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        key={index}
                        value={day}
                        className="p-0"
                      >
                        <ArkDatePicker.TableCellTrigger asChild>
                          <Button
                            variant="ghost"
                            className={classNames(
                              "p-0 font-medium text-black dark:text-white",
                              "data-[today=]:border-primary-500 dark:data-[today=]:border-primary-300 data-[today=]:font-semibold",
                              "data-[outside-range=]:text-secondary-400/80 dark:data-[outside-range=]:text-secondary-600 data-[outside-range=]:cursor-not-allowed data-[outside-range=]:ring-0 data-[outside-range=]:hover:bg-transparent dark:data-[outside-range=]:ring-0 dark:data-[outside-range=]:ring-offset-0 dark:data-[outside-range=]:hover:bg-transparent",
                              "data-[in-range=]:bg-primary-200/70 dark:data-[in-range=]:bg-primary-400/20",
                              "data-[range-start=]:data-[in-range=]:bg-primary-500 dark:data-[range-start=]:data-[in-range=]:bg-primary-300 data-[range-start=]:text-white dark:data-[range-start=]:text-white",
                              "data-[range-end=]:data-[in-range=]:bg-primary-500 dark:data-[range-end=]:data-[in-range=]:bg-primary-300 data-[range-end=]:text-white dark:data-[range-end=]:text-white",
                              "data-[in-range=]:rounded-none data-[in-range=]:data-[range-end=]:rounded-r data-[in-range=]:data-[range-start=]:rounded-l",
                              // @ts-ignore
                              datePickerDayCalendarButtonClasses.size[size],
                            )}
                          >
                            {day.day}
                          </Button>
                        </ArkDatePicker.TableCellTrigger>
                      </ArkDatePicker.TableCell>
                    ))}
                  </ArkDatePicker.TableRow>
                ))}
              </ArkDatePicker.TableBody>
            </ArkDatePicker.Table>
          </>
        )}
      </ArkDatePicker.Context>
    </ArkDatePicker.View>
  );
}
