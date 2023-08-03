import React from "react";
import { format } from "date-fns";
import { classNames } from "@rafty/utils";
import { Button } from "../button";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { Calendar } from "./calendar";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { DayPickerSingleProps } from "react-day-picker";

type DatePicker = Omit<DayPickerSingleProps, "mode">;

export function DatePicker(props: DatePicker) {
  const [date, setDate] = React.useState<Date>();

  React.useEffect(() => {
    setDate(props.selected);
  }, [props.selected]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={classNames("!justify-start text-left font-normal w-full")}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            props.formatters && props.formatters.formatDay ? (
              props.formatters.formatDay(date)
            ) : (
              format(date, "PPP")
            )
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto !p-0 border-0">
        <Calendar
          mode="single"
          {...props}
          selected={date}
          onSelect={(date, selectedDay, activeModifiers, e) => {
            setDate(date);
            if (props.onSelect && date)
              props.onSelect(date, selectedDay, activeModifiers, e);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
