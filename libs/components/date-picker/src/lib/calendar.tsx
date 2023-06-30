import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { classNames as cn } from "@rafty/utils";
import { DayPicker } from "react-day-picker";
import { buttonClasses } from "@rafty/ui";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "p-3 dark:bg-secondary-800 w-max dark:text-secondary-100 border dark:border-secondary-700 rounded-md",
        className
      )}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonClasses({
            colorScheme: "secondary",
            variant: "outline",
            size: "icon",
            disabled: false,
            loading: false,
            active: false,
          }),
          "h-7 w-7 p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "text-center text-sm p-0 relative first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 cursor-pointer",
        day_selected: cn(
          props.mode === "single" && "rounded-md",
          "bg-primary-500 text-secondary-100 dark:bg-primary-300 dark:text-secondary-900"
        ),
        day_today: cn(
          props.mode === "single" && "rounded-md",
          "ring-1 dark:ring-primary-300 ring-primary-500 relative z-10"
        ),
        day_outside: "opacity-50",
        day_disabled: "opacity-50",
        day_range_start: "!rounded-l-md",
        day_range_end: "!rounded-r-md",
        day_range_middle:
          "aria-selected:bg-secondary-100 aria-selected:text-secondary-900 rounded-none dark:aria-selected:bg-secondary-700 dark:aria-selected:text-secondary-100",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <ChevronLeftIcon className="h-4 w-4 dark:text-secondary-100" />
        ),
        IconRight: ({ ...props }) => (
          <ChevronRightIcon className="h-4 w-4 dark:text-secondary-100" />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";
