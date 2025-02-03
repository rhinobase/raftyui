import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import {
  TableHeader as RaftyTableHeader,
  Th,
  Tr,
  classNames,
  type eventHandler,
} from "@rafty/ui";
import { type Table, flexRender } from "@tanstack/react-table";

export type TableHeader<T> = {
  table: Table<T>;
  enableRowSelection: boolean;
};

export function TableHeader<T>({ table, enableRowSelection }: TableHeader<T>) {
  return (
    <RaftyTableHeader className="bg-secondary-100 dark:bg-secondary-800">
      {table.getHeaderGroups().map((headerGroup) => (
        <Tr key={headerGroup.id}>
          {headerGroup.headers.map((header, index) => {
            const isLastColumn = headerGroup.headers.length - 1 === index;
            const headerSize = header.getSize();
            const isCheckbox = enableRowSelection && index === 0;

            const isSorting = header.column.getIsSorted();

            const headerCellRender =
              !header.isPlaceholder &&
              flexRender(header.column.columnDef.header, header.getContext());

            return (
              <Th
                key={header.id}
                className="relative truncate"
                style={{
                  minWidth: !isCheckbox ? 80 : undefined,
                  width: headerSize,
                  userSelect: "none",
                }}
              >
                <div
                  className={classNames(
                    !isLastColumn &&
                      !isCheckbox &&
                      "bg-secondary-300 dark:bg-secondary-600 absolute right-0 top-1/3 h-4 w-[2px]",
                  )}
                />
                {!isLastColumn && header.column.getCanResize() && (
                  <ResizeHandle onResize={header.getResizeHandler()} />
                )}
                <div
                  className={classNames(
                    "flex w-full items-center",
                    isLastColumn && "justify-end",
                  )}
                >
                  {header.column.getCanSort() ? (
                    <>
                      <span
                        onClick={header.column.getToggleSortingHandler()}
                        onKeyDown={() =>
                          header.column.getToggleSortingHandler()
                        }
                        className="cursor-pointer"
                      >
                        {headerCellRender}
                      </span>
                      {isSorting === "asc" ? (
                        <ArrowUpIcon height={16} width={16} />
                      ) : (
                        isSorting === "desc" && (
                          <ArrowDownIcon height={16} width={16} />
                        )
                      )}
                    </>
                  ) : (
                    headerCellRender
                  )}
                </div>
              </Th>
            );
          })}
        </Tr>
      ))}
    </RaftyTableHeader>
  );
}

type ResizeHandle = {
  onResize: ReturnType<typeof eventHandler>;
};

function ResizeHandle({ onResize }: ResizeHandle) {
  return (
    <div
      onMouseDown={onResize}
      onTouchStart={onResize}
      className="absolute -right-0.5 top-0 h-full w-2 cursor-ew-resize touch-auto select-none transition-all ease-in-out"
    />
  );
}
