import { useRef } from "react";
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
  useFocusRing,
  useLocale,
} from "react-aria";
import {
  createCalendar,
  getWeeksInMonth,
  isSameDay,
  getDayOfWeek,
  isToday,
} from "@internationalized/date";
import { CalendarButton } from "./calendar-button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { classNames } from "@rhino/utils";

export function Calendar<T extends DateValue>(props: CalendarProps<T>) {
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
      className="inline-block p-5 text-zinc-800 dark:text-secondary-200"
    >
      <div className="flex items-center justify-between mb-4">
        <CalendarButton {...prevButtonProps} variant="ghost">
          <ChevronLeftIcon className="h-4 w-4 stroke-2" />
        </CalendarButton>
        <h2 className="font-semibold text-lg">{title}</h2>
        <CalendarButton {...nextButtonProps} variant="ghost">
          <ChevronRightIcon className="h-4 w-4 stroke-2" />
        </CalendarButton>
      </div>
      <CalendarGrid state={state} />
    </div>
  );
}

export function CalendarGrid({
  state,
  ...props
}: AriaCalendarGridProps & {
  state: CalendarState | RangeCalendarState;
}) {
  const { locale } = useLocale();
  const { gridProps, headerProps, weekDays } = useCalendarGrid(props, state);

  // Get the number of weeks in the month so we can render the proper number of rows.
  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);

  return (
    <table
      {...gridProps}
      cellPadding="0"
      className="flex-1 text-zinc-600 dark:text-secondary-200"
    >
      <thead {...headerProps} className="mb-2">
        <tr>
          {weekDays.map((day, index) => (
            <td className="text-center font-semibold" key={index}>
              {day}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <tr key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex)
              .map((date, i) =>
                date ? (
                  <CalendarCell key={i} state={state} date={date} />
                ) : (
                  <td key={i} />
                )
              )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function CalendarCell({
  state,
  date,
}: AriaCalendarCellProps & {
  state: CalendarState | RangeCalendarState;
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

  const range = (state as RangeCalendarState).highlightedRange;
  const isSelectionStart = range ? isSameDay(date, range.start) : isSelected;
  const isSelectionEnd = range ? isSameDay(date, range.end) : isSelected;

  // We add rounded corners on the left for the first day of the month,
  // the first day of each week, and the start date of the selection.
  // We add rounded corners on the right for the last day of the month,
  // the last day of each week, and the end date of the selection.
  const { locale } = useLocale();
  const dayOfWeek = getDayOfWeek(date, locale);
  const isRoundedLeft =
    isSelected && (isSelectionStart || dayOfWeek === 0 || date.day === 1);
  const isRoundedRight =
    isSelected &&
    (isSelectionEnd ||
      dayOfWeek === 6 ||
      date.day === date.calendar.getDaysInMonth(date));

  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <td
      {...cellProps}
      className={classNames(isFocusVisible ? "z-10" : "z-0", "py-0.5 relative")}
    >
      <div
        {...mergeProps(buttonProps, focusProps)}
        ref={ref}
        hidden={isOutsideVisibleRange}
        className={classNames(
          isRoundedLeft && "rounded-l-md",
          isRoundedRight && "rounded-r-md",
          isSelected &&
            (isInvalid
              ? "bg-red-300"
              : "bg-secondary-100 dark:bg-secondary-700/50"),
          "w-8 h-8 outline-none group"
        )}
      >
        <div
          className={classNames(
            isDisabled && !isInvalid && "text-zinc-400",
            // Focus ring, visible while the cell has keyboard focus
            isFocusVisible &&
              "ring-2 group-focus:z-2 ring-primary-600 ring-offset-2",
            // Darker selection background for the start and end.
            isSelectionStart ||
              (isSelectionEnd &&
                (isInvalid
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-primary-500 dark:bg-primary-300 dark:text-black text-white hover:bg-primary-500 dark:hover:bg-primary-300")),
            // Hover state for cells in the middle of the range.
            isSelected &&
              !isDisabled &&
              !(isSelectionStart || isSelectionEnd) &&
              (isInvalid
                ? "hover:bg-red-400"
                : "hover:bg-secondary-200 dark:hover:bg-secondary-700"),
            // Hover state for non-selected cells.
            !isSelected &&
              !isDisabled &&
              "hover:bg-secondary-200 dark:hover:bg-secondary-700",
            isToday(date, Intl.DateTimeFormat().resolvedOptions().timeZone) &&
              "border border-primary-500",
            "w-full h-full rounded flex items-center justify-center cursor-default text-sm transition-all"
          )}
        >
          {formattedDate}
        </div>
      </div>
    </td>
  );
}
