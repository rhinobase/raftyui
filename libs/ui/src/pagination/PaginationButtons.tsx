"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Button } from "../button";
import { classNames } from "../utils";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { changePage } from "./change-page";
import { usePaginationContext } from "./context";

const ICON_CLASSES = {
  sm: "h-3.5 w-3.5",
  md: "h-5 w-5",
  lg: "h-6 w-6",
} as const;

export type PaginationButtons = React.HTMLAttributes<HTMLDivElement>;

export const PaginationButtons = React.forwardRef<
  HTMLDivElement,
  PaginationButtons
>(({ className, ...props }, forwardedRef) => {
  const { size, isDisabled, pages, currentPage, onChange, pageLimit } =
    usePaginationContext();

  const canPrev = currentPage > 1;
  const canNext = currentPage < pages;
  const prevDisabled = isDisabled || !canPrev;
  const nextDisabled = isDisabled || !canNext;

  return (
    <div
      className={classNames("flex items-center gap-3", className)}
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
        <ChevronLeftIcon className={ICON_CLASSES[size]} />
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
        <ChevronRightIcon className={ICON_CLASSES[size]} />
      </Button>
    </div>
  );
});
