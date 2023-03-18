import dayjs from "dayjs";
import isTodayPlugin from "dayjs/plugin/isToday";
import * as Popover from "@radix-ui/react-popover";
import React, { Children, useEffect, useState } from "react";
import { Month, useLilius } from "use-lilius";
import { InputField } from "../input-field";
import { Button } from "../button";
import { classNames } from "@rhinobase/utils";
import { MonthPanel } from "./MonthPanel";
import { YearPanel } from "./YearPanel";
import { DayPanel } from "./DayPanel";
import { PickerHeader } from "./PickerHeader";

dayjs.extend(isTodayPlugin);

enum Show {
  DATE,
  MONTH,
  YEAR,
  YEARS,
}

export const DatePicker = ({
  picker = "date",
  ...props
}: {
  defaultValues?: Date[] | Date;
  onSelect?: (values: Date) => void;
  picker?: "date" | "month" | "year";
  format?: string;
  placeholder?: string;
}) => {
  const placeholder = props.placeholder ?? "Select a " + picker;
  const {
    calendar,
    clearSelected,
    inRange,
    isSelected,
    select,
    selected,
    setViewing,
    setSelected,
    toggle,
    viewing,
    viewNextMonth,
    viewPreviousMonth,
    viewNextYear,
    viewPreviousYear,
    viewMonth,
    viewYear,
  } = useLilius({
    selected: props.defaultValues
      ? Array.isArray(props.defaultValues)
        ? props.defaultValues
        : [props.defaultValues]
      : undefined,
  });

  const [show, setShow] = useState<Show>(
    picker == "date" ? Show.DATE : picker == "month" ? Show.MONTH : Show.YEAR,
  );

  var format = props.format;
  if (!format)
    switch (picker) {
      case "date":
        format = "MM/DD/YYYY";
        break;
      case "month":
        format = "MM/YYYY";
        break;
      case "year":
        format = "YYYY";
        break;
      default:
        break;
    }

  // When the input field loses focus, we need to parse
  // the input to set the date. While doing this, we also do some
  // assumptions for the user and fix mistakes.
  const onInputBlur = (value: string) => {
    // If the input is empty, we should just go ahead and
    // clear the current selection.
    if (value === "") {
      clearSelected();
      return;
    }

    const parsed = dayjs(value, format, true);

    if (parsed.isValid()) {
      setViewing(parsed.toDate());
    } else {
      clearSelected();
    }
  };

  return (
    <Popover.Root>
      <Popover.Trigger className="group">
        <div className="relative">
          <InputField
            placeholder={placeholder}
            className="select-none pr-10"
            value={selected[0] ? dayjs(selected[0]).format(format) : ""}
            onChange={(e) => onInputBlur(e.target.value)}
          />
          <div className="absolute right-0 top-0 flex h-full w-10 items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="group-data-[state=open]:text-primary-500 dark:group-data-[state=open]:text-primary-300 h-5 w-5 stroke-2 text-black/50 dark:text-white/70"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
          </div>
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          sideOffset={5}
          align="start"
          className="min-w-[300px] max-w-[300px] rounded-md bg-white shadow-[0px_5px_20px_1px_rgba(0,0,0,0.1)] dark:bg-zinc-800"
        >
          <PickerHeader
            onFirstPage={() => {
              if (show == Show.YEAR) {
                const tmp = dayjs(viewing);
                setViewing(tmp.year(tmp.year() - 10).toDate());
              } else viewPreviousYear();
            }}
            onPreviousPage={show == Show.DATE ? viewPreviousMonth : undefined}
            onNextPage={show == Show.DATE ? viewNextMonth : undefined}
            onLastPage={() => {
              if (show == Show.YEAR) {
                const tmp = dayjs(viewing);
                setViewing(tmp.year(tmp.year() + 10).toDate());
              } else viewNextYear();
            }}
          >
            {show == Show.DATE ? (
              <div className="flex items-center">
                <Button
                  onClick={() => {
                    setShow(1);
                  }}
                  variant="ghost"
                  className="py-1"
                >
                  {dayjs(viewing).format("MMMM")}
                </Button>
                <Button
                  onClick={() => {
                    setShow(2);
                  }}
                  variant="ghost"
                  className="py-1"
                >
                  {dayjs(viewing).format("YYYY")}
                </Button>
              </div>
            ) : show == Show.MONTH ? (
              <Button
                onClick={() => {
                  setShow(2);
                }}
                variant="ghost"
                className="py-1"
              >
                {dayjs(viewing).format("YYYY")}
              </Button>
            ) : (
              <Button variant="ghost" className="py-1">
                {dayjs(viewing)
                  .year(Math.floor(dayjs(viewing).year() / 10) * 10)
                  .format("YYYY")}{" "}
                -{" "}
                {dayjs(viewing)
                  .year(Math.ceil(dayjs(viewing).year() / 10) * 10)
                  .format("YYYY")}
              </Button>
            )}
          </PickerHeader>

          {show == Show.DATE && (
            <Popover.Close className="w-full">
              <DayPanel
                calendar={calendar}
                selected={selected}
                inRange={inRange}
                isSelected={isSelected}
                onSelect={(date) => {
                  setSelected([date]);
                  if (props.onSelect) props.onSelect(date);
                }}
              />
            </Popover.Close>
          )}

          {show == Show.MONTH &&
            (picker == "month" ? (
              <Popover.Close className="w-full">
                <MonthPanel
                  viewing={viewing}
                  selected={selected}
                  onSelect={(month) => {
                    viewMonth(month);
                    toggle(new Date(viewing.setMonth(month)), true);
                  }}
                />
              </Popover.Close>
            ) : (
              <MonthPanel
                viewing={viewing}
                selected={selected}
                onSelect={(month) => {
                  viewMonth(month);
                  if (picker == "date") setShow(Show.DATE);
                  else {
                    toggle(new Date(viewing.setMonth(month)), true);
                  }
                }}
              />
            ))}

          {show == Show.YEAR &&
            (picker == "year" ? (
              <Popover.Close className="w-full">
                <YearPanel
                  selected={selected}
                  viewing={viewing}
                  onSelect={(year) => {
                    viewYear(year);
                    toggle(new Date(viewing.setFullYear(year)), true);
                  }}
                />
              </Popover.Close>
            ) : (
              <YearPanel
                selected={selected}
                viewing={viewing}
                onSelect={(year) => {
                  viewYear(year);

                  if (picker == "date" || picker == "month")
                    setShow(Show.MONTH);
                  else {
                    toggle(new Date(viewing.setFullYear(year)), true);
                  }
                }}
              />
            ))}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
