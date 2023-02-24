import dayjs from "dayjs";
import * as Popover from "@radix-ui/react-popover";
import React, { useEffect, useState } from "react";
import { Month, useLilius } from "use-lilius";
import { InputField } from "../input-field";
import { Button } from "../button";
import { classNames } from "@rhinobase/utils";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

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
  onSelect?: (values: Date[]) => void;
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

  const [isOpen, setIsOpen] = useState(false);
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

  // let years = [];
  // for (let index = startyear; index <= startyear + 11; index++) {
  //   years.push(index);
  // }

  // Only accept digits and forward slash as input.
  // const onInputChange = (input: string) => {
  //   // if (picker == "year") toggle(new Date().setFullYear(2022), true);
  //   setInputValue(input.trim().replace(/[^\w\d/-.]+/g, ""));
  // };

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
      select(parsed.toDate(), true);
    } else {
      clearSelected();
    }
  };

  // When the selection is changed, we want to update the input field
  // and the currently viewed month to match.
  // useEffect(() => {
  //   setInputValue(
  //     selected.length > 0
  //       ? dayjs(selected[0]).format(
  //           picker == "month"
  //             ? "MM/YYYY"
  //             : picker == "year"
  //             ? "YYYY"
  //             : "DD/MM/YYYY",
  //         )
  //       : "",
  //   );
  //   // setViewing(selected.length > 0 ? selected[0] : new Date());

  //   if (props.onSelect) props.onSelect(selected);
  // }, [selected, setViewing]);

  return (
    <div className="w-[300px]">
      <Popover.Root>
        <Popover.Trigger className="group">
          <div className="relative">
            <InputField
              onBlur={(e) => onInputBlur(e.target.value)}
              placeholder={placeholder}
              className="select-none pr-10"
              value={dayjs(selected[0]).format(format)}
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
            // side="left"
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
                <>
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
                </>
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
                  viewing={viewing}
                  toggle={toggle}
                  selected={selected}
                  inRange={inRange}
                  setViewing={setViewing}
                />
              </Popover.Close>
            )}

            {show == Show.MONTH &&
              (picker == "month" ? (
                <Popover.Close className="w-full">
                  <MonthPanel
                    viewing={viewing}
                    onSelect={(month) => {
                      viewMonth(month);
                      toggle(new Date(viewing.setMonth(month)), true);
                    }}
                  />
                </Popover.Close>
              ) : (
                <MonthPanel
                  viewing={viewing}
                  onSelect={(month) => {
                    viewMonth(month);
                    if (picker == "date") setShow(Show.DATE);
                    else {
                      setIsOpen(false);
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
                      setIsOpen(false);
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
                      setIsOpen(false);
                      toggle(new Date(viewing.setFullYear(year)), true);
                    }
                  }}
                />
              ))}
            {/* <Popover.Arrow className="fill-white" /> */}
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};

type MonthPanel = {
  viewing: Date;
  onSelect: (month: number) => void;
};
function MonthPanel({ viewing, onSelect }: MonthPanel) {
  return (
    <div className="px-4 py-6">
      <div className="mb-2 grid grid-cols-3 gap-8">
        {months.map((month, index) => (
          <Button
            key={index}
            colorScheme={
              dayjs(viewing).get("month") == index ? "primary" : "secondary"
            }
            className={classNames("w-full !text-sm font-normal")}
            onClick={() => onSelect(index)}
            variant={dayjs(viewing).get("month") == index ? "solid" : "ghost"}
            size="sm"
          >
            {month.substring(0, 3)}
          </Button>
        ))}
      </div>
    </div>
  );
}

type YearPanel = {
  viewing: Date;
  selected: Date[];
  onSelect: (year: number) => void;
};
export function YearPanel({ viewing, onSelect, selected }: YearPanel) {
  const current_year = dayjs(viewing).year();
  const start_year = Math.floor(current_year / 10) * 10 - 1;
  const years = Array(12)
    .fill(undefined)
    .map((_, index) => start_year + index);

  console.log(years);

  return (
    <div className="px-4 py-6">
      <div className="grid grid-cols-3 gap-8">
        {years.map((year) => (
          <Button
            key={year}
            className="w-full select-none !text-sm font-normal"
            variant={dayjs(selected[0]).get("year") == year ? "solid" : "ghost"}
            colorScheme={
              dayjs(selected[0]).get("year") == year ? "primary" : "secondary"
            }
            onClick={() => onSelect(year)}
            size="sm"
          >
            {year}
          </Button>
        ))}
      </div>
    </div>
  );
}

type DayPanel = {
  calendar: Date[][][];
  inRange: (date: Date, min: Date, max: Date) => boolean;
  viewing: Date;
  toggle: (date: Date, replaceExisting?: boolean | undefined) => void;
  selected: Date[];
  setViewing: any;
};
export function DayPanel({
  calendar,
  inRange,
  viewing,
  toggle,
  selected,
  setViewing,
}: DayPanel) {
  return (
    <div className="px-6 pt-6 pb-2">
      <div className="mb-4 grid grid-cols-7 gap-4">
        {calendar.length > 0 &&
          calendar[0][0].map((day) => (
            <div
              key={`${day}`}
              className="text-center text-sm dark:text-white/80"
            >
              {
                ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
                  dayjs(day).get("day")
                ]
              }
            </div>
          ))}
      </div>

      {calendar[0].map((week) => (
        <div key={`week-${week[0]}`} className="mb-3 grid grid-cols-7 gap-2">
          {week.map((day) => (
            <Button
              size="sm"
              variant={
                dayjs(selected[0]).format("MM/DD/YYYY") ==
                dayjs(day).format("MM/DD/YYYY")
                  ? "solid"
                  : dayjs(day).format("MM/DD/YYYY") ==
                    dayjs().format("MM/DD/YYYY")
                  ? "outline"
                  : "ghost"
              }
              colorScheme={
                dayjs(selected[0]).format("MM/DD/YYYY") ==
                  dayjs(day).format("MM/DD/YYYY") ||
                dayjs(day).format("MM/DD/YYYY") == dayjs().format("MM/DD/YYYY")
                  ? "primary"
                  : "secondary"
              }
              data-in-range={inRange(
                day,
                dayjs(viewing).startOf("month").toDate(),
                dayjs(viewing).endOf("month").toDate(),
              )}
              key={`${day}`}
              onClick={() => {
                toggle(day, true);
                setViewing(day);
              }}
              className={classNames(
                "data-[in-range=false]:text-black/40 dark:data-[in-range=false]:text-white/30",
                "cursor-pointer rounded-md border border-transparent text-center !text-sm transition-all",
              )}
            >
              <>
                <p>{dayjs(day).format("DD")}</p>
              </>
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
}

type PickerHeader = {
  onFirstPage?: () => void;
  onPreviousPage?: () => void;
  children: JSX.Element;
  onNextPage?: () => void;
  onLastPage?: () => void;
};
export function PickerHeader(props: PickerHeader) {
  return (
    <div className="flex w-full items-center justify-between border-b border-zinc-200/50 py-2 px-3 dark:border-zinc-700">
      <div className="flex items-center gap-2">
        {props.onFirstPage && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4 cursor-pointer stroke-2 text-black/40 hover:text-black dark:text-white/60 dark:hover:text-white"
            onClick={props.onFirstPage}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
          </svg>
        )}
        {props.onPreviousPage && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4 cursor-pointer stroke-2 text-black/40 hover:text-black dark:text-white/60 dark:hover:text-white"
            onClick={props.onPreviousPage}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        )}
      </div>
      <div className="flex gap-2">{props.children}</div>
      <div className="flex items-center gap-2">
        {props.onNextPage && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4 cursor-pointer stroke-2 text-black/40 hover:text-black dark:text-white/60 dark:hover:text-white"
            onClick={props.onNextPage}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        )}
        {props.onLastPage && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4 cursor-pointer stroke-2 text-black/40 hover:text-black dark:text-white/60 dark:hover:text-white"
            onClick={props.onLastPage}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
