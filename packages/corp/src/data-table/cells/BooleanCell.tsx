import { useThread } from "@fibr/react";
import RaftyIcon from "@rafty/icons";
import { classNames } from "@rafty/ui";
import { CellContext } from "@tanstack/react-table";
import { CellWrapper } from "./CellWrapper";

export function BooleanCell() {
  const { cell } = useThread<{
    cell: CellContext<unknown, unknown>;
  }>();
  const value = Boolean(cell.getValue());

  return (
    <CellWrapper>
      <RaftyIcon
        type={value ? "check" : "x-mark"}
        height={16}
        width={16}
        className={classNames(
          value ? "text-green-500" : "opacity-40",
          "mx-auto stroke-[3]",
        )}
      />
    </CellWrapper>
  );
}
