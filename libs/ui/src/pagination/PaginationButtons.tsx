import { Button } from "../button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const ICON_CLASSES = {
  sm: "h-3.5 w-3.5",
  md: "h-5 w-5",
  lg: "h-6 w-6",
} as const;

export type PaginationButtons = {
  currentPage: number;
  onNext: () => void;
  onPrev: () => void;
  totalPages: number;
  isDisabled?: boolean;
  size: "sm" | "md" | "lg";
};

export default function PaginationButtons({
  currentPage,
  totalPages,
  onNext,
  onPrev,
  isDisabled,
  size,
}: PaginationButtons) {
  const canPrev = currentPage > 1;
  const canNext = currentPage < totalPages;
  const prev_disabled = isDisabled || !canPrev;
  const next_disabled = isDisabled || !canNext;

  return (
    <div className="flex items-center gap-3">
      <Button
        variant="ghost"
        size="icon"
        onClick={onPrev}
        isDisabled={prev_disabled}
      >
        <ChevronLeftIcon className={ICON_CLASSES[size]} />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={onNext}
        isDisabled={next_disabled}
      >
        <ChevronRightIcon className={ICON_CLASSES[size]} />
      </Button>
    </div>
  );
}
