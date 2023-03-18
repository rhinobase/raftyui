import { classNames } from "@rhinobase/utils";
import dayjs from "dayjs";
import React from "react";
import { Button } from "../button";

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

type MonthPanel = {
  viewing: Date;
  selected: Date[];
  onSelect: (month: number) => void;
};
export function MonthPanel({ viewing, onSelect }: MonthPanel) {
  return (
    <div className="px-4 py-6">
      <div className="mb-2 grid grid-cols-3 gap-8">
        {months.map((month, index) => (
          <div
            key={index}
            className={classNames(
              dayjs(viewing).get("month") == index
                ? "bg-primary-500 dark:bg-primary-300 text-white"
                : "hover:bg-secondary-100 dark:hover:bg-secondary-700",
              " dark:text-secondary-100  w-full cursor-pointer select-none rounded-md py-1 px-2 text-center text-sm font-normal",
            )}
            onClick={() => onSelect(index)}
          >
            {month.substring(0, 3)}
          </div>
        ))}
      </div>
    </div>
  );
}
