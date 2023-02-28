import dayjs from "dayjs";
import React from "react";
import { Button } from "../button";

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
