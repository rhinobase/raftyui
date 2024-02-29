import { TableHead, Th, Tr, classNames } from "@rafty/ui";
import { Table, flexRender } from "@tanstack/react-table";
import { RiArrowDownFill, RiArrowUpFill } from "react-icons/ri";
import { ResizeHandle } from "./utils";

interface TableHeader<T> {
  table: Table<T>;
  enableRowSelection: boolean;
}

/**
 * TableHeader component for rendering the table header with sorting and resizing capabilities.
 */
export function TableHeader<T>({ table, enableRowSelection }: TableHeader<T>) {
  return (
    <TableHead className="bg-secondary-100 dark:bg-secondary-700/80">
      {table.getHeaderGroups().map((headerGroup) => (
        <Tr key={headerGroup.id}>
          {headerGroup.headers.map((header, index) => {
            const isLastColumn = headerGroup.headers.length - 1 === index;
            const headerSize = header.getSize();
            const isCheckbox = enableRowSelection && index === 0;

            return (
              // Table Header Cell
              <Th
                key={header.id}
                className="relative truncate"
                style={{
                  // Set the maximum, minimum, and actual width for each header cell
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
                {/* Resize Handle for resizable columns */}
                {!isLastColumn && header.column.getCanResize() && (
                  <ResizeHandle onResize={header.getResizeHandler()} />
                )}

                {/* Content of the header cell */}
                <div
                  className={classNames(
                    "flex w-full items-center",
                    isLastColumn && "justify-end",
                  )}
                >
                  {/* Clickable area for sorting */}
                  <span
                    onClick={header.column.getToggleSortingHandler()}
                    onKeyDown={() => header.column.getToggleSortingHandler()}
                    className={classNames(
                      header.column.getCanSort() && "cursor-pointer",
                    )}
                  >
                    {!header.isPlaceholder &&
                      // Render the header content using flexRender
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                  </span>

                  {header.column.getIsSorted() === "asc" ? (
                    <RiArrowUpFill />
                  ) : (
                    header.column.getIsSorted() === "desc" && (
                      <RiArrowDownFill />
                    )
                  )}
                </div>
              </Th>
            );
          })}
        </Tr>
      ))}
    </TableHead>
  );
}
