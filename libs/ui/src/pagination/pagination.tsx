import { cva, type VariantProps } from "class-variance-authority";
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

export const paginationClasses = cva("rounded", {
  variants: {
    size: {
      sm: "px-3 pb-3 text-sm",
      md: "px-4 pb-4",
      lg: "px-5 pb-5",
    },
    disabled: {
      true: "cursor-not-allowed opacity-50",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type Pagination = Omit<
  HTMLAttributes<HTMLDivElement>,
  "children" | "onChange"
> &
  VariantProps<typeof paginationClasses> & {
    total: number;
    pageSize?: number;
    current?: number;
    showButton?: boolean;
    onChange?: (page: number, pageSize: number) => void;
    pageSizeOptions: string[] | number[];
    defaultCurrent?: number;
    defaultPageSize?: number;
    isDisabled?: boolean;
    hideOnSinglePage?: boolean;
    showQuickJumper?: boolean | { goButton: React.ReactNode };
    showSizeChanger?: boolean;
    showTotal?: (total: number, range: string) => ReactNode;
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
      pageSize,
      pageSizeOptions,
      showQuickJumper = false,
      size = "md",
      onChange,
      hideOnSinglePage = false,
      showSizeChanger,
      showButton = false,
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
        className={classNames(
          paginationClasses({ size }),
          className,
          "aria-disabled:cursor-not-allowed aria-disabled:opacity-60",
        )}
        aria-disabled={isDisabled}
        {...props}
      >
        {showSizeChanger && (
          <PageSelectMenu
            page={page}
            pageSizeOptions={pageSizeOptions}
            onPageSizeChange={onPageSizeChange}
            isDisabled={isDisabled}
          />
        )}
        {showQuickJumper && (
          <PaginationField
            currentPage={currentValue}
            onPageChange={onPageChange}
            totalPages={totalPages}
            isDisabled={isDisabled}
          />
        )}
        {showTotal && (
          <span className="flex items-center">{totalRangeComponent}</span>
        )}
        {showButton && (
          <PaginationButtons
            currentPage={currentValue}
            onPrev={onPrev}
            onNext={onNext}
            totalPages={totalPages}
            isDisabled={isDisabled}
          />
        )}
      </div>
    );
  },
);

Pagination.displayName = "Pagination";
