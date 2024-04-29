import { useThread } from "@fibr/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import type { CellContext } from "@tanstack/react-table";
import { classNames } from "../../utils";
import { CellWrapper } from "./CellWrapper";

export function BooleanCell() {
  const { cell } = useThread<{
    cell: CellContext<unknown, unknown>;
  }>();
  const value = Boolean(cell.getValue());
  const Icon = value ? CheckIcon : XMarkIcon;

  return (
    <CellWrapper>
      <Icon
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
