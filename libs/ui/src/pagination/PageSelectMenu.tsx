import { Select, SelectItem } from "../select";

type PageSelectMenu = {
  page: number;
  pageSizeOptions: string[] | number[];
  onPageSizeChange: (value: number) => void;
  isDisabled?: boolean;
  size: "sm" | "md" | "lg";
};

export default function PageSelectMenu({
  page,
  pageSizeOptions,
  onPageSizeChange,
  isDisabled,
  size,
}: PageSelectMenu) {
  return (
    <div className="flex items-center gap-2">
      <span>Rows per page:</span>
      <div className="w-[100px]">
        <Select
          value={page}
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
