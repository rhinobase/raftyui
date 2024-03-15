import { useThread } from "@fibr/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { eventHandler } from "@rafty/shared";
import { useBoolean } from "@rafty/ui";
import type { CellContext } from "@tanstack/react-table";
import { CellWrapper } from "./CellWrapper";

export function SecretCell() {
  const { cell } = useThread<{
    cell: CellContext<unknown, unknown>;
  }>();
  const [isOpen, toggle] = useBoolean(false);
  const value = cell.getValue();
  const Icon = isOpen ? EyeIcon : EyeSlashIcon;

  const handleClick = eventHandler(() =>
    navigator.clipboard.writeText(value as string),
  );

  return (
    <CellWrapper>
      <div className="flex items-end gap-2">
        <Icon
          className="text-secondary-400 hover:text-secondary-800 dark:text-secondary-500 dark:hover:text-secondary-100 cursor-pointer stroke-2 transition-all ease-in-out"
          height={16}
          width={16}
          onClick={() => toggle()}
        />
        {isOpen ? (
          <p
            className="cursor-pointer"
            onClick={handleClick}
            onKeyDown={handleClick}
          >
            {String(value)}
          </p>
        ) : (
          <p className="text-2xl font-semibold leading-none">........</p>
        )}
      </div>
    </CellWrapper>
  );
}
