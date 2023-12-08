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
import PageSelectMenu from "./PageSelectMenu";
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

export type PaginationProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "children" | "onChange"
> & {
  total: number;
  pageSize?: number;
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

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      className,
      total = 0,
      defaultPageSize = 10,
      defaultCurrent = 1,
      current,
      isDisabled,
      pageSize,
      pageSizeOptions = [10, 20, 50],
      showQuickJumper = false,
      size = "md",
      onChange,
      hideOnSinglePage = false,
      showSizeChanger,
      showTotal,
      ...props
    },
    forwardRef,
  ) => {
    const _pageSize = pageSize ?? defaultPageSize;
    const [page, setPageSize] = useState(_pageSize);
    const [currentPage, setCurrentPage] = useState(defaultCurrent);
    const totalPages = Math.ceil(total / page);

    // If a current value is provided by the user, use it; otherwise, fallback to the default currentPage value
    const currentValue = current ?? currentPage;

    useEffect(() => {
      onChangeHandle(currentPage, page);
    }, [currentPage, page]);

    const onChangeHandle = (page: number, size: number) => {
      setCurrentPage(page);
      setPageSize(size);
      onChange?.(page, size);
    };

    const onPageSizeChange = (value: number) => onChangeHandle(1, value);
    const onPrev = () => onChangeHandle(currentPage - 1, page);
    const onNext = () => onChangeHandle(currentPage + 1, page);
    const onPageChange = (value: number) => onChangeHandle(value, page);

    if (hideOnSinglePage && totalPages === 1) return <div ref={forwardRef} />;

    const startItem = Math.max((currentValue - 1) * page + 1, 0);
    const endItem = Math.min(currentValue * page, total);

    const totalRangeComponent = showTotal?.(total, `${startItem} - ${endItem}`);

    return (
      <div
        ref={forwardRef}
        className={classNames(paginationClasses({ size }), className)}
        aria-disabled={isDisabled}
        {...props}
      >
        {showSizeChanger && (
          <PageSelectMenu
            page={page}
            pageSizeOptions={pageSizeOptions}
            onPageSizeChange={onPageSizeChange}
            isDisabled={isDisabled}
            size={size}
          />
        )}
        {showQuickJumper && (
          <PaginationField
            currentPage={currentValue}
            onPageChange={onPageChange}
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
