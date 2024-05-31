"use client";
import {
  DatePicker as ArkDatePicker,
  type DatePickerRootProps,
  Portal,
  useDatePickerContext,
} from "@ark-ui/react";
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";
import { type ElementRef, forwardRef } from "react";
import { Button } from "../button";
import { InputField } from "../input-field";
import { InputGroup, Suffix } from "../input-group";
import type { ValueOrFunction } from "../types";
import { classNames, getValue } from "../utils";

export type DatePicker = Omit<
  DatePickerRootProps,
  "value" | "onValueChange" | "defaultValue"
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

export const datPickerControlClasses = cva("flex w-full", {
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

export const datePickerContentClasses = cva(
  "dark:bg-secondary-900 dark:border-secondary-800 border bg-white dark:text-white",
  {
    variants: {
      size: {
        sm: "p-2 rounded-md shadow-md",
        md: "p-4 rounded-lg shadow-lg",
        lg: "p-6 rounded-xl shadow-xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const DatePicker = forwardRef<
  ElementRef<typeof ArkDatePicker.Root>,
  DatePicker
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
      className,
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
        value={value ? [value] : undefined}
        onValueChange={({ valueAsString }) => onValueChange?.(valueAsString[0])}
        defaultValue={defaultValue ? [defaultValue] : undefined}
        disabled={disabled}
        readOnly={readOnly}
        className={classNames("w-full", className)}
        ref={forwardedRef}
      >
        <ArkDatePicker.Control className={datPickerControlClasses({ size })}>
          <ControlRender placeholder={placeholder} size={size} />
        </ArkDatePicker.Control>
        <Portal>
          <ArkDatePicker.Positioner>
            <ArkDatePicker.Content
              className={datePickerContentClasses({ size })}
            >
              <DatePickerDayCalendar size={size} />
              <DatePickerMonthCalendar size={size} />
              <DatePickerYearCalendar size={size} />
            </ArkDatePicker.Content>
          </ArkDatePicker.Positioner>
        </Portal>
      </ArkDatePicker.Root>
    );
  },
);
DatePicker.displayName = "DatePicker";

export const datePickerCalendarTriggerClasses = cva(
  "border-secondary-300 text-secondary-500 dark:text-secondary-400 data-[state=open]:text-black dark:data-[state=open]:text-white",
  {
    variants: {
      size: {
        sm: "p-1.5 min-w-[30px] min-h-[30px] size-[30px] rounded-base",
        md: "p-2 min-w-[38px] min-h-[38px] size-[38px] rounded-md",
        lg: "p-2.5 min-w-[46px] min-h-[46px] size-[46px] rounded-md",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const datePickerClearButtonClasses = cva("pointer-events-auto rounded", {
  variants: {
    size: {
      sm: "size-5 p-0.5 rounded-sm",
      md: "size-6 p-1 rounded-base",
      lg: "size-7 p-1.5 rounded-base",
    },
  },
});

function ControlRender({
  placeholder,
  size = "md",
}: Pick<DatePicker, "size" | "placeholder">) {
  const { value } = useDatePickerContext();

  return (
    <>
      <InputGroup size={size} className="w-full">
        <ArkDatePicker.Input placeholder={placeholder} asChild>
          <InputField />
        </ArkDatePicker.Input>
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

export const datePickerDayCalendarButtonClasses = {
  size: {
    sm: "text-sm size-9 rounded",
    md: "text-base size-10 rounded-md",
    lg: "text-lg size-12 rounded-lg",
  },
};

export type DatePickerDayCalendar = {
  size: "sm" | "md" | "lg";
};

export function DatePickerDayCalendar({ size = "md" }: DatePickerDayCalendar) {
  return (
    <ArkDatePicker.View view="day">
      <ArkDatePicker.Context>
        {(datePicker) => (
          <>
            <DatePickerCalendarHeader size={size} />
            <ArkDatePicker.Table>
              <ArkDatePicker.TableHead>
                <ArkDatePicker.TableRow>
                  {datePicker.weekDays.map((weekDay) => (
                    <ArkDatePicker.TableHeader
                      key={weekDay.narrow}
                      className={classNames(
                        "text-secondary-500 font-semibold",
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
                      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                      <ArkDatePicker.TableCell key={index} value={day}>
                        <ArkDatePicker.TableCellTrigger asChild>
                          <Button
                            variant="ghost"
                            size={size}
                            className={classNames(
                              "p-0 font-medium text-black dark:text-white",
                              "data-[today=]:text-primary-500 dark:data-[today=]:text-primary-300 data-[today=]:font-semibold",
                              "data-[outside-range=]:text-secondary-400/80 dark:data-[outside-range=]:text-secondary-600 data-[outside-range=]:cursor-not-allowed data-[outside-range=]:ring-0 data-[outside-range=]:hover:bg-transparent dark:data-[outside-range=]:ring-0 dark:data-[outside-range=]:ring-offset-0 dark:data-[outside-range=]:hover:bg-transparent",
                              "data-[selected=]:text-primary-500 dark:data-[selected=]:text-primary-300 data-[selected=]:bg-primary-200/70 dark:data-[selected=]:bg-primary-400/20",
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

export const datePickerMonthAndYearButtonClasses = cva(
  "py-0 font-medium text-black dark:text-white",
  {
    variants: {
      size: {
        sm: "h-10 w-[70px] rounded",
        md: "h-12 w-20 rounded-md",
        lg: "h-14 w-24 rounded-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type DatePickerMonthCalendar = {
  size: "sm" | "md" | "lg";
};

export function DatePickerMonthCalendar({ size }: DatePickerMonthCalendar) {
  return (
    <ArkDatePicker.View view="month">
      <ArkDatePicker.Context>
        {(datePicker) => (
          <>
            <DatePickerCalendarHeader size={size} />
            <ArkDatePicker.Table>
              <ArkDatePicker.TableBody>
                {datePicker
                  .getMonthsGrid({ columns: 4, format: "short" })
                  .map((months, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    <ArkDatePicker.TableRow key={index}>
                      {months.map((month, index) => (
                        <ArkDatePicker.TableCell
                          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                          key={index}
                          value={month.value}
                        >
                          <ArkDatePicker.TableCellTrigger asChild>
                            <Button
                              variant="ghost"
                              size={size}
                              className={datePickerMonthAndYearButtonClasses({
                                size,
                              })}
                            >
                              {month.label}
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

export type DatePickerYearCalendar = {
  size: "sm" | "md" | "lg";
};

export function DatePickerYearCalendar({ size }: DatePickerYearCalendar) {
  return (
    <ArkDatePicker.View view="year">
      <ArkDatePicker.Context>
        {(datePicker) => (
          <>
            <DatePickerCalendarHeader size={size} />
            <ArkDatePicker.Table>
              <ArkDatePicker.TableBody>
                {datePicker.getYearsGrid({ columns: 4 }).map((years, index) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  <ArkDatePicker.TableRow key={index}>
                    {years.map((year, index) => (
                      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                      <ArkDatePicker.TableCell key={index} value={year.value}>
                        <ArkDatePicker.TableCellTrigger asChild>
                          <Button
                            variant="ghost"
                            size={size}
                            className={datePickerMonthAndYearButtonClasses({
                              size,
                            })}
                          >
                            {year.label}
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

export const datePickerCalendarHeaderClasses = cva(
  "flex items-center justify-between",
  {
    variants: {
      size: {
        sm: "mb-1.5",
        md: "mb-2.5",
        lg: "mb-3.5",
      },
    },
  },
);

export const datePickerCalendarHeaderNextAndPrevButtonClasses = cva("", {
  variants: {
    size: {
      sm: "p-2 size-8 rounded-base",
      md: "p-[9px] size-9 rounded-md",
      lg: "p-2.5 size-10 rounded-lg",
    },
  },
});

export const datePickerCalendarHeaderViewTriggerClasses = cva("py-0", {
  variants: {
    size: {
      sm: "px-2 h-8 rounded-base text-xs",
      md: "px-2.5 h-9 rounded-md text-sm",
      lg: "px-3 h-10 rounded-lg text-md",
    },
  },
});

export type DatePickerCalendarHeader = {
  size: "sm" | "md" | "lg";
};

export function DatePickerCalendarHeader({ size }: DatePickerCalendarHeader) {
  return (
    <ArkDatePicker.ViewControl
      className={datePickerCalendarHeaderClasses({ size })}
    >
      <ArkDatePicker.PrevTrigger asChild>
        <Button
          variant="ghost"
          className={datePickerCalendarHeaderNextAndPrevButtonClasses({ size })}
        >
          <ChevronLeftIcon className="size-full stroke-[3]" />
        </Button>
      </ArkDatePicker.PrevTrigger>
      <ArkDatePicker.ViewTrigger asChild>
        <Button
          variant="ghost"
          className={datePickerCalendarHeaderViewTriggerClasses({ size })}
        >
          <ArkDatePicker.RangeText />
        </Button>
      </ArkDatePicker.ViewTrigger>
      <ArkDatePicker.NextTrigger asChild>
        <Button
          variant="ghost"
          className={datePickerCalendarHeaderNextAndPrevButtonClasses({ size })}
        >
          <ChevronRightIcon className="size-full stroke-[3]" />
        </Button>
      </ArkDatePicker.NextTrigger>
    </ArkDatePicker.ViewControl>
  );
}
