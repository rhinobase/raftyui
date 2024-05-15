import {
  DatePicker as ArkDatePicker,
  type DatePickerRootProps,
  Portal,
  useDatePickerContext,
} from "@ark-ui/react";
import {
  ArrowRightIcon,
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { type ElementRef, forwardRef } from "react";
import { Button } from "../button";
import { InputField } from "../input-field";
import type { ValueOrFunction } from "../types";
import { classNames, getValue } from "../utils";

export type RangePicker = DatePickerRootProps & {
  isDisabled?: ValueOrFunction<boolean>;
  isReadOnly?: ValueOrFunction<boolean>;
  isLoading?: ValueOrFunction<boolean>;
  placeholder?: {
    from?: string;
    to?: string;
  };
};

export const RangePicker = forwardRef<
  ElementRef<typeof ArkDatePicker.Root>,
  RangePicker
>(
  (
    { isDisabled, isLoading, isReadOnly, placeholder, ...props },
    forwardedRef,
  ) => {
    const disabled =
      props.disabled || getValue(isDisabled) || getValue(isLoading);
    const readOnly = props.readOnly || getValue(isReadOnly);

    return (
      <ArkDatePicker.Root
        {...props}
        selectionMode="range"
        disabled={disabled}
        readOnly={readOnly}
        ref={forwardedRef}
      >
        <ArkDatePicker.Control className="flex w-full items-center gap-2">
          <ControlRender placeholder={placeholder} />
        </ArkDatePicker.Control>
        <Portal>
          <ArkDatePicker.Positioner>
            <ArkDatePicker.Content className="dark:bg-secondary-900 dark:border-secondary-800 rounded-lg border bg-white p-4 shadow-lg dark:text-white">
              <DayCalender />
              <MonthCalender />
              <YearCalender />
            </ArkDatePicker.Content>
          </ArkDatePicker.Positioner>
        </Portal>
      </ArkDatePicker.Root>
    );
  },
);
RangePicker.displayName = "RangePicker";

function ControlRender(props: {
  placeholder?: {
    from?: string;
    to?: string;
  };
}) {
  const { value } = useDatePickerContext();

  return (
    <>
      <ArkDatePicker.Input
        index={0}
        placeholder={props.placeholder?.from}
        asChild
      >
        <InputField />
      </ArkDatePicker.Input>
      <ArrowRightIcon className="stroke-secondary-500 size-3.5 min-h-3.5 min-w-3.5 stroke-[3]" />
      <ArkDatePicker.Input
        index={1}
        placeholder={props.placeholder?.to}
        asChild
      >
        <InputField />
      </ArkDatePicker.Input>
      {value.length > 0 && (
        <ArkDatePicker.ClearTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            colorScheme="error"
            className="p-2"
          >
            <XMarkIcon className="size-5 stroke-2" />
          </Button>
        </ArkDatePicker.ClearTrigger>
      )}
      <ArkDatePicker.Trigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="border-secondary-300 text-secondary-500 p-2"
        >
          <CalendarIcon className="size-5 stroke-2" />
        </Button>
      </ArkDatePicker.Trigger>
    </>
  );
}

function DayCalender() {
  return (
    <ArkDatePicker.View view="day">
      <ArkDatePicker.Context>
        {(datePicker) => (
          <>
            <CalendarHeader />
            <ArkDatePicker.Table>
              <ArkDatePicker.TableHead>
                <ArkDatePicker.TableRow>
                  {datePicker.weekDays.map((weekDay, index) => (
                    <ArkDatePicker.TableHeader
                      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                      key={index}
                      className="text-secondary-500 size-10 text-sm font-semibold"
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
                        className="aria-selected:bg-secondary-200/80 dark:aria-selected:bg-secondary-700/80 rounded"
                      >
                        <ArkDatePicker.TableCellTrigger asChild>
                          <Button
                            variant="ghost"
                            className={classNames(
                              "size-10 rounded p-0 text-base font-medium text-black ring-offset-0 dark:text-white",
                              "data-[today=]:text-primary-500 dark:data-[today=]:text-primary-300 data-[today=]:font-semibold",
                              "data-[outside-range=]:text-secondary-400/80 dark:data-[outside-range=]:text-secondary-600 data-[outside-range=]:cursor-not-allowed data-[outside-range=]:ring-0 data-[outside-range=]:hover:bg-transparent dark:data-[outside-range=]:ring-0 dark:data-[outside-range=]:ring-offset-0 dark:data-[outside-range=]:hover:bg-transparent",
                              "data-[selected=]:text-primary-500 dark:data-[selected=]:text-primary-300 data-[selected=]:bg-primary-200/70 dark:data-[selected=]:bg-primary-400/20",
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

function MonthCalender() {
  return (
    <ArkDatePicker.View view="month">
      <ArkDatePicker.Context>
        {(datePicker) => (
          <>
            <CalendarHeader />
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
                              size="lg"
                              className="h-12 w-20 rounded-md py-0 font-medium text-black dark:text-white"
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

function YearCalender() {
  return (
    <ArkDatePicker.View view="year">
      <ArkDatePicker.Context>
        {(datePicker) => (
          <>
            <CalendarHeader />
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
                            size="lg"
                            className="h-12 w-20 rounded-md py-0 font-medium text-black dark:text-white"
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

function CalendarHeader() {
  return (
    <ArkDatePicker.ViewControl className="mb-2 flex items-center justify-between">
      <ArkDatePicker.PrevTrigger asChild>
        <Button variant="ghost" size="icon" className="size-8 rounded p-0">
          <ChevronLeftIcon className="size-4 stroke-[3]" />
        </Button>
      </ArkDatePicker.PrevTrigger>
      <ArkDatePicker.ViewTrigger asChild>
        <Button variant="ghost" className="h-8 rounded py-0">
          <ArkDatePicker.RangeText />
        </Button>
      </ArkDatePicker.ViewTrigger>
      <ArkDatePicker.NextTrigger asChild>
        <Button variant="ghost" size="icon" className="size-8 rounded">
          <ChevronRightIcon className="size-4 stroke-[3]" />
        </Button>
      </ArkDatePicker.NextTrigger>
    </ArkDatePicker.ViewControl>
  );
}
