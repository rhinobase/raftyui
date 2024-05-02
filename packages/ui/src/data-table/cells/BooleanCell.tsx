import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import type { CellContext } from "@tanstack/react-table";
import { classNames } from "../../utils";
import { CellWrapper } from "./CellWrapper";

export function BooleanCell<T = unknown, U = unknown>({
  cell,
}: CellContext<T, U>) {
  const value = Boolean(cell.getValue());
  const Icon = value ? CheckIcon : XMarkIcon;

  return (
    <CellWrapper value={value}>
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
