import { ReactNode, useRef } from "react";
import {
  CalendarState,
  RangeCalendarState,
  useCalendarState,
} from "react-stately";
import {
  AriaCalendarCellProps,
  AriaCalendarGridProps,
  CalendarProps,
  DateValue,
  mergeProps,
  useCalendar,
  useCalendarCell,
  useCalendarGrid,
  useDateFormatter,
  useFocusRing,
  useLocale,
} from "react-aria";
import {
  CalendarDate,
  createCalendar,
  getWeeksInMonth,
  isToday,
} from "@internationalized/date";
import { CalendarButton } from "./calendar-button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { classNames } from "@rafty/utils";
import { ListItem, UnorderedList } from "@rafty/ui";

type cellRender = { date: string; item: ReactNode };

export function CalendarComponent<T extends DateValue>({
  cellRender,
  ...props
}: CalendarProps<T> & { cellRender: cellRender[] }) {
  const { locale } = useLocale();
  const state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  });

  const ref = useRef(null);
  const { calendarProps, prevButtonProps, nextButtonProps, title } =
    useCalendar(props, state);

  return (
    <div
      {...calendarProps}
      ref={ref}
      className="dark:text-secondary-200 px-5 py-10 text-zinc-800 w-full border dark:border-secondary-700 rounded-md"
    >
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex items-center gap-4">
          <MonthDropdown state={state} />
          <YearDropdown state={state} />
          <CalendarButton {...prevButtonProps} variant="ghost">
            <ChevronLeftIcon className="h-4 w-4 stroke-2" />
          </CalendarButton>
          <CalendarButton {...nextButtonProps} variant="ghost">
            <ChevronRightIcon className="h-4 w-4 stroke-2" />
          </CalendarButton>
        </div>
      </div>
      <CalendarGrid state={state} cellRender={cellRender} />
    </div>
  );
}

export function CalendarGrid({
  cellRender,
  state,
  ...props
}: AriaCalendarGridProps & {
  state: CalendarState | RangeCalendarState;
  cellRender: cellRender[];
}) {
  const { locale } = useLocale();
  const { gridProps, headerProps, weekDays } = useCalendarGrid(props, state);

  // Get the number of weeks in the month so we can render the proper number of rows.
  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);

  return (
    <div {...gridProps}>
      <div {...headerProps} className="grid grid-cols-7 mb-5 select-none">
        {weekDays.map((day, index) => (
          <div key={index}>
            <div className="text-right font-medium p-1">{day}</div>
          </div>
        ))}
      </div>
      <div>
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-7">
            {state.getDatesInWeek(weekIndex).map((date, i) => {
              const item = cellRender.find(
                (cell) => cell.date === date?.toString()
              )?.item;
              return date ? (
                <CalendarCell key={i} state={state} date={date} event={item} />
              ) : (
                <div key={i} />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

function CalendarCell({
  state,
  date,
  event,
}: AriaCalendarCellProps & {
  state: CalendarState | RangeCalendarState;
  event: ReactNode;
}) {
  const ref = useRef(null);
  const {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    formattedDate,
    isInvalid,
  } = useCalendarCell({ date }, state, ref);

  // The start and end date of the selected range will have
  // an emphasized appearance.

  // We add rounded corners on the left for the first day of the month,
  // the first day of each week, and the start date of the selection.
  // We add rounded corners on the right for the last day of the month,
  // the last day of each week, and the end date of the selection.

  const { focusProps, isFocusVisible } = useFocusRing();

  function CellRender(date: CalendarDate) {
    let list: ReactNode = ``;
    switch (date.toString()) {
      case "2023-06-28":
        list = (
          <UnorderedList>
            <ListItem className="marker:text-primary-500 dark:marker:text-primary-300">
              Item 1
            </ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem className="marker:text-primary-500 dark:marker:text-primary-300">
              Item 3
            </ListItem>
            <ListItem>Item 4</ListItem>
            <ListItem className="marker:text-primary-500 dark:marker:text-primary-300">
              Item 5
            </ListItem>
          </UnorderedList>
        );
        break;

      default:
        break;
    }
    return list;
  }

  return (
    <div
      {...cellProps}
      className={classNames(
        isFocusVisible ? "z-10" : "z-0",
        "relative px-1 py-0.5"
      )}
    >
      <div
        {...mergeProps(buttonProps, focusProps)}
        ref={ref}
        hidden={isOutsideVisibleRange}
        className={classNames(
          "group outline-none min-w-[24px] cursor-pointer",
          isDisabled && "cursor-not-allowed"
        )}
      >
        <div
          className={classNames(
            "items-center justify-center text-sm transition-all border-t-2 p-1 rounded-sm duration-300",
            isSelected
              ? isDisabled
                ? "opacity-50 cursor-not-allowed"
                : "bg-primary-100/30 dark:bg-primary-900 border-t-primary-500 dark:border-t-primary-300"
              : isToday(date, Intl.DateTimeFormat().resolvedOptions().timeZone)
              ? "border-t-primary-500 dark:border-t-primary-300 hover:bg-secondary-200 dark:hover:bg-secondary-700"
              : "border-t-secondary-200 dark:border-t-secondary-700 hover:bg-secondary-200 dark:hover:bg-secondary-700",
            isInvalid && "border-t-error-500 bg-error-50"
          )}
        >
          <div className="text-right">{formattedDate}</div>
          <div className="h-20 overflow-y-auto">{event}</div>
        </div>
      </div>
    </div>
  );
}

function MonthDropdown({ state }: { state: CalendarState }) {
  const months = [];
  const formatter = useDateFormatter({
    month: "long",
    timeZone: state.timeZone,
  });

  // Format the name of each month in the year according to the
  // current locale and calendar system. Note that in some calendar
  // systems, such as the Hebrew, the number of months may differ
  // between years.
  const numMonths = state.focusedDate.calendar.getMonthsInYear(
    state.focusedDate
  );
  for (let i = 1; i <= numMonths; i++) {
    const date = state.focusedDate.set({ month: i });
    months.push(formatter.format(date.toDate(state.timeZone)));
  }

  const onChange: React.ChangeEventHandler<HTMLSelectElement> | undefined = (
    e
  ) => {
    const value = Number(e.target.value);
    const date = state.focusedDate.set({ month: value });
    state.setFocusedDate(date);
  };

  return (
    <select
      aria-label="Month"
      onChange={onChange}
      value={state.focusedDate.month}
      className={
        "border border-secondary-300 text-sm rounded-md focus:ring-primary-100 dark:focus:ring-primary-800 focus:ring-2 focus:border-primary-500 py-1 px-2 dark:bg-secondary-900 dark:border-secondary-600 dark:focus:border-primary-300"
      }
    >
      {months.map((month, i) => (
        <option key={i} value={i + 1}>
          {month}
        </option>
      ))}
    </select>
  );
}

function YearDropdown({ state }: { state: CalendarState }) {
  const years: any[] = [];
  const formatter = useDateFormatter({
    year: "numeric",
    timeZone: state.timeZone,
  });

  // Format 20 years on each side of the current year according
  // to the current locale and calendar system.
  for (let i = -20; i <= 10; i++) {
    const date = state.focusedDate.add({ years: i });
    years.push({
      value: date,
      formatted: formatter.format(date.toDate(state.timeZone)),
    });
  }

  const onChange: React.ChangeEventHandler<HTMLSelectElement> | undefined = (
    e
  ) => {
    const index = Number(e.target.value);
    const date = years[index].value;
    state.setFocusedDate(date);
  };

  return (
    <select
      aria-label="Year"
      onChange={onChange}
      value={20}
      className={
        "border border-secondary-300 text-sm rounded-md focus:ring-primary-100 dark:focus:ring-primary-800 focus:ring-2 focus:border-primary-500 py-1 px-2 dark:bg-secondary-900 dark:border-secondary-600 dark:focus:border-primary-300"
      }
    >
      {years.map((year, i) => (
        // use the index as the value so we can retrieve the full
        // date object from the list in onChange. We cannot only
        // store the year number, because in some calendars, such
        // as the Japanese, the era may also change.
        <option key={i} value={i}>
          {year.formatted}
        </option>
      ))}
    </select>
  );
}
