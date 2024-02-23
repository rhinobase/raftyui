import { useThread } from "@fibr/react";
import { eventHandler } from "@rafty/shared";
import { CellContext } from "@tanstack/react-table";
import { CellWrapper } from "./CellWrapper";

export function ClipboardCell() {
  const { cell } = useThread<{
    cell: CellContext<unknown, unknown>;
  }>();
  const value = cell.getValue();

  const handleClick = eventHandler(() =>
    navigator.clipboard.writeText(value as string),
  );

  return (
    <CellWrapper>
      <div
        className="cursor-pointer"
        onClick={handleClick}
        onKeyDown={handleClick}
        title="Copied"
      >
        {String(value)}
      </div>
    </CellWrapper>
  );
}
