"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Button, classNames } from "@rafty/ui";
import { cva } from "class-variance-authority";
import { type HTMLAttributes, forwardRef } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { changePage } from "./change-page";
import { usePaginationContext } from "./context";

const paginationButtonsWrapperClasses = cva("flex items-center", {
  variants: {
    size: {
      sm: "gap-2",
      md: "gap-3",
      lg: "gap-4",
    },
  },
});

const paginationButtonsClasses = cva("", {
  variants: {
    size: {
      sm: "rounded p-1",
      md: "rounded-md p-1.5",
      lg: "rounded-md p-2",
    },
  },
});

const paginationButtonIconClasses = cva("stroke-[2.5]", {
  variants: {
    size: {
      sm: "size-3.5",
      md: "size-4",
      lg: "size-[18px]",
    },
  },
});

export type PaginationButtons = HTMLAttributes<HTMLDivElement>;

export const PaginationButtons = forwardRef<HTMLDivElement, PaginationButtons>(
  ({ className, ...props }, forwardedRef) => {
    const { size, isDisabled, pages, currentPage, onChange, pageLimit } =
      usePaginationContext();

    const canPrev = currentPage > 1;
    const canNext = currentPage < pages;
    const prevDisabled = isDisabled || !canPrev;
    const nextDisabled = isDisabled || !canNext;

    return (
      <div
        className={classNames(
          paginationButtonsWrapperClasses({ size }),
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() =>
            changePage({
              pages,
              pageLimit,
              onChange,
              value: currentPage - 1,
            })
          }
          isDisabled={prevDisabled}
          className={paginationButtonsClasses({ size })}
        >
          <ChevronLeftIcon className={paginationButtonIconClasses({ size })} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() =>
            changePage({
              pages,
              pageLimit,
              onChange,
              value: currentPage + 1,
            })
          }
          isDisabled={nextDisabled}
          className={paginationButtonsClasses({ size })}
        >
          <ChevronRightIcon className={paginationButtonIconClasses({ size })} />
        </Button>
      </div>
    );
  },
);
