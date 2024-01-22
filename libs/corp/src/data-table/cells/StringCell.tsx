import { useThread } from "@fibr/react";
import { CellContext } from "@tanstack/react-table";

export function StringCell() {
  const { cell } = useThread<{
    cell: CellContext<unknown, unknown>;
  }>();

  return <>{cell.getValue()}</>;
}
