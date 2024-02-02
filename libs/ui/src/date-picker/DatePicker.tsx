"use client";
import { CalendarIcon } from "@heroicons/react/24/outline";
import format from "dateformat";
import { useReducer, useState } from "react";
import { DayPickerSingleProps } from "react-day-picker";
import { Calendar } from "../calendar/Calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";

export type DatePicker = {
  onSelect?: (value?: Date) => void;
} & Omit<DayPickerSingleProps, "mode" | "onSelect">;

export const DatePicker = (props: DatePicker) => {
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useReducer((_?: Date, cur?: Date) => {
    // Converting the value
    const value = cur ? new Date(format(cur, "yyyy-mm-dd")) : undefined;

    // Sending the value
    props.onSelect?.(value);

    // Cleanup
    setOpen(false);

    return value;
  }, props.selected);

  return (
    <Popover open={isOpen} onOpenChange={setOpen}>
      <PopoverTrigger
        variant="outline"
        className="w-full justify-start text-left font-normal"
        leftIcon={<CalendarIcon className="size-4" />}
      >
        {selected ? (
          props.formatters?.formatDay ? (
            props.formatters.formatDay(selected)
          ) : (
            format(selected, "longDate")
          )
        ) : (
          <span>Pick a date</span>
        )}
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto max-w-max border-0 p-0">
        <Calendar
          {...props}
          mode="single"
          showOutsideDays
          selected={selected}
          onSelect={setSelected}
          defaultMonth={selected}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

DatePicker.displayName = "DatePicker";
