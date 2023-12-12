import { FieldControl } from "../field";
import { InputField } from "../input";
import { changePage } from "./change-page";
import { usePaginationContext } from "./context";

export function PageJumper() {
  const { size, isDisabled, current, onChange, total, pageSize } =
    usePaginationContext();

  return (
    <FieldControl name="page" className="!w-[70px]" isDisabled={isDisabled}>
      <InputField
        size={size}
        type="number"
        min={1}
        value={current > 0 ? current : undefined}
        onChange={(e) =>
          changePage({
            total,
            pageSize,
            onChange,
            value: Number(e.target.value),
          })
        }
      />
    </FieldControl>
  );
}
