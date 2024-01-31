"use client";
import { forwardRef } from "react";
import { InputField } from "../input-field";
import { classNames } from "../utils";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { changePage } from "./change-page";
import { usePaginationContext } from "./context";

export type PageJumper = Omit<InputField, "onChange" | "value">;

export const PageJumper = forwardRef<HTMLInputElement, PageJumper>(
  ({ size, isDisabled, className, ...props }, forwardedRef) => {
    const {
      size: parentSize,
      isDisabled: isParentDisabled,
      currentPage,
      onChange,
      pages,
      pageLimit,
    } = usePaginationContext();

    const componentSize = size || parentSize;
    const isComponentDisabled = isDisabled || isParentDisabled;

    return (
      <InputField
        min={1}
        type="number"
        size={componentSize}
        isDisabled={isComponentDisabled}
        {...props}
        value={currentPage}
        onChange={(e) =>
          changePage({
            pages,
            pageLimit,
            onChange,
            value: Number(e.target.value),
          })
        }
        className={classNames("w-[80px]", className)}
        ref={forwardedRef}
      />
    );
  },
);
PageJumper.displayName = "PageJumper";
