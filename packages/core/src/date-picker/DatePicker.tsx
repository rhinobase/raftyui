import {
  endOfMonth,
  format,
  getDate,
  getDay,
  getMonth,
  getYear,
  isToday,
  isValid,
  lastDayOfMonth,
  parse,
  startOfMonth,
} from "date-fns";
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
const years = [
  2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030,
];

export const DatePicker = (props: {
  defaultValues?: Date[];
  onSelect?: (values: Date[]) => void;
}) => {
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

  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showDate, setShowDate] = useState(true);
  const [showMonth, setShowMonth] = useState(false);
  const [showYear, setShowYear] = useState(false);

  // Only accept digits and forward slash as input.
  const onInputChange = (input: string) => {
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
      parts[0] = `${getMonth(viewing)}`;
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
    } else if (partsAsNumber[1] > getDate(lastDayOfMonth(viewing))) {
      parts[1] = `${getDate(lastDayOfMonth(viewing))}`;
    }

    // If no year is given, default to the one we're looking at.
    // If the user passes in 2 digits, append them to the first 2 digits
    // of the year we're looking at. Example: `12` becomes `2012` if we're
    // looking at any year between 2000 and 2999.
    if (parts.length < 3) {
      parts[2] = `${getYear(viewing)}`;
    } else if (partsAsNumber[2] > 9 && partsAsNumber[2] < 100) {
      parts[2] = `${
        Math.round(getYear(viewing) / 1000) * 1000 + partsAsNumber[2]
      }`;
    }

    const parsed = parse(parts.join("/"), "MM/dd/yyyy", new Date());

    if (isValid(parsed)) {
      select(parsed, true);
    } else if (selected.length > 0) {
      setInputValue(format(selected[0], "MM/dd/yyyy"));
    } else {
      setInputValue("");
    }
  };

  // When the selection is changed, we want to update the input field
  // and the currently viewed month to match.
  useEffect(() => {
    setInputValue(selected.length > 0 ? format(selected[0], "MM/dd/yyyy") : "");
    setViewing(selected.length > 0 ? selected[0] : new Date());

    if (props.onSelect) props.onSelect(selected);
  }, [selected, setViewing]);

  return (
    <div className="w-[300px]">
      <Popover.Root open={true} onOpenChange={() => setIsOpen(false)}>
        <Popover.Trigger>
          <div className="relative">
            <InputField
              onBlur={() => onInputBlur()}
              onFocus={() => setIsOpen(true)}
              onChange={(e) => onInputChange(e.target.value)}
              placeholder="Select a Date"
              className="pr-10"
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
          <Popover.Content className="shadow-[0px_0px_15px_3px_rgba(70,70,70,0.1)] min-w-[360px]">
            <div className="flex justify-between items-center w-full py-2 px-3 border-b">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-black/40 hover:text-black cursor-pointer"
                  onClick={viewPreviousYear}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                  />
                </svg>

                {showDate && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-black/40 hover:text-black cursor-pointer"
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
              {showDate && (
                <Button
                  onClick={() => {
                    setShowMonth(true);
                    setShowDate(false);
                    setShowYear(false);
                  }}
                  variant="ghost"
                >
                  {format(viewing, "MMMM")}
                </Button>
              )}
              <Button
                onClick={() => {
                  setShowDate(false);
                  setShowMonth(false);
                  setShowYear(true);
                }}
                variant="ghost"
              >
                {format(viewing, "yyyy")}
              </Button>
              {/* <p>{format(viewing, "MMMM yyyy")}</p> */}
              <div className="flex items-center gap-2">
                {showDate && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-black/40 hover:text-black cursor-pointer"
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
                  className="w-5 h-5 text-black/40 hover:text-black cursor-pointer"
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

            {showDate && (
              <div className="px-4 py-6">
                <div className="grid grid-cols-7 gap-4 mb-4">
                  {calendar.length > 0 &&
                    calendar[0][0].map((day) => (
                      <div key={`${day}`} className="text-center text-sm">
                        {
                          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
                            getDay(day)
                          ]
                        }
                      </div>
                    ))}
                </div>

                {calendar[0].map((week) => (
                  <div
                    key={`week-${week[0]}`}
                    className="grid grid-cols-7 gap-4 mb-2"
                  >
                    {week.map((day) => (
                      <button
                        data-in-range={inRange(
                          day,
                          startOfMonth(viewing),
                          endOfMonth(viewing),
                        )}
                        data-selected={isSelected(day)}
                        data-today={isToday(day)}
                        key={`${day}`}
                        onClick={() => toggle(day, true)}
                        className={classNames(
                          isSelected(day)
                            ? "bg-primary-500 text-white"
                            : "hover:bg-black/10",
                          startOfMonth(viewing) > day && "text-black/40",
                          endOfMonth(viewing) < day && "text-black/40",
                          "text-center cursor-pointer text-sm border border-transparent leading-8 rounded-md transition-all",
                        )}
                      >
                        <>
                          <p>{format(day, "dd")}</p>
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
                      className="w-full"
                      onClick={() => {
                        viewMonth(index);
                        setShowMonth(false);
                        setShowDate(true);
                      }}
                      variant="ghost"
                    >
                      {month}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {showYear && (
              <div className="px-4 py-6">
                <div className="grid grid-cols-3 gap-3 mb-2">
                  {years.map((year, index) => (
                    <Button
                      key={index}
                      className="w-full"
                      onClick={() => {
                        viewYear(year);
                        setShowMonth(true);
                        setShowYear(false);
                      }}
                      variant="ghost"
                    >
                      {year}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* <Popover.Close /> */}
            <Popover.Arrow className="fill-white" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};
// export function DatePicker() {
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   var date = new Date();
//   var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
//   var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
//   var currentMonth = months[date.getMonth()];
//   var currentYear = date.getFullYear();
//   console.log(firstDay, lastDay);
//   return (
//     <div className="flex items-center justify-center w-full min-h-screen bg-gray-50">
//       <div className="flex bg-white shadow-lg rounded-xl">
//         <div className="flex flex-col">
//           <div className="flex divide-x">
//             <div className="flex flex-col px-6 pt-5 pb-6 border-b border-gray-100">
//               <div className="flex items-center justify-between">
//                 <button className="flex items-center justify-center p-2 rounded-xl hover:bg-gray-50">
//                   <svg
//                     className="w-6 h-6 text-gray-900 stroke-current"
//                     fill="none"
//                   >
//                     <path
//                       d="M13.25 8.75L9.75 12l3.5 3.25"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </button>
//                 <div className="text-sm font-semibold">{currentMonth}</div>
//                 <div className="text-sm font-semibold">{currentYear}</div>
//                 <button className="flex items-center justify-center p-2 rounded-xl hover:bg-gray-50">
//                   <svg
//                     className="w-6 h-6 text-gray-900 stroke-current"
//                     fill="none"
//                   >
//                     <path
//                       d="M10.75 8.75l3.5 3.25-3.5 3.25"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </button>
//               </div>
//               <div className="grid grid-cols-7 text-xs text-center text-gray-900">
//                 <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
//                   Mo
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
//                   Tu
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
//                   We
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
//                   Th
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
//                   Fri
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
//                   Sa
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
//                   Su
//                 </span>

//                 <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
//                   1
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
//                   2
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
//                   3
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
//                   4
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
//                   5
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
//                   6
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
//                   7
//                 </span>

//                 <span className="flex items-center justify-center w-10 h-10 rounded-lg">
//                   8
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg bg-gray-50">
//                   9
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 rounded-lg">
//                   10
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 rounded-lg">
//                   11
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 rounded-lg">
//                   12
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 rounded-lg">
//                   13
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 rounded-lg">
//                   14
//                 </span>

//                 <span className="flex items-center justify-center w-10 h-10 rounded-lg">
//                   15
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 rounded-lg">
//                   16
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 rounded-lg">
//                   17
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 text-white bg-blue-600 rounded-l-lg">
//                   18
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50">
//                   19
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50">
//                   20
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none rounded-tr-lg bg-gray-50">
//                   21
//                 </span>

//                 <span className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none rounded-l-lg bg-gray-50">
//                   22
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50">
//                   23
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50">
//                   24
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50">
//                   25
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50">
//                   26
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50">
//                   27
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none rounded-br-lg bg-gray-50">
//                   28
//                 </span>

//                 <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
//                   1
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
//                   2
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
//                   3
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
//                   4
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
//                   5
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
//                   6
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
//                   7
//                 </span>
//               </div>
//             </div>
//             <div className="flex flex-col px-6 pt-5 pb-6 border-b border-gray-100">
//               <div className="flex items-center justify-between">
//                 <button className="flex items-center justify-center p-2 rounded-xl hover:bg-gray-50">
//                   <svg
//                     className="w-6 h-6 text-gray-900 stroke-current"
//                     fill="none"
//                   >
//                     <path
//                       d="M13.25 8.75L9.75 12l3.5 3.25"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </button>
//                 <div className="text-sm font-semibold">March</div>
//                 <button className="flex items-center justify-center p-2 rounded-xl hover:bg-gray-50">
//                   <svg
//                     className="w-6 h-6 text-gray-900 stroke-current"
//                     fill="none"
//                   >
//                     <path
//                       d="M10.75 8.75l3.5 3.25-3.5 3.25"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </button>
//               </div>
//               <div className="grid grid-cols-7 text-xs text-center text-gray-900">
//                 <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
//                   Mo
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
//                   Tu
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
//                   We
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
//                   Th
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
//                   Fri
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
//                   Sa
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
//                   Su
//                 </span>

//                 <span className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-none rounded-tl-lg bg-gray-50">
//                   1
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50">
//                   2
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50">
//                   3
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50">
//                   4
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50">
//                   5
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50">
//                   6
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50">
//                   7
//                 </span>

//                 <span className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-none rounded-bl-lg bg-gray-50">
//                   8
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50">
//                   9
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50">
//                   10
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 text-white bg-blue-600 rounded-r-lg">
//                   11
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 rounded-lg">
//                   12
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 rounded-lg">
//                   13
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 rounded-lg">
//                   14
//                 </span>

//                 <span className="flex items-center justify-center w-10 h-10 rounded-lg">
//                   15
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 rounded-lg">
//                   16
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 rounded-lg">
//                   17
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 rounded-lg">
//                   18
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 rounded-lg">
//                   19
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 rounded-lg">
//                   20
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 rounded-lg">
//                   21
//                 </span>

//                 <span className="flex items-center justify-center w-10 h-10 rounded-lg">
//                   22
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 rounded-lg">
//                   23
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 rounded-lg">
//                   24
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 rounded-lg">
//                   25
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 rounded-lg">
//                   26
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 rounded-lg">
//                   27
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 rounded-lg">
//                   28
//                 </span>

//                 <span className="flex items-center justify-center w-10 h-10 rounded-lg">
//                   29
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 rounded-lg">
//                   30
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 rounded-lg">
//                   31
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
//                   1
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
//                   2
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
//                   3
//                 </span>
//                 <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
//                   4
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="flex items-center justify-between px-6 py-4">
//             <div className="flex items-center">
//               <input
//                 type="text"
//                 className="flex items-center w-32 px-4 py-2 text-sm text-gray-900 rounded-lg bg-gray-50 focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-none"
//                 placeholder="18 / 02 / 2021"
//               />
//               <div className="p-1">
//                 <svg
//                   className="w-6 h-6 text-gray-900 stroke-current"
//                   fill="none"
//                 >
//                   <path
//                     d="M6.738 12.012h10.5m-4.476 4.25l4.5-4.25-4.5-4.25"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>
//               <input
//                 type="text"
//                 className="flex items-center w-32 px-4 py-2 text-sm text-gray-900 rounded-lg bg-gray-50 focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-none"
//                 placeholder="11 / 03 / 2021"
//               />
//             </div>
//             <div className="flex items-center space-x-2">
//               <button className="px-4 py-2 text-sm rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-600 hover:bg-gray-100">
//                 Cancel
//               </button>
//               <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 hover:bg-blue-700">
//                 Set Date
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
