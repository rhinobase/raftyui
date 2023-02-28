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
  onSelect: (month: number) => void;
};
export function MonthPanel({ viewing, onSelect }: MonthPanel) {
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
