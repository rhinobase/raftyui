import dayjs from "dayjs";
import { classNames } from "../utils";

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
          <div
            key={year}
            className={classNames(
              dayjs(selected[0]).get("year") == year
                ? "bg-primary-500 dark:bg-primary-300 text-white"
                : "hover:bg-secondary-100 dark:hover:bg-secondary-700",
              " dark:text-secondary-100  w-full cursor-pointer select-none rounded-md py-1 px-2 text-center text-sm font-normal"
            )}
            onClick={() => onSelect(year)}
          >
            {year}
          </div>
        ))}
      </div>
    </div>
  );
}
