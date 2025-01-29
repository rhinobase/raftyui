import { Skeleton, TableBody, Td, Tr, classNames } from "@rafty/ui";
import { type Table, flexRender } from "@tanstack/react-table";
import { useId } from "react";

export type TableContent<T> = {
  table: Table<T>;
  colSpan: number;
  isLoading: boolean;
};

export function TableContent<T>({
  table,
  colSpan,
  isLoading,
}: TableContent<T>) {
  return (
    <TableBody className="divide-secondary-300 dark:divide-secondary-700 divide-y">
      {isLoading ? (
        <LoadingComponent colSpan={colSpan} />
      ) : (
        <>
          {table.getRowModel().rows.map((row) => (
            <Tr
              key={row.id}
              className="hover:bg-primary-50/50 dark:hover:bg-primary-900/50"
            >
              {row.getVisibleCells().map((cell, index) => {
                const isLastColumn = row.getVisibleCells().length - 1 === index;

                return (
                  <Td
                    key={cell.id}
                    className={classNames(
                      "relative truncate",
                      isLastColumn && "text-right",
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
          ))}
        </>
      )}
    </TableBody>
  );
}

type LoadingComponent = { colSpan: number };

function LoadingComponent({ colSpan }: LoadingComponent) {
  const key = useId();

  return Array.from({ length: 10 }).map((_, index) => (
    <Tr key={`${index}-${key}`}>
      <Td colSpan={colSpan} className="p-0">
        <Skeleton
          className={classNames(
            index % 2 === 0 && "bg-secondary-100 dark:bg-secondary-800",
            "h-[42px] w-full",
          )}
        />
      </Td>
    </Tr>
  ));
}
