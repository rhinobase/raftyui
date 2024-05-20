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
import {
  CONTENT_CLASSES,
  CONTROL_CLASSES,
  ICON_CLASSES,
  NEXT_PREV_BUTTON_CLASSES,
  TABLE_CELL_CLASSES,
  TABLE_CELL_TRIGGER_CLASSES,
  TRIGGER_CLASSES,
  TRIGGER_ICON_CLASSES,
  VIEW_TRIGGER_CLASSES,
} from "../date-picker/DatePicker";
import { inputFieldClasses } from "../input-field";
import { InputGroup, Suffix } from "../input-group";
import type { ValueOrFunction } from "../types";
import { classNames, getValue } from "../utils";

type ValueType = [string] | [string, string] | undefined;

export type RangePicker = Omit<
  DatePickerRootProps,
  "value" | "onValueChange" | "defaultValue"
> & {
  isDisabled?: ValueOrFunction<boolean>;
  isReadOnly?: ValueOrFunction<boolean>;
  isLoading?: ValueOrFunction<boolean>;
  placeholder?: {
    from?: string;
    to?: string;
  };
  value?: ValueType;
  onValueChange?: (value?: ValueType) => void;
  defaultValue?: ValueType;
  size?: "sm" | "md" | "lg";
};

export const RangePicker = forwardRef<
  ElementRef<typeof ArkDatePicker.Root>,
  RangePicker
>(
  (
    {
      size = "md",
      isDisabled,
      isLoading,
      isReadOnly,
      placeholder,
      value,
      defaultValue,
      onValueChange,
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
        selectionMode="range"
        defaultValue={defaultValue}
        value={value}
        onValueChange={({ valueAsString }) =>
          onValueChange?.([valueAsString[0], valueAsString[1]])
        }
        disabled={disabled}
        readOnly={readOnly}
        ref={forwardedRef}
      >
        <ArkDatePicker.Control
          className={classNames(
            "flex w-full items-center",
            CONTROL_CLASSES[size],
          )}
        >
          <ControlRender placeholder={placeholder} size={size} />
        </ArkDatePicker.Control>
        <Portal>
          <ArkDatePicker.Positioner>
            <ArkDatePicker.Content
              className={classNames(
                "dark:bg-secondary-900 dark:border-secondary-800 rounded-lg border bg-white shadow-lg dark:text-white",
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
RangePicker.displayName = "RangePicker";

function ControlRender({
  placeholder,
  size = "md",
}: Pick<RangePicker, "size" | "placeholder">) {
  const { value } = useDatePickerContext();

  return (
    <>
      <InputGroup size={size}>
        <div
          className={inputFieldClasses({
            className: "flex items-center pr-9",
            size,
          })}
        >
          <ArkDatePicker.Input
            index={0}
            placeholder={placeholder?.from}
            className="bg-transparent px-2 text-center outline-none"
          />
          <ArrowRightIcon className="stroke-secondary-500 size-3.5 min-h-3.5 min-w-3.5 stroke-[3]" />
          <ArkDatePicker.Input
            index={1}
            placeholder={placeholder?.to}
            className="bg-transparent px-2 text-center outline-none"
          />
        </div>
        {value.length > 0 && (
          <Suffix>
            <ArkDatePicker.ClearTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                colorScheme="error"
                className="pointer-events-auto rounded p-1"
              >
                <XMarkIcon className="size-4 stroke-2" />
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

function DayCalender({ size = "md" }: Pick<RangePicker, "size">) {
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

function MonthCalender({ size = "md" }: Pick<RangePicker, "size">) {
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

function YearCalender({ size = "md" }: Pick<RangePicker, "size">) {
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

function CalendarHeader({ size = "md" }: Pick<RangePicker, "size">) {
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
