import dayjs from "dayjs";
import { classNames } from "../utils";

type DayPanel = {
  showMonths?: number;
  calendar: Date[][][];
  inRange: (date: Date, min: Date, max: Date) => boolean;
  selected: Date[];
  isSelected: (date: Date) => boolean;
  onSelect: (date: Date) => void;
  weekendOff?: boolean;
};
export function DayPanel({
  calendar,
  inRange,
  onSelect,
  selected,
  isSelected,
  showMonths = 1,
  weekendOff = false,
}: DayPanel) {
  return (
    <div className="w-full px-6 pt-6 pb-2">
      <div className="flex w-full justify-between">
        {Array(showMonths)
          .fill(undefined)
          .map((_, index) => {
            const cal = calendar[index];

            return (
              <div className="" key={index}>
                <div className="mb-3 grid grid-cols-7 gap-2.5">
                  {calendar.length > 0 &&
                    cal[0].map((day) => (
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
                {cal.map((week) => (
                  <div
                    key={`week-${week[0]}`}
                    className="mb-2 grid grid-cols-7"
                  >
                    {week.map((tmp) => {
                      const day = dayjs(tmp);
                      const isDaySelected = isSelected(tmp);
                      const isToday = dayjs(day).isToday();
                      const isInRange = dayjs(day).isSame(cal[1][0], "month");
                      const isSingle = selected.length == 1;
                      return (
                        <div
                          data-in-range={isInRange}
                          data-selected-range={
                            inRange(tmp, selected[0], selected[1]) && isInRange
                          }
                          key={day.toString()}
                          onClick={() => {
                            if (isInRange) onSelect(tmp);
                          }}
                          className={classNames(
                            weekendOff &&
                              (dayjs(day).get("day") == 0 ||
                                dayjs(day).get("day") == 6) &&
                              "!text-secondary-400",
                            isSingle && day.isSame(selected[0]) && "rounded-md",
                            day.isSame(selected[0]) && "rounded-l-md",
                            day.isSame(selected[1]) && "rounded-r-md",
                            "data-[in-range=false]:cursor-default data-[in-range=false]:text-black/40 dark:data-[in-range=false]:text-white/30",
                            "data-[in-range=true]:hover:bg-primary-50/50 data-[in-range=true]:cursor-pointer",
                            isDaySelected && isInRange
                              ? "!bg-primary-500 dark:!bg-primary-300 text-white dark:!text-black"
                              : isToday && isInRange
                              ? "ring-primary-500 dark:ring-primary-300 relative rounded-md ring-2"
                              : "",
                            "data-[selected-range=true]:bg-zinc-200 dark:data-[selected-range=true]:bg-zinc-700",
                            "p-1.5 text-center !text-sm transition-all dark:text-white"
                          )}
                          title={dayjs(day).format("DD/MM/YYYY")}
                        >
                          {dayjs(day).format("DD")}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            );
          })}
      </div>
    </div>
  );
}
