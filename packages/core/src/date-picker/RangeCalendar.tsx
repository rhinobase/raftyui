import { useRef } from "react";
import { useRangeCalendarState } from "react-stately";
import {
  useRangeCalendar,
  useLocale,
  RangeCalendarProps,
  DateValue,
} from "react-aria";
import { createCalendar } from "@internationalized/date";
import { CalendarButton } from "./calendar-button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { CalendarGrid } from "./calendar";

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
<<<<<<<< HEAD:libs/components/date-picker/src/lib/range-calendar.tsx
    <div
      {...calendarProps}
      ref={ref}
      className="dark:text-secondary-200 p-5 text-zinc-800"
    >
      <div className="flex items-center justify-between pb-4">
        <CalendarButton {...prevButtonProps} variant="ghost">
          <ChevronLeftIcon className="h-4 w-4 stroke-2" />
        </CalendarButton>
        <h2 className="ml-2 text-xl font-semibold">{title}</h2>
        <CalendarButton {...nextButtonProps} variant="ghost">
          <ChevronRightIcon className="h-4 w-4 stroke-2" />
========
    <div {...calendarProps} ref={ref} className="inline-block p-5">
      <div className="flex items-center justify-between pb-4">
        <CalendarButton {...prevButtonProps}>
          <ChevronLeftIcon className="h-5 w-5 text-zinc-600 dark:text-secondary-200" />
        </CalendarButton>
        <h2 className="font-semibold text-xl ml-2">{title}</h2>
        <CalendarButton {...nextButtonProps}>
          <ChevronRightIcon className="h-5 w-5 text-zinc-600 dark:text-secondary-200" />
>>>>>>>> migration:packages/core/src/date-picker/RangeCalendar.tsx
        </CalendarButton>
      </div>
      <CalendarGrid state={state} />
    </div>
  );
}
