import type { CellContext } from "@tanstack/react-table";
import { CellWrapper } from "./CellWrapper";

export type DatetimeCell = {
  value: string;
};

export function DatetimeCell<T = unknown, U = unknown>({
  cell,
}: CellContext<T, U>) {
  const value = String(cell.getValue());

  return (
    <CellWrapper value={value}>
      <p>{new Date(value).toLocaleString()}</p>
    </CellWrapper>
  );
}
