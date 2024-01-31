import { useThread } from "@fibr/react";
import { CellContext } from "@tanstack/react-table";
import { CellWrapper } from "./CellWrapper";

export function DateCell() {
  const { cell } = useThread<{
    cell: CellContext<unknown, unknown>;
  }>();
  const value = cell.getValue();

  return (
    <CellWrapper>
      <p>{new Date(value as string).toLocaleDateString()}</p>
    </CellWrapper>
  );
}
