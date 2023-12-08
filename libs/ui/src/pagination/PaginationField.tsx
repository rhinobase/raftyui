import { FieldControl } from "../field";
import { InputField } from "../input";

type PaginationField = {
  totalPages: number;
  currentPage: number;
  onPageNumberChange: (value: number) => void;
  isDisabled?: boolean;
  size: "sm" | "md" | "lg";
};

export default function PaginationField({
  currentPage,
  onPageNumberChange,
  totalPages,
  isDisabled,
  size,
}: PaginationField) {
  const handleInput = (value: number) => {
    let newValue = value;
    if (newValue > totalPages) newValue = totalPages;

    return onPageNumberChange(newValue);
  };

  return (
    <FieldControl name="page" className="!w-[70px]" isDisabled={isDisabled}>
      <InputField
        size={size}
        type="number"
        min={1}
        value={currentPage === 0 ? "" : currentPage}
        onChange={(e) => handleInput(Number(e.target.value))}
      />
    </FieldControl>
  );
}
