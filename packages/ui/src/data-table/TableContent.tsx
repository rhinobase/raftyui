import { type Table, flexRender } from "@tanstack/react-table";
import { TableBody, Td, Tr } from "../table";
import { classNames } from "../utils";
import { Loading } from "./utils";

/**
 * Represents the content of a table with error handling and loading states.
 */
type TableContent<T> = {
  table: Table<T>;
  isLoading: boolean;
  colSpan: number;
};

/**
 * TableContent component displays the table rows with optional loading or error states.
 */
export function TableContent<T>({
  table,
  isLoading,
  colSpan,
}: TableContent<T>) {
  return (
    <TableBody className="divide-secondary-300 dark:divide-secondary-700 divide-y">
      {isLoading ? (
        // Display loading component when data is still loading.
        <Loading colSpan={colSpan} />
      ) : (
        // Render table rows when there is no error and data is not loading.
        table
          .getRowModel()
          .rows.map((row) => (
            <Tr
              key={row.id}
              className="hover:bg-primary-50 dark:hover:bg-primary-800/30"
            >
              {row.getVisibleCells().map((cell, index) => {
                const isLastColumn = row.getVisibleCells().length - 1 === index;

                return (
                  <Td
                    key={cell.id}
                    className={classNames(
                      "relative truncate",
                      isLastColumn && "flex !w-full justify-end text-right",
                    )}
                    style={{
                      width: cell.column.getSize(),
                    }}
                  >
                    {/* Render cell content using flexRender */}
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                );
              })}
            </Tr>
          ))
      )}
    </TableBody>
  );
}
