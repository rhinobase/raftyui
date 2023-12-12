import { FieldControl } from "../field";
import { InputField } from "../input";
import { usePaginationContext } from "./context";

export function PaginationField() {
  const { size, isDisabled, current, onChange, total, pageSize } =
    usePaginationContext();

  return (
    <FieldControl name="page" className="!w-[70px]" isDisabled={isDisabled}>
      <InputField
        size={size}
        type="number"
        min={1}
        value={current > 0 ? current : undefined}
        onChange={(e) => {
          const value = Number(e.target.value);
          if (value > total) onChange?.(total, pageSize);
          else onChange?.(value, pageSize);
        }}
      />
    </FieldControl>
  );
}
