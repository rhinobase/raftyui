import * as Popover from "@radix-ui/react-popover";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { classNames } from "@rhinobase/utils";
import { Month, useLilius } from "use-lilius";
import {
  DayPanel,
  MonthPanel,
  PickerHeader,
  YearPanel,
} from "../date-picker/DatePicker";
import { Button } from "../button";

enum Show {
  DATE,
  MONTH,
  YEAR,
  YEARS,
}

export const RangePicker = ({
  picker = "date",
  ...props
}: {
  defaultValues?: Date[] | Date;
  onSelect?: (values: Date[]) => void;
  picker?: "date" | "month" | "year";
  format?: string;
  placeholder?: string;
}) => {
  const [state, setState] = useState<"0" | "1" | "2">("0");
  const [show, setShow] = useState<Show>(
    picker == "date" ? Show.DATE : picker == "month" ? Show.MONTH : Show.YEAR,
  );
  // const [start, setStart] = useState<Date | undefined>(undefined);
  // const [end, setEnd] = useState<Date | undefined>(undefined);

  const {
    calendar,
    selectRange,
    setSelected,
    inRange,
    select,
    viewing,
    viewMonth,
    viewYear,
    viewNextMonth,
    viewPreviousMonth,
    viewNextYear,
    viewPreviousYear,
    setViewing,
    toggle,
    selected,
    isSelected,
  } = useLilius({
    numberOfMonths: 2,
  });

  // setSelected((prev) => {
  //   const start = prev[0];
  //   return [start, new Date()];
  // });
  console.log(selected, viewing, dayjs(viewing).add(1, "month").toDate());
  return (
    <Popover.Root open={state != "0" && true}>
      <Popover.Trigger>
        <div
          className={classNames(
            state != "0"
              ? "border-primary-500 ring-primary-100 dark:border-primary-300 dark:ring-primary-100/30 ring-2"
              : "dark:border-white/20",
            "hover:border-primary-500 group relative flex h-[40px] items-center gap-2 rounded-md border px-2 transition-all",
          )}
        >
          <input
            className="w-[150px] bg-transparent outline-none"
            onFocus={(e) => {
              if (dayjs(e.target.value).isValid()) {
                setViewing(dayjs(e.target.value).toDate());
                // select(dayjs(e.target.value).toDate(), true);
              }
              setState("1");
            }}
            // onBlur={() => setState("0")}
            value={selected[0] && dayjs(selected[0]).format("MM/DD/YYYY")}
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={classNames(
              state != "0"
                ? "text-primary-500 dark:text-primary-300"
                : " text-black/60 dark:text-white/80",
              "h-6 w-6 leading-10",
            )}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
          <input
            className="w-[150px] bg-transparent outline-none"
            onFocus={(e) => {
              // if (dayjs(e.target.value).isValid()) {
              //   setViewing(
              //     dayjs(e.target.value)
              //       .set("month", dayjs(e.target.value).get("month") - 1)
              //       .toDate(),
              //   );
              // }
              setState("2");
            }}
            // onBlur={() => setState("0")}
            value={selected[1] && dayjs(selected[1]).format("MM/DD/YYYY")}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={classNames(
              state != "0"
                ? "text-primary-500 dark:text-primary-300"
                : " text-black/60 dark:text-white/80",
              "h-6 w-6 leading-10",
            )}
            onClick={() => (state == "0" ? setState("1") : setState("0"))}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>
          <div
            className={classNames(
              state == "2" && "translate-x-[130%]",
              state != "0" &&
                "bg-primary-500 absolute bottom-0 left-0 h-[2px] w-[150px] duration-200",
            )}
          ></div>
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          // side="left"
          sideOffset={5}
          align="start"
          className="min-w-[700px] max-w-[700px] rounded-md bg-white shadow-[0px_5px_20px_1px_rgba(0,0,0,0.1)] dark:bg-zinc-800"
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
              <div className="flex w-3/4 justify-between">
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
                <div className="flex items-center">
                  <Button
                    onClick={() => {
                      setShow(1);
                    }}
                    variant="ghost"
                    className="py-1"
                  >
                    {dayjs(dayjs(viewing).add(1, "month").toDate()).format(
                      "MMMM",
                    )}
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
          <div className="flex w-full">
            {show == Show.DATE && (
              <DayPanel
                calendar={calendar}
                viewing={viewing}
                toggle={toggle}
                selected={selected}
                inRange={inRange}
                setViewing={setViewing}
                isSelected={isSelected}
                showMonths={2}
                setSelected={setSelected}
                onSelect={(date) => {
                  setSelected((prev) => {
                    // setState("2");
                    // return [date];
                    if (!prev[0]) {
                      setState("2");
                      return [date];
                    } else {
                      if (state == "1") {
                        setState("2");
                        return [date, selected[1]];
                      }
                      setState("0");
                      return [prev[0], date];
                    }
                  });
                }}
              />
            )}
          </div>
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

type CalendarProps = {
  defaultViewing: Date;
  onSelect: (newDate: Date) => void;
  picker?: "date" | "month" | "year";
  selectDate: Date;
};

// function Calendar({
//   defaultViewing,
//   onSelect,
//   selectDate,
//   picker = "date",
// }: CalendarProps) {
//   const {
//     calendar,
//     viewing,
//     setViewing,
//     inRange,
//     select,
//     isSelected,
//     toggle,
//     selected,
//   } = useLilius();

//   useEffect(() => {
//     setViewing(defaultViewing);
//     select(selectDate, true);
//   }, [defaultViewing]);
//   const [show, setShow] = useState<Show>(
//     picker == "date" ? Show.DATE : picker == "month" ? Show.MONTH : Show.YEAR,
//   );
//   return (
//     <>
//       <DayPanel
//         calendar={calendar}
//         viewing={viewing}
//         toggle={toggle}
//         selected={selected}
//         inRange={inRange}
//         onSelect={(date) => {
//           onSelect(date);
//         }}
//         setViewing={setViewing}
//         isSelected={isSelected}
//       />
//     </>
//   );
// }
