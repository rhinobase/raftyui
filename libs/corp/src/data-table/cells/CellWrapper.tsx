import { useThread } from "@fibr/react";
import { CellContext } from "@tanstack/react-table";
import { PropsWithChildren } from "react";

type CellWrapper = PropsWithChildren;

export function CellWrapper({ children }: CellWrapper) {
  const { cell } = useThread<{
    cell: CellContext<unknown, unknown>;
  }>();

  const value = cell.getValue();

  if (value == null) return "N/A";

  return children;
}
