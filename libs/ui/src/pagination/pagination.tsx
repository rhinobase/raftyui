import React, { forwardRef, useState, useEffect } from "react";
import { Button } from "../button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { classNames } from "../utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Select, SelectItem } from "../select";
import { FieldControl } from "../field";
import { InputField } from "../input";

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
    const [pageSize, setPageSize] = useState(defaultPageSize);
    const [inputValue, setInputValue] = useState<number>(current);

    useEffect(() => {
      setInputValue(current);
    }, [current]);

    const totalPages = Math.ceil(total / pageSize);
    const canPrev = inputValue > 1;
    const canNext = inputValue < totalPages;

    const onPrev = () => {
      if (canPrev) {
        const newPage = inputValue - 1;
        setInputValue(newPage);
        onChange?.(newPage, pageSize);
      }
    };

    const onNext = () => {
      if (canNext) {
        const newPage = inputValue + 1;
        setInputValue(newPage);
        onChange?.(newPage, pageSize);
      }
    };

    const onPageSizeChange = (value: number) => {
      setPageSize(value);
      onChange?.(1, value);
    };

    const onPageChange = (value: number) => {
      setInputValue(value);
      setInputValue(value);
      onChange?.(value, pageSize);
    };

    function CustomPagination() {
      const maxButtons = 4;
      const startPage = Math.max(1, inputValue - Math.floor(maxButtons / 2));
      const endPage = Math.min(totalPages, startPage + maxButtons - 1);
      const pages = [];
      for (let i = startPage; i <= endPage; i++) {
        const isCurrent = i === inputValue;
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
                value={pageSize}
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
        {showQuickJumper && (
          <FieldControl name="page" className="!w-[70px]">
            <InputField
              type="number"
              min={0}
              max={total}
              value={inputValue}
              onChange={(e) => setInputValue(Number(e.target.value))}
            />
          </FieldControl>
        )}

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
