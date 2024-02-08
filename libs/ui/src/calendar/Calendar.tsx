"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { BooleanOrFunction, getValue } from "@rafty/shared";
import { DayPicker } from "react-day-picker";
import { buttonClasses } from "../button";
import { Select } from "../select";
import { classNames as cn } from "../utils";

export type Calendar = React.ComponentProps<typeof DayPicker> & {
  fullScreen?: BooleanOrFunction;
  dayClass?: string;
};

const YEAR_OFFSET = 50;

export function Calendar({
  className,
  classNames,
  fullScreen,
  components,
  dayClass,
  ...props
}: Calendar) {
  const year = new Date().getFullYear();
  const from_year = year - YEAR_OFFSET;
  const to_year = year + YEAR_OFFSET;
  const _fullScreen = getValue(fullScreen);

  return (
    <DayPicker
      captionLayout="dropdown-buttons"
      fromYear={from_year}
      toYear={to_year}
      {...props}
      className={cn(
        _fullScreen ? "w-full px-8 py-10" : "w-max p-3",
        "dark:bg-secondary-900 dark:text-secondary-100 dark:border-secondary-700 rounded-lg border",
        className,
      )}
      classNames={{
        months: cn(
          _fullScreen && "w-full",
          "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        ),
        month: cn(_fullScreen && "w-full", "space-y-4"),
        caption_dropdowns: "flex gap-2",
        vhidden: "hidden",
        caption: "flex justify-center items-center relative",
        caption_label: "py-[5px] text-se",
        nav_button: cn(
          buttonClasses({
            colorScheme: "secondary",
            variant: "ghost",
            size: "icon",
            disabled: false,
            loading: false,
            active: false,
          }),
        ),
        nav: "space-x-1 flex items-center",
        nav_button_previous: "absolute left-0",
        nav_button_next: "absolute right-0",
        table: "w-full border-collapse space-y-1",
        head_row: cn(
          _fullScreen ? "py-10" : "mb-2",
          props.mode === "range" ? "gap-0" : "gap-1",
          "grid grid-cols-7",
        ),
        head_cell: cn(
          _fullScreen ? "text-right px-2" : "w-9 text-[0.8rem] rounded-md",
          "font-medium text-secondary-600 dark:text-secondary-400",
        ),
        row: cn(
          _fullScreen ? "mt-1" : "mb-1",
          props.mode === "range" ? "gap-0" : "gap-1",
          "grid grid-cols-7  ",
        ),
        cell: "text-sm p-0 relative focus-within:relative focus-within:z-20",
        day: cn(
          _fullScreen
            ? "h-28 w-full border-t-2 dark:border-secondary-700 "
            : "size-9 p-0 font-normal aria-selected:opacity-100 aria-selected:text-white dark:aria-selected:text-black rounded-md flex items-center justify-center text-center",
          dayClass,
          !props.disabled &&
            _fullScreen &&
            "hover:bg-secondary-100 dark:hover:bg-secondary-700",
          !props.disabled &&
            "hover:bg-secondary-200/80 dark:hover:bg-secondary-500 cursor-pointer aria-selected:hover:bg-primary-500 dark:aria-selected:hover:bg-primary-300",
        ),
        day_selected: cn(
          props.mode === "single" && !_fullScreen && "rounded-md",
          _fullScreen
            ? "border-primary-500 dark:border-primary-300 bg-secondary-100 dark:bg-secondary-700"
            : "bg-primary-500 text-secondary-100 dark:bg-primary-300 dark:text-secondary-900",
        ),
        day_today: cn(
          props.mode === "single" && !_fullScreen && "rounded-md",
          _fullScreen
            ? "border-primary-500 dark:border-primary-300"
            : "ring-1 dark:ring-primary-300 ring-primary-500 relative z-10",
        ),
        day_outside: "opacity-40",
        day_disabled: "opacity-40",
        day_range_start: "!rounded-l-md",
        day_range_end: "!rounded-r-md",
        day_range_middle:
          "aria-selected:bg-secondary-300/70 rounded-none dark:aria-selected:bg-secondary-700 dark:aria-selected:text-secondary-100",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: () => (
          <ChevronLeftIcon className="dark:text-secondary-100 size-4 stroke-2" />
        ),
        IconRight: () => (
          <ChevronRightIcon className="dark:text-secondary-100 size-4 stroke-2" />
        ),
        Dropdown: ({ children, ...props }) => (
          <Select {...props} variant="solid" className="w-max pr-6" size="sm">
            {children}
          </Select>
        ),
      }}
    />
  );
}
Calendar.displayName = "Calendar";
