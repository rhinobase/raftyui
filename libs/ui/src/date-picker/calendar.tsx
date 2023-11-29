"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { DayPicker } from "react-day-picker";
import { buttonClasses } from "../button";
import { Select } from "../select";
import { classNames as cn } from "../utils";

export type Calendar = React.ComponentProps<typeof DayPicker> & {
  fullScreen?: boolean;
};

const YEAR_OFFSET = 50;

export function Calendar({
  className,
  classNames,
  fullScreen = false,
  components,
  ...props
}: Calendar) {
  const year = new Date().getFullYear();
  const from_year = year - YEAR_OFFSET;
  const to_year = year + YEAR_OFFSET;

  return (
    <DayPicker
      captionLayout="dropdown-buttons"
      fromYear={from_year}
      toYear={to_year}
      {...props}
      className={cn(
        fullScreen ? "w-full px-8 py-10" : "w-max p-3",
        "dark:bg-secondary-800 dark:text-secondary-100 dark:border-secondary-700 rounded-lg border",
        className,
      )}
      classNames={{
        months: cn(
          fullScreen && "!w-full",
          "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        ),
        month: cn(fullScreen && "w-full", "space-y-4"),
        caption_dropdowns: "flex gap-2",
        vhidden: "hidden",
        caption: "flex justify-center items-center relative",
        nav_button: cn(
          buttonClasses({
            colorScheme: "secondary",
            variant: "ghost",
            size: "icon",
            disabled: false,
            loading: false,
            active: false,
          }),
          "h-7 w-7 p-0 opecity-50 hover:opacity-100",
        ),
        nav: "space-x-1 flex items-center",
        nav_button_previous: "absolute left-0",
        nav_button_next: "absolute right-0",
        table: "w-full border-collapse space-y-1",
        head_row: cn(
          fullScreen ? " py-10" : " mb-2",
          props.mode === "range" ? "gap-0" : "gap-1",
          "grid grid-cols-7",
        ),
        head_cell: cn(
          fullScreen ? "text-right px-2" : "w-9 text-[0.8rem] rounded-md",
          "font-medium text-secondary-600 dark:text-secondary-400",
        ),
        row: cn(
          fullScreen ? "mt-1" : "mb-1",
          props.mode === "range" ? "gap-0" : "gap-1",
          "grid grid-cols-7  ",
        ),
        cell: "cursor-pointer text-sm p-0 relative first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          fullScreen
            ? "h-28 w-full border-t-2 dark:border-secondary-700 hover:bg-secondary-100 dark:hover:bg-secondary-700"
            : "h-9 w-9 p-0 font-normal aria-selected:opacity-100 aria-selected:text-white dark:aria-selected:text-black rounded-md flex items-center justify-center text-center aria-selected:hover:bg-primary-500 dark:aria-selected:hover:bg-primary-300 hover:bg-secondary-200/80 dark:hover:bg-secondary-500 cursor-pointer",
        ),
        day_selected: cn(
          props.mode === "single" && !fullScreen && "rounded-md",
          fullScreen
            ? "border-primary-500 dark:!border-primary-300 bg-secondary-100 dark:bg-secondary-700"
            : "bg-primary-500 text-secondary-100 dark:bg-primary-300 dark:text-secondary-900",
        ),
        day_today: cn(
          props.mode === "single" && !fullScreen && "rounded-md",
          fullScreen
            ? "!border-primary-500 dark:!border-primary-300"
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
          <ChevronLeftIcon className="dark:text-secondary-100 stroke-2" />
        ),
        IconRight: () => (
          <ChevronRightIcon className="dark:text-secondary-100 stroke-2" />
        ),
        Dropdown: ({ children, ...props }) => (
          <Select {...props} variant="solid" className="!w-max !pr-6" size="sm">
            {children}
          </Select>
        ),
      }}
    />
  );
}
Calendar.displayName = "Calendar";
