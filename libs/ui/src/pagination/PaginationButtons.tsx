import { Button } from "../button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

type PaginationButtons = {
  currentPage: number;
  onNext: () => void;
  onPrev: () => void;
  totalPages: number;
  isDisabled?: boolean;
};

export default function PaginationButtons({
  currentPage,
  totalPages,
  onNext,
  onPrev,
  isDisabled,
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
        <ChevronLeftIcon height={20} width={20} />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={onNext}
        isDisabled={next_disabled}
      >
        <ChevronRightIcon height={20} width={20} />
      </Button>
    </div>
  );
}
