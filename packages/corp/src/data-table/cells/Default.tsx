import { useThread } from "@fibr/react";
import type { CellContext } from "@tanstack/react-table";
import { CellWrapper } from "./CellWrapper";

export function Default() {
  const { cell } = useThread<{
    cell: CellContext<unknown, unknown>;
  }>();
  const value = cell.getValue();

  return <CellWrapper>{String(value)}</CellWrapper>;
}
