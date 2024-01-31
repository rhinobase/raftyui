"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";
import { Button } from "../button";
import { classNames } from "../utils";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { changePage } from "./change-page";
import { usePaginationContext } from "./context";

const wrapperClasses = cva("flex items-center", {
  variants: {
    size: {
      sm: "gap-2",
      md: "gap-3",
      lg: "gap-4",
    },
  },
});

const iconClasses = cva("stroke-[2.5]", {
  variants: {
    size: {
      sm: "size-3.5",
      md: "size-5",
      lg: "size-6",
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
        className={classNames(wrapperClasses({ size }), className)}
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
        >
          <ChevronLeftIcon className={iconClasses({ size })} />
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
        >
          <ChevronRightIcon className={iconClasses({ size })} />
        </Button>
      </div>
    );
  },
);
