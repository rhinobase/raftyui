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
    disabled?: boolean;
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
    const [pageSize, setPageSize] = useState(defaultPageSize);
    const [currentPage, setCurrentPage] = useState(defaultCurrent);
    const totalPages = Math.ceil(total / pageSize);

    // If a current value is provided by the user, use it; otherwise, fallback to the default currentPage value
    const currentValue = current ?? currentPage;

    useEffect(() => {
      onChange?.(currentValue, pageSize);
    }, [onChange, currentValue, pageSize]);

    const onPageSizeChange = (value: number) => {
      setPageSize(value);
      setCurrentPage(1);
      onChange?.(1, value);
    };

    const onPrev = () => {
      const newPage = currentValue - 1;
      setCurrentPage(newPage);
      onChange?.(newPage, pageSize);
    };

    const onNext = () => {
      const newPage = currentValue + 1;
      setCurrentPage(newPage);
      onChange?.(newPage, pageSize);
    };

    const onPageChange = (value: number) => {
      setCurrentPage(value);
      onChange?.(value, pageSize);
    };

    if (hideOnSinglePage && totalPages === 1) return <div ref={forwardRef} />;

    const startItem = Math.max((currentValue - 1) * pageSize + 1, 0);
    const endItem = Math.min(currentValue * pageSize, total);

    const totalRangeComponent = showTotal?.(total, `${startItem} - ${endItem}`);

    return (
      <div
        ref={forwardRef}
        className={classNames(paginationClasses({ size }), className)}
        {...props}
      >
        {showSizeChanger && (
          <PageSelectMenu
            pageSize={pageSize}
            pageSizeOptions={pageSizeOptions}
            onPageSizeChange={onPageSizeChange}
          />
        )}
        {showQuickJumper && (
          <PaginationField
            currentPage={currentValue}
            onPageChange={onPageChange}
            totalPages={totalPages}
          />
        )}
        {showTotal && (
          <span className="flex items-center">{totalRangeComponent}</span>
        )}
        {showButton && (
          <PaginationButtons
            currentPage={currentValue}
            pageSize={pageSize}
            onPrev={onPrev}
            onNext={onNext}
            totalPages={totalPages}
          />
        )}
      </div>
    );
  },
);

Pagination.displayName = "Pagination";
