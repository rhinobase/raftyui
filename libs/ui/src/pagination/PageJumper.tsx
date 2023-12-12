"use client";
import { FieldControl } from "../field";
import { InputField } from "../input";
import { changePage } from "./change-page";
import { usePaginationContext } from "./context";

export function PageJumper() {
  const { size, isDisabled, currentPage, onChange, pages, pageLimit } =
    usePaginationContext();

  return (
    <FieldControl name="page" className="!w-[100px]" isDisabled={isDisabled}>
      <InputField
        size={size}
        type="number"
        min={1}
        value={currentPage}
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
