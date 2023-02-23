import dayjs from "dayjs";
import * as Popover from "@radix-ui/react-popover";
import React, { useEffect, useState } from "react";

import { useLilius } from "use-lilius";
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

// const years = [
//   2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030,
// ];

export const DatePicker = ({
  picker = "date",
  ...props
}: {
  defaultValues?: Date[];
  onSelect?: (values: Date[]) => void;
  picker?: "date" | "month" | "year";
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
    selected: props.defaultValues,
  });

  const currentYear = new Date().getFullYear();
  const currentStartYear = Math.floor(currentYear / 10) * 10 - 1;

  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [startyear, setStartYear] = useState(currentStartYear);
  const [showDate, setShowDate] = useState(picker == "date");
  const [showMonth, setShowMonth] = useState(picker == "month");
  const [showYear, setShowYear] = useState(picker == "year");

  let years = [];
  for (let index = startyear; index <= startyear + 11; index++) {
    years.push(index);
  }

  // Only accept digits and forward slash as input.
  const onInputChange = (input: string) => {
    // if (picker == "year") toggle(new Date().setFullYear(2022), true);
    setInputValue(input.trim().replace(/[^\d/]+/g, ""));
  };

  // When the input field loses focus, we need to parse
  // the input to set the date. While doing this, we also do some
  // assumptions for the user and fix mistakes.
  const onInputBlur = () => {
    // If the input is empty, we should just go ahead and
    // clear the current selection.
    if (inputValue === "") {
      clearSelected();
      return;
    }

    const parts = inputValue.split("/");
    const partsAsNumber = parts.map((p) => parseInt(p, 10));

    // Make sure the month is within the valid range
    // of months (1 - 12). If no month is given, default
    // to the one we're looking at.

    if (parts.length < 1) {
      parts[0] = `${dayjs(viewing).get("month")}`;
    } else if (partsAsNumber[0] < 1) {
      parts[0] = "1";
    } else if (partsAsNumber[0] > 12) {
      parts[0] = "12";
    }

    // Make sure the day is within the valid range
    // of days (1 - last day of the given month). If no
    // day is given, default to the first day.
    if (parts.length < 2) {
      parts[1] = "1";
    } else if (partsAsNumber[1] < 1) {
      parts[1] = "1";
    } else if (partsAsNumber[1] > dayjs(viewing).endOf("month").date()) {
      parts[1] = `${dayjs(viewing).endOf("month").date()}`;
    }

    // If no year is given, default to the one we're looking at.
    // If the user passes in 2 digits, append them to the first 2 digits
    // of the year we're looking at. Example: `12` becomes `2012` if we're
    // looking at any year between 2000 and 2999.
    if (parts.length < 3) {
      parts[2] = `${dayjs(viewing).get("year")}`;
    } else if (partsAsNumber[2] > 9 && partsAsNumber[2] < 999) {
      parts[2] = `${
        Math.round(dayjs(viewing).get("year") / 1000) * 1000 + partsAsNumber[2]
      }`;
    }

    if (picker == "month") {
      if (partsAsNumber[1] > 9 && partsAsNumber[1] < 999) {
        parts[1] = `${
          Math.round(dayjs(viewing).get("year") / 1000) * 1000 +
          partsAsNumber[1]
        }`;
      }
    }

    console.log(parts[1]);

    const parsed =
      picker == "date"
        ? dayjs()
            .set("month", partsAsNumber[0] - 1)
            .set("date", partsAsNumber[1])
            .set("year", parseInt(parts[2]))
        : dayjs()
            .set("month", parseInt(parts[0]) - 1)
            .set("year", parseInt(parts[1]))
            .set("date", 1);
    // parse(parts.join("/"), "MM/DD/YYYY", new Date());

    console.log(parsed);

    if (dayjs(parsed).isValid()) {
      if (picker == "date") {
        setViewing(parsed.toDate());
        select(parsed.toDate(), true);
      }
    } else if (selected.length > 0) {
      setInputValue(
        dayjs(selected[0]).format(
          picker == "month"
            ? "MM/YYYY"
            : picker == "year"
            ? "YYYY"
            : "MM/DD/YYYY",
        ),
      );
    } else {
      setInputValue("");
    }
  };

  // When the selection is changed, we want to update the input field
  // and the currently viewed month to match.
  useEffect(() => {
    setInputValue(
      selected.length > 0
        ? dayjs(selected[0]).format(
            picker == "month"
              ? "MM/YYYY"
              : picker == "year"
              ? "YYYY"
              : "MM/DD/YYYY",
          )
        : "",
    );
    // setViewing(selected.length > 0 ? selected[0] : new Date());

    if (props.onSelect) props.onSelect(selected);
  }, [selected, setViewing]);

  return (
    <div className="w-[300px]">
      <Popover.Root>
        <Popover.Trigger>
          <div className="relative">
            <InputField
              onBlur={() => {
                onInputBlur();
              }}
              // onFocus={() => setIsOpen(true)}
              onChange={(e) => onInputChange(e.target.value)}
              placeholder={placeholder}
              maxLength={
                picker == "year" ? 4 : picker == "month" ? 7 : undefined
              }
              className="pr-10 select-none"
              value={inputValue}
            />

            <div className="absolute right-0 h-full w-10 top-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
                onClick={() => setIsOpen(!isOpen)}
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
            align="start"
            className="shadow-[0px_5px_20px_1px_rgba(0,0,0,0.1)] min-w-[300px] bg-white dark:bg-zinc-800 rounded-md mt-1"
          >
            {showDate || showMonth ? (
              <div className="flex justify-between items-center w-full py-2 px-3 border-b border-zinc-200/50 dark:border-zinc-700">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 text-black/40 hover:text-black cursor-pointer"
                    onClick={viewPreviousYear}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                    />
                  </svg>

                  {picker == "date" && showDate && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 text-black/40 hover:text-black cursor-pointer"
                      onClick={viewPreviousMonth}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  )}
                </div>
                <div className="flex gap-2">
                  {picker == "date" && showDate && (
                    <Button
                      onClick={() => {
                        setShowMonth(true);
                        setShowDate(false);
                        setShowYear(false);
                      }}
                      variant="ghost"
                      className="py-1"
                    >
                      {dayjs(viewing).format("MMMM")}
                    </Button>
                  )}
                  <Button
                    onClick={() => {
                      picker == "date" && setShowDate(false);
                      setShowMonth(false);
                      setShowYear(true);
                    }}
                    variant="ghost"
                    className="py-1"
                  >
                    {dayjs(viewing).format("YYYY")}
                  </Button>
                </div>
                {/* <p>{format(viewing, "MMMM yyyy")}</p> */}
                <div className="flex items-center gap-2">
                  {picker == "date" && showDate && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 text-black/40 hover:text-black cursor-pointer"
                      onClick={viewNextMonth}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  )}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 text-black/40 hover:text-black cursor-pointer"
                    onClick={viewNextYear}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            ) : (
              <div className="flex justify-between items-center w-full py-2 px-3 border-b border-zinc-200/50 dark:border-zinc-700">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 text-black/40 hover:text-black cursor-pointer"
                    onClick={() => setStartYear((prev) => prev - 10)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                    />
                  </svg>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" className="py-1 select-none">
                    {startyear + 1} - {startyear + 10}
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 text-black/40 hover:text-black cursor-pointer"
                    onClick={() => setStartYear((prev) => prev + 10)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            )}
            {picker == "date" && showDate && (
              <div className="px-6 py-6">
                <div className="grid grid-cols-7 gap-4 mb-4">
                  {calendar.length > 0 &&
                    calendar[0][0].map((day) => (
                      <div key={`${day}`} className="text-center text-xs">
                        {
                          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
                            dayjs(day).get("day")
                          ]
                        }
                      </div>
                    ))}
                </div>

                {calendar[0].map((week) => (
                  <div
                    key={`week-${week[0]}`}
                    className="grid grid-cols-7 gap-2 mb-1"
                  >
                    {week.map((day) => (
                      <button
                        data-in-range={inRange(
                          day,
                          dayjs(viewing).startOf("month").toDate(),
                          dayjs(viewing).endOf("month").toDate(),
                        )}
                        key={`${day}`}
                        onClick={() => {
                          toggle(day, true);
                        }}
                        className={classNames(
                          dayjs().format("DD/MM/YYYY") ==
                            dayjs(day).format("DD/MM/YYYY") &&
                            "!border-primary-500",
                          dayjs(selected[0]).format("DD/MM/YYYY") ==
                            dayjs(day).format("DD/MM/YYYY") &&
                            "bg-primary-500 !text-white",
                          "hover:bg-black/10",
                          dayjs(viewing).startOf("month").toDate() > day &&
                            "text-black/40",
                          dayjs(viewing).endOf("month").toDate() < day &&
                            "text-black/40",
                          "text-center cursor-pointer text-xs border border-transparent leading-7 rounded-md transition-all",
                        )}
                      >
                        <>
                          <p>{dayjs(day).format("DD")}</p>
                        </>
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {showMonth && (
              <div className="px-4 py-6">
                <div className="grid grid-cols-3 gap-3 mb-2">
                  {months.map((month, index) => (
                    <Button
                      key={index}
                      active={dayjs(viewing).get("month") == index}
                      colorScheme={
                        dayjs(viewing).get("month") == index
                          ? "primary"
                          : "secondary"
                      }
                      className={classNames(" w-full")}
                      onClick={() => {
                        viewMonth(index);
                        picker == "date" && setShowDate(true);
                        picker == "date" && setShowMonth(false);
                        picker == "month" && setIsOpen(false);
                        picker == "month" &&
                          toggle(new Date(viewing.setMonth(index)), true);
                      }}
                      variant={
                        dayjs(viewing).get("month") == index ? "solid" : "ghost"
                      }
                      size="sm"
                    >
                      {month}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {showYear && (
              <div className="px-4 py-6">
                <div className="grid grid-cols-3 gap-3">
                  {years.map((year, index) => (
                    <Button
                      key={index}
                      className="w-full select-none"
                      active={dayjs(viewing).get("year") == year}
                      variant={
                        dayjs(viewing).get("year") == year ? "solid" : "ghost"
                      }
                      colorScheme={
                        dayjs(viewing).get("year") == year
                          ? "primary"
                          : "secondary"
                      }
                      onClick={() => {
                        viewYear(year);
                        (picker == "date" || picker == "month") &&
                          setShowMonth(true);
                        (picker == "date" || picker == "month") &&
                          setShowYear(false);
                        picker == "year" && setIsOpen(false);
                        picker == "year" &&
                          toggle(new Date(viewing.setFullYear(year)), true);
                      }}
                      size="sm"
                    >
                      {year}
                    </Button>
                  ))}
                </div>
              </div>
            )}
            {/* <Popover.Arrow className="fill-white" /> */}
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};
