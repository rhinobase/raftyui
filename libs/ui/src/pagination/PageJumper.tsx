"use client";
import { FieldControl } from "../field";
import { InputField } from "../input";
import { changePage } from "./change-page";
import { usePaginationContext } from "./context";

export function PageJumper() {
  const { size, isDisabled, currentPage, onChange, pages, pageLimit } =
    usePaginationContext();

  return (
    <FieldControl name="page" className="!w-[70px]" isDisabled={isDisabled}>
      <InputField
        size={size}
        type="number"
        min={1}
        value={currentPage > 0 ? currentPage : undefined}
        onChange={(e) =>
          changePage({
            pages,
            pageLimit,
            onChange,
            value: Number(e.target.value),
          })
        }
      />
    </FieldControl>
  );
}
