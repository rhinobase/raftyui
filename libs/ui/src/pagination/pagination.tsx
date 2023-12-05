import React, { forwardRef, useState, useEffect } from "react";
import { Button } from "../button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { classNames } from "../utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Select, SelectItem } from "../select";
import { PaginationField } from "./PaginationField";

export const paginationClasses = cva("rounded", {
  variants: {
    size: {
      sm: "px-3 pb-3 text-sm",
      md: "px-4 pb-4",
      lg: "px-5 pb-5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type Pagination = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children"
> &
  VariantProps<typeof paginationClasses> & {
    total: number;
    pageSize?: number;
    current?: number;
    onChange?: (page: number, pageSize?: number) => void;
    pageSizeOptions: string[] | number[];
    defaultCurrent?: number;
    defaultPageSize?: number;
    disabled?: boolean;
    hideOnSinglePage: boolean;
    pagesize?: number;
    showQuickJumper: boolean | { goButton: React.ReactNode };
    showSizeChanger?: boolean;
    showTitle: boolean;
    showTotal?: (total: number, range: number) => void;
    onShowSizeChange?: (current: number, size: number) => void;
  };

export const Pagination = forwardRef<HTMLDivElement, Pagination>(
  (
    {
      className,
      total = 0,
      defaultPageSize = 10,
      defaultCurrent = 1,
      current = 1,
      pageSizeOptions,
      showTitle = true,
      showQuickJumper = false,
      size = "md",
      onChange,
      showSizeChanger,
      ...props
    },
    forwardRef,
  ) => {
    const [currentPage, setCurrentPage] = useState(current);

    useEffect(() => {
      setCurrentPage(current);
    }, [current]);

    const totalPages = Math.ceil(total / defaultPageSize);
    const canPrev = currentPage > 1;
    const canNext = currentPage < totalPages;

    const onPrev = () => {
      if (canPrev) {
        const newPage = currentPage - 1;
        setCurrentPage(newPage);
        onChange?.(newPage, defaultPageSize);
      }
    };

    const onNext = () => {
      if (canNext) {
        const newPage = currentPage + 1;
        setCurrentPage(newPage);
        onChange?.(newPage, defaultPageSize);
      }
    };

    const onPageSizeChange = (value: number) => {
      onChange?.(currentPage, value);
    };

    const onPageChange = (value: number) => {
      setCurrentPage(value);
      onChange?.(value, defaultPageSize);
    };
    //added customw pagination number
    function CustomPagination() {
      const maxButtons = 5;
      const startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
      const endPage = Math.min(totalPages, startPage + maxButtons - 1);
      const pages = [];
      for (let i = startPage; i <= endPage; i++) {
        const isCurrent = i === currentPage;
        pages.push(
          <Button
            key={i}
            variant="ghost"
            size="icon"
            onClick={() => onPageChange(i)}
            disabled={isCurrent}
          >
            {i}
          </Button>,
        );
      }
      return pages;
    }

    return (
      <div
        ref={forwardRef}
        className={classNames(paginationClasses({ size }), className)}
        {...props}
      >
        {showSizeChanger && (
          <div className="flex items-center gap-2">
            <span>Rows per page:</span>
            <div className="w-[100px]">
              <Select
                onChange={(event) => {
                  const value = Number(event.target.value);
                  onPageSizeChange(value);
                }}
              >
                {pageSizeOptions.map((size, index) => (
                  <SelectItem key={index} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>
        )}
        {showQuickJumper && <PaginationField onPageChange={onPageChange} />}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={onPrev}
            disabled={!canPrev}
          >
            <ChevronLeftIcon height={20} width={20} />
          </Button>
          <CustomPagination />
          <Button
            variant="ghost"
            size="icon"
            onClick={onNext}
            disabled={!canNext}
          >
            <ChevronRightIcon height={20} width={20} />
          </Button>
        </div>
      </div>
    );
  },
);

Pagination.displayName = "Pagination";
