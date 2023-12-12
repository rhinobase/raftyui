import { Button } from "../button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { usePaginationContext } from "./context";

const ICON_CLASSES = {
  sm: "h-3.5 w-3.5",
  md: "h-5 w-5",
  lg: "h-6 w-6",
} as const;

export function PaginationButtons() {
  const { size, isDisabled, total, current, onChange, pageSize } =
    usePaginationContext();

  const canPrev = current > 1;
  const canNext = current < total;
  const prevDisabled = isDisabled || !canPrev;
  const nextDisabled = isDisabled || !canNext;

  return (
    <div className="flex items-center gap-3">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onChange?.(current - 1, pageSize)}
        isDisabled={prevDisabled}
      >
        <ChevronLeftIcon className={ICON_CLASSES[size]} />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onChange?.(current + 1, pageSize)}
        isDisabled={nextDisabled}
      >
        <ChevronRightIcon className={ICON_CLASSES[size]} />
      </Button>
    </div>
  );
}
