import { Button } from "../button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

type PaginationButtons = {
  inputValue: number;
  pageSize: number;
  onNext: () => void;
  onPrev: () => void;
  totalPages: number;
};

export default function PaginationButtons({
  inputValue,
  totalPages,
  onNext,
  onPrev,
}: PaginationButtons) {
  const canPrev = inputValue > 1;
  const canNext = inputValue < totalPages;

  return (
    <div className="flex items-center gap-3">
      <Button variant="ghost" size="icon" onClick={onPrev} disabled={!canPrev}>
        <ChevronLeftIcon height={20} width={20} />
      </Button>
      <Button variant="ghost" size="icon" onClick={onNext} disabled={!canNext}>
        <ChevronRightIcon height={20} width={20} />
      </Button>
    </div>
  );
}
