import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes, useEffect, useState } from "react";
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
    showTitle?: boolean;
    showTotal?: (total: number, range: number) => void;
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
      hideOnSinglePage = false,
      showSizeChanger,
      showButton = false,
      ...props
    },
    forwardRef,
  ) => {
    const [pageSize, setPageSize] = useState(defaultPageSize);
    const [inputValue, setInputValue] = useState(current);
    const totalPages = Math.ceil(total / pageSize);

    useEffect(() => {
      onChange?.(inputValue, pageSize);
    }, [onChange, inputValue, pageSize]);

    const onPageSizeChange = (value: number) => {
      setPageSize(value);
      setInputValue(1);
    };

    const onPrev = () => {
      setInputValue(inputValue - 1);
    };
    const onNext = () => {
      setInputValue(inputValue + 1);
    };
    const onPageChange = (value: number) => {
      setInputValue(value);
    };

    if (hideOnSinglePage && totalPages === 1) return <div ref={forwardRef} />;

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
            inputValue={inputValue}
            onPageChange={onPageChange}
            totalPages={totalPages}
          />
        )}
        {showButton && (
          <PaginationButtons
            inputValue={inputValue}
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
