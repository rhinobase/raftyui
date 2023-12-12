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

// Define CSS classes using class-variance-authority
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

// Define the pagination props
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

// Define the Pagination component
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

    // Update the component when current page or items per page changes
    useEffect(() => {
      onChangeHandle(currentValue, itemsPerPage);
    }, [currentValue, itemsPerPage]);

    // Handle page change
    const onChangeHandle = (page: number, pageSize: number) => {
      // Update the current page and items per page
      setCurrentPage(page);
      setItemsPerPage(pageSize);
      // Trigger the onChange callback if provided
      onChange?.(page, pageSize);
    };

    // Handle page size change event
    const onPageSizeChange = (selectedPageSize: number) =>
      onChangeHandle(1, selectedPageSize);

    // Handle previous page button click event
    const onPrev = () => onChangeHandle(currentValue - 1, itemsPerPage);

    // Handle next page button click event
    const onNext = () => onChangeHandle(currentValue + 1, itemsPerPage);

    // Handle page number input change event
    const onPageNumberChange = (inputPageNumber: number) =>
      onChangeHandle(inputPageNumber, itemsPerPage);

    // Hide the component if there is only one page and hideOnSinglePage is true
    if (hideOnSinglePage && totalPages === 1) return <div ref={forwardedRef} />;

    // Calculate the range of displayed items
    const startItem = Math.max((currentValue - 1) * itemsPerPage + 1, 0);
    const endItem = Math.min(currentValue * itemsPerPage, total);

    // Generate the total range component
    let totalRangeComponent;

    if (showTotal)
      totalRangeComponent = showTotal(total, `${startItem} - ${endItem}`);

    // Render the totalRangeComponent based on its type
    let totalRender;

    // If totalRangeComponent is a string, wrap it in a span element
    if (typeof totalRangeComponent === "string")
      totalRender = <span>{totalRangeComponent}</span>;
    // If totalRangeComponent is not a string, use it directly
    else totalRender = totalRangeComponent;

    // Render the Pagination component
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
        {totalRender}
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

// Set the display name for the component
Pagination.displayName = "Pagination";
