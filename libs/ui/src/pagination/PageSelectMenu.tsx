import { Select, SelectItem } from "../select";

type PageSelectMenu = {
  pageSize: number;
  pageSizeOptions: string[] | number[];
  onPageSizeChange: (value: number) => void;
};

export default function PageSelectMenu({
  pageSize,
  pageSizeOptions,
  onPageSizeChange,
}: PageSelectMenu) {
  return (
    <div className="flex items-center gap-2">
      <span>Rows per page:</span>
      <div className="w-[100px]">
        <Select
          value={pageSize}
          onChange={(event) => {
            const value = Number(event.target.value);
            onPageSizeChange(value);
          }}
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
