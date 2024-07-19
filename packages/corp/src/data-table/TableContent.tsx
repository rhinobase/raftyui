import { TableBody, Td, Tr, classNames } from "@rafty/ui";
import { type Table, flexRender } from "@tanstack/react-table";
import { Loading } from "./utils";

export type TableContent<T> = {
  table: Table<T>;
  isLoading: boolean;
  colSpan: number;
};

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
              key={row.index}
              className="hover:bg-primary-50/50 dark:hover:bg-primary-900/50"
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
