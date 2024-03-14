import { useThread } from "@fibr/react";
import type { CellContext } from "@tanstack/react-table";
import { CellWrapper } from "./CellWrapper";

export function DatetimeCell() {
  const { cell } = useThread<{
    cell: CellContext<unknown, unknown>;
  }>();
  const value = cell.getValue();

  return (
    <CellWrapper>
      <p>{new Date(value as string).toLocaleString()}</p>;
    </CellWrapper>
  );
}
