import React from "react";
import format from "dateformat";
import { DateRange, DayPickerRangeProps } from "react-day-picker";
import { classNames } from "../utils";
import { Button } from "../button";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { Calendar } from "./calendar";

type RangePicker = Omit<DayPickerRangeProps, "mode">;

export function RangePicker({ className, ...props }: RangePicker) {
  const [date, setDate] = React.useState<DateRange | undefined>(props.selected);

  return (
    <div className={classNames("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={classNames(
              "w-full !justify-start text-left font-normal",
              !date && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "longDate")} -{" "}
                  {format(date.to, "longDate")}
                </>
              ) : (
                format(date.from, "longDate")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto !p-0 border-none" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            {...props}
            selected={date}
            onSelect={(date, selectedDay, activeModifiers, e) => {
              setDate(date);
              if (props.onSelect && date)
                props.onSelect(date, selectedDay, activeModifiers, e);
            }}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
