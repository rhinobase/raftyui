"use client";
import { cva } from "class-variance-authority";
import {
  forwardRef,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { classNames } from "../utils";
import PageSizeSelect from "./PageSizeSelect";
import PaginationButtons from "./PaginationButtons";
import PaginationField from "./PaginationField";

export const paginationClasses = cva(
  "flex w-full items-center gap-5 aria-disabled:cursor-not-allowed aria-disabled:opacity-60",
  {
    variants: {
      size: {
        sm: "p-2 text-sm",
        md: "p-2.5",
        lg: "p-3 text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type Pagination = Omit<
  HTMLAttributes<HTMLDivElement>,
  "children" | "onChange"
> & {
  total: number;
  current?: number;
  onChange?: (page: number, pageSize: number) => void;
  pageSizeOptions?: number[];
  defaultCurrent?: number;
  defaultPageSize?: number;
  isDisabled?: boolean;
  hideOnSinglePage?: boolean;
  size?: "sm" | "md" | "lg";
  showQuickJumper?: boolean;
  showSizeChanger?: boolean;
  showTotal?: (total: number, range: string) => ReactNode | string;
};

export const Pagination = forwardRef<HTMLDivElement, Pagination>(
  (
    {
      className,
      total = 0,
      defaultPageSize = 10,
      defaultCurrent = 1,
      current,
      isDisabled,
      pageSizeOptions = [10, 20, 50],
      showQuickJumper = false,
      size = "md",
      onChange,
      hideOnSinglePage = false,
      showSizeChanger,
      showTotal,
      ...props
    },
    forwardedRef,
  ) => {
    const [itemsPerPage, setItemsPerPage] = useState(defaultPageSize);
    const [currentPage, setCurrentPage] = useState(defaultCurrent);
    const totalPages = Math.ceil(total / itemsPerPage);

    // If a current value is provided by the user, use it; otherwise, fallback to the default currentPage value
    const currentValue = current ?? currentPage;

    useEffect(() => {
      onChangeHandle(currentPage, itemsPerPage);
    }, [currentPage, itemsPerPage]);

    const onChangeHandle = (page: number, pageSize: number) => {
      setCurrentPage(page);
      setItemsPerPage(pageSize);
      onChange?.(page, pageSize);
    };

    const onPageSizeChange = (value: number) => onChangeHandle(1, value);
    const onPrev = () => onChangeHandle(currentPage - 1, itemsPerPage);
    const onNext = () => onChangeHandle(currentPage + 1, itemsPerPage);
    const onPageNumberChange = (value: number) =>
      onChangeHandle(value, itemsPerPage);

    if (hideOnSinglePage && totalPages === 1) return <div ref={forwardedRef} />;

    const startItem = Math.max((currentValue - 1) * itemsPerPage + 1, 0);
    const endItem = Math.min(currentValue * itemsPerPage, total);

    const totalRangeComponent = showTotal?.(total, `${startItem} - ${endItem}`);

    return (
      <div
        ref={forwardedRef}
        className={classNames(paginationClasses({ size }), className)}
        aria-disabled={isDisabled}
        {...props}
      >
        {showSizeChanger && (
          <PageSizeSelect
            itemsPerPage={itemsPerPage}
            pageSizeOptions={pageSizeOptions}
            onPageSizeChange={onPageSizeChange}
            isDisabled={isDisabled}
            size={size}
          />
        )}
        {showQuickJumper && (
          <PaginationField
            currentPage={currentValue}
            onPageNumberChange={onPageNumberChange}
            totalPages={totalPages}
            isDisabled={isDisabled}
            size={size}
          />
        )}
        {typeof totalRangeComponent === "string" ? (
          <p>{totalRangeComponent}</p>
        ) : (
          totalRangeComponent
        )}
        <PaginationButtons
          currentPage={currentValue}
          onPrev={onPrev}
          onNext={onNext}
          totalPages={totalPages}
          isDisabled={isDisabled}
          size={size}
        />
      </div>
    );
  },
);

Pagination.displayName = "Pagination";
