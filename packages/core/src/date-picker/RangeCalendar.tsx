import { useRef } from "react";
import { useRangeCalendarState } from "react-stately";
import {
  useRangeCalendar,
  useLocale,
  RangeCalendarProps,
  DateValue,
} from "react-aria";
import { createCalendar } from "@internationalized/date";
import { CalendarButton } from "./FieldButton";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { CalendarGrid } from "./Calendar";

export function RangeCalendar<T extends DateValue>(
  props: RangeCalendarProps<T>
) {
  const { locale } = useLocale();
  const state = useRangeCalendarState({
    ...props,
    locale,
    createCalendar,
  });

  const ref = useRef(null);
  const { calendarProps, prevButtonProps, nextButtonProps, title } =
    useRangeCalendar(props, state, ref);

  return (
    <div {...calendarProps} ref={ref} className="inline-block p-5">
      <div className="flex items-center justify-between pb-4">
        <CalendarButton {...prevButtonProps}>
          <ChevronLeftIcon className="h-5 w-5 text-zinc-600 dark:text-secondary-200" />
        </CalendarButton>
        <h2 className="font-semibold text-xl ml-2">{title}</h2>
        <CalendarButton {...nextButtonProps}>
          <ChevronRightIcon className="h-5 w-5 text-zinc-600 dark:text-secondary-200" />
        </CalendarButton>
      </div>
      <CalendarGrid state={state} />
    </div>
  );
}
