import { Select, SelectItem } from "../select";

export type PageSizeSelect = {
  itemsPerPage: number;
  pageSizeOptions: number[];
  onPageSizeChange: (value: number) => void;
  isDisabled?: boolean;
  size: "sm" | "md" | "lg";
};

export default function PageSizeSelect({
  itemsPerPage,
  pageSizeOptions,
  onPageSizeChange,
  isDisabled,
  size,
}: PageSizeSelect) {
  return (
    <div className="flex items-center gap-2">
      <span>Rows per page:</span>
      <div className="w-[100px]">
        <Select
          value={itemsPerPage}
          onChange={(event) => {
            const value = Number(event.target.value);
            onPageSizeChange(value);
          }}
          isDisabled={isDisabled}
          size={size}
        >
          {pageSizeOptions.map((size, index) => (
            <SelectItem key={index} value={size}>
              {size}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
}
