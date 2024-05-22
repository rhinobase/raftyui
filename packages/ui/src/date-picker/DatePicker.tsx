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

export const CONTENT_CLASSES = {
  sm: "p-2 rounded-md",
  md: "p-4 rounded-lg",
  lg: "p-6 rounded-xl",
};

export const CONTROL_CLASSES = {
  sm: "gap-1.5",
  md: "gap-2",
  lg: "gap-2.5",
};

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
        ref={forwardedRef}
      >
        <ArkDatePicker.Control
          className={classNames("flex w-full", CONTROL_CLASSES[size])}
        >
          <ControlRender placeholder={placeholder} size={size} />
        </ArkDatePicker.Control>
        <Portal>
          <ArkDatePicker.Positioner>
            <ArkDatePicker.Content
              className={classNames(
                "dark:bg-secondary-900 dark:border-secondary-800 border bg-white shadow-lg dark:text-white",
                CONTENT_CLASSES[size],
              )}
            >
              <DayCalender size={size} />
              <MonthCalender size={size} />
              <YearCalender size={size} />
            </ArkDatePicker.Content>
          </ArkDatePicker.Positioner>
        </Portal>
      </ArkDatePicker.Root>
    );
  },
);
DatePicker.displayName = "DatePicker";

export const TRIGGER_CLASSES = {
  sm: "p-1.5 rounded",
  md: "p-2 rounded-md",
  lg: "p-2.5 rounded-md",
};

export const TRIGGER_ICON_CLASSES = {
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
};

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
                className="pointer-events-auto rounded p-1"
              >
                <XMarkIcon className="size-3.5 stroke-2" />
              </Button>
            </ArkDatePicker.ClearTrigger>
          </Suffix>
        )}
      </InputGroup>
      <ArkDatePicker.Trigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={classNames(
            "border-secondary-300 text-secondary-500",
            TRIGGER_CLASSES[size],
          )}
        >
          <CalendarIcon
            className={classNames("stroke-2", TRIGGER_ICON_CLASSES[size])}
          />
        </Button>
      </ArkDatePicker.Trigger>
    </>
  );
}

export const TABLE_CELL_CLASSES = {
  sm: "text-sm size-9 rounded",
  md: "text-base size-10 rounded-md",
  lg: "text-lg size-12 rounded-lg",
};

export function DayCalender({ size = "md" }: Pick<DatePicker, "size">) {
  return (
    <ArkDatePicker.View view="day">
      <ArkDatePicker.Context>
        {(datePicker) => (
          <>
            <CalendarHeader size={size} />
            <ArkDatePicker.Table>
              <ArkDatePicker.TableHead>
                <ArkDatePicker.TableRow>
                  {datePicker.weekDays.map((weekDay, index) => (
                    <ArkDatePicker.TableHeader
                      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                      key={index}
                      className={classNames(
                        "text-secondary-500 font-semibold",
                        TABLE_CELL_CLASSES[size],
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
                            className={classNames(
                              "p-0 font-medium text-black dark:text-white",
                              "data-[today=]:text-primary-500 dark:data-[today=]:text-primary-300 data-[today=]:font-semibold",
                              "data-[outside-range=]:text-secondary-400/80 dark:data-[outside-range=]:text-secondary-600 data-[outside-range=]:cursor-not-allowed data-[outside-range=]:ring-0 data-[outside-range=]:hover:bg-transparent dark:data-[outside-range=]:ring-0 dark:data-[outside-range=]:ring-offset-0 dark:data-[outside-range=]:hover:bg-transparent",
                              "data-[selected=]:text-primary-500 dark:data-[selected=]:text-primary-300 data-[selected=]:bg-primary-200/70 dark:data-[selected=]:bg-primary-400/20",
                              TABLE_CELL_CLASSES[size],
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

export const TABLE_CELL_TRIGGER_CLASSES = {
  sm: "h-10 w-[70px] rounded",
  md: "h-12 w-20 rounded-md",
  lg: "h-14 w-24 rounded-lg",
};

export function MonthCalender({ size = "md" }: Pick<DatePicker, "size">) {
  return (
    <ArkDatePicker.View view="month">
      <ArkDatePicker.Context>
        {(datePicker) => (
          <>
            <CalendarHeader size={size} />
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
                              className={classNames(
                                "py-0 font-medium text-black dark:text-white",
                                TABLE_CELL_TRIGGER_CLASSES[size],
                              )}
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

export function YearCalender({ size = "md" }: Pick<DatePicker, "size">) {
  return (
    <ArkDatePicker.View view="year">
      <ArkDatePicker.Context>
        {(datePicker) => (
          <>
            <CalendarHeader size={size} />
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
                            className={classNames(
                              "py-0 font-medium text-black dark:text-white",
                              TABLE_CELL_TRIGGER_CLASSES[size],
                            )}
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

export const ICON_CLASSES = {
  sm: "size-3.5",
  md: "size-4",
  lg: "size-5",
};

export const VIEW_TRIGGER_CLASSES = {
  sm: "h-8",
  md: "h-9",
  lg: "h-10",
};

export const NEXT_PREV_BUTTON_CLASSES = {
  sm: "size-8",
  md: "size-9",
  lg: "size-10",
};

export function CalendarHeader({ size = "md" }: Pick<DatePicker, "size">) {
  return (
    <ArkDatePicker.ViewControl className="mb-2 flex items-center justify-between">
      <ArkDatePicker.PrevTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={classNames(
            "size-8 rounded",
            NEXT_PREV_BUTTON_CLASSES[size],
          )}
        >
          <ChevronLeftIcon
            className={classNames("stroke-[3]", ICON_CLASSES[size])}
          />
        </Button>
      </ArkDatePicker.PrevTrigger>
      <ArkDatePicker.ViewTrigger asChild>
        <Button
          variant="ghost"
          size={size}
          className={classNames("rounded py-0", VIEW_TRIGGER_CLASSES[size])}
        >
          <ArkDatePicker.RangeText />
        </Button>
      </ArkDatePicker.ViewTrigger>
      <ArkDatePicker.NextTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={classNames(
            "size-8 rounded",
            NEXT_PREV_BUTTON_CLASSES[size],
          )}
        >
          <ChevronRightIcon
            className={classNames("stroke-[3]", ICON_CLASSES[size])}
          />
        </Button>
      </ArkDatePicker.NextTrigger>
    </ArkDatePicker.ViewControl>
  );
}
