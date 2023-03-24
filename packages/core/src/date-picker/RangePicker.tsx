import * as Popover from "@radix-ui/react-popover";
import dayjs from "dayjs";
import React, { useState } from "react";
import { classNames } from "@rhinobase/utils";
import { useLilius } from "use-lilius";
import { Button } from "../button";
import { MonthPanel } from "./MonthPanel";
import { YearPanel } from "./YearPanel";
import { DayPanel } from "./DayPanel";
import { PickerHeader } from "./PickerHeader";

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
  defaultValue?: [Date, Date];
  value?: [Date, Date];
  onSelect?: (values: Date[]) => void;
  picker?: "date" | "month" | "year";
  format?: string;
  placeholder?: [string, string];
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  centerIcon?: JSX.Element;
}) => {
  const [state, setState] = useState<1 | 2>();
  const [show, setShow] = useState<Show>(
    picker == "date" ? Show.DATE : picker == "month" ? Show.MONTH : Show.YEAR,
  );

  const {
    calendar,
    setSelected,
    inRange,
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

  return (
    <Popover.Root open={state != undefined && true}>
      <Popover.Trigger>
        <div
          className={classNames(
            state != undefined
              ? "border-primary-500 ring-primary-100 dark:border-primary-300 dark:ring-primary-100/30 ring-2"
              : "dark:border-white/20",
            "hover:border-primary-500 min-w-[350px]: group flex  items-center rounded-md border px-2 transition-all",
          )}
        >
          {props.leftIcon && (
            <div
              className={classNames(
                state != undefined
                  ? "text-primary-500 dark:text-primary-300"
                  : " text-black/60 dark:text-white/80",
                "h-6 w-[10%]",
              )}
            >
              {props.leftIcon}
            </div>
          )}
          <div className="relative flex h-[40px] items-center">
            <input
              className="w-[40%] bg-transparent pr-2 outline-none dark:text-white/80"
              onFocus={(e) => {
                if (dayjs(e.target.value).isValid()) {
                  setViewing(dayjs(e.target.value).toDate());
                }
                setState(1);
              }}
              defaultValue={
                props.defaultValue ? String(props.defaultValue[0]) : undefined
              }
              value={
                props.value
                  ? String(props.value[0])
                  : selected[0]
                  ? dayjs(selected[0]).format("MM/DD/YYYY")
                  : ""
              }
              onChange={() => ""}
              placeholder={
                props.placeholder ? props.placeholder[0] : "Start date"
              }
            />
            <div
              className={classNames(
                state != undefined
                  ? "text-primary-500 dark:text-primary-300"
                  : " text-black/60 dark:text-white/80",
                "flex h-6 w-[10%] items-center justify-center",
              )}
            >
              {props.centerIcon ? (
                props.centerIcon
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-full w-full leading-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              )}
            </div>
            <input
              className="w-[40%] bg-transparent !pl-2 outline-none dark:text-white/80"
              onFocus={() => {
                setState(2);
              }}
              defaultValue={
                props.defaultValue ? String(props.defaultValue[1]) : undefined
              }
              onChange={() => ""}
              value={
                props.value
                  ? String(props.value[1])
                  : selected[1]
                  ? dayjs(selected[1]).format("MM/DD/YYYY")
                  : ""
              }
              placeholder={
                props.placeholder ? props.placeholder[1] : "End date"
              }
            />
            <div
              className={classNames(
                state != undefined
                  ? "text-primary-500 dark:text-primary-300"
                  : " text-black/60 dark:text-white/80",
                "flex h-6 w-[10%] items-center justify-end",
              )}
            >
              {props.rightIcon ? (
                props.rightIcon
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-full w-6 leading-10"
                  onClick={() =>
                    state == undefined ? setState(1) : setState(undefined)
                  }
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>
              )}
            </div>
            <div
              className={classNames(
                state == 2 && "translate-x-[125%]",
                state != undefined &&
                  "bg-primary-500 absolute bottom-0 left-0 h-[2px] w-[40%] duration-200",
              )}
            />
          </div>
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          sideOffset={5}
          align="start"
          className="w-[600px] rounded-md bg-white shadow-[0px_5px_20px_1px_rgba(0,0,0,0.1)] dark:bg-zinc-800"
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
                selected={selected}
                inRange={inRange}
                isSelected={isSelected}
                showMonths={2}
                onSelect={(date) => {
                  setSelected((prev) => {
                    if (!prev[0]) {
                      setState(2);
                      return [date];
                    } else {
                      if (state == 1) {
                        if (selected[1] > date) {
                          setState(2);
                          return [date, selected[1]];
                        }
                        setState(2);
                        return [date, dayjs(date).add(1, "day").toDate()];
                      } else {
                        if (prev[0] < date) {
                          if (props.onSelect) {
                            props.onSelect([prev[0], date]);
                          }
                          setState(undefined);

                          return [prev[0], date];
                        }
                        return [prev[0]];
                      }
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
