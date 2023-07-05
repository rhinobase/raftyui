import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { classNames as cn } from "@rafty/utils";
import { DayPicker } from "react-day-picker";
import { buttonClasses } from "../button";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  fullScreen?: boolean;
};

export function Calendar({
  className,
  classNames,
  fullScreen = false,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        fullScreen ? "px-8 py-10 w-full" : "p-3 w-max",
        "dark:bg-secondary-800  dark:text-secondary-100 border dark:border-secondary-700 rounded-md",
        className
      )}
      classNames={{
        months: cn(
          fullScreen && "!w-full",
          "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0"
        ),
        month: cn(fullScreen && "w-full", "space-y-4"),
        caption: "flex justify-center pt-1 items-center relative",
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
        head_row: cn(fullScreen ? "grid grid-cols-7 gap-2 py-4" : "flex"),
        head_cell: cn(
          fullScreen ? "text-right px-2" : "w-9 text-[0.8rem] rounded-md ",
          "font-normal"
        ),
        row: cn(fullScreen ? "grid grid-cols-7 mt-1 gap-2" : "flex w-full"),
        cell: "cursor-pointer text-sm p-0 relative first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          fullScreen
            ? "h-28 w-full border-t-2 dark:border-secondary-700 hover:bg-secondary-100 dark:hover:bg-secondary-700"
            : "h-9 w-9 p-0 font-normal aria-selected:opacity-100 cursor-pointer"
        ),
        day_selected: cn(
          props.mode === "single" && !fullScreen && "rounded-md",
          fullScreen
            ? "border-primary-500 dark:!border-primary-300 bg-secondary-100 dark:bg-secondary-700"
            : "bg-primary-500 text-secondary-100 dark:bg-primary-300 dark:text-secondary-900"
        ),
        day_today: cn(
          props.mode === "single" && !fullScreen && "rounded-md",
          fullScreen
            ? "!border-primary-500 dark:!border-primary-300"
            : "ring-1 dark:ring-primary-300 ring-primary-500 relative z-10"
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
